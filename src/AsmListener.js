import K2Asm6502ParserListener from "./grammar/K2Asm6502ParserListener.js"
import DNCNumber from "./types/DNCNumber.js"
import arith from "./Arith.js"
import SymbolTable from "./SymbolTable.js"
import Scope from "./Scope.js"
import DNCMap from "./types/DNCMap.js"

export default class AsmListener extends K2Asm6502ParserListener {
    #currentValue
    valueStack = []
    cbmObject
    globalScope
    currentScope

    constructor(cbmobject, globalScope) {
        super()
        this.cbmObject = cbmobject
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
        this.valueStack.forEach(v => this.cbmObject.add(v))
        this.valueStack = []
    }

    exitWord(ctx) {
        this.valueStack.forEach(v => {
            this.cbmObject.add(arith.calc1("<", v))
            this.cbmObject.add(arith.calc1(">", v))
        })
        this.valueStack = []
    }

    exitOrg(ctx) {
        if (this.valueStack.length == 2) {
            let la = this.valueStack.pop()
            this.cbmObject.setPc(la) //adjust emitter
        }
        let pc = this.valueStack.pop()
        this.cbmObject.setPc(pc) //adjust emitter
    }


    exitIdentifier(ctx) {
        let name = ctx.children[0].getText()
        let value = this.currentScope.get(name)
        if (value == null) {
            if (name in this.currentScope.children) {
                value = this.currentScope.children[name].pc
            }
            else {
                value = DNCNumber.parse(142) //doesnt matter, any valid value
            }
        }
        this.valueStack.push(value)
    }

    exitDot(ctx) {
        let name = ctx.ID()[0].getText()
        let property = ctx.ID()[1].getText()
        let value
        if (ctx.ID().length != 2) throw Error("implement me")
        if (this.currentScope.hasOld(name)) {
            if (this.currentScope.get(name))
                value = this.currentScope.get(name).get(property)
        }
        else {
            //scope in scope
            if(name in this.currentScope.children) {
                value=this.currentScope.children[name].get(property)
                if(value==null) {
                    value=this.currentScope.children[name].children[property].pc
                }
            }
            else throw Error("no scope no map")
        }
        this.valueStack.push(value)

    }

    exitLabel(ctx) {
        let name = ctx.ID().getText()
        let value = this.cbmObject.pc
        this.currentScope.put(name, value, false)
    }

    exitSimpleAssign(ctx) {
        let value = this.valueStack.pop()
        let name = ctx.children[0].getText()
        let nrComponents = ctx.children.length - 2 //"=",val
        //check if name is in scope
        if (this.currentScope.hasNew(name)) {
            //if its a map, set that value
            throw Error("implement me")
            //if its not a map, doubledefinition error
        }
        else {
            if (nrComponents == 1) {
                this.currentScope.put(name, value, false)
            }
            else {
                //we have trailing components
                //create a dncmap, store value
                let map = new DNCMap()
                map.put(ctx.children[2], value)
                this.currentScope.put(name, map, false)
            }
        }

    }

    enterUnnamedScope(ctx) {
        let scope = new Scope(this.currentScope, "", new SymbolTable())
        scope.pc = this.cbmObject.pc
        this.currentScope.addChildren(scope)
        this.currentScope = scope
        this.currentScope.put("_cont", this.cbmObject.pc, false)
    }
    exitUnnamedScope(ctx) {
        this.currentScope.put("_break", this.cbmObject.pc, false)
        this.currentScope = this.currentScope.parent
    }

    enterNamedScope(ctx) {
        let name = ctx.children[1].getText()
        let scope = new Scope(this.currentScope, name, new SymbolTable())
        scope.pc = new DNCNumber(16,this.cbmObject.pc.val)
        this.currentScope.addChildren(scope)
        this.currentScope = scope
        this.currentScope.put("_cont", this.cbmObject.pc, false)
    }
    exitNamedScope(ctx) {
        let pc = this.cbmObject.pc
        this.currentScope.put("_break", pc, false)
        this.currentScope.put("_end", pc, false)
        this.currentScope = this.currentScope.parent
    }

}