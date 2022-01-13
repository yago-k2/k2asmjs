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

    it("returns an array",()=>{
        let asm=new Assembler()
        asm.assemble(`
        .begin
        function makeArray() { return [1,2,4]}
        .end
        .byte 0,makeArray(),8`)
        assert.deepEqual(asm.getObject(),[0,16,0,1,2,4,8])
    })

    it("returns a map",()=>{
        let asm=new Assembler
        asm.assemble(`
        .begin
        function makeMap() { return {a:1,b:22} }
        .end
        data=makeMap()
        .byte data.a,data.b
        `)
        console.log(asm.globalScope.symbolTable)
        assert.deepEqual(asm.getObject(),[0,16,1,22])
    })

})