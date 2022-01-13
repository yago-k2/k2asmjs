import assert from "assert"
import AssignParser from "../src/AssignParser.js"
import SymbolTable from "../src/SymbolTable.js"
import DNCList from "../src/types/DNCList.js"
import DNCMap from "../src/types/DNCMap.js"
import DNCNumber from "../src/types/DNCNumber.js"

describe("assignparser",()=>{
    it("simple number",()=>{
        let st=new SymbolTable()
        let parser=new AssignParser(st)
        parser.parse("peter=22")
        assert.deepEqual(st.getVal("peter"),DNCNumber.parse("22"))
    })
    it("with dot",()=>{
        let st=new SymbolTable()
        let parser=new AssignParser(st)
        parser.parse("org.main=$c000")
        let value=DNCNumber.parse("$c000")
        let expected = new DNCMap()
        expected.put("main",value)

        assert.deepEqual(st.getVal("org"),expected)
        assert.deepEqual(st.getVal("org").get("main"),value)
    })
    it("array",()=>{
        let st=new SymbolTable()
        let parser=new AssignParser(st)
        parser.parse("arr=[1,2,3]")
        let expected=new DNCList()
        expected.push(DNCNumber.parse(1))
        expected.push(DNCNumber.parse(2))
        expected.push(DNCNumber.parse(3))
        assert.deepEqual(st.getVal("arr"),expected)
    })
    it("map",()=>{
        let st=new SymbolTable()
        let parser=new AssignParser(st)
        parser.parse("music={init:$1000,play:$1003,exit:$1006}")
        let value1=DNCNumber.parse("$1000")
        let value2=DNCNumber.parse("$1003")
        let value3=DNCNumber.parse("$1006")
        let expected = new DNCMap()
        expected.put("init",value1)
        expected.put("play",value2)
        expected.put("exit",value3)

        assert.deepEqual(st.getVal("music"),expected)
        assert.deepEqual(st.getVal("music").get("init"),value1)

    })
})