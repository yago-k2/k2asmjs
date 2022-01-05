import assert from "assert"
import Assembler from "../../src/Assembler.js"

describe(".word",()=>{
        it("just some binary words", () => {
            let asm = new Assembler()
            asm.assemble(".word %1,%10,%11")
            assert.deepEqual(asm.cbmobject.getObject(), [0, 16, 1,0,2, 0,3,0])
        })

    
})