import assert from "assert"
import Assembler from "../../src/Assembler.js"

describe("org opcode",()=>{
    it("change loadaddress",()=>{
        let asm = new Assembler()
        asm.assemble(".org $c000\n.byte 1,2,3\n")
        assert.deepEqual(asm.cbmObject.getObject(), [0, 192, 1, 2, 3])

    })
})