import assert from "assert"
import arith from "../src/Arith.js"
import DNCNumber from "../src/types/DNCNumber.js"

describe("arithmetics", () => {

    describe("addition", () => {
        it("1+1", () => {
            let actual = arith.calc2("+", DNCNumber.parse(1), DNCNumber.parse(1))
            let expected = DNCNumber.parse(2)
            assert.deepEqual(actual, expected)
        })
        it("255+1", () => {
            let actual = arith.calc2("+", DNCNumber.parse(255), DNCNumber.parse(1))
            let expected = DNCNumber.parse(256)
            assert.deepEqual(actual, expected)
        })
    })

    describe("subtraction", () => {
        it("2-1", () => {
            let actual = arith.calc2("-", DNCNumber.parse(2), DNCNumber.parse(1))
            let expected = DNCNumber.parse(1)
            assert.deepEqual(actual, expected)
        })
        it("1-2", () => {
            let actual = arith.calc2("-", DNCNumber.parse(1), DNCNumber.parse(2))
            let expected = DNCNumber.parse(-1)
            assert.deepEqual(actual, expected)
        })
        it("256-1", () => {
            let actual = arith.calc2("-", DNCNumber.parse(256), DNCNumber.parse(1))
            let expected = DNCNumber.parse(255)
            assert.deepEqual(actual, expected)
        })
    })

    describe("or", () => {
        it("1|2", () => {
            let actual = arith.calc2("|", DNCNumber.parse(1), DNCNumber.parse(2))
            let expected = DNCNumber.parse(3)
            assert.deepEqual(actual, expected)

        })
        it("%?0001111|%?1110000", () => {
            let actual = arith.calc2("|", DNCNumber.parse("%?0001111"), DNCNumber.parse("%?1110000"))
            let expected = DNCNumber.parse("%?1111111")
            assert.deepEqual(actual, expected)
        })
    })

    describe("and", () => {
        it("1&2", () => {
            let actual = arith.calc2("&", DNCNumber.parse(1), DNCNumber.parse(2))
            let expected = DNCNumber.parse(0)
            assert.deepEqual(actual, expected)
        })
        it("%?0001111&%?1110000", () => {
            let actual = arith.calc2("&", DNCNumber.parse("%?0001111"), DNCNumber.parse("%?1110000"))
            let expected = DNCNumber.parse("%?0000000")
            assert.deepEqual(actual, expected)
        })
    })

    describe("eor", () => {
        it("3^2", () => {
            let actual = arith.calc2("^", DNCNumber.parse(3), DNCNumber.parse(2))
            let expected = DNCNumber.parse(1)
            assert.deepEqual(actual, expected)
        })
    })

    describe("shifts", () => {
        it("1<<2", () => {
            let actual = arith.calc2("<<", DNCNumber.parse(1), DNCNumber.parse(2))
            let expected = DNCNumber.parse(4)
            assert.deepEqual(actual, expected)

        })
        it("8>>1", () => {
            let actual = arith.calc2(">>", DNCNumber.parse(8), DNCNumber.parse(1))
            let expected = DNCNumber.parse(4)
            assert.deepEqual(actual, expected)

        })

    })

    describe("multiply", () => {
        it("2*3", () => {
            let actual = arith.calc2("*", DNCNumber.parse(2), DNCNumber.parse(3))
            let expected = DNCNumber.parse(6)
            assert.deepEqual(actual, expected)
        })
    })

    describe("divide", () => {
        it("8/2", () => {
            let actual = arith.calc2("/", DNCNumber.parse(8), DNCNumber.parse(2))
            let expected = DNCNumber.parse(4)
            assert.deepEqual(actual, expected)
        })
    })

    describe("lowbyte", () => {
        it("<$1234", () => {
            let actual = arith.calc1("<", DNCNumber.parse("$1234"))
            let expected = DNCNumber.parse("$34")
            assert.deepEqual(actual, expected)
        })
    })

    describe("highbyte",() => {
        it(">$1234",() => {
            let actual = arith.calc1(">", DNCNumber.parse("$1234"))
            let expected = DNCNumber.parse("$12")
            assert.deepEqual(actual, expected)
        })
    })

})