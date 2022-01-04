parser grammar K2Asm6502Parser;

//@header {package de.k2.k2asm.grammar;}

options { tokenVocab = K2Asm6502Lexer; }

input: line* EOF;

line: //mlcomment?
    comment*
    (scope
	| label
	| assign
	| pseudo
	| opcode
	) comment*
	;

comment: COMMENT_OPEN COMMENT_BODY;

//comment: COMMENT_OPEN COMMENT_BODY  # DocComment
//    ;

//mlcomment: ML_COMMENT_OPEN ML_COMMENT_BODY # MlDocComment
//    ;

scope: annotation? OPEN_CURLY line* CLOSE_CURLY			# UnnamedScope
	| SCOPE ID annotation? OPEN_CURLY line* CLOSE_CURLY	# NamedScope
	;

label: modifier? ID COLON;

//bollabel: BOL ID;

assign: modifier? ID (DOT ID)* EQUAL expr # SimpleAssign
		| modifier? ID (DOT ID)* EQUAL expr OPEN_SQUARE expr CLOSE_SQUARE # SizeAssign
		| modifier? ID (DOT ID)* EQUAL expr UPTO expr # UptoAssign
		;

modifier: 	LOCAL	# LocalModifier
			|GLOBAL	# GlobalModifier
			|EXPORT	# ExportModifier
			;

annotation: ATSIGN ID                             #SimpleAnnotation
        | ATSIGN ID OPEN_PARENS list CLOSE_PARENS #ArgAnnotation
        ;

expr:	MINUS expr				# UnaryMinus
	|   expr (STAR|DIVIDE) expr	# MulDiv
	|	expr (MINUS|PLUS) expr	# PlusMinus
	|	expr (AND|OR|EOR|SHL|SHR|LEFT|RIGHT) expr  # Logical
	|	(LEFT|RIGHT) expr # PrefixOp
    |	STRING					# String
    |   YAML_OPEN YAML_BODY     # Yaml
    |   SVG_OPEN SVG_BODY       # Svg
    |   PBM_OPEN PBM_BODY       # Pbm
    |   EPS_OPEN EPS_BODY       # Eps
    |	(dec|bin|hex|timef|array|map) # Number
    |   ID (DOT ID)+           # Dot
    |   expr DOT ID OPEN_PARENS list? CLOSE_PARENS # ScriptDot
    |	ID OPEN_PARENS list? CLOSE_PARENS # ScriptExpression
    |	(STAR|PLUS|MINUS|ID)	# Identifier
    |	OPEN_PARENS expr CLOSE_PARENS	# Parens
    ;

pseudo: ORG expr (COMMA expr)?	# Org
	| BYTE list					# Byte
	| WORD list					# Word
	| ALIGN expr (COMMA expr)?	# Align
	| BUF expr (COMMA expr)?	# Buf
	| ENC list					# Enc
	| ENCODING STRING			# Encoding
	| modifier? ENUM idlist		# Enum
    | BLOCK_OPEN BLOCK_BODY     # Emitblock
    | SHELL_OPEN SHELL_BODY     # Shellblock
	| REQUIRE STRING			# Require
	| INCBIN STRING	(COMMA expr)? (COMMA expr)?	# Incbin
	;

opcode:  OPC_REL expr				# Rel
	   | (OPC_1|OPC_2) HASH expr	# Imm
	   | (OPC_1|OPC_2) expr			# AbsOrZp
	   | OPC_1 OPEN_PARENS expr COMMA X CLOSE_PARENS	# IndX
	   | OPC_1 OPEN_PARENS expr CLOSE_PARENS COMMA Y	# IndY
	   | (OPC_1|OPC_2) expr (COMMA X|COMMA Y)	# Indexed
       | OPC_JMP OPEN_PARENS expr CLOSE_PARENS	# JmpInd
	   | OPC_JMP expr				# Jmp
	   | (OPC_0|OPC_2)				# Implied
	   ;

timef: TIMEFRAMES	# TimeFrames
	| TIME			# Time
	;

enumItem: ID		# SimpleEnumItem
	| ID EQUAL expr # AssignEnumItem
	;

idlist: enumItem (COMMA enumItem)*;

list: expr (COMMA expr)*;

array: OPEN_SQUARE list CLOSE_SQUARE;

map: OPEN_CURLY pair (COMMA pair)* COMMA? CLOSE_CURLY;
pair: key COLON expr;
key: STRING | ID;

dec: DEC;
bin: BIN;
hex: HEX;
