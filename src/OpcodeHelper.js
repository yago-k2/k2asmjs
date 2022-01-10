import opcMap from "./data/6502opcodes.js"

export default class OpcodeHelper {
    emitter

    constructor(emitter) {
        this.emitter=emitter
    }

    imp(name) {
        this.emitter.emitByte(opcMap[name].imp)
    }

    imm(name,value) {
        this.emitter.emitByte(opcMap[name].imm)
        this.emitter.emitDNCByte(value)
    }
}