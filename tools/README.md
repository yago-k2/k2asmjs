# generate grammars
java -jar antlr-4.9.3-complete.jar -Dlanguage=JavaScript ..\src\grammar\K2Asm6502Lexer.g4
java -jar antlr-4.9.3-complete.jar -Dlanguage=JavaScript ..\src\grammar\K2Asm6502Parser.g4

# convert 6502opcodes.yaml yto 6502opcodes.json
node yaml2json.js

# (for testing)
# generate java classes for grammar
javac -cp ".;..\..\tools\antlr-4.9.3-complete.jar" K2Asm6502Lexer.java
javac -cp ".;..\..\tools\antlr-4.9.3-complete.jar" K2Asm6502Parser.java
# run testrig (grun)

