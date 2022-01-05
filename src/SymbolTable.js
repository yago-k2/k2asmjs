export default class SymbolTable {
    #symbolTable

    constructor() {
        this.#symbolTable={}//new Map()
    }

    put(name,val,exp) {
        this.#symbolTable[name]={val,exp}
    }

    get(name) {
        return this.#symbolTable[name].val
    }

    has(name) { return name in this.#symbolTable}
}