to generate the js files:

java -jar ../../tools/antlr-4.9.3-complete.jar -Dlanguage=JavaScript K2Asm6502Lexer.g4
java -jar ../../tools/antlr-4.9.3-complete.jar -Dlanguage=JavaScript K2Asm6502Parser.g4

there are some references to fs (filesystem), which only exists under node
to get it running with a browser, just comment the require("fs") from
node_modules/antlr4/src/antlr4/CharStreams.js and in index.js the reference
to FileStream.js

the runtime has to be downloaded, or installed with

npm install antlr4


