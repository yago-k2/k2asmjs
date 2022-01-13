import AssignParser from "./AssignParser.js"

export default class SymbolTable {
    #symbolTable
    #pass

    constructor() {
        this.#symbolTable=new Map()
        this.#pass=1
    }

    parseAssignment(source) {
        if(!source) return
        if(source instanceof Array) {
            for(let d of source) {
                this.parseAssignment(d)
            }
            return
        }
        let parser=new AssignParser(this)
        parser.parse(source)
    }

    nextPass() { this.#pass++}

    toString() {
        let result=`SymbolTable ${this.#symbolTable.size} entries\n`
        for (let [k,v] of this.#symbolTable.entries()) {
             result+=`${k}=${JSON.stringify(v)}\n`
         }
        return result
    }

    put(name,val,exp) {
        if(!this.#symbolTable.has(name)) {
            this.#symbolTable.set(name,{val:val,exp,pass:this.#pass})
            return
        }
        if(this.#symbolTable.get(name).pass < this.#pass) {
            this.#symbolTable.set(name,{val,exp,pass:this.#pass})
        }
        else {
            throw Error("double label definition")
        }
    }

    reput(name,val,exp) {
        this.#symbolTable.set(name,{val:val,exp,pass:this.#pass})
    }
    
    getVal(name) {
        return this.#symbolTable.get(name).val
    }

    get(name) {
        return this.#symbolTable.get(name)
    }

    hasNew(name) { 
        let v=this.#symbolTable.get(name)
        if(v==undefined) return false
        if(v.pass<this.#pass) return false
        return true
    }

    hasOld(name) {
        let v=this.#symbolTable.get(name)
        if(v==undefined) return false
        return true
    }

}