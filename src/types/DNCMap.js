export default class DNCMap {
    #map

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

    put(name,value) {
        this.#map[name]=value
    }

    get(name) {
        return this.#map[name]
    }

}