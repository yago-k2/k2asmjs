import AsmListener from "./AsmListener.js";
import CbmObject from "./memory/CbmObject.js";
import Scope from "./Scope.js";
import SymbolTable from "./SymbolTable.js";
import Emitter from "./Emitter.js";
import OpcHelper from "./OpcodeHelper.js";
import parse from "./util/parse.js";

export default class Assembler {
    emitter
    globalScope
    options

    constructor(options) {
        let defaults = { ticks: 50 }
        this.options = Object.assign(defaults, options)
    }

    assemble(source) {
        let cbmObject = new CbmObject()
        this.emitter = new Emitter(cbmObject)
        let opcHelper = new OpcHelper(this.emitter)
        let st = new SymbolTable()
        st.parseAssignment(this.options.define)
        this.globalScope = new Scope(null, "", st)

        const pass1 = new AsmListener(this.emitter, this.globalScope, opcHelper)
        pass1.options=this.options

        parse(source,pass1,"input")

        //2pass asm
        cbmObject = new CbmObject()
        this.emitter = new Emitter(cbmObject)
        opcHelper = new OpcHelper(this.emitter)
        this.globalScope.nextPass()
        const pass2 = new AsmListener(this.emitter, this.globalScope, opcHelper)
        pass2.options=this.options
        parse(source,pass2,"input")
    }

    getObject() {
        return this.emitter.getMemory().getObject()
    }
}