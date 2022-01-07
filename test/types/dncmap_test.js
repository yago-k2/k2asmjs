import assert from "assert"
import DNCMap from "../../src/types/DNCMap.js"

describe("dncmap",()=>{
    it("simple",()=>{
        let map=new DNCMap()
        map.put("peter",42)
        assert.equal(map.get("peter"),42)
    })
})