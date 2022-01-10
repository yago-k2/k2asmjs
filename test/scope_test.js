import assert from "assert"
import Scope from "../src/Scope.js"
import SymbolTable from "../src/SymbolTable.js"
import DNCNumber from "../src/types/DNCNumber.js"

describe("scope",()=>{
    describe("simple",()=>{
        it("put/get in one scope",()=>{
            let st=new SymbolTable()
            let scope=new Scope(null,"",st)
            let name="loop"
            let value=DNCNumber.parse("$1001")
            scope.put(name,value,false)
            let actual=scope.getVal(name)
            assert.deepEqual(actual,value)
        })
        it("put/get in inner scope",()=>{
            let globalScope=new Scope(null,"",new SymbolTable())
            let innerScope=new Scope(globalScope,"",new SymbolTable())
            let name="loop"
            let value=DNCNumber.parse("$1001")
            globalScope.put(name,value,false)
            let actual=innerScope.getVal(name)
            assert.deepEqual(actual,value)

        })
    })
})