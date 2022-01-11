import assert from "assert"
import Assembler from "../src/Assembler.js"

describe("script prelude",()=>{
    it("str function",()=>{
        let asm=new Assembler()
        asm.assemble(`
        .byte str($1000)
        `)
        assert.deepEqual(asm.getObject(),[0,16,52,48,57,54])
    })

    it("hex function",()=>{
        let asm=new Assembler()
        asm.assemble(`
        .byte hex(4096)
        `)
        assert.deepEqual(asm.getObject(),[0,16,49,48,48,48])
    })
    it("str with array",()=>{
        let asm=new Assembler()
        asm.assemble(`
        .byte str([3,4,5])
        `)
        assert.deepEqual(asm.getObject(),[0,16,51,44,52,44,53])
    })
    it("str with array2",()=>{
        let asm=new Assembler()
        asm.assemble(`
        arr=[%11,4,5]
        .byte str(arr)
        `)
        assert.deepEqual(asm.getObject(),[0,16,51,44,52,44,53])
    })
})
