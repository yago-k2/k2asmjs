export default class DNCMemory {
    la
    end
    mem
    dnc
    constructor() {
        this.end = 0
        this.la = 65535
        this.mem = new Array(65535)
        this.dnc = new Array(65535)
    }
    
    poke(addr, val) {
        if (addr < 0 || addr > 65535) throw Error("address out of range")
        if (addr < this.la) this.la = addr
        if (addr > this.end) this.end = addr
        let tval = val.val
        let dval = val.dnc
        if (tval < -128 || tval > 255) throw Error("value out of range")
        if (tval < 0) tval += 256;

        this.mem[addr]=tval
        this.dnc[addr]=dval
    }

    getMem() {
        return this.mem.slice(this.la,this.end+1)
    }
}