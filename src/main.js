import Assembler from "./Assembler.js"
import fs from "fs"
import yargs from "yargs"

export default function main(args) {
    let argv = yargs(args.slice(2))
        .parserConfiguration({"short-option-groups":false})
        .option("t", { alias: "ticks", default: 50, describe: "Ticks per second", type: "number" })
        .option("o", { alias: "outfile", describe: "File to output to", type: "string" })
        .option("d", { alias: "dncfile", describe: "File with DNC", type: "string" })
        .option("D", { alias: "define", describe: "Define labels", type: "string" })
        .example("k2asm main.src -o main.obj", "Assembling")
        .example("k2asm main.src -DDEBUG -o main.obj", "Assembling with DEBUG set (to true)")
        .example("k2asm main.src -DMUSIC=false -o main.obj", "Assembling with MUSIC=false")
        .parse()

    let asm = new Assembler(argv)
    let src
    if (argv._.length == 0) {
        yargs().showHelp() //TODO
        return
    }
    else {
        src = fs.readFileSync(argv._[0]).toString()
    }
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