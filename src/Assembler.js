import antlr4 from "antlr4";
import AsmLexer from "./grammar/K2Asm6502Lexer.js";
import AsmParser from "./grammar/K2Asm6502Parser.js";
//import ExprListener from "./grammar/ExprListener.js";
import AsmListener from "./AsmListener.js";
import CbmObject from "./memory/CbmObject.js";
import Scope from "./Scope.js";
import SymbolTable from "./SymbolTable.js";

export default class Assembler {
    cbmObject
    globalScope

    constructor() {

    }

    assemble(source) {
        this.cbmObject=new CbmObject()
        this.globalScope=new Scope(null,"",new SymbolTable())
        const chars = new antlr4.InputStream(source)
        const lexer = new AsmLexer(chars)
        const tokens = new antlr4.CommonTokenStream(lexer)
        const parser = new AsmParser(tokens)
        parser.buildParseTrees = true
        const tree = parser.input()
        const assembler = new AsmListener(this.cbmObject,this.globalScope)
        antlr4.tree.ParseTreeWalker.DEFAULT.walk(assembler, tree)
    }

}