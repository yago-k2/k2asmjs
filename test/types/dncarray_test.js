import assert from "assert"
import Assembler from "../../src/Assembler.js"

describe("DNC Array",()=>{
    it("simple array",()=>{
        let asm=new Assembler()
        asm.assemble(`
        bytes=[1,2,3]
        .byte 9,bytes
        `)
        assert.deepEqual(asm.getObject(),[0,16,9,1,2,3])
    })
    it("operating on array",()=>{
        let asm=new Assembler()
        asm.assemble(`
        bytes=[200,250,300]
        .byte >bytes
        `)
        assert.deepEqual(asm.getObject(),[0,16,0,0,1])

    })
})