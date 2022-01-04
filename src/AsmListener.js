import K2Asm6502ParserListener from "./grammar/K2Asm6502ParserListener.js"
import DNCNumber from "./types/DNCNumber.js"

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


    exitByte(ctx) {
        this.valueStack.forEach( v=> this.cbmobject.add(v))
        this.valueStack=[]
    }

    exitOrg(ctx) {
        let la=new DNCNumber(16,-1)
        if(this.valueStack.length==2) {
            la=this.valueStack.pop()
            this.cbmobject.setPc(la) //adjust emitter
        }
        let pc=this.valueStack.pop()
        this.cbmobject.setPc(pc) //adjust emitter

    }
}