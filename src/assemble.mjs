import antlr4 from "antlr4";
import AsmLexer from "./grammar/K2Asm6502Lexer.js";
import AsmParser from "./grammar/K2Asm6502Parser.js";
//import ExprListener from "./grammar/ExprListener.js";
import AsmListener from "./AsmListener.js";


export default function assemble(input) {
            const chars = new antlr4.InputStream(input)
            const lexer = new AsmLexer(chars)
            const tokens = new antlr4.CommonTokenStream(lexer)
            const parser = new AsmParser(tokens)
            parser.buildParseTrees = true
            const tree = parser.input()
            const assembler = new AsmListener()
            antlr4.tree.ParseTreeWalker.DEFAULT.walk(assembler, tree)
            return assembler.getResult()
}
