grammar Expr;		
prog:	(expr NEWLINE)* ;
expr:	expr ('*'|'/') expr # MulDiv
    |	expr ('+'|'-') expr # PlusMinus
    |	INT                 # Number
    |	'(' expr ')'        # Brackets
    ;
NEWLINE : [\r\n]+ ;
INT     : [0-9]+ ;
