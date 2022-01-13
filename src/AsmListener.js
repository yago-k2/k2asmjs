import K2Asm6502ParserListener from "./grammar/K2Asm6502ParserListener.js"
import DNCNumber from "./types/DNCNumber.js"
import arith from "./Arith.js"
import SymbolTable from "./SymbolTable.js"
import Scope from "./Scope.js"
import DNCMap from "./types/DNCMap.js"
import DNCList from "./types/DNCList.js"
import Script from "./Script.js"
import mapper from "./util/mapper.js"
import DNCMemory from "./memory/DNCMemory.js"

export default class AsmListener extends K2Asm6502ParserListener {
    #currentValue
    valueStack = []
    emitter
    globalScope
    currentScope
    currentModifier = "none"
    currentMap
    opcodeHelper
    insideList = false
    currentList
    doEncode
    script
    options

    constructor(emitter, globalScope, opcodeHelper) {
        super()
        this.emitter = emitter
        this.globalScope = globalScope
        this.currentScope = this.globalScope
        this.opcodeHelper = opcodeHelper
        this.script = new Script()
    }

    // NUMBER

    exitBin(ctx) {
        this.#currentValue = DNCNumber.parse(ctx.BIN().getText())
    }
    exitDec(ctx) {
        this.#currentValue = DNCNumber.parse(ctx.DEC().getText())
    }
    exitHex(ctx) {
        this.#currentValue = DNCNumber.parse(ctx.HEX().getText())
    }
    // MAP
    enterMap(ctx) {
        this.currentMap = new DNCMap()
    }
    exitMap(ctx) {
        this.#currentValue = this.currentMap
    }
    exitPair(ctx) {
        this.currentMap.put(ctx.key().getText(), this.valueStack.pop())
    }
    // ARRAY
    enterArray(ctx) {
        this.currentList = new DNCList()
        this.insideList = true
    }
    exitArray(ctx) {
        this.#currentValue = this.currentList
        this.insideList = false
    }

    // TIME
    exitTime(ctx) {
        let text=ctx.TIME().getText()
        let [minutes,seconds]=text.split(":")
        this.#currentValue=new DNCNumber( (minutes*60+seconds) * this.options.ticks)
    }

    exitTimeFrames(ctx) {
        let text=ctx.getText()
        let [time,frames]=text.split(".")
        let [minutes,seconds]=time.split(":")
        this.#currentValue=new DNCNumber( (minutes*60+seconds) * this.options.ticks + +frames)
    }

    exitNumber(ctx) {
        if (this.insideList) {
            this.currentList.push(this.#currentValue)
        }
        else {
            this.valueStack.push(this.#currentValue)
        }
    }


    // ARITHMETICS

    exitUnaryMinus(ctx) {
        let left = this.valueStack.pop()
        let op = ctx.children[0]
        this.valueStack.push(arith.calc1(op, left))
    }
    exitPrefixOp(ctx) {
        this.exitUnaryMinus(ctx)
    }

    exitPlusMinus(ctx) {
        let right = this.valueStack.pop()
        let left = this.valueStack.pop()
        let op = ctx.children[1].getText()
        this.valueStack.push(arith.calc2(op, left, right))
    }
    exitMulDiv(ctx) { this.exitPlusMinus(ctx) }

    // PSEUDO OPCODES

    exitByte(ctx) {
        this.valueStack.forEach(v => this.emitter.emit8(v))
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

    // LABELS

    exitIdentifier(ctx) {
        let name = ctx.children[0].getText()
        let value = this.currentScope.getVal(name) ?? DNCNumber.parse(142) //doesnt matter, any valid value
        if(value.pc) value=value.pc //map with inherited value
        this.valueStack.push(value)
    }

    exitDot(ctx) {
        let allIds = ctx.ID().map(e => e.getText())
        let value = this.currentScope.getVal(allIds) ?? DNCNumber.parse(143) //doesnt matter
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
        let exp = false
        let value = this.valueStack.pop()
        let name = ctx.ID()[0].getText()
        let nrComponents = ctx.ID().length
        let scope = this.currentScope

        if (this.currentModifier == "local") scope = this.currentScope.parent
        if (this.currentModifier == "global") exp = true
        //check if name is in scope
        if (scope.hasNew(name)) {
            //if its a map, set that value
            let map=scope.getVal(name)
            if(map instanceof DNCMap ) {
                if(nrComponents==2){
                    map.put(ctx.ID()[1],value)
                    return
                }
                if(nrComponents==3) {
                    throw Error("TODO recursion into map/nr")
                    let map2=map.getVal(ctx.ID()[1])
                    let rmap=new DNCMap()
                    rmap.pc=map2
                    
                }
                console.log(`nr2map: ${name}.${ctx.ID()[1]}.${ctx.ID()[2]}`)
                console.log(`${name}=${map}`)
                console.log(`${name}.${ctx.ID()[1]}=${map.get(ctx.ID()[1])}`)
                throw Error(`we need recursion, we have ${nrComponents} components`)
            }
            else {
                //convert number to map with pc as that number
                let rmap=new DNCMap()
                rmap.pc=map
                if(nrComponents==2) {
                    rmap.put(ctx.ID()[1],value)
                }
                scope.reput(name,rmap)
                return
                //throw Error("implement number to map")
            }
            throw Error(`implement me: ${name}.${ctx.ID()[1]}=${map}`)
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

    // SCOPES

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

    // OPCODES
    exitImplied(ctx) {
        let name = ctx.children[0].getText()
        this.opcodeHelper.imp(name)
    }
    exitImm(ctx) {
        let name = ctx.children[0].getText()
        this.opcodeHelper.imm(name, this.valueStack.pop())
    }
    exitRel(ctx) {
        let name = ctx.children[0].getText()
        this.opcodeHelper.rel(name, this.valueStack.pop(), this.emitter.getPc())
    }
    exitAbsOrZp(ctx) {
        let name = ctx.children[0].getText()
        this.opcodeHelper.absOrZp(name, this.valueStack.pop())
    }
    exitIndexed(ctx) {
        let name = ctx.children[0].getText()
        if (ctx.children[3].getText() == "x") {
            this.opcodeHelper.indXAbsOrZp(name, this.valueStack.pop())
        }
        else {
            this.opcodeHelper.indYAbsOrZp(name, this.valueStack.pop())
        }
    }
    exitIndX(ctx) {
        let name = ctx.children[0].getText()
        this.opcodeHelper.indirectX(name, this.valueStack.pop())
    }
    exitIndY(ctx) {
        let name = ctx.children[0].getText()
        this.opcodeHelper.indirectY(name, this.valueStack.pop())
    }
    exitJmpInd(ctx) {
        let name = ctx.children[0].getText()
        this.opcodeHelper.indirect(name, this.valueStack.pop())
    }

    // FUNCTIONS

    enterScriptExpression(ctx) {
        this.doEncode = false
    }
    exitScriptExpression(ctx) {
        this.doEncode = true
        let name = ctx.children[0].getText()
        let argc
        if (ctx.children[2].children) {
            argc = (ctx.children[2].children.length + 1) / 2
        }
        else {
            argc=0
        }
        let args = []
        while (argc > 0) {
            args[--argc] = this.valueStack.pop()
        }
        this.functionCall(name, args)
    }
    functionCall(name, args) {
        let value=mapper.toDNC(this.script.call(name,args))
        if(value==undefined) throw Error("mapper returned undefined!")
        this.valueStack.push(value)
    }

    exitEmitblock(ctx) {
        let text = ctx.children[1].getText()
        text = text.substring(0, text.length - 4) //.end
        this.script.require(text)
        // let result=this.script.execute(text)
        // if(result!=undefined) {
        //     this.valueStack.push(result) // is that correct?
        // }
    }
}