import assert from "assert"
import Assembler from "../src/Assembler.js"

describe("opcodes",()=>{
    it("implied",()=>{
        let asm=new Assembler()
        asm.assemble("nop\n")
        assert.deepEqual(asm.getObject(),[0,16,234])
    })
    it("absolute",()=>{
        let asm=new Assembler()
        asm.assemble(`
        lda $ffe2
        `)
        assert.deepEqual(asm.getObject(),[0,16,173,0xe2,0xff])
    })
    it("absolute or zeropage",()=>{
        let asm=new Assembler()
        asm.assemble(`
        lda $e2
        `)
        assert.deepEqual(asm.getObject(),[0,16,165,0xe2])
    })
    it("marked for zeropage",()=>{
        let asm=new Assembler()
        asm.assemble(`
        lda $00e2
        `)
        assert.deepEqual(asm.getObject(),[0,16,173,0xe2,0])
    })
    it("indexX",()=>{
        let asm=new Assembler()
        asm.assemble(`
        lda 1024,x
        `)
        assert.deepEqual(asm.getObject(),[0,16,189,0,4])
    })
    it("indexX ZP",()=>{
        let asm=new Assembler()
        asm.assemble(`
        lda 24,x
        `)
        assert.deepEqual(asm.getObject(),[0,16,181,24])
    })
    it("indexY",()=>{
        let asm=new Assembler()
        asm.assemble(`
        ldx 1024,y
        `)
        assert.deepEqual(asm.getObject(),[0,16,190,0,4])
    })
    it("indexY ZP",()=>{
        let asm=new Assembler()
        asm.assemble(`
        ldx 10,y
        `)
        assert.deepEqual(asm.getObject(),[0,16,182,10])
    })
    it("indirect x",()=>{
        let asm=new Assembler()
        asm.assemble(`lda ($fe,x)`)
        assert.deepEqual(asm.getObject(),[0,16,161,254])
    })
    it("indirect y",()=>{
        let asm=new Assembler()
        asm.assemble(`lda ($fe),y`)
        assert.deepEqual(asm.getObject(),[0,16,177,254])
    })
    it("indirect",()=>{
        let asm=new Assembler()
        asm.assemble("jmp ($fffe)")
        assert.deepEqual(asm.getObject(),[0,16,108,0xfe,0xff])
    })
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