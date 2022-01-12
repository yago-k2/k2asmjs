#!/usr/bin/env node
import yargs from "yargs"
import fs from "fs"
import Assembler from "./Assembler.js"

if (typeof window !== "undefined") {
  let asm = new Assembler()
  let $textarea = document.querySelector("textarea")
  let $output = document.querySelector("output")
  let $button = document.querySelector("button")
  $button.onclick = (e) => {
    asm.assemble($textarea.value + "\n")
    $output.innerText = asm.getObject()
  }
}
else {
  let argv = yargs(process.argv.slice(2))
    .option("t", { alias: "ticks", default: 50, describe: "Ticks per second", type: "number" })
    .option("o", { alias: "outfile", describe: "File to output to", type: "string" })
    .option("d", { alias: "dncfile", describe: "File with DNC", type: "string" })
    .option("D",{alias:"define", describe: "Define labels", type: "string"})
    .example("k2asm main.src -o main.obj","Assembling")
    .example("k2asm main.src -DDEBUG -o main.obj","Assembling with DEBUG set (to true)")
    .example("k2asm main.src -DMUSIC=false -o main.obj","Assembling with MUSIC=false")
    .parse()
  let asm = new Assembler(argv)
  let src = fs.readFileSync(argv._[0]).toString()
  asm.assemble(src)
  let obj = asm.getObject()
  let out = Uint8Array.from(obj)
  let outfile = argv.outfile
  if (!outfile) {
    process.stdout.write(out)
  }
  else {
    fs.writeFileSync(outfile, out)
  }
}
