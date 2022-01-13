export default class DNCMap {
    #map
    #pc

    constructor() {
        this.#map={}
    }

    toString() {
        let result=""
        for(let k in this.#map) {
            result+=`${k}:${this.#map[k]}`
        }
        return result
    }

    setPc(pc) { this.#pc=pc}

    put(name,value) {
        this.#map[name]=value
    }

    get(name) {
        if(name==undefined) return this.#pc
        return this.#map[name]
    }

}