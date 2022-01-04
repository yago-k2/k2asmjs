import assert from "assert"
import CbmObject from "../src/memory/CbmObject.js"

describe("cbmobject",()=>{
    it("test",()=>{
        let c=new CbmObject()
        c.setPc(49152)
        c.add(1)
        c.add(2)
        let actual=c.getObject()
        assert.equal(actual[0],0)
        assert.equal(actual[1],192)
    })
})
