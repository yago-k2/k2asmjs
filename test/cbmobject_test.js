import assert from "assert"
import CbmObject from "../src/memory/CbmObject.js"
import DNCNumber from "../src/types/DNCNumber.js"

describe("cbmobject",()=>{
    it("test",()=>{
        let c=new CbmObject()
        c.setPc(49152)
        c.add(DNCNumber.parse(1))
        c.add(DNCNumber.parse(2))
        let actual=c.getObject()
        assert.deepEqual(actual,[0,192,1,2])
    })
})
