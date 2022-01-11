import arith from "./Arith.js"
import DNCNumber from "./types/DNCNumber.js"
import DNCList from "./types/DNCList.js"

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

    emit8(value) {
        if(value instanceof DNCList) {
            this.emitDNCList8(value)
            return
        }
        if(value instanceof DNCNumber) {
            this.emitDNCByte(value)
            return
        }
        throw Error("its something strange:",value)
    }

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


    emitDNCList8(list) {
        for(let b of list.list) {
            this.emitDNCByte(b)
        }
    }

    emitDNCList(list) {
        for(let b of list.list) {
            this.emit(b)
        }
    }
}