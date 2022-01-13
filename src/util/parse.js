import antlr4 from "antlr4";
import AsmLexer from "../grammar/K2Asm6502Lexer.js";
import AsmParser from "../grammar/K2Asm6502Parser.js";
import { ParseTreeWalker } from "antlr4/src/antlr4/tree/Tree.js";

export default function parse(source,listener,rule) {
    const chars = new antlr4.InputStream(source)
    const lexer = new AsmLexer(chars)
    const tokens = new antlr4.CommonTokenStream(lexer)
    const parser = new AsmParser(tokens)
    parser.buildParseTrees = true
    const tree = parser[rule]()
    const walker = new ParseTreeWalker()

    walker.walk(listener, tree)

}