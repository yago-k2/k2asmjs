import assert from "assert"
import Assembler from "../src/Assembler.js"

describe("scriptblock",()=>{
    it("simple",()=>{
        let asm=new Assembler()
        asm.assemble(`
        .begin
        console.log("hello world")
        .end
        .byte 1
        `)
        assert.deepEqual(asm.getObject(),[0,16,1])
    })

    it("using fn",()=>{
        let asm=new Assembler()
        asm.assemble(`
        .begin
        function increment(a) {return a+1}
        .end
        .byte increment(1)
        `)
        assert.deepEqual(asm.getObject(),[0,16,2])
    })

})