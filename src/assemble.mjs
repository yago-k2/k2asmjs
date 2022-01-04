import antlr4 from "antlr4";
import ExprLexer from "./grammar/ExprLexer.js";
import ExprParser from "./grammar/ExprParser.js";
//import ExprListener from "./grammar/ExprListener.js";
import MyExprListener from "./MyExprListener.js";


export default function assemble(input) {
            const chars = new antlr4.InputStream(input)
            const lexer = new ExprLexer(chars)
            const tokens = new antlr4.CommonTokenStream(lexer)
            const parser = new ExprParser(tokens)
            parser.buildParseTrees = true
            const tree = parser.prog()
            const assembler = new MyExprListener()
            antlr4.tree.ParseTreeWalker.DEFAULT.walk(assembler, tree)
            return assembler.getResult()
}
