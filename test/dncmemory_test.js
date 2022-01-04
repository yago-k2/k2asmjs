import assert from "assert"
import DNCMemory from "../src/memory/DNCMemory.js"
import DNCNumber from "../src/types/DNCNumber.js"

describe("dncmemory",()=>{
    it("poking",()=>{
        let mem=new DNCMemory()
        mem.poke(333,DNCNumber.parse("10"))
        let actual=mem.getMem()
        assert.equal(mem.la,333)
        assert.equal(actual[0],10)
        assert.equal(actual.length,1)
    })
    it("doking",()=>{
        let mem=new DNCMemory()
        mem.poke(333,DNCNumber.parse("10"))
        mem.poke(334,DNCNumber.parse("42"))
        let actual=mem.getMem()
        assert.equal(mem.la,333)
        assert.equal(actual[0],10)
        assert.equal(actual[1],42)
        assert.equal(actual.length,2)
    })
    it("with gap",()=>{
        let mem=new DNCMemory()
        mem.poke(333,DNCNumber.parse("10"))
        mem.poke(335,DNCNumber.parse("42"))
        let actual=mem.getMem()
        assert.equal(mem.la,333)
        assert.equal(actual[0],10)
        assert.equal(actual[2],42)
        assert.equal(actual.length,3)

    })
})
