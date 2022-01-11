import {str,hex} from "./data/prelude.js"
import DNCList from "./types/DNCList.js"
import DNCNumber from "./types/DNCNumber.js"

export default class Script {
    reqdText    
    
    constructor() {
        this.reqdText=""
    }

    call(name,args) {
        let cargs=args.map(c=>this.convToJs(c))
        let cmd=this.reqdText+`${name}(${cargs})`
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