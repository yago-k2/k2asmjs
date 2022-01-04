import K2Asm6502ParserListener from "./grammar/K2Asm6502ParserListener.js"
import DNCNumber from "./types/DNCNumber.js"

export default class AsmListener extends K2Asm6502ParserListener {
    #result
    #currentValue
    valueStack=[]

    getResult() { return this.#result}

    exitDec(ctx) {
        this.#currentValue=DNCNumber.parse(ctx.DEC().getText())
    }

    exitNumber(ctx) {
        this.valueStack.push(this.#currentValue)        
    }


    exitByte(ctx) {
        console.log("we have",this.valueStack.length,"values")
    }
}