import antlr4 from "antlr4";
import AsmLexer from "./grammar/K2Asm6502Lexer.js";
import AsmParser from "./grammar/K2Asm6502Parser.js";
//import ExprListener from "./grammar/ExprListener.js";
import AsmListener from "./AsmListener.js";
import CbmObject from "./memory/CbmObject.js";

export default class Assembler {
    cbmobject

    constructor() {

    }

    assemble(source) {
        this.cbmobject=new CbmObject()
        const chars = new antlr4.InputStream(source)
        const lexer = new AsmLexer(chars)
        const tokens = new antlr4.CommonTokenStream(lexer)
        const parser = new AsmParser(tokens)
        parser.buildParseTrees = true
        const tree = parser.input()
        const assembler = new AsmListener(this.cbmobject)
        antlr4.tree.ParseTreeWalker.DEFAULT.walk(assembler, tree)
    }

}