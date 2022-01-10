import arith from "./Arith.js"
import DNCNumber from "./types/DNCNumber.js"

export default class Emitter {
    #memory
    constructor(memory) {
        this.#memory=memory
    }

    getMemory() { return this.#memory}

    setPc(pc) {
        this.#memory.setPc(pc)
    }
    getPc() { return this.#memory.pc}

    emitByte(byte) {
        this.emitDNCByte(new DNCNumber(8,byte))
    }

    emitDNCByte(dncbyte) {
        //inside Annotation?
        this.#memory.add(dncbyte)
    }

    emitDNCWord(dncword) {
        this.emitDNCByte(arith.calc1("<",dncword))
        this.emitDNCByte(arith.calc1(">",dncword))
    }

}