import antlr4 from "antlr4";
import AsmLexer from "./grammar/K2Asm6502Lexer.js";
import AsmParser from "./grammar/K2Asm6502Parser.js";
//import ExprListener from "./grammar/ExprListener.js";
import AsmListener from "./AsmListener.js";
import CbmObject from "./memory/CbmObject.js";
import Scope from "./Scope.js";
import SymbolTable from "./SymbolTable.js";
import { ParseTreeWalker } from "antlr4/src/antlr4/tree/Tree.js";
import opcMap from "./data/6502opcodes.js";

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
        const walker=new ParseTreeWalker()
        
        const pass1 = new AsmListener(this.cbmObject,this.globalScope)
        walker.walk(pass1,tree)

        //2pass asm
        this.cbmObject=new CbmObject()
        this.globalScope.nextPass()
        const pass2 = new AsmListener(this.cbmObject,this.globalScope)
        walker.walk(pass2,tree)
        
    }

}