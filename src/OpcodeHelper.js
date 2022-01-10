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
    rel(name,value,pc) {
        this.emitter.emitByte(opcMap[name].rel)
        let out=value.val-(pc.val+2)
        if(out>127 || out<-128) throw Error("branch too long")
        this.emitter.emitByte(out)
        if((out+pc.val)>>8!=pc.val>>8) throw Error("WARNING! branch crosses page")
    }
}