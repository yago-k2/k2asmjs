import assert from "assert"
import Assembler from "../src/Assembler.js"

describe("assembler", () => {
    describe("milestone 1", () => {
        it("just some bytes", () => {
            let asm = new Assembler()
            asm.assemble(".byte 1,2,3")
            assert.deepEqual(asm.cbmobject.getObject(), [0, 16, 1, 2, 3])
        })
        it("just some hexbytes", () => {
            let asm = new Assembler()
            asm.assemble(".byte $1,$2,$3")
            assert.deepEqual(asm.cbmobject.getObject(), [0, 16, 1, 2, 3])
        })
        it("just some binary bytes", () => {
            let asm = new Assembler()
            asm.assemble(".byte %1,%10,%11")
            assert.deepEqual(asm.cbmobject.getObject(), [0, 16, 1, 2, 3])
        })
    })

    // describe("milestone 2", () =>{
    //     it("bytes with arithmetic",()=>{
    //         let asm = new Assembler()
    //         asm.assemble(".byte 2-1,4/2,(10-1)/3")
    //         assert.deepEqual(asm.cbmobject.getObject(), [0, 16, 1, 2, 3])
    //     })
    // })

})