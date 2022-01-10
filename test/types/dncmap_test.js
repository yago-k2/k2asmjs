import assert from "assert"
import Assembler from "../../src/Assembler.js"
import DNCMap from "../../src/types/DNCMap.js"

describe("dncmap",()=>{
    it("simple",()=>{
        let map=new DNCMap()
        map.put("peter",42)
        assert.equal(map.get("peter"),42)
    })
    it("in sourcecode",()=>{
        let asm=new Assembler()
        asm.assemble(`
        map={a:1,b:2}
        .byte map.a,map.b,3
        `)
        assert.deepEqual(asm.getObject(),[0,16,1,2,3])
    })
    
})