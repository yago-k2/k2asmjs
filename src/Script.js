//import prelude from "./data/prelude.txt" //does not work on node atm
import DNCList from "./types/DNCList.js"
import DNCNumber from "./types/DNCNumber.js"

const prelude=`
function str(arg) { return ""+arg }
function hex(arg) { return arg.toString(16) }
`

export default class Script {
    reqdText    
    
    constructor() {
        this.reqdText=""
 //       console.log("str=",str)
    }

    call(name,args) {
        let cargs=args.map(c=>this.convToJs(c))
        let cmd=prelude+this.reqdText+`${name}(${cargs})`
        //console.log("cmd=",cmd)
        let res=eval(cmd)
        //console.log("got ",res)
        return res
    }

    execute(text) {
        let res=eval(text)
        return res
    }

    require(text) {
        this.reqdText=text
    }

    convToJs(arg) {
        if(arg instanceof DNCNumber) {
            return arg.val
        }
        if(arg instanceof DNCList) {
            let res=[]
            for(let e of arg.list) {
                res.push(this.convToJs(e))
            }
            //console.log("giving ",res)
            return "["+res.toString()+"]";
        }
        else {
            throw Error("not dncnumber:"+typeof arg)
        }
    }

}