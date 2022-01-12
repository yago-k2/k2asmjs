#!/usr/bin/env node
import Assembler from "./Assembler.js"
import main from "./main.js"

if (typeof window !== "undefined") {
  let asm = new Assembler()
  let $textarea = document.querySelector("textarea")
  let $output = document.querySelector("output")
  let $button = document.querySelector("button")
  $button.onclick = (e) => {
    asm.assemble($textarea.value + "\n")
    $output.innerText = asm.getObject() //maybe format as hex?
  }
}
else {
  main(process.argv)
}
