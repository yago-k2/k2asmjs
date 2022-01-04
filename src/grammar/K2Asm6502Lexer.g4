lexer grammar K2Asm6502Lexer;

//@header {package de.k2.k2asm.grammar;}

import UnicodeLetter;

channels { MACRO_CHANNEL }

//NL: '\n';
//BOL : [\r\n\f]+ ;
WS: [ \n\t\r]+ -> skip;
DOT: '.';
COLON: ':';
EQUAL: COLON? WS* '=';
OPEN_CURLY: '{';
CLOSE_CURLY: '}';
OPEN_PARENS: '(';
CLOSE_PARENS: ')';
OPEN_SQUARE: '[';
CLOSE_SQUARE: ']';
UPTO: '..';

SCOPE: '.scope';
GLOBAL: '.global';
LOCAL:	'.local'|'.outer';
EXPORT:	'.export';

STAR: '*';
DIVIDE: '/';
MINUS: '-';
PLUS: '+';
AND: '&';
OR: '|';
EOR: '^';
ATSIGN: '@';

COMMA: ',';
HASH: '#';
X: 'x';
Y: 'y';

ORG: '.org'|'.ORG'|STAR EQUAL;
BYTE: '.byte';
WORD: '.word';
ALIGN: '.align';
BUF: '.buf';
ENC: '.enc';
ENCODING: '.encoding';
ENUM: '.enum';
REQUIRE: '.require';
INCBIN: '.incbin';


BLOCK_OPEN: '.begin' -> pushMode(BLOCK);
SHELL_OPEN: '#!' .*? '\n' -> pushMode(SHELL);
PBM_OPEN: ('P1\n'|'P3\n') -> pushMode(PBM);
SVG_OPEN: '<svg' .*? '>' -> pushMode(SVG);
YAML_OPEN: '---' WS -> pushMode(YAML);
EPS_OPEN: '%!PS' -> pushMode(EPS);
//SL_COMMENT: ';' ~('\n'|'\r')* ('\r'? '\n')? -> skip;
COMMENT_OPEN: ';' -> pushMode(COMMENT);
//COMMENT_OPEN: ';;' -> pushMode(COMMENT);
//ML_COMMENT_OPEN: ';;;' -> pushMode(ML_COMMENT);

ID		: (('_'|UnicodeLetter)+ ('_'|UnicodeLetter|[0-9])*);

OPC_REL: 'bcc'|'bcs'|'beq'|'bmi'|'bne'|'bpl'|'bvc'|'bvs';

OPC_1:   'adc'|'and'|'bit'|'cmp'|'cpx'|'cpy'|'dec'|'eor'|'inc'|'lda'|'ldx'
		|'ldy'|'ora'|'sbc'|'sta'|'stx'|'sty'|'jsr'
;
OPC_JMP: 'jmp';


OPC_0:   'clc'|'cld'|'cli'|'clv'|'dex'|'dey'|'inx'|'iny'|'nop'|'pha'|'php'
		|'pla'|'plp'|'rti'|'rts'|'sec'|'sed'|'sei'|'tax'|'tay'|'tsx'|'txa'|'tya'
		|'txs'
;

OPC_2: 'asl'|'rol'|'lsr'|'ror'|'brk';

DEC		: '?'|([0-9])+;
HEX		: '$'([0-9a-fA-F]|'?')+;
BIN		: '%'('0'|'1'|'?'|'.'|'#')+;
STRING	: '"' (~'"')* '"'
        | '\'' (~'\'')* '\'';

LEFT: '<';
RIGHT: '>';

SHL: '<<';
SHR: '>>';

TIME: [0-9]+ ':' [0-9][0-9];
TIMEFRAMES: [0-9]+ ':' [0-9][0-9] '.' [0-9][0-9]?;

mode COMMENT;
COMMENT_BODY: ~('\n'|'\r')* (('\r'? '\n')|EOF) -> popMode;
//COMMENT_BODY: .*? '\n' -> popMode;
//COMMENT_BODY: (';' .*? ->pushMode(DOC_COMMENT)
//            | '\n' -> popMode);

//mode DOC_COMMENT;
//DOC_COMMENT_BODY: ';' .*? -> pushMode(ML_COMMENT);

//mode ML_COMMENT;
//ML_COMMENT_BODY: .*? ';;;' -> popMode;

mode BLOCK;
BLOCK_BODY: .*? '.end'  -> popMode;

mode SVG;
SVG_BODY: .*? '</svg>'  -> popMode;

mode YAML;
YAML_BODY: .*? '...'    -> popMode;

mode EPS;
EPS_BODY: .*? ('%%Trailer' WS '%%EOF'|'%%Trailer'|'%%EOF') -> popMode;

mode SHELL;
SHELL_BODY: .*? ('<EOF>'|'\n.\n') -> popMode;

mode PBM;
PBM_BODY: .*? ('<EOF>'|'\n.\n') -> popMode;
