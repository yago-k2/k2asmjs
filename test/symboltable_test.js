import assert from "assert"
import SymbolTable from "../src/SymbolTable.js"
import DNCNumber from "../src/types/DNCNumber.js"

describe("symboltable", () => {
    describe("put and get", () => {
        it("simple", () => {
            let s = new SymbolTable()
            let v = DNCNumber.parse("$1002")
            s.put("loop", v, false)
            let actual = s.get("loop")
            assert.deepEqual(actual, v)
        })
    })
})