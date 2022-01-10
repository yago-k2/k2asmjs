import assert from "assert"
import Assembler from "../src/Assembler.js"

describe("opcodes",()=>{
    it("implied",()=>{
        let asm=new Assembler()
        asm.assemble("nop\n")
        assert.deepEqual(asm.getObject(),[0,16,234])
    })
    // it("absolute",()=>{
    //     let asm=new Assembler()
    //     asm.assemble(`
    //     jmp $ffe2
    //     `)
    //     assert.deepEqual(asm.getObject(),[0,16,96,0xe2,0xff])
    // })
    it("immediate",()=>{
        let asm=new Assembler()
        asm.assemble(`
          .org $1000
          lda#0
        `)
        assert.deepEqual(asm.getObject(),[0,16,169,0])
    })
    it("relative",()=>{
        let asm=new Assembler()
        asm.assemble(`
            loop: bne loop
        `)
        assert.deepEqual(asm.getObject(),[0,16,208,256-2])
    })
})