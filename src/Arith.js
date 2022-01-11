import DNCList from "./types/DNCList.js"
import DNCNumber from "./types/DNCNumber.js"

export default class Arith {
    
    static calc1(op,left) {
        let val,dnc
        if(typeof left=="number") {
            throw Error("please gimme DNC")
        }
        if(left instanceof DNCList) {
            let res=new DNCList()
            for(let l of left.list) {
                res.push(this.calc1(op,l))
            }
            return res
        }
        switch(""+op) {
            case "<":
                val=left.val&255
                dnc=left.dnc&255
                break
            case ">":
                val=left.val>>8
                dnc=left.dnc>>8
                break
            case "-":
                val=-left.val
                dnc=left.val
                break
            default:
                throw Error(`implement me "${op}",${op==='>'}`)
        }
        return new DNCNumber(DNCNumber.calcBits(val),val,dnc)
    }

    static calc2(op,left,right) {
        let val,dnc
        switch(op) {
            case "+":
                val=left.val+right.val
                dnc=left.dnc
                break
            case "-":
                val=left.val-right.val
                dnc=left.dnc
                break
            case "|":
                val=left.val|right.val
                dnc=left.dnc|right.dnc
                break
            case "&":
                val=left.val&right.val
                dnc=left.dnc
                break
            case "^":
                val=left.val^right.val
                dnc=left.dnc
                break
            case "<<":
                val=left.val<<right.val
                dnc=left.dnc
                break
            case ">>":
                val=left.val>>right.val
                dnc=left.dnc
                break
            case "*":
                val=left.val*right.val
                dnc=left.dnc
                break
            case "/":
                val=left.val/right.val
                dnc=left.dnc
                break
            
            default:
                throw Error("implement me "+op)
        }
        return new DNCNumber(DNCNumber.calcBits(val),val,dnc)
    } 
}