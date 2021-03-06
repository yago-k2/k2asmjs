export default class DNCNumber {
    static dncBit = "0"
    static dncNib = "0"

    bits
    val
    dnc

    constructor(...args) {
        if (args.length < 2) {
            return new DNCNumber(DNCNumber.calcBits(args[0]),args[0])
        }
        this.bits = args[0]
        if (typeof args[1] == "number") this.val = args[1]
        if (args[2] != undefined) this.dnc = args[2]
    }

    toIntValue() {
        return this.val
    }

    toString() {
        let result
        let error = this.dnc
        if (this.dnc == 0 && (this.bits==8||(this.bits==16&&this.val>255) )) {
            return this.val.toString()
        }
        if (this.bits == 16) {
            let tmp = this.val.toString(16).padStart(4, "0").split("")
            if ((this.dnc & 15) == 15) { error ^= 15; tmp[3] = "?" }
            if ((this.dnc & 240) == 240) { error ^= 240; tmp[2] = "?" }
            if ((this.dnc & 15 * 256) == 15 * 256) { error ^= 15 * 256; tmp[1] = "?" }
            if ((this.dnc & 240 * 256) == 240 * 256) { error ^= 240 * 256; tmp[0] = "?" }
            result = tmp.join("")
        }
        if (this.bits == 8) {
            let tmp = this.val.toString(16).split("")
            if ((this.dnc & 15) == 15) { error ^= 15; tmp[1] = "?" }
            if ((this.dnc & 240) == 240) { error ^= 240; tmp[0] = "?" }
            result = tmp.join("")
        }
        if (error != 0) { 
            result=[]
            for(let i=0;i<this.bits;i++) {
                if((this.dnc&(1<<i))==1<<i) {
                    result=["?",...result]
                }
                else {
                    result=[(this.val&(1<<i))==1<<i?"1":"0",...result]
                }
            }
            return "%"+result.join("")
        }
        else return "$" + result
    }

    static calcBits(arg) {
        if(arg instanceof Array) {
            throw Error("why array??")
        }
        if(arg instanceof DNCNumber) {
            throw Error("how strange")
        }
        if (typeof arg == "number") {
            if (arg < -128 || arg > 255) return 16
            else return 8
        }
        if (typeof arg == "string") {
            throw Error("implement me")
        }
        console.log("arg=",arg)
        throw Error("polymorph error"+(typeof arg)+" "+arg)
    }

    static parse(string) {
        let val
        let dnc
        let tmp
        let bits=0
        string = "" + string
        switch (string[0]) {
            case "%": {
                tmp = string.substr(1)
                if (tmp.includes("?")) {
                    dnc = tmp.replaceAll("1", "0")
                    dnc = dnc.replaceAll("?", "1")
                    dnc = parseInt(dnc, 2)
                    tmp = tmp.replaceAll("?", DNCNumber.dncBit)
                }
                val = parseInt(tmp, 2)
                break
            }
            case "$": {
                tmp = string.substr(1)
                if(tmp.startsWith("00")&&tmp.length==4) bits=16
                dnc = 0
                if (tmp.includes("?")) {
                    dnc = tmp.split("").map(c => c == "?" ? "f" : "0").join("")
                    dnc = parseInt(dnc, 16)
                    tmp = tmp.replaceAll("?", DNCNumber.dncNib)
                }
                val = parseInt(tmp, 16)
                break
            }
            default: {
                if (string[0] == "?") {
                    val = 0
                    dnc = 255
                }
                else {
                    val = parseInt(string)
                    dnc = 0
                }
                break
            }
        }
        if(bits==0) bits=DNCNumber.calcBits(val)
        return new DNCNumber(bits, val, dnc)
    }

}