import assert from "assert";
import assemble from "../src/assemble.mjs";

describe("arithmetics", () => {
    describe("simple stuff", () => {
        it("simple addition", () => {
            assert.equal(assemble("1+1\n"), 2)
            assert.equal(assemble("2*7-2*3\n"), 8)
        })
        it("division by zero", () => {
            assert.equal(assemble("1/0\n"),Infinity)
        })
    })
    describe("errornous input",()=>{
        it("ilegal chars",()=>{
            assert.throws(()=>assemble("bla\n"),{message:"nothing on stack"})
        })
    })
})
