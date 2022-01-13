import antlr4 from "antlr4";
import AsmLexer from "./grammar/K2Asm6502Lexer.js";
import AsmParser from "./grammar/K2Asm6502Parser.js";
//import ExprListener from "./grammar/ExprListener.js";
import AsmListener from "./AsmListener.js";
import SymbolTable from "./SymbolTable.js";
import { ParseTreeWalker } from "antlr4/src/antlr4/tree/Tree.js";
import Scope from "./Scope.js";

export default class AssignParser {
    symbolTable
    globalScope
    constructor(st) {
        this.symbolTable=st
        this.globalScope=new Scope(null,"",this.symbolTable)
    }

    parse(source) {
        const chars = new antlr4.InputStream(source)
        const lexer = new AsmLexer(chars)
        const tokens = new antlr4.CommonTokenStream(lexer)
        const parser = new AsmParser(tokens)
        parser.buildParseTrees = true
        const tree = parser.assign()
        const walker = new ParseTreeWalker()

        const pass1 = new AsmListener(null, this.globalScope, null)
        walker.walk(pass1, tree)
       
    }
}