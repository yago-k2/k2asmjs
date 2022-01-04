import DNCMemory from "./DNCMemory.js"

export default class CbmObject {
    loadAddress
    pc
    memory
    constructor() {
        this.loadAddress=-1
        this.pc=4096
        this.memory=new DNCMemory()
    }

    setPc(pc) {
        this.pc=pc
    }

    add(value) {
        if(value.val<0) value.val+=256
        this.memory.poke(this.pc,value)
        this.pc++
        console.log("poking into mem:",this.memory)
    }

    getObject() {
        let temp=[]
        let la
        if(this.loadAddress==-1) la=this.memory.la
        else la=this.loadAddress

        temp.push(la&255)
        temp.push(la>>8)
        console.log("mem=",this.memory.getMem())
        temp.push(...this.memory.getMem())
        return temp
    }
}