import K2Asm6502ParserListener from "./grammar/K2Asm6502ParserListener.js"
import DNCNumber from "./types/DNCNumber.js"
import arith from "./Arith.js"
import SymbolTable from "./SymbolTable.js"
import Scope from "./Scope.js"
import DNCMap from "./types/DNCMap.js"
import opcMap from "./data/6502opcodes.js"

export default class AsmListener extends K2Asm6502ParserListener {
    #currentValue
    valueStack = []
    emitter
    globalScope
    currentScope
    currentModifier = "none"

    constructor(emitter, globalScope) {
        super()
        this.emitter = emitter
        this.globalScope = globalScope
        this.currentScope = this.globalScope
    }

    exitBin(ctx) {
        this.#currentValue = DNCNumber.parse(ctx.BIN().getText())
    }
    exitDec(ctx) {
        this.#currentValue = DNCNumber.parse(ctx.DEC().getText())
    }
    exitHex(ctx) {
        this.#currentValue = DNCNumber.parse(ctx.HEX().getText())
    }
    exitNumber(ctx) {
        this.valueStack.push(this.#currentValue)
    }


    exitPlusMinus(ctx) {
        let right = this.valueStack.pop()
        let left = this.valueStack.pop()
        let op = ctx.children[1].getText()
        this.valueStack.push(arith.calc2(op, left, right))
    }
    exitMulDiv(ctx) { this.exitPlusMinus(ctx) }

    exitByte(ctx) {
        this.valueStack.forEach(v=>this.emitter.emitDNCByte(v))
        this.valueStack = []
    }

    exitWord(ctx) {
        this.valueStack.forEach(v => {
            this.emitter.emitDNCWord(v)
        })
        this.valueStack = []
    }

    exitOrg(ctx) {
        if (this.valueStack.length == 2) {
            let la = this.valueStack.pop()
            this.emitter.setPc(la)
        }
        let pc = this.valueStack.pop()
        this.emitter.setPc(pc)
    }


    exitIdentifier(ctx) {
        let name = ctx.children[0].getText()
        let value = this.currentScope.getVal(name)
        if (value == null) {
            value = DNCNumber.parse(142) //doesnt matter, any valid value
        }
        this.valueStack.push(value)
    }

    exitDot(ctx) {
        let allIds = ctx.ID().map(e => e.getText())
        let value = this.currentScope.getVal(allIds)
        if (value == null) value = DNCNumber.parse(143) // doesnt matter

        this.valueStack.push(value)

    }

    exitLabel(ctx) {
        let name = ctx.ID().getText()
        let value = this.emitter.getPc()
        this.currentScope.put(name, value, false)
    }

    exitLocalModifier(ctx) {
        this.currentModifier = "local"
    }
    exitGlobalModifier(ctx) { this.currentModifier = "global" }
    exitExportModifier(ctx) { this.currentModifier = "export" }

    enterSimpleAssign(ctx) { this.currentModifier = "none" }
    exitSimpleAssign(ctx) {
        let exp=false
        let value = this.valueStack.pop()
        let name = ctx.ID()[0].getText()
        let nrComponents = ctx.ID().length
        let scope = this.currentScope

        if (this.currentModifier == "local") scope = this.currentScope.parent
        if (this.currentModifier == "global") exp=true
        //check if name is in scope
        if (scope.hasNew(name)) {
            //if its a map, set that value
            throw Error("implement me")
            //if its not a map, doubledefinition error
        }
        else {
            if (nrComponents == 1) {
                scope.put(name, value, exp)
            }
            else {
                //we have trailing components
                //create a dncmap, store value
                let map = new DNCMap()
                map.put(ctx.ID()[1], value)
                scope.put(name, map, exp)
            }
        }

    }

    enterUnnamedScope(ctx) {
        let scope = new Scope(this.currentScope, "", new SymbolTable())
        scope.pc = this.emitter.getPc()
        this.currentScope.addChildren(scope)
        this.currentScope = scope
        this.currentScope.put("_cont", this.emitter.getPc(), false)
    }
    exitUnnamedScope(ctx) {
        this.currentScope.put("_break", this.emitter.getPc(), false)
        this.currentScope = this.currentScope.parent
    }

    enterNamedScope(ctx) {
        let name = ctx.children[1].getText()
        let scope = new Scope(this.currentScope, name, new SymbolTable())
        scope.pc = new DNCNumber(16, this.emitter.getPc().val)
        this.currentScope.addChildren(scope)
        this.currentScope = scope
        this.currentScope.put("_cont", this.emitter.getPc(), false)
    }
    exitNamedScope(ctx) {
        let pc = this.emitter.getPc()
        this.currentScope.put("_break", pc, false)
        this.currentScope.put("_end", pc, false)
        this.currentScope = this.currentScope.parent
    }

    exitImplied(ctx) {
        let name=ctx.children[0].getText()
        this.emitter.emitDNCByte(new DNCNumber(8,opcMap[name].imp))
    }
    exitImm(ctx) {
        let name=ctx.children[0].getText()
        this.emitter.emitDNCByte(new DNCNumber(8,opcMap[name].imm))
        this.emitter.emitDNCByte(this.valueStack.pop())
    }

}