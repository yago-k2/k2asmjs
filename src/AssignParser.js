import AsmListener from "./AsmListener.js";
import Scope from "./Scope.js";
import parse from "./util/parse.js"

export default class AssignParser {
    symbolTable
    globalScope
    constructor(st) {
        this.symbolTable=st
        this.globalScope=new Scope(null,"",this.symbolTable)
    }

    parse(source) {
        const pass1 = new AsmListener(null, this.globalScope, null)
        parse(source,pass1,"assign")
       
    }
}