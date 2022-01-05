import assert from "assert"
import Assembler from "../../src/Assembler.js"

describe(".byte",()=>{
        it("just some bytes", () => {
            let asm = new Assembler()
            asm.assemble(".byte 1,2,3\n")
            assert.deepEqual(asm.cbmObject.getObject(), [0, 16, 1, 2, 3])
        })
        it("just some hexbytes", () => {
            let asm = new Assembler()
            asm.assemble(".byte $1,$2,$3")
            assert.deepEqual(asm.cbmObject.getObject(), [0, 16, 1, 2, 3])
        })
        it("just some binary bytes", () => {
            let asm = new Assembler()
            asm.assemble(".byte %1,%10,%11")
            assert.deepEqual(asm.cbmObject.getObject(), [0, 16, 1, 2, 3])
        })

    
})