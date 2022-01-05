import K2Asm6502ParserListener from "./grammar/K2Asm6502ParserListener.js"
import DNCNumber from "./types/DNCNumber.js"
import arith from "./Arith.js"

export default class AsmListener extends K2Asm6502ParserListener {
    #currentValue
    valueStack=[]
    cbmObject
    globalScope
    currentScope

    constructor(cbmobject,globalScope) {
        super()
        this.cbmObject=cbmobject
        this.globalScope=globalScope
        this.currentScope=this.globalScope
    }

    exitBin(ctx) {
        this.#currentValue=DNCNumber.parse(ctx.BIN().getText())
    }
    exitDec(ctx) {
        this.#currentValue=DNCNumber.parse(ctx.DEC().getText())
    }
    exitHex(ctx) {
        this.#currentValue=DNCNumber.parse(ctx.HEX().getText())
    }
    exitNumber(ctx) {
        this.valueStack.push(this.#currentValue)        
    }


    exitPlusMinus(ctx) {
        let right=this.valueStack.pop()
        let left=this.valueStack.pop()
        let op=ctx.children[1].getText()
        this.valueStack.push(arith.calc2(op,left,right))
    }
    exitMulDiv(ctx) { this.exitPlusMinus(ctx)}

    exitByte(ctx) {
        this.valueStack.forEach( v=> this.cbmObject.add(v))
        this.valueStack=[]
    }

    exitWord(ctx) {
        console.log("got word")
        console.log("valuestack=",this.valueStack)
        this.valueStack.forEach( v=> {
            this.cbmObject.add(arith.calc1("<",v))
            this.cbmObject.add(arith.calc1(">",v))
        })
        this.valueStack=[]
    }

    exitOrg(ctx) {
        if(this.valueStack.length==2) {
            let la=this.valueStack.pop()
            this.cbmObject.setPc(la) //adjust emitter
        }
        let pc=this.valueStack.pop()
        this.cbmObject.setPc(pc) //adjust emitter
    }


    exitIdentifier(ctx) {
        let name=ctx.children[0].getText()
        this.valueStack.push(this.currentScope.get(name))
    }

    exitLabel(ctx) {
        let name=ctx.ID().getText()
        let value=this.cbmObject.pc
        this.currentScope.put(name,value,false)
    }
}