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
    .parse()
  let asm = new Assembler(argv)
  let src = fs.readFileSync(argv._[0]).toString()
  asm.assemble(src)
  let obj=asm.getObject()
  fs.writeFileSync(argv.outfile,Uint8Array.from(obj))
}
