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

    //last part, after all previous dots have been dereferenced
    get(name) {
        if (typeof name == "string") {
            if (this.symbolTable.hasOld(name)) {
                return this.symbolTable.get(name)
            }
            if (name in this.children) {
                return this.children[name].pc
            }
            if (this.parent == null) return null
            return this.parent.get(name)
        }
        if(name.length<2) return this.get(name[0])
        if(this.symbolTable.hasOld(name[0])) {
            //a map!
            return this.symbolTable.get(name[0]).get(name[1])
        }
        if(name[0] in this.children) {
            //a subscope!
            return this.children[name[0]].get(name.slice(1))
        }
        return null
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