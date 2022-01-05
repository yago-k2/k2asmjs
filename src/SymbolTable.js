export default class SymbolTable {
    #symbolTable

    constructor() {
        this.#symbolTable=new Map()
    }

    toString() {
        let result="SymbolTable "
        result+=this.#symbolTable.size
        for (let k of this.#symbolTable.entries()) {
             result+=`${k}\n`
         }
        return result
    }

    put(name,val,exp) {
        //this.#symbolTable[name]={val,exp}
        this.#symbolTable.set(name,{val,exp})
    }

    get(name) {
        //return this.#symbolTable[name].val
        return this.#symbolTable.get(name).val
    }

    //has(name) { return name in this.#symbolTable}
    has(name) { return this.#symbolTable.has(name)}
}