export default class Scope {
    parent
    name
    symbolTable
    children
    pc
    
    constructor(parent, name, symbolTable) {
        this.parent = parent
        this.name = name
        this.symbolTable = symbolTable
        this.children = {}
    }

    nextPass() {
        this.symbolTable.nextPass()
    }

    put(name, value, exp) {
        this.symbolTable.put(name, value, exp)
    }

    get(name) {
        if (this.symbolTable.hasOld(name)) {
            return this.symbolTable.get(name)
        }
        if (this.parent == null) return null
        return this.parent.get(name)
    }

    hasOld(name) {
        return this.symbolTable.hasOld(name)
    }

    hasNew(name) {
        return this.symbolTable.hasNew(name)
    }

    addChildren(scope) {
        this.children[scope.name] = scope
    }

}