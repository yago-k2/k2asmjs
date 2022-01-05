import K2Asm6502ParserListener from "./grammar/K2Asm6502ParserListener.js"
import DNCNumber from "./types/DNCNumber.js"
import arith from "./Arith.js"

export default class AsmListener extends K2Asm6502ParserListener {
    #currentValue
    valueStack=[]
    cbmobject

    constructor(cbmobject) {
        super()
        this.cbmobject=cbmobject
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
        this.valueStack.forEach( v=> this.cbmobject.add(v))
        this.valueStack=[]
    }

    exitOrg(ctx) {
        if(this.valueStack.length==2) {
            let la=this.valueStack.pop()
            this.cbmobject.setPc(la) //adjust emitter
        }
        let pc=this.valueStack.pop()
        this.cbmobject.setPc(pc) //adjust emitter

    }
}