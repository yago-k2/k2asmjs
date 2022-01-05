import assert from "assert"
import Assembler from "../src/Assembler.js"

describe("assembler", () => {
    describe("addition",()=>{
        it("1+1",()=>{
            let asm = new Assembler()
            asm.assemble(".byte 1+1\n")
            let actual=asm.cbmObject.getObject()
            assert.deepEqual(actual,[0,16,2])
        })
    })

    describe("milestone 2", () =>{
        it("bytes with arithmetic",()=>{
            let asm = new Assembler()
            asm.assemble(".byte 2-1,4/2,9/3\n")
            assert.deepEqual(asm.cbmObject.getObject(), [0, 16, 1, 2, 3])
        })
        it("bytes with bracket arithmetic",()=>{
            let asm = new Assembler()
            asm.assemble(".byte 2-1,4/2,(10-1)/3\n")
            assert.deepEqual(asm.cbmObject.getObject(), [0, 16, 1, 2, 3])
        })
    })

    describe("milestone 3",()=>{
        it("a label",()=>{
            let asm=new Assembler()
            asm.assemble(`
            .org $c000
            label:
            .byte 42
            .word label
            `)
            let actual=asm.cbmObject.getObject()
            assert.deepEqual(actual,[0,192,42,1,192])
        })
    })
})