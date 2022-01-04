import assemble from "./assemble.mjs"

if(typeof window !== "undefined") {
  let $textarea=document.querySelector("textarea")
  let $output=document.querySelector("output")
  let $button=document.querySelector("button")
  $button.onclick=(e)=>{
    $output.innerText=assemble($textarea.value+"\n")
  }
}
