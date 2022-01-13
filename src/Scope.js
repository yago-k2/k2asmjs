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

    toString() {
        let result=`Scope "${this.name}"\n`
        result+=this.symbolTable.toString()
        result+="Children:\n"
        for(let c in this.children) {
            result+="\t"+c.toString()+"="+this.children[c]+"\n"
        }
        return result
    }

    nextPass() {
        this.symbolTable.nextPass()
    }

    put(name, value, exp) {
        this.symbolTable.put(name, value, exp)
    }

    reput(name, value, exp) {
        this.symbolTable.reput(name,value,exp)
    }
    
    getRaw(name) {
        if (typeof name == "string") {
            //last part, after all previous dots have been dereferenced
            if (this.symbolTable.hasOld(name)) {
                return this.symbolTable.get(name)
            }
            if (name in this.children) {
                return {val:this.children[name].pc}
            }
            if (this.parent == null) return null
            return this.parent.getRaw(name)
        }
        if (name.length < 2) return this.getRaw(name[0])
        if (this.symbolTable.hasOld(name[0])) {
            //a map!
            return {val:this.symbolTable.getVal(name[0]).get(name[1])} //TODO give exp from map
        }
        if (name[0] in this.children) {
            //a subscope!
            let value = this.children[name[0]].getRaw(name.slice(1))
            if (value.exp==false) {
                throw Error("cant access " + name[0] + "." + name[1])
            }
            return value
        }
        return null
    }

    getVal(name) {
        return this.getRaw(name)?.val
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