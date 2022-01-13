import DNCNumber from "./DNCNumber.js"

export default class DNCList {
    list
    constructor() {
        this.list=[]
    }
    push(value) {
        this.list.push(value)
    }
    static from(array) {
        let res=new DNCList()
        for(let e of array) {
            res.push(DNCNumber.parse(e))
        }
        return res
    }
}