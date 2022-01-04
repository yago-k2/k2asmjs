// Generated from Expr.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import ExprListener from './ExprListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\n\"\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0007\u0002\n\n\u0002\f\u0002\u000e\u0002\r",
    "\u000b\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003\u0015\n\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003\u001d\n\u0003",
    "\f\u0003\u000e\u0003 \u000b\u0003\u0003\u0003\u0002\u0003\u0004\u0004",
    "\u0002\u0004\u0002\u0004\u0003\u0002\u0003\u0004\u0003\u0002\u0005\u0006",
    "\u0002#\u0002\u000b\u0003\u0002\u0002\u0002\u0004\u0014\u0003\u0002",
    "\u0002\u0002\u0006\u0007\u0005\u0004\u0003\u0002\u0007\b\u0007\t\u0002",
    "\u0002\b\n\u0003\u0002\u0002\u0002\t\u0006\u0003\u0002\u0002\u0002\n",
    "\r\u0003\u0002\u0002\u0002\u000b\t\u0003\u0002\u0002\u0002\u000b\f\u0003",
    "\u0002\u0002\u0002\f\u0003\u0003\u0002\u0002\u0002\r\u000b\u0003\u0002",
    "\u0002\u0002\u000e\u000f\b\u0003\u0001\u0002\u000f\u0015\u0007\n\u0002",
    "\u0002\u0010\u0011\u0007\u0007\u0002\u0002\u0011\u0012\u0005\u0004\u0003",
    "\u0002\u0012\u0013\u0007\b\u0002\u0002\u0013\u0015\u0003\u0002\u0002",
    "\u0002\u0014\u000e\u0003\u0002\u0002\u0002\u0014\u0010\u0003\u0002\u0002",
    "\u0002\u0015\u001e\u0003\u0002\u0002\u0002\u0016\u0017\f\u0006\u0002",
    "\u0002\u0017\u0018\t\u0002\u0002\u0002\u0018\u001d\u0005\u0004\u0003",
    "\u0007\u0019\u001a\f\u0005\u0002\u0002\u001a\u001b\t\u0003\u0002\u0002",
    "\u001b\u001d\u0005\u0004\u0003\u0006\u001c\u0016\u0003\u0002\u0002\u0002",
    "\u001c\u0019\u0003\u0002\u0002\u0002\u001d \u0003\u0002\u0002\u0002",
    "\u001e\u001c\u0003\u0002\u0002\u0002\u001e\u001f\u0003\u0002\u0002\u0002",
    "\u001f\u0005\u0003\u0002\u0002\u0002 \u001e\u0003\u0002\u0002\u0002",
    "\u0006\u000b\u0014\u001c\u001e"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class ExprParser extends antlr4.Parser {

    static grammarFileName = "Expr.g4";
    static literalNames = [ null, "'*'", "'/'", "'+'", "'-'", "'('", "')'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, "NEWLINE", 
                             "INT" ];
    static ruleNames = [ "prog", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ExprParser.ruleNames;
        this.literalNames = ExprParser.literalNames;
        this.symbolicNames = ExprParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 4);
    		case 1:
    			return this.precpred(this._ctx, 3);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ExprParser.RULE_prog);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 9;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ExprParser.T__4 || _la===ExprParser.INT) {
	            this.state = 4;
	            this.expr(0);
	            this.state = 5;
	            this.match(ExprParser.NEWLINE);
	            this.state = 11;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, ExprParser.RULE_expr, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ExprParser.INT:
	            localctx = new NumberContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 13;
	            this.match(ExprParser.INT);
	            break;
	        case ExprParser.T__4:
	            localctx = new BracketsContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 14;
	            this.match(ExprParser.T__4);
	            this.state = 15;
	            this.expr(0);
	            this.state = 16;
	            this.match(ExprParser.T__5);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 28;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 26;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulDivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
	                    this.state = 20;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 21;
	                    _la = this._input.LA(1);
	                    if(!(_la===ExprParser.T__0 || _la===ExprParser.T__1)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 22;
	                    this.expr(5);
	                    break;

	                case 2:
	                    localctx = new PlusMinusContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
	                    this.state = 23;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 24;
	                    _la = this._input.LA(1);
	                    if(!(_la===ExprParser.T__2 || _la===ExprParser.T__3)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 25;
	                    this.expr(4);
	                    break;

	                } 
	            }
	            this.state = 30;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

ExprParser.EOF = antlr4.Token.EOF;
ExprParser.T__0 = 1;
ExprParser.T__1 = 2;
ExprParser.T__2 = 3;
ExprParser.T__3 = 4;
ExprParser.T__4 = 5;
ExprParser.T__5 = 6;
ExprParser.NEWLINE = 7;
ExprParser.INT = 8;

ExprParser.RULE_prog = 0;
ExprParser.RULE_expr = 1;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprParser.RULE_prog;
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ExprParser.NEWLINE);
	    } else {
	        return this.getToken(ExprParser.NEWLINE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.exitProg(this);
		}
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class PlusMinusContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.enterPlusMinus(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.exitPlusMinus(this);
		}
	}


}

ExprParser.PlusMinusContext = PlusMinusContext;

class NumberContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INT() {
	    return this.getToken(ExprParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.exitNumber(this);
		}
	}


}

ExprParser.NumberContext = NumberContext;

class BracketsContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.enterBrackets(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.exitBrackets(this);
		}
	}


}

ExprParser.BracketsContext = BracketsContext;

class MulDivContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.enterMulDiv(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.exitMulDiv(this);
		}
	}


}

ExprParser.MulDivContext = MulDivContext;


ExprParser.ProgContext = ProgContext; 
ExprParser.ExprContext = ExprContext; 
