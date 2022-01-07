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
        it("an assignment",()=>{
            let asm=new Assembler()
            asm.assemble(`
            .org $c000
            label=42
            .byte label
            `)
            let actual=asm.cbmObject.getObject()
            assert.deepEqual(actual,[0,192,42])
        })
        it("an inner assignment",()=>{
            let asm=new Assembler()
            asm.assemble(`
            .org $c000
            label=42
            {
              .byte label
            }
            `)
            let actual=asm.cbmObject.getObject()
            assert.deepEqual(actual,[0,192,42])
        })
        it("inner and outer assignment",()=>{
            let asm=new Assembler()
            asm.assemble(`
            .org $c000
            label=42
            {
            label=99
              .byte label
            }
            .byte label
            `)
            let actual=asm.cbmObject.getObject()
            assert.deepEqual(actual,[0,192,99,42])
        })
        it("access to named scope",()=>{
            let asm=new Assembler()
            asm.assemble(`
            .scope benamst {
                peter=1
            }
            .word benamst
            `)
            let actual=asm.cbmObject.getObject()
            assert.deepEqual(actual,[0,16,0,16])
        })
        it("access inside named scope",()=>{
            let asm=new Assembler()
            asm.assemble(`
            .scope benamst {
                .local peter=1
            }
            .byte peter
            `)
            console.log(asm.globalScope.symbolTable.toString())
            let actual=asm.cbmObject.getObject()
            assert.deepEqual(actual,[0,16,1])
        })
        it("scope inside scope",()=>{
            let asm=new Assembler()
            asm.assemble(`
                .scope music {
                    .byte 1
                    .scope play {
                        .byte 2
                    }
                }
                .word music.play
            `)
            let actual=asm.cbmObject.getObject()
            assert.deepEqual(actual,[0,16,1,2,1,16])
        })
        it("forward scope inside scope",()=>{
            let asm=new Assembler()
            asm.assemble(`
            .word music.play
               .scope music {
                    .byte 1
                    .scope play {
                        .byte 2
                    }
                }
            `)
            let actual=asm.cbmObject.getObject()
            assert.deepEqual(actual,[0,16,3,16,1,2])
        })
        it("scope^3",()=>{
            let asm=new Assembler()
            asm.assemble(`
                .scope music {
                    .byte 1
                    .scope play {
                        .byte 2
                        .scope DEFAULT {

                        }
                    }
                }
                .word music.play.DEFAULT
            `)
            let actual=asm.cbmObject.getObject()
            assert.deepEqual(actual,[0,16,1,2,2,16])
        })

    })
})