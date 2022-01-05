export default class DNCNumber {
    static dncBit = "0"
    static dncNib = "0"

    bits
    val
    dnc
    
    constructor(...args) {
        if (args.length < 2) throw Error("implement me")
        this.bits = args[0]
        if (typeof args[1] == "number") this.val = args[1]
        if (args[2]!=undefined) this.dnc = args[2]
    }

    static calcBits(arg) {
        if (typeof arg == "number") {
            if (arg < -128 || arg > 255) return 16
            else return 8
        }
        if (typeof arg == "string") {
            throw Error("implement me")
        }
        throw Error("polymorph error")
    }

    static parse(string) {
        let val
        let dnc
        let tmp
        string=""+string
        //console.log("parsing ",string)
        //console.log("first elem:",string[0])
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
                if (tmp.includes("?")) {
                    dnc = tmp.split("").map(c => c == "?" ? "f" : "0").join("")
                    dnc = parseInt(dnc, 16)
                    tmp = tmp.replaceAll("?", DNCNumber.dncNib)
                }
                val = parseInt(tmp, 16)
                break
            }
            default: {
                console.log("inside decimal number parse")
                if (string[0] == "?") {
                    val = 0;
                    dnc = 255;//(1 << this.bits) - 1
                }
                else {
                    val = parseInt(string)
                    dnc = 0
                }
                break
            }
        }
        console.log("returning a new DNCNumber with val",val,"and dnc",dnc)
        return new DNCNumber(DNCNumber.calcBits(val), val, dnc)
    }

}