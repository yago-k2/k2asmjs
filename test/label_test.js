import assert from "assert"
import Assembler from "../src/Assembler.js"
import DNCMap from "../src/types/DNCMap.js"
import DNCNumber from "../src/types/DNCNumber.js"

describe("labels",()=>{

    it("simple label",()=>{
        let asm=new Assembler()
        asm.assemble(`
            .org $c000
            label=$d000
            .word label
        `)
        let actual=asm.cbmObject.getObject()
        assert.deepEqual(actual,[0,192,0,208])
    })
    it("forward assignment",()=>{
        let asm=new Assembler()
        asm.assemble(`
        .org $c000
        .byte label
        label=42
        `)

        let actual=asm.cbmObject.getObject()
        assert.deepEqual(actual,[0,192,42])
    })

    it("label with dot",()=>{
        let asm=new Assembler()
        asm.assemble(`
            .org $c000
            vic.spr0x=$d000
            .word vic.spr0x
        `)
        let value=DNCNumber.parse("$d000")
        let expected=new DNCMap()
        expected.put("spr0x",value)
        assert.deepEqual(asm.globalScope.getVal("vic"),expected)
        assert.deepEqual(asm.globalScope.getVal("vic").get("spr0x"),value)

        let actual=asm.cbmObject.getObject()
        assert.deepEqual(actual,[0,192,0,208])
    })

    it("labels with 3 dot",()=>{
        let asm=new Assembler()
        asm.assemble(`
            .org $c000
            vic.spr0x.DEFAULT.value=128
            .byte vic.spr0x.DEFAULT.value
        `)

        let actual=asm.cbmObject.getObject()
        assert.deepEqual(actual,[0,192,128])
    })

    it("local label",()=>{
        let asm=new Assembler()
        asm.assemble(`
        .scope benamst {
            .local peter=1
        }
        .byte peter
        `)
        let actual=asm.cbmObject.getObject()
        assert.deepEqual(actual,[0,16,1])
    })

    it("global label",()=>{
        let asm=new Assembler()
        asm.assemble(`
        .scope benamst {
            .global peter=1
        }
        .byte benamst.peter
        `)
        let actual=asm.cbmObject.getObject()
        assert.deepEqual(actual,[0,16,1])
    })

    it("global vs local label",()=>{
        let asm=new Assembler()
        assert.throws(()=>{
            asm.assemble(`
            .scope benamst {
                .global peter=1
                emily=42
            }
            .byte benamst.emily
            `)
        },Error("cant access benamst.emily"))
    })

})

