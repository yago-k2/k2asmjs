import assert from "assert"
import SymbolTable from "../src/SymbolTable.js"
import DNCMap from "../src/types/DNCMap.js"
import DNCNumber from "../src/types/DNCNumber.js"

describe("symboltable", () => {
    describe("put and get", () => {
        it("simple", () => {
            let s = new SymbolTable()
            let v = DNCNumber.parse("$1002")
            s.put("loop", v, false)
            let actual = s.get("loop")
            assert.deepEqual(actual, v)
        })
        it("inserting a map",()=>{
            let s=new SymbolTable()
            let v= DNCNumber.parse("$1002")
            let m=new DNCMap()
            m.put("entry",v)
            s.put("amap",m,false)
            let actual= s.get("amap")
            assert.deepEqual(actual,m)
            assert.deepEqual(actual.get("entry"),v)
        })
    })
})