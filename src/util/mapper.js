import DNCList from "../types/DNCList.js";
import DNCMap from "../types/DNCMap.js";
import DNCNumber from "../types/DNCNumber.js";

export default class Mapper {
    static toDNC(jsvalue) {
        if(typeof jsvalue=="number") return Mapper.numberToDNCNumber(jsvalue)
        if(typeof jsvalue=="string") return jsvalue
        if(jsvalue instanceof Array) return DNCList.from(jsvalue)
        //its a map
        if(typeof jsvalue =="object") return Mapper.mapToDNCMap(jsvalue)
        throw Error("something else")
    }

    static numberToDNCNumber(jsnumber) {
        return new DNCNumber(jsnumber)
    }

    static mapToDNCMap(jsobject) {
        let result=new DNCMap()
        for(let p in jsobject) {
            result.put(p,Mapper.toDNC(jsobject[p]))
        }
        return result
    }

    static toJS(dncvalue) {
        return dncvalue.val
    }
}