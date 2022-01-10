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
    absOrZp(name,value) {
        if(value.bits==8 && opcMap[name].zp) {
            this.emitter.emitByte(opcMap[name].zp)
            this.emitter.emitDNCByte(value)
        }
        else {
            this.emitter.emitByte(opcMap[name].abs)
            this.emitter.emitDNCWord(value)
        }
    }
    indXAbsOrZp(name,value) {
        if(value.bits==8 && opcMap[name].zpx) {
            this.emitter.emitByte(opcMap[name].zpx)
            this.emitter.emitDNCByte(value)
        }
        else {
            this.emitter.emitByte(opcMap[name].absx)
            this.emitter.emitDNCWord(value)
        }

    }

    indYAbsOrZp(name,value) {
        if(value.bits==8 && opcMap[name].zpy) {
            this.emitter.emitByte(opcMap[name].zpy)
            this.emitter.emitDNCByte(value)
        }
        else {
            this.emitter.emitByte(opcMap[name].absy)
            this.emitter.emitDNCWord(value)
        }

    }

    indirectX(name,value) {
        this.emitter.emitByte(opcMap[name].indx)
        this.emitter.emitDNCByte(value)
    }

    indirectY(name,value) {
        this.emitter.emitByte(opcMap[name].indy)
        this.emitter.emitDNCByte(value)
    }
    
    indirect(name,value) {
        this.emitter.emitByte(opcMap[name].ind)
        this.emitter.emitDNCWord(value)
    }
}