export default class Scope {
    parent
    name
    symbolTable
    
    constructor(parent,name,symbolTable) {
        this.parent=parent
        this.name=name
        this.symbolTable=symbolTable
    }

    put(name,value,exp) {
        this.symbolTable.put(name,value,exp)
    }

    get(name) {
        if(this.symbolTable.has(name)) {
            return this.symbolTable.get(name)
        }
        if(this.parent==null) return null
        return this.parent.get(name)
    }
}