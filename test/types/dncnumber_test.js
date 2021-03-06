import assert from "assert"
import DNCNumber from "../../src/types/DNCNumber.js"

describe("DNCNumber",()=>{
    describe("calcBits",()=>{
        it("decimal numbers",()=>{
            assert.equal(DNCNumber.calcBits(22),8)
            assert.equal(DNCNumber.calcBits(4097),16)
        })

    })
    describe("parse",()=>{
        it("decimal numbers",()=>{
            assert.equal(DNCNumber.parse("0").val,0)
            assert.equal(DNCNumber.parse("1").val,1)
        })
        it("decimal numbers as numbers (bug or feature?)",()=>{
            let actual=DNCNumber.parse(1)
            assert.equal(actual.val,1)
            assert.equal(actual.bits,8)
            assert.deepEqual(DNCNumber.parse(500),{val:500,bits:16,dnc:0})

        })
        it("hexadecimal numbers",()=>{
            assert.equal(DNCNumber.parse("$10").val,16)
            assert.equal(DNCNumber.parse("$ff").val,255)
            assert.deepEqual(DNCNumber.parse("$1000"),{val:4096,dnc:0,bits:16})

        })
        it("binary numbers",()=>{
            assert.equal(DNCNumber.parse("%0").val,0)
            assert.equal(DNCNumber.parse("%1").val,1)
        })
    })

    describe("parse dnc",()=>{
        it("decimal numbers",()=>{
            assert.deepEqual(DNCNumber.parse("?"),{val:0,dnc:255,bits:8})
        })
        it("hexadecimal numbers",()=>{
            assert.deepEqual(DNCNumber.parse("$1?"),{val:16,dnc:15,bits:8})
            assert.equal(DNCNumber.parse("$?f").val,15)
            let actual=DNCNumber.parse("$1???")
            assert.equal(actual.val,4096)
            assert.equal(actual.dnc,4095)
            assert.equal(DNCNumber.parse("$1??2").val,4098)

        })
        it("zeropage",()=>{
            assert.deepEqual(DNCNumber.parse("$01"),{val:1,dnc:0,bits:8})
            assert.deepEqual(DNCNumber.parse("$0001"),{val:1,dnc:0,bits:16})
        })
        it("binary numbers",()=>{
            assert.equal(DNCNumber.parse("%0?").val,0)
            assert.equal(DNCNumber.parse("%?1").val,1)
            let actual=DNCNumber.parse("%1???????")
            assert.equal(actual.val,128)
            assert.equal(actual.dnc,127)
        })
    })
    describe("parse dnc with dncBit=1",()=>{
        it("binary numbers",()=>{
            DNCNumber.dncBit="1"
            assert.equal(DNCNumber.parse("%0?").val,1)
            assert.equal(DNCNumber.parse("%?1").val,3)
            DNCNumber.dncBit="0"
        })
        it("hexadecimal numbers",()=>{
            DNCNumber.dncNib="f"
            assert.equal(DNCNumber.parse("$1?").val,31)
            assert.equal(DNCNumber.parse("$?f").val,255)
            assert.equal(DNCNumber.parse("$1???").val,8191)
            DNCNumber.dncNib="0"
        })
    })
    describe("parsing non-strings",()=>{
        it("numbers",()=>{
            assert.deepEqual(DNCNumber.parse(5),{val:5,dnc:0,bits:8})
            assert.deepEqual(DNCNumber.parse(5.0),{val:5,dnc:0,bits:8})
        })
        it("another dnc-number",()=>{
            let dncNr=new DNCNumber(8,100,0)
            assert.deepEqual(DNCNumber.parse(dncNr),{bits:8,val:100,dnc:0})
        })
    })
    describe("toString",()=>{
        it("without dnc",()=>{
            let actual1=new DNCNumber(8,100,0)
            assert.equal(actual1.toString(),"100")
            let actual2=new DNCNumber(16,4096,0)
            assert.equal(actual2.toString(),"4096")
        })
        it("with dnc",()=>{
            let actual1=new DNCNumber(8,16,15)
            assert.equal(actual1.toString(),"$1?")
            let actual2=DNCNumber.parse("$100?")
            assert.deepEqual(actual2,{val:4096,dnc:15,bits:16})
            assert.equal(actual2.toString(),"$100?")
            let actual3=DNCNumber.parse("%1000000?")
            assert.deepEqual(actual3,{val:128,dnc:1,bits:8})
            assert.equal(actual3.toString(),"%1000000?")
        })
        it("zeropage",()=>{
            let actual=DNCNumber.parse("$0001")
            assert.equal(actual.toString(),"$0001")
        })
    })
    describe("constructor",()=>{
        it("with two args",()=>{
            let actual=new DNCNumber(8,100)
            let expected={bits:8, val:100}
            assert.equal(actual.bits,expected.bits)
            assert.equal(actual.val,expected.val)
        })
        it("with three args",()=>{
            assert.deepEqual(new DNCNumber(8,100,1),{bits:8,val:100,dnc:1})
        })
    })
})



