import yaml from "js-yaml"
import fs from "fs"


try {
  const doc = yaml.loadAll(fs.readFileSync('../src/data/6502opcodes.yml', 'utf8'));
  let result={}
  for(let d in doc) {
      let entry=doc[d]
      let name=entry.name
      delete entry.name
      result[name]=entry
  }
  fs.writeFileSync("../src/data/6502opcodes.js","export default "+JSON.stringify(result,null,8))
} catch (e) {
  console.log(e);
}
