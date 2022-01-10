// Generated from K2Asm6502Parser.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import K2Asm6502ParserListener from './K2Asm6502ParserListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003E\u017c\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0003\u0002\u0007\u00020\n\u0002\f\u0002\u000e\u00023\u000b\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0007\u00038\n\u0003\f\u0003\u000e\u0003",
    ";\u000b\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0005\u0003B\n\u0003\u0003\u0003\u0007\u0003E\n\u0003\f\u0003",
    "\u000e\u0003H\u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0005\u0005\u0005N\n\u0005\u0003\u0005\u0003\u0005\u0007\u0005R\n\u0005",
    "\f\u0005\u000e\u0005U\u000b\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0005\u0005[\n\u0005\u0003\u0005\u0003\u0005\u0007\u0005",
    "_\n\u0005\f\u0005\u000e\u0005b\u000b\u0005\u0003\u0005\u0005\u0005e",
    "\n\u0005\u0003\u0006\u0005\u0006h\n\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0005\u0007n\n\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0007\u0007s\n\u0007\f\u0007\u000e\u0007v\u000b\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0005\u0007{\n\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0007\u0007\u0080\n\u0007\f\u0007\u000e\u0007\u0083\u000b",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0005\u0007\u008c\n\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0007\u0007\u0091\n\u0007\f\u0007\u000e\u0007\u0094\u000b",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005",
    "\u0007\u009b\n\u0007\u0003\b\u0003\b\u0003\b\u0005\b\u00a0\n\b\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u00aa",
    "\n\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n",
    "\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0005\n\u00c0\n\n\u0003\n\u0003\n\u0003\n",
    "\u0006\n\u00c5\n\n\r\n\u000e\n\u00c6\u0003\n\u0003\n\u0003\n\u0005\n",
    "\u00cc\n\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n\u00d4",
    "\n\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n",
    "\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n\u00e4\n\n\u0003",
    "\n\u0007\n\u00e7\n\n\f\n\u000e\n\u00ea\u000b\n\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0005\u000b\u00f0\n\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0005\u000b\u00fa\n\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0005\u000b\u0100\n\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u0107\n\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b",
    "\u0115\n\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u0119\n\u000b\u0005",
    "\u000b\u011b\n\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0005\f\u0138\n\f\u0003\f\u0003\f\u0003\f",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u0142\n\f\u0003\r\u0003",
    "\r\u0005\r\u0146\n\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0005\u000e\u014c\n\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0007",
    "\u000f\u0151\n\u000f\f\u000f\u000e\u000f\u0154\u000b\u000f\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0007\u0010\u0159\n\u0010\f\u0010\u000e\u0010",
    "\u015c\u000b\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0007\u0012\u0166\n\u0012",
    "\f\u0012\u000e\u0012\u0169\u000b\u0012\u0003\u0012\u0005\u0012\u016c",
    "\n\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016",
    "\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0002\u0003\u0012\u0018",
    "\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c",
    "\u001e \"$&(*,\u0002\n\u0003\u00029:\u0005\u0002\u0012\u0012\u0014\u0015",
    "44\u0003\u0002\u0012\u0013\u0003\u0002\u0014\u0015\u0004\u0002\u0016",
    "\u00189<\u0004\u00020033\u0003\u000223\u0004\u00024488\u0002\u01b4\u0002",
    "1\u0003\u0002\u0002\u0002\u00049\u0003\u0002\u0002\u0002\u0006I\u0003",
    "\u0002\u0002\u0002\bd\u0003\u0002\u0002\u0002\ng\u0003\u0002\u0002\u0002",
    "\f\u009a\u0003\u0002\u0002\u0002\u000e\u009f\u0003\u0002\u0002\u0002",
    "\u0010\u00a9\u0003\u0002\u0002\u0002\u0012\u00d3\u0003\u0002\u0002\u0002",
    "\u0014\u011a\u0003\u0002\u0002\u0002\u0016\u0141\u0003\u0002\u0002\u0002",
    "\u0018\u0145\u0003\u0002\u0002\u0002\u001a\u014b\u0003\u0002\u0002\u0002",
    "\u001c\u014d\u0003\u0002\u0002\u0002\u001e\u0155\u0003\u0002\u0002\u0002",
    " \u015d\u0003\u0002\u0002\u0002\"\u0161\u0003\u0002\u0002\u0002$\u016f",
    "\u0003\u0002\u0002\u0002&\u0173\u0003\u0002\u0002\u0002(\u0175\u0003",
    "\u0002\u0002\u0002*\u0177\u0003\u0002\u0002\u0002,\u0179\u0003\u0002",
    "\u0002\u0002.0\u0005\u0004\u0003\u0002/.\u0003\u0002\u0002\u000203\u0003",
    "\u0002\u0002\u00021/\u0003\u0002\u0002\u000212\u0003\u0002\u0002\u0002",
    "24\u0003\u0002\u0002\u000231\u0003\u0002\u0002\u000245\u0007\u0002\u0002",
    "\u00035\u0003\u0003\u0002\u0002\u000268\u0005\u0006\u0004\u000276\u0003",
    "\u0002\u0002\u00028;\u0003\u0002\u0002\u000297\u0003\u0002\u0002\u0002",
    "9:\u0003\u0002\u0002\u0002:A\u0003\u0002\u0002\u0002;9\u0003\u0002\u0002",
    "\u0002<B\u0005\b\u0005\u0002=B\u0005\n\u0006\u0002>B\u0005\f\u0007\u0002",
    "?B\u0005\u0014\u000b\u0002@B\u0005\u0016\f\u0002A<\u0003\u0002\u0002",
    "\u0002A=\u0003\u0002\u0002\u0002A>\u0003\u0002\u0002\u0002A?\u0003\u0002",
    "\u0002\u0002A@\u0003\u0002\u0002\u0002BF\u0003\u0002\u0002\u0002CE\u0005",
    "\u0006\u0004\u0002DC\u0003\u0002\u0002\u0002EH\u0003\u0002\u0002\u0002",
    "FD\u0003\u0002\u0002\u0002FG\u0003\u0002\u0002\u0002G\u0005\u0003\u0002",
    "\u0002\u0002HF\u0003\u0002\u0002\u0002IJ\u0007.\u0002\u0002JK\u0007",
    "?\u0002\u0002K\u0007\u0003\u0002\u0002\u0002LN\u0005\u0010\t\u0002M",
    "L\u0003\u0002\u0002\u0002MN\u0003\u0002\u0002\u0002NO\u0003\u0002\u0002",
    "\u0002OS\u0007\u0007\u0002\u0002PR\u0005\u0004\u0003\u0002QP\u0003\u0002",
    "\u0002\u0002RU\u0003\u0002\u0002\u0002SQ\u0003\u0002\u0002\u0002ST\u0003",
    "\u0002\u0002\u0002TV\u0003\u0002\u0002\u0002US\u0003\u0002\u0002\u0002",
    "Ve\u0007\b\u0002\u0002WX\u0007\u000e\u0002\u0002XZ\u00074\u0002\u0002",
    "Y[\u0005\u0010\t\u0002ZY\u0003\u0002\u0002\u0002Z[\u0003\u0002\u0002",
    "\u0002[\\\u0003\u0002\u0002\u0002\\`\u0007\u0007\u0002\u0002]_\u0005",
    "\u0004\u0003\u0002^]\u0003\u0002\u0002\u0002_b\u0003\u0002\u0002\u0002",
    "`^\u0003\u0002\u0002\u0002`a\u0003\u0002\u0002\u0002ac\u0003\u0002\u0002",
    "\u0002b`\u0003\u0002\u0002\u0002ce\u0007\b\u0002\u0002dM\u0003\u0002",
    "\u0002\u0002dW\u0003\u0002\u0002\u0002e\t\u0003\u0002\u0002\u0002fh",
    "\u0005\u000e\b\u0002gf\u0003\u0002\u0002\u0002gh\u0003\u0002\u0002\u0002",
    "hi\u0003\u0002\u0002\u0002ij\u00074\u0002\u0002jk\u0007\u0005\u0002",
    "\u0002k\u000b\u0003\u0002\u0002\u0002ln\u0005\u000e\b\u0002ml\u0003",
    "\u0002\u0002\u0002mn\u0003\u0002\u0002\u0002no\u0003\u0002\u0002\u0002",
    "ot\u00074\u0002\u0002pq\u0007\u0004\u0002\u0002qs\u00074\u0002\u0002",
    "rp\u0003\u0002\u0002\u0002sv\u0003\u0002\u0002\u0002tr\u0003\u0002\u0002",
    "\u0002tu\u0003\u0002\u0002\u0002uw\u0003\u0002\u0002\u0002vt\u0003\u0002",
    "\u0002\u0002wx\u0007\u0006\u0002\u0002x\u009b\u0005\u0012\n\u0002y{",
    "\u0005\u000e\b\u0002zy\u0003\u0002\u0002\u0002z{\u0003\u0002\u0002\u0002",
    "{|\u0003\u0002\u0002\u0002|\u0081\u00074\u0002\u0002}~\u0007\u0004\u0002",
    "\u0002~\u0080\u00074\u0002\u0002\u007f}\u0003\u0002\u0002\u0002\u0080",
    "\u0083\u0003\u0002\u0002\u0002\u0081\u007f\u0003\u0002\u0002\u0002\u0081",
    "\u0082\u0003\u0002\u0002\u0002\u0082\u0084\u0003\u0002\u0002\u0002\u0083",
    "\u0081\u0003\u0002\u0002\u0002\u0084\u0085\u0007\u0006\u0002\u0002\u0085",
    "\u0086\u0005\u0012\n\u0002\u0086\u0087\u0007\u000b\u0002\u0002\u0087",
    "\u0088\u0005\u0012\n\u0002\u0088\u0089\u0007\f\u0002\u0002\u0089\u009b",
    "\u0003\u0002\u0002\u0002\u008a\u008c\u0005\u000e\b\u0002\u008b\u008a",
    "\u0003\u0002\u0002\u0002\u008b\u008c\u0003\u0002\u0002\u0002\u008c\u008d",
    "\u0003\u0002\u0002\u0002\u008d\u0092\u00074\u0002\u0002\u008e\u008f",
    "\u0007\u0004\u0002\u0002\u008f\u0091\u00074\u0002\u0002\u0090\u008e",
    "\u0003\u0002\u0002\u0002\u0091\u0094\u0003\u0002\u0002\u0002\u0092\u0090",
    "\u0003\u0002\u0002\u0002\u0092\u0093\u0003\u0002\u0002\u0002\u0093\u0095",
    "\u0003\u0002\u0002\u0002\u0094\u0092\u0003\u0002\u0002\u0002\u0095\u0096",
    "\u0007\u0006\u0002\u0002\u0096\u0097\u0005\u0012\n\u0002\u0097\u0098",
    "\u0007\r\u0002\u0002\u0098\u0099\u0005\u0012\n\u0002\u0099\u009b\u0003",
    "\u0002\u0002\u0002\u009am\u0003\u0002\u0002\u0002\u009az\u0003\u0002",
    "\u0002\u0002\u009a\u008b\u0003\u0002\u0002\u0002\u009b\r\u0003\u0002",
    "\u0002\u0002\u009c\u00a0\u0007\u0010\u0002\u0002\u009d\u00a0\u0007\u000f",
    "\u0002\u0002\u009e\u00a0\u0007\u0011\u0002\u0002\u009f\u009c\u0003\u0002",
    "\u0002\u0002\u009f\u009d\u0003\u0002\u0002\u0002\u009f\u009e\u0003\u0002",
    "\u0002\u0002\u00a0\u000f\u0003\u0002\u0002\u0002\u00a1\u00a2\u0007\u0019",
    "\u0002\u0002\u00a2\u00aa\u00074\u0002\u0002\u00a3\u00a4\u0007\u0019",
    "\u0002\u0002\u00a4\u00a5\u00074\u0002\u0002\u00a5\u00a6\u0007\t\u0002",
    "\u0002\u00a6\u00a7\u0005\u001e\u0010\u0002\u00a7\u00a8\u0007\n\u0002",
    "\u0002\u00a8\u00aa\u0003\u0002\u0002\u0002\u00a9\u00a1\u0003\u0002\u0002",
    "\u0002\u00a9\u00a3\u0003\u0002\u0002\u0002\u00aa\u0011\u0003\u0002\u0002",
    "\u0002\u00ab\u00ac\b\n\u0001\u0002\u00ac\u00ad\u0007\u0014\u0002\u0002",
    "\u00ad\u00d4\u0005\u0012\n\u0012\u00ae\u00af\t\u0002\u0002\u0002\u00af",
    "\u00d4\u0005\u0012\n\u000e\u00b0\u00d4\u00078\u0002\u0002\u00b1\u00b2",
    "\u0007,\u0002\u0002\u00b2\u00d4\u0007B\u0002\u0002\u00b3\u00b4\u0007",
    "+\u0002\u0002\u00b4\u00d4\u0007A\u0002\u0002\u00b5\u00b6\u0007*\u0002",
    "\u0002\u00b6\u00d4\u0007E\u0002\u0002\u00b7\u00b8\u0007-\u0002\u0002",
    "\u00b8\u00d4\u0007C\u0002\u0002\u00b9\u00c0\u0005(\u0015\u0002\u00ba",
    "\u00c0\u0005*\u0016\u0002\u00bb\u00c0\u0005,\u0017\u0002\u00bc\u00c0",
    "\u0005\u0018\r\u0002\u00bd\u00c0\u0005 \u0011\u0002\u00be\u00c0\u0005",
    "\"\u0012\u0002\u00bf\u00b9\u0003\u0002\u0002\u0002\u00bf\u00ba\u0003",
    "\u0002\u0002\u0002\u00bf\u00bb\u0003\u0002\u0002\u0002\u00bf\u00bc\u0003",
    "\u0002\u0002\u0002\u00bf\u00bd\u0003\u0002\u0002\u0002\u00bf\u00be\u0003",
    "\u0002\u0002\u0002\u00c0\u00d4\u0003\u0002\u0002\u0002\u00c1\u00c4\u0007",
    "4\u0002\u0002\u00c2\u00c3\u0007\u0004\u0002\u0002\u00c3\u00c5\u0007",
    "4\u0002\u0002\u00c4\u00c2\u0003\u0002\u0002\u0002\u00c5\u00c6\u0003",
    "\u0002\u0002\u0002\u00c6\u00c4\u0003\u0002\u0002\u0002\u00c6\u00c7\u0003",
    "\u0002\u0002\u0002\u00c7\u00d4\u0003\u0002\u0002\u0002\u00c8\u00c9\u0007",
    "4\u0002\u0002\u00c9\u00cb\u0007\t\u0002\u0002\u00ca\u00cc\u0005\u001e",
    "\u0010\u0002\u00cb\u00ca\u0003\u0002\u0002\u0002\u00cb\u00cc\u0003\u0002",
    "\u0002\u0002\u00cc\u00cd\u0003\u0002\u0002\u0002\u00cd\u00d4\u0007\n",
    "\u0002\u0002\u00ce\u00d4\t\u0003\u0002\u0002\u00cf\u00d0\u0007\t\u0002",
    "\u0002\u00d0\u00d1\u0005\u0012\n\u0002\u00d1\u00d2\u0007\n\u0002\u0002",
    "\u00d2\u00d4\u0003\u0002\u0002\u0002\u00d3\u00ab\u0003\u0002\u0002\u0002",
    "\u00d3\u00ae\u0003\u0002\u0002\u0002\u00d3\u00b0\u0003\u0002\u0002\u0002",
    "\u00d3\u00b1\u0003\u0002\u0002\u0002\u00d3\u00b3\u0003\u0002\u0002\u0002",
    "\u00d3\u00b5\u0003\u0002\u0002\u0002\u00d3\u00b7\u0003\u0002\u0002\u0002",
    "\u00d3\u00bf\u0003\u0002\u0002\u0002\u00d3\u00c1\u0003\u0002\u0002\u0002",
    "\u00d3\u00c8\u0003\u0002\u0002\u0002\u00d3\u00ce\u0003\u0002\u0002\u0002",
    "\u00d3\u00cf\u0003\u0002\u0002\u0002\u00d4\u00e8\u0003\u0002\u0002\u0002",
    "\u00d5\u00d6\f\u0011\u0002\u0002\u00d6\u00d7\t\u0004\u0002\u0002\u00d7",
    "\u00e7\u0005\u0012\n\u0012\u00d8\u00d9\f\u0010\u0002\u0002\u00d9\u00da",
    "\t\u0005\u0002\u0002\u00da\u00e7\u0005\u0012\n\u0011\u00db\u00dc\f\u000f",
    "\u0002\u0002\u00dc\u00dd\t\u0006\u0002\u0002\u00dd\u00e7\u0005\u0012",
    "\n\u0010\u00de\u00df\f\u0006\u0002\u0002\u00df\u00e0\u0007\u0004\u0002",
    "\u0002\u00e0\u00e1\u00074\u0002\u0002\u00e1\u00e3\u0007\t\u0002\u0002",
    "\u00e2\u00e4\u0005\u001e\u0010\u0002\u00e3\u00e2\u0003\u0002\u0002\u0002",
    "\u00e3\u00e4\u0003\u0002\u0002\u0002\u00e4\u00e5\u0003\u0002\u0002\u0002",
    "\u00e5\u00e7\u0007\n\u0002\u0002\u00e6\u00d5\u0003\u0002\u0002\u0002",
    "\u00e6\u00d8\u0003\u0002\u0002\u0002\u00e6\u00db\u0003\u0002\u0002\u0002",
    "\u00e6\u00de\u0003\u0002\u0002\u0002\u00e7\u00ea\u0003\u0002\u0002\u0002",
    "\u00e8\u00e6\u0003\u0002\u0002\u0002\u00e8\u00e9\u0003\u0002\u0002\u0002",
    "\u00e9\u0013\u0003\u0002\u0002\u0002\u00ea\u00e8\u0003\u0002\u0002\u0002",
    "\u00eb\u00ec\u0007\u001e\u0002\u0002\u00ec\u00ef\u0005\u0012\n\u0002",
    "\u00ed\u00ee\u0007\u001a\u0002\u0002\u00ee\u00f0\u0005\u0012\n\u0002",
    "\u00ef\u00ed\u0003\u0002\u0002\u0002\u00ef\u00f0\u0003\u0002\u0002\u0002",
    "\u00f0\u011b\u0003\u0002\u0002\u0002\u00f1\u00f2\u0007\u001f\u0002\u0002",
    "\u00f2\u011b\u0005\u001e\u0010\u0002\u00f3\u00f4\u0007 \u0002\u0002",
    "\u00f4\u011b\u0005\u001e\u0010\u0002\u00f5\u00f6\u0007!\u0002\u0002",
    "\u00f6\u00f9\u0005\u0012\n\u0002\u00f7\u00f8\u0007\u001a\u0002\u0002",
    "\u00f8\u00fa\u0005\u0012\n\u0002\u00f9\u00f7\u0003\u0002\u0002\u0002",
    "\u00f9\u00fa\u0003\u0002\u0002\u0002\u00fa\u011b\u0003\u0002\u0002\u0002",
    "\u00fb\u00fc\u0007\"\u0002\u0002\u00fc\u00ff\u0005\u0012\n\u0002\u00fd",
    "\u00fe\u0007\u001a\u0002\u0002\u00fe\u0100\u0005\u0012\n\u0002\u00ff",
    "\u00fd\u0003\u0002\u0002\u0002\u00ff\u0100\u0003\u0002\u0002\u0002\u0100",
    "\u011b\u0003\u0002\u0002\u0002\u0101\u0102\u0007#\u0002\u0002\u0102",
    "\u011b\u0005\u001e\u0010\u0002\u0103\u0104\u0007$\u0002\u0002\u0104",
    "\u011b\u00078\u0002\u0002\u0105\u0107\u0005\u000e\b\u0002\u0106\u0105",
    "\u0003\u0002\u0002\u0002\u0106\u0107\u0003\u0002\u0002\u0002\u0107\u0108",
    "\u0003\u0002\u0002\u0002\u0108\u0109\u0007%\u0002\u0002\u0109\u011b",
    "\u0005\u001c\u000f\u0002\u010a\u010b\u0007(\u0002\u0002\u010b\u011b",
    "\u0007@\u0002\u0002\u010c\u010d\u0007)\u0002\u0002\u010d\u011b\u0007",
    "D\u0002\u0002\u010e\u010f\u0007&\u0002\u0002\u010f\u011b\u00078\u0002",
    "\u0002\u0110\u0111\u0007\'\u0002\u0002\u0111\u0114\u00078\u0002\u0002",
    "\u0112\u0113\u0007\u001a\u0002\u0002\u0113\u0115\u0005\u0012\n\u0002",
    "\u0114\u0112\u0003\u0002\u0002\u0002\u0114\u0115\u0003\u0002\u0002\u0002",
    "\u0115\u0118\u0003\u0002\u0002\u0002\u0116\u0117\u0007\u001a\u0002\u0002",
    "\u0117\u0119\u0005\u0012\n\u0002\u0118\u0116\u0003\u0002\u0002\u0002",
    "\u0118\u0119\u0003\u0002\u0002\u0002\u0119\u011b\u0003\u0002\u0002\u0002",
    "\u011a\u00eb\u0003\u0002\u0002\u0002\u011a\u00f1\u0003\u0002\u0002\u0002",
    "\u011a\u00f3\u0003\u0002\u0002\u0002\u011a\u00f5\u0003\u0002\u0002\u0002",
    "\u011a\u00fb\u0003\u0002\u0002\u0002\u011a\u0101\u0003\u0002\u0002\u0002",
    "\u011a\u0103\u0003\u0002\u0002\u0002\u011a\u0106\u0003\u0002\u0002\u0002",
    "\u011a\u010a\u0003\u0002\u0002\u0002\u011a\u010c\u0003\u0002\u0002\u0002",
    "\u011a\u010e\u0003\u0002\u0002\u0002\u011a\u0110\u0003\u0002\u0002\u0002",
    "\u011b\u0015\u0003\u0002\u0002\u0002\u011c\u011d\u0007/\u0002\u0002",
    "\u011d\u0142\u0005\u0012\n\u0002\u011e\u011f\t\u0007\u0002\u0002\u011f",
    "\u0120\u0007\u001b\u0002\u0002\u0120\u0142\u0005\u0012\n\u0002\u0121",
    "\u0122\t\u0007\u0002\u0002\u0122\u0142\u0005\u0012\n\u0002\u0123\u0124",
    "\u00070\u0002\u0002\u0124\u0125\u0007\t\u0002\u0002\u0125\u0126\u0005",
    "\u0012\n\u0002\u0126\u0127\u0007\u001a\u0002\u0002\u0127\u0128\u0007",
    "\u001c\u0002\u0002\u0128\u0129\u0007\n\u0002\u0002\u0129\u0142\u0003",
    "\u0002\u0002\u0002\u012a\u012b\u00070\u0002\u0002\u012b\u012c\u0007",
    "\t\u0002\u0002\u012c\u012d\u0005\u0012\n\u0002\u012d\u012e\u0007\n\u0002",
    "\u0002\u012e\u012f\u0007\u001a\u0002\u0002\u012f\u0130\u0007\u001d\u0002",
    "\u0002\u0130\u0142\u0003\u0002\u0002\u0002\u0131\u0132\t\u0007\u0002",
    "\u0002\u0132\u0137\u0005\u0012\n\u0002\u0133\u0134\u0007\u001a\u0002",
    "\u0002\u0134\u0138\u0007\u001c\u0002\u0002\u0135\u0136\u0007\u001a\u0002",
    "\u0002\u0136\u0138\u0007\u001d\u0002\u0002\u0137\u0133\u0003\u0002\u0002",
    "\u0002\u0137\u0135\u0003\u0002\u0002\u0002\u0138\u0142\u0003\u0002\u0002",
    "\u0002\u0139\u013a\u00071\u0002\u0002\u013a\u013b\u0007\t\u0002\u0002",
    "\u013b\u013c\u0005\u0012\n\u0002\u013c\u013d\u0007\n\u0002\u0002\u013d",
    "\u0142\u0003\u0002\u0002\u0002\u013e\u013f\u00071\u0002\u0002\u013f",
    "\u0142\u0005\u0012\n\u0002\u0140\u0142\t\b\u0002\u0002\u0141\u011c\u0003",
    "\u0002\u0002\u0002\u0141\u011e\u0003\u0002\u0002\u0002\u0141\u0121\u0003",
    "\u0002\u0002\u0002\u0141\u0123\u0003\u0002\u0002\u0002\u0141\u012a\u0003",
    "\u0002\u0002\u0002\u0141\u0131\u0003\u0002\u0002\u0002\u0141\u0139\u0003",
    "\u0002\u0002\u0002\u0141\u013e\u0003\u0002\u0002\u0002\u0141\u0140\u0003",
    "\u0002\u0002\u0002\u0142\u0017\u0003\u0002\u0002\u0002\u0143\u0146\u0007",
    ">\u0002\u0002\u0144\u0146\u0007=\u0002\u0002\u0145\u0143\u0003\u0002",
    "\u0002\u0002\u0145\u0144\u0003\u0002\u0002\u0002\u0146\u0019\u0003\u0002",
    "\u0002\u0002\u0147\u014c\u00074\u0002\u0002\u0148\u0149\u00074\u0002",
    "\u0002\u0149\u014a\u0007\u0006\u0002\u0002\u014a\u014c\u0005\u0012\n",
    "\u0002\u014b\u0147\u0003\u0002\u0002\u0002\u014b\u0148\u0003\u0002\u0002",
    "\u0002\u014c\u001b\u0003\u0002\u0002\u0002\u014d\u0152\u0005\u001a\u000e",
    "\u0002\u014e\u014f\u0007\u001a\u0002\u0002\u014f\u0151\u0005\u001a\u000e",
    "\u0002\u0150\u014e\u0003\u0002\u0002\u0002\u0151\u0154\u0003\u0002\u0002",
    "\u0002\u0152\u0150\u0003\u0002\u0002\u0002\u0152\u0153\u0003\u0002\u0002",
    "\u0002\u0153\u001d\u0003\u0002\u0002\u0002\u0154\u0152\u0003\u0002\u0002",
    "\u0002\u0155\u015a\u0005\u0012\n\u0002\u0156\u0157\u0007\u001a\u0002",
    "\u0002\u0157\u0159\u0005\u0012\n\u0002\u0158\u0156\u0003\u0002\u0002",
    "\u0002\u0159\u015c\u0003\u0002\u0002\u0002\u015a\u0158\u0003\u0002\u0002",
    "\u0002\u015a\u015b\u0003\u0002\u0002\u0002\u015b\u001f\u0003\u0002\u0002",
    "\u0002\u015c\u015a\u0003\u0002\u0002\u0002\u015d\u015e\u0007\u000b\u0002",
    "\u0002\u015e\u015f\u0005\u001e\u0010\u0002\u015f\u0160\u0007\f\u0002",
    "\u0002\u0160!\u0003\u0002\u0002\u0002\u0161\u0162\u0007\u0007\u0002",
    "\u0002\u0162\u0167\u0005$\u0013\u0002\u0163\u0164\u0007\u001a\u0002",
    "\u0002\u0164\u0166\u0005$\u0013\u0002\u0165\u0163\u0003\u0002\u0002",
    "\u0002\u0166\u0169\u0003\u0002\u0002\u0002\u0167\u0165\u0003\u0002\u0002",
    "\u0002\u0167\u0168\u0003\u0002\u0002\u0002\u0168\u016b\u0003\u0002\u0002",
    "\u0002\u0169\u0167\u0003\u0002\u0002\u0002\u016a\u016c\u0007\u001a\u0002",
    "\u0002\u016b\u016a\u0003\u0002\u0002\u0002\u016b\u016c\u0003\u0002\u0002",
    "\u0002\u016c\u016d\u0003\u0002\u0002\u0002\u016d\u016e\u0007\b\u0002",
    "\u0002\u016e#\u0003\u0002\u0002\u0002\u016f\u0170\u0005&\u0014\u0002",
    "\u0170\u0171\u0007\u0005\u0002\u0002\u0171\u0172\u0005\u0012\n\u0002",
    "\u0172%\u0003\u0002\u0002\u0002\u0173\u0174\t\t\u0002\u0002\u0174\'",
    "\u0003\u0002\u0002\u0002\u0175\u0176\u00075\u0002\u0002\u0176)\u0003",
    "\u0002\u0002\u0002\u0177\u0178\u00077\u0002\u0002\u0178+\u0003\u0002",
    "\u0002\u0002\u0179\u017a\u00076\u0002\u0002\u017a-\u0003\u0002\u0002",
    "\u0002+19AFMSZ`dgmtz\u0081\u008b\u0092\u009a\u009f\u00a9\u00bf\u00c6",
    "\u00cb\u00d3\u00e3\u00e6\u00e8\u00ef\u00f9\u00ff\u0106\u0114\u0118\u011a",
    "\u0137\u0141\u0145\u014b\u0152\u015a\u0167\u016b"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class K2Asm6502Parser extends antlr4.Parser {

    static grammarFileName = "K2Asm6502Parser.g4";
    static literalNames = [ null, null, "'.'", "':'", null, "'{'", "'}'", 
                            "'('", "')'", "'['", "']'", "'..'", "'.scope'", 
                            "'.global'", null, "'.export'", "'*'", "'/'", 
                            "'-'", "'+'", "'&'", "'|'", "'^'", "'@'", "','", 
                            "'#'", "'x'", "'y'", null, "'.byte'", "'.word'", 
                            "'.align'", "'.buf'", "'.enc'", "'.encoding'", 
                            "'.enum'", "'.require'", "'.incbin'", "'.begin'", 
                            null, null, null, null, "'%!PS'", "';'", null, 
                            null, "'jmp'", null, null, null, null, null, 
                            null, null, "'<'", "'>'", "'<<'", "'>>'" ];
    static symbolicNames = [ null, "WS", "DOT", "COLON", "EQUAL", "OPEN_CURLY", 
                             "CLOSE_CURLY", "OPEN_PARENS", "CLOSE_PARENS", 
                             "OPEN_SQUARE", "CLOSE_SQUARE", "UPTO", "SCOPE", 
                             "GLOBAL", "LOCAL", "EXPORT", "STAR", "DIVIDE", 
                             "MINUS", "PLUS", "AND", "OR", "EOR", "ATSIGN", 
                             "COMMA", "HASH", "X", "Y", "ORG", "BYTE", "WORD", 
                             "ALIGN", "BUF", "ENC", "ENCODING", "ENUM", 
                             "REQUIRE", "INCBIN", "BLOCK_OPEN", "SHELL_OPEN", 
                             "PBM_OPEN", "SVG_OPEN", "YAML_OPEN", "EPS_OPEN", 
                             "COMMENT_OPEN", "OPC_REL", "OPC_1", "OPC_JMP", 
                             "OPC_0", "OPC_2", "ID", "DEC", "HEX", "BIN", 
                             "STRING", "LEFT", "RIGHT", "SHL", "SHR", "TIME", 
                             "TIMEFRAMES", "COMMENT_BODY", "BLOCK_BODY", 
                             "SVG_BODY", "YAML_BODY", "EPS_BODY", "SHELL_BODY", 
                             "PBM_BODY" ];
    static ruleNames = [ "input", "line", "comment", "scope", "label", "assign", 
                         "modifier", "annotation", "expr", "pseudo", "opcode", 
                         "timef", "enumItem", "idlist", "list", "array", 
                         "map", "pair", "key", "dec", "bin", "hex" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = K2Asm6502Parser.ruleNames;
        this.literalNames = K2Asm6502Parser.literalNames;
        this.symbolicNames = K2Asm6502Parser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 8:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 15);
    		case 1:
    			return this.precpred(this._ctx, 14);
    		case 2:
    			return this.precpred(this._ctx, 13);
    		case 3:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	input() {
	    let localctx = new InputContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, K2Asm6502Parser.RULE_input);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << K2Asm6502Parser.OPEN_CURLY) | (1 << K2Asm6502Parser.SCOPE) | (1 << K2Asm6502Parser.GLOBAL) | (1 << K2Asm6502Parser.LOCAL) | (1 << K2Asm6502Parser.EXPORT) | (1 << K2Asm6502Parser.ATSIGN) | (1 << K2Asm6502Parser.ORG) | (1 << K2Asm6502Parser.BYTE) | (1 << K2Asm6502Parser.WORD) | (1 << K2Asm6502Parser.ALIGN))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (K2Asm6502Parser.BUF - 32)) | (1 << (K2Asm6502Parser.ENC - 32)) | (1 << (K2Asm6502Parser.ENCODING - 32)) | (1 << (K2Asm6502Parser.ENUM - 32)) | (1 << (K2Asm6502Parser.REQUIRE - 32)) | (1 << (K2Asm6502Parser.INCBIN - 32)) | (1 << (K2Asm6502Parser.BLOCK_OPEN - 32)) | (1 << (K2Asm6502Parser.SHELL_OPEN - 32)) | (1 << (K2Asm6502Parser.COMMENT_OPEN - 32)) | (1 << (K2Asm6502Parser.OPC_REL - 32)) | (1 << (K2Asm6502Parser.OPC_1 - 32)) | (1 << (K2Asm6502Parser.OPC_JMP - 32)) | (1 << (K2Asm6502Parser.OPC_0 - 32)) | (1 << (K2Asm6502Parser.OPC_2 - 32)) | (1 << (K2Asm6502Parser.ID - 32)))) !== 0)) {
	            this.state = 44;
	            this.line();
	            this.state = 49;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 50;
	        this.match(K2Asm6502Parser.EOF);
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



	line() {
	    let localctx = new LineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, K2Asm6502Parser.RULE_line);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===K2Asm6502Parser.COMMENT_OPEN) {
	            this.state = 52;
	            this.comment();
	            this.state = 57;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 63;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 58;
	            this.scope();
	            break;

	        case 2:
	            this.state = 59;
	            this.label();
	            break;

	        case 3:
	            this.state = 60;
	            this.assign();
	            break;

	        case 4:
	            this.state = 61;
	            this.pseudo();
	            break;

	        case 5:
	            this.state = 62;
	            this.opcode();
	            break;

	        }
	        this.state = 68;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 65;
	                this.comment(); 
	            }
	            this.state = 70;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
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



	comment() {
	    let localctx = new CommentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, K2Asm6502Parser.RULE_comment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.match(K2Asm6502Parser.COMMENT_OPEN);
	        this.state = 72;
	        this.match(K2Asm6502Parser.COMMENT_BODY);
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



	scope() {
	    let localctx = new ScopeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, K2Asm6502Parser.RULE_scope);
	    var _la = 0; // Token type
	    try {
	        this.state = 98;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case K2Asm6502Parser.OPEN_CURLY:
	        case K2Asm6502Parser.ATSIGN:
	            localctx = new UnnamedScopeContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 75;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===K2Asm6502Parser.ATSIGN) {
	                this.state = 74;
	                this.annotation();
	            }

	            this.state = 77;
	            this.match(K2Asm6502Parser.OPEN_CURLY);
	            this.state = 81;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << K2Asm6502Parser.OPEN_CURLY) | (1 << K2Asm6502Parser.SCOPE) | (1 << K2Asm6502Parser.GLOBAL) | (1 << K2Asm6502Parser.LOCAL) | (1 << K2Asm6502Parser.EXPORT) | (1 << K2Asm6502Parser.ATSIGN) | (1 << K2Asm6502Parser.ORG) | (1 << K2Asm6502Parser.BYTE) | (1 << K2Asm6502Parser.WORD) | (1 << K2Asm6502Parser.ALIGN))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (K2Asm6502Parser.BUF - 32)) | (1 << (K2Asm6502Parser.ENC - 32)) | (1 << (K2Asm6502Parser.ENCODING - 32)) | (1 << (K2Asm6502Parser.ENUM - 32)) | (1 << (K2Asm6502Parser.REQUIRE - 32)) | (1 << (K2Asm6502Parser.INCBIN - 32)) | (1 << (K2Asm6502Parser.BLOCK_OPEN - 32)) | (1 << (K2Asm6502Parser.SHELL_OPEN - 32)) | (1 << (K2Asm6502Parser.COMMENT_OPEN - 32)) | (1 << (K2Asm6502Parser.OPC_REL - 32)) | (1 << (K2Asm6502Parser.OPC_1 - 32)) | (1 << (K2Asm6502Parser.OPC_JMP - 32)) | (1 << (K2Asm6502Parser.OPC_0 - 32)) | (1 << (K2Asm6502Parser.OPC_2 - 32)) | (1 << (K2Asm6502Parser.ID - 32)))) !== 0)) {
	                this.state = 78;
	                this.line();
	                this.state = 83;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 84;
	            this.match(K2Asm6502Parser.CLOSE_CURLY);
	            break;
	        case K2Asm6502Parser.SCOPE:
	            localctx = new NamedScopeContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 85;
	            this.match(K2Asm6502Parser.SCOPE);
	            this.state = 86;
	            this.match(K2Asm6502Parser.ID);
	            this.state = 88;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===K2Asm6502Parser.ATSIGN) {
	                this.state = 87;
	                this.annotation();
	            }

	            this.state = 90;
	            this.match(K2Asm6502Parser.OPEN_CURLY);
	            this.state = 94;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << K2Asm6502Parser.OPEN_CURLY) | (1 << K2Asm6502Parser.SCOPE) | (1 << K2Asm6502Parser.GLOBAL) | (1 << K2Asm6502Parser.LOCAL) | (1 << K2Asm6502Parser.EXPORT) | (1 << K2Asm6502Parser.ATSIGN) | (1 << K2Asm6502Parser.ORG) | (1 << K2Asm6502Parser.BYTE) | (1 << K2Asm6502Parser.WORD) | (1 << K2Asm6502Parser.ALIGN))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (K2Asm6502Parser.BUF - 32)) | (1 << (K2Asm6502Parser.ENC - 32)) | (1 << (K2Asm6502Parser.ENCODING - 32)) | (1 << (K2Asm6502Parser.ENUM - 32)) | (1 << (K2Asm6502Parser.REQUIRE - 32)) | (1 << (K2Asm6502Parser.INCBIN - 32)) | (1 << (K2Asm6502Parser.BLOCK_OPEN - 32)) | (1 << (K2Asm6502Parser.SHELL_OPEN - 32)) | (1 << (K2Asm6502Parser.COMMENT_OPEN - 32)) | (1 << (K2Asm6502Parser.OPC_REL - 32)) | (1 << (K2Asm6502Parser.OPC_1 - 32)) | (1 << (K2Asm6502Parser.OPC_JMP - 32)) | (1 << (K2Asm6502Parser.OPC_0 - 32)) | (1 << (K2Asm6502Parser.OPC_2 - 32)) | (1 << (K2Asm6502Parser.ID - 32)))) !== 0)) {
	                this.state = 91;
	                this.line();
	                this.state = 96;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 97;
	            this.match(K2Asm6502Parser.CLOSE_CURLY);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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



	label() {
	    let localctx = new LabelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, K2Asm6502Parser.RULE_label);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << K2Asm6502Parser.GLOBAL) | (1 << K2Asm6502Parser.LOCAL) | (1 << K2Asm6502Parser.EXPORT))) !== 0)) {
	            this.state = 100;
	            this.modifier();
	        }

	        this.state = 103;
	        this.match(K2Asm6502Parser.ID);
	        this.state = 104;
	        this.match(K2Asm6502Parser.COLON);
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



	assign() {
	    let localctx = new AssignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, K2Asm6502Parser.RULE_assign);
	    var _la = 0; // Token type
	    try {
	        this.state = 152;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new SimpleAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 107;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << K2Asm6502Parser.GLOBAL) | (1 << K2Asm6502Parser.LOCAL) | (1 << K2Asm6502Parser.EXPORT))) !== 0)) {
	                this.state = 106;
	                this.modifier();
	            }

	            this.state = 109;
	            this.match(K2Asm6502Parser.ID);
	            this.state = 114;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===K2Asm6502Parser.DOT) {
	                this.state = 110;
	                this.match(K2Asm6502Parser.DOT);
	                this.state = 111;
	                this.match(K2Asm6502Parser.ID);
	                this.state = 116;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 117;
	            this.match(K2Asm6502Parser.EQUAL);
	            this.state = 118;
	            this.expr(0);
	            break;

	        case 2:
	            localctx = new SizeAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 120;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << K2Asm6502Parser.GLOBAL) | (1 << K2Asm6502Parser.LOCAL) | (1 << K2Asm6502Parser.EXPORT))) !== 0)) {
	                this.state = 119;
	                this.modifier();
	            }

	            this.state = 122;
	            this.match(K2Asm6502Parser.ID);
	            this.state = 127;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===K2Asm6502Parser.DOT) {
	                this.state = 123;
	                this.match(K2Asm6502Parser.DOT);
	                this.state = 124;
	                this.match(K2Asm6502Parser.ID);
	                this.state = 129;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 130;
	            this.match(K2Asm6502Parser.EQUAL);
	            this.state = 131;
	            this.expr(0);
	            this.state = 132;
	            this.match(K2Asm6502Parser.OPEN_SQUARE);
	            this.state = 133;
	            this.expr(0);
	            this.state = 134;
	            this.match(K2Asm6502Parser.CLOSE_SQUARE);
	            break;

	        case 3:
	            localctx = new UptoAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 137;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << K2Asm6502Parser.GLOBAL) | (1 << K2Asm6502Parser.LOCAL) | (1 << K2Asm6502Parser.EXPORT))) !== 0)) {
	                this.state = 136;
	                this.modifier();
	            }

	            this.state = 139;
	            this.match(K2Asm6502Parser.ID);
	            this.state = 144;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===K2Asm6502Parser.DOT) {
	                this.state = 140;
	                this.match(K2Asm6502Parser.DOT);
	                this.state = 141;
	                this.match(K2Asm6502Parser.ID);
	                this.state = 146;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 147;
	            this.match(K2Asm6502Parser.EQUAL);
	            this.state = 148;
	            this.expr(0);
	            this.state = 149;
	            this.match(K2Asm6502Parser.UPTO);
	            this.state = 150;
	            this.expr(0);
	            break;

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



	modifier() {
	    let localctx = new ModifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, K2Asm6502Parser.RULE_modifier);
	    try {
	        this.state = 157;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case K2Asm6502Parser.LOCAL:
	            localctx = new LocalModifierContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 154;
	            this.match(K2Asm6502Parser.LOCAL);
	            break;
	        case K2Asm6502Parser.GLOBAL:
	            localctx = new GlobalModifierContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 155;
	            this.match(K2Asm6502Parser.GLOBAL);
	            break;
	        case K2Asm6502Parser.EXPORT:
	            localctx = new ExportModifierContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 156;
	            this.match(K2Asm6502Parser.EXPORT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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



	annotation() {
	    let localctx = new AnnotationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, K2Asm6502Parser.RULE_annotation);
	    try {
	        this.state = 167;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new SimpleAnnotationContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 159;
	            this.match(K2Asm6502Parser.ATSIGN);
	            this.state = 160;
	            this.match(K2Asm6502Parser.ID);
	            break;

	        case 2:
	            localctx = new ArgAnnotationContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 161;
	            this.match(K2Asm6502Parser.ATSIGN);
	            this.state = 162;
	            this.match(K2Asm6502Parser.ID);
	            this.state = 163;
	            this.match(K2Asm6502Parser.OPEN_PARENS);
	            this.state = 164;
	            this.list();
	            this.state = 165;
	            this.match(K2Asm6502Parser.CLOSE_PARENS);
	            break;

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
	    const _startState = 16;
	    this.enterRecursionRule(localctx, 16, K2Asm6502Parser.RULE_expr, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 209;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new UnaryMinusContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 170;
	            this.match(K2Asm6502Parser.MINUS);
	            this.state = 171;
	            this.expr(16);
	            break;

	        case 2:
	            localctx = new PrefixOpContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 172;
	            _la = this._input.LA(1);
	            if(!(_la===K2Asm6502Parser.LEFT || _la===K2Asm6502Parser.RIGHT)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 173;
	            this.expr(12);
	            break;

	        case 3:
	            localctx = new StringContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 174;
	            this.match(K2Asm6502Parser.STRING);
	            break;

	        case 4:
	            localctx = new YamlContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 175;
	            this.match(K2Asm6502Parser.YAML_OPEN);
	            this.state = 176;
	            this.match(K2Asm6502Parser.YAML_BODY);
	            break;

	        case 5:
	            localctx = new SvgContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 177;
	            this.match(K2Asm6502Parser.SVG_OPEN);
	            this.state = 178;
	            this.match(K2Asm6502Parser.SVG_BODY);
	            break;

	        case 6:
	            localctx = new PbmContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 179;
	            this.match(K2Asm6502Parser.PBM_OPEN);
	            this.state = 180;
	            this.match(K2Asm6502Parser.PBM_BODY);
	            break;

	        case 7:
	            localctx = new EpsContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 181;
	            this.match(K2Asm6502Parser.EPS_OPEN);
	            this.state = 182;
	            this.match(K2Asm6502Parser.EPS_BODY);
	            break;

	        case 8:
	            localctx = new NumberContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 189;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case K2Asm6502Parser.DEC:
	                this.state = 183;
	                this.dec();
	                break;
	            case K2Asm6502Parser.BIN:
	                this.state = 184;
	                this.bin();
	                break;
	            case K2Asm6502Parser.HEX:
	                this.state = 185;
	                this.hex();
	                break;
	            case K2Asm6502Parser.TIME:
	            case K2Asm6502Parser.TIMEFRAMES:
	                this.state = 186;
	                this.timef();
	                break;
	            case K2Asm6502Parser.OPEN_SQUARE:
	                this.state = 187;
	                this.array();
	                break;
	            case K2Asm6502Parser.OPEN_CURLY:
	                this.state = 188;
	                this.map();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;

	        case 9:
	            localctx = new DotContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 191;
	            this.match(K2Asm6502Parser.ID);
	            this.state = 194; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 192;
	            		this.match(K2Asm6502Parser.DOT);
	            		this.state = 193;
	            		this.match(K2Asm6502Parser.ID);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 196; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,20, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;

	        case 10:
	            localctx = new ScriptExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 198;
	            this.match(K2Asm6502Parser.ID);
	            this.state = 199;
	            this.match(K2Asm6502Parser.OPEN_PARENS);
	            this.state = 201;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << K2Asm6502Parser.OPEN_CURLY) | (1 << K2Asm6502Parser.OPEN_PARENS) | (1 << K2Asm6502Parser.OPEN_SQUARE) | (1 << K2Asm6502Parser.STAR) | (1 << K2Asm6502Parser.MINUS) | (1 << K2Asm6502Parser.PLUS))) !== 0) || ((((_la - 40)) & ~0x1f) == 0 && ((1 << (_la - 40)) & ((1 << (K2Asm6502Parser.PBM_OPEN - 40)) | (1 << (K2Asm6502Parser.SVG_OPEN - 40)) | (1 << (K2Asm6502Parser.YAML_OPEN - 40)) | (1 << (K2Asm6502Parser.EPS_OPEN - 40)) | (1 << (K2Asm6502Parser.ID - 40)) | (1 << (K2Asm6502Parser.DEC - 40)) | (1 << (K2Asm6502Parser.HEX - 40)) | (1 << (K2Asm6502Parser.BIN - 40)) | (1 << (K2Asm6502Parser.STRING - 40)) | (1 << (K2Asm6502Parser.LEFT - 40)) | (1 << (K2Asm6502Parser.RIGHT - 40)) | (1 << (K2Asm6502Parser.TIME - 40)) | (1 << (K2Asm6502Parser.TIMEFRAMES - 40)))) !== 0)) {
	                this.state = 200;
	                this.list();
	            }

	            this.state = 203;
	            this.match(K2Asm6502Parser.CLOSE_PARENS);
	            break;

	        case 11:
	            localctx = new IdentifierContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 204;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << K2Asm6502Parser.STAR) | (1 << K2Asm6502Parser.MINUS) | (1 << K2Asm6502Parser.PLUS))) !== 0) || _la===K2Asm6502Parser.ID)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;

	        case 12:
	            localctx = new ParensContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 205;
	            this.match(K2Asm6502Parser.OPEN_PARENS);
	            this.state = 206;
	            this.expr(0);
	            this.state = 207;
	            this.match(K2Asm6502Parser.CLOSE_PARENS);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 230;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,25,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 228;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulDivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, K2Asm6502Parser.RULE_expr);
	                    this.state = 211;
	                    if (!( this.precpred(this._ctx, 15))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
	                    }
	                    this.state = 212;
	                    _la = this._input.LA(1);
	                    if(!(_la===K2Asm6502Parser.STAR || _la===K2Asm6502Parser.DIVIDE)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 213;
	                    this.expr(16);
	                    break;

	                case 2:
	                    localctx = new PlusMinusContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, K2Asm6502Parser.RULE_expr);
	                    this.state = 214;
	                    if (!( this.precpred(this._ctx, 14))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
	                    }
	                    this.state = 215;
	                    _la = this._input.LA(1);
	                    if(!(_la===K2Asm6502Parser.MINUS || _la===K2Asm6502Parser.PLUS)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 216;
	                    this.expr(15);
	                    break;

	                case 3:
	                    localctx = new LogicalContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, K2Asm6502Parser.RULE_expr);
	                    this.state = 217;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 218;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << K2Asm6502Parser.AND) | (1 << K2Asm6502Parser.OR) | (1 << K2Asm6502Parser.EOR))) !== 0) || ((((_la - 55)) & ~0x1f) == 0 && ((1 << (_la - 55)) & ((1 << (K2Asm6502Parser.LEFT - 55)) | (1 << (K2Asm6502Parser.RIGHT - 55)) | (1 << (K2Asm6502Parser.SHL - 55)) | (1 << (K2Asm6502Parser.SHR - 55)))) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 219;
	                    this.expr(14);
	                    break;

	                case 4:
	                    localctx = new ScriptDotContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, K2Asm6502Parser.RULE_expr);
	                    this.state = 220;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 221;
	                    this.match(K2Asm6502Parser.DOT);
	                    this.state = 222;
	                    this.match(K2Asm6502Parser.ID);
	                    this.state = 223;
	                    this.match(K2Asm6502Parser.OPEN_PARENS);
	                    this.state = 225;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << K2Asm6502Parser.OPEN_CURLY) | (1 << K2Asm6502Parser.OPEN_PARENS) | (1 << K2Asm6502Parser.OPEN_SQUARE) | (1 << K2Asm6502Parser.STAR) | (1 << K2Asm6502Parser.MINUS) | (1 << K2Asm6502Parser.PLUS))) !== 0) || ((((_la - 40)) & ~0x1f) == 0 && ((1 << (_la - 40)) & ((1 << (K2Asm6502Parser.PBM_OPEN - 40)) | (1 << (K2Asm6502Parser.SVG_OPEN - 40)) | (1 << (K2Asm6502Parser.YAML_OPEN - 40)) | (1 << (K2Asm6502Parser.EPS_OPEN - 40)) | (1 << (K2Asm6502Parser.ID - 40)) | (1 << (K2Asm6502Parser.DEC - 40)) | (1 << (K2Asm6502Parser.HEX - 40)) | (1 << (K2Asm6502Parser.BIN - 40)) | (1 << (K2Asm6502Parser.STRING - 40)) | (1 << (K2Asm6502Parser.LEFT - 40)) | (1 << (K2Asm6502Parser.RIGHT - 40)) | (1 << (K2Asm6502Parser.TIME - 40)) | (1 << (K2Asm6502Parser.TIMEFRAMES - 40)))) !== 0)) {
	                        this.state = 224;
	                        this.list();
	                    }

	                    this.state = 227;
	                    this.match(K2Asm6502Parser.CLOSE_PARENS);
	                    break;

	                } 
	            }
	            this.state = 232;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,25,this._ctx);
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



	pseudo() {
	    let localctx = new PseudoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, K2Asm6502Parser.RULE_pseudo);
	    var _la = 0; // Token type
	    try {
	        this.state = 280;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case K2Asm6502Parser.ORG:
	            localctx = new OrgContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 233;
	            this.match(K2Asm6502Parser.ORG);
	            this.state = 234;
	            this.expr(0);
	            this.state = 237;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===K2Asm6502Parser.COMMA) {
	                this.state = 235;
	                this.match(K2Asm6502Parser.COMMA);
	                this.state = 236;
	                this.expr(0);
	            }

	            break;
	        case K2Asm6502Parser.BYTE:
	            localctx = new ByteContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 239;
	            this.match(K2Asm6502Parser.BYTE);
	            this.state = 240;
	            this.list();
	            break;
	        case K2Asm6502Parser.WORD:
	            localctx = new WordContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 241;
	            this.match(K2Asm6502Parser.WORD);
	            this.state = 242;
	            this.list();
	            break;
	        case K2Asm6502Parser.ALIGN:
	            localctx = new AlignContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 243;
	            this.match(K2Asm6502Parser.ALIGN);
	            this.state = 244;
	            this.expr(0);
	            this.state = 247;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===K2Asm6502Parser.COMMA) {
	                this.state = 245;
	                this.match(K2Asm6502Parser.COMMA);
	                this.state = 246;
	                this.expr(0);
	            }

	            break;
	        case K2Asm6502Parser.BUF:
	            localctx = new BufContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 249;
	            this.match(K2Asm6502Parser.BUF);
	            this.state = 250;
	            this.expr(0);
	            this.state = 253;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===K2Asm6502Parser.COMMA) {
	                this.state = 251;
	                this.match(K2Asm6502Parser.COMMA);
	                this.state = 252;
	                this.expr(0);
	            }

	            break;
	        case K2Asm6502Parser.ENC:
	            localctx = new EncContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 255;
	            this.match(K2Asm6502Parser.ENC);
	            this.state = 256;
	            this.list();
	            break;
	        case K2Asm6502Parser.ENCODING:
	            localctx = new EncodingContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 257;
	            this.match(K2Asm6502Parser.ENCODING);
	            this.state = 258;
	            this.match(K2Asm6502Parser.STRING);
	            break;
	        case K2Asm6502Parser.GLOBAL:
	        case K2Asm6502Parser.LOCAL:
	        case K2Asm6502Parser.EXPORT:
	        case K2Asm6502Parser.ENUM:
	            localctx = new EnumContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 260;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << K2Asm6502Parser.GLOBAL) | (1 << K2Asm6502Parser.LOCAL) | (1 << K2Asm6502Parser.EXPORT))) !== 0)) {
	                this.state = 259;
	                this.modifier();
	            }

	            this.state = 262;
	            this.match(K2Asm6502Parser.ENUM);
	            this.state = 263;
	            this.idlist();
	            break;
	        case K2Asm6502Parser.BLOCK_OPEN:
	            localctx = new EmitblockContext(this, localctx);
	            this.enterOuterAlt(localctx, 9);
	            this.state = 264;
	            this.match(K2Asm6502Parser.BLOCK_OPEN);
	            this.state = 265;
	            this.match(K2Asm6502Parser.BLOCK_BODY);
	            break;
	        case K2Asm6502Parser.SHELL_OPEN:
	            localctx = new ShellblockContext(this, localctx);
	            this.enterOuterAlt(localctx, 10);
	            this.state = 266;
	            this.match(K2Asm6502Parser.SHELL_OPEN);
	            this.state = 267;
	            this.match(K2Asm6502Parser.SHELL_BODY);
	            break;
	        case K2Asm6502Parser.REQUIRE:
	            localctx = new RequireContext(this, localctx);
	            this.enterOuterAlt(localctx, 11);
	            this.state = 268;
	            this.match(K2Asm6502Parser.REQUIRE);
	            this.state = 269;
	            this.match(K2Asm6502Parser.STRING);
	            break;
	        case K2Asm6502Parser.INCBIN:
	            localctx = new IncbinContext(this, localctx);
	            this.enterOuterAlt(localctx, 12);
	            this.state = 270;
	            this.match(K2Asm6502Parser.INCBIN);
	            this.state = 271;
	            this.match(K2Asm6502Parser.STRING);
	            this.state = 274;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	            if(la_===1) {
	                this.state = 272;
	                this.match(K2Asm6502Parser.COMMA);
	                this.state = 273;
	                this.expr(0);

	            }
	            this.state = 278;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===K2Asm6502Parser.COMMA) {
	                this.state = 276;
	                this.match(K2Asm6502Parser.COMMA);
	                this.state = 277;
	                this.expr(0);
	            }

	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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



	opcode() {
	    let localctx = new OpcodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, K2Asm6502Parser.RULE_opcode);
	    var _la = 0; // Token type
	    try {
	        this.state = 319;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new RelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 282;
	            this.match(K2Asm6502Parser.OPC_REL);
	            this.state = 283;
	            this.expr(0);
	            break;

	        case 2:
	            localctx = new ImmContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 284;
	            _la = this._input.LA(1);
	            if(!(_la===K2Asm6502Parser.OPC_1 || _la===K2Asm6502Parser.OPC_2)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 285;
	            this.match(K2Asm6502Parser.HASH);
	            this.state = 286;
	            this.expr(0);
	            break;

	        case 3:
	            localctx = new AbsOrZpContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 287;
	            _la = this._input.LA(1);
	            if(!(_la===K2Asm6502Parser.OPC_1 || _la===K2Asm6502Parser.OPC_2)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 288;
	            this.expr(0);
	            break;

	        case 4:
	            localctx = new IndXContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 289;
	            this.match(K2Asm6502Parser.OPC_1);
	            this.state = 290;
	            this.match(K2Asm6502Parser.OPEN_PARENS);
	            this.state = 291;
	            this.expr(0);
	            this.state = 292;
	            this.match(K2Asm6502Parser.COMMA);
	            this.state = 293;
	            this.match(K2Asm6502Parser.X);
	            this.state = 294;
	            this.match(K2Asm6502Parser.CLOSE_PARENS);
	            break;

	        case 5:
	            localctx = new IndYContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 296;
	            this.match(K2Asm6502Parser.OPC_1);
	            this.state = 297;
	            this.match(K2Asm6502Parser.OPEN_PARENS);
	            this.state = 298;
	            this.expr(0);
	            this.state = 299;
	            this.match(K2Asm6502Parser.CLOSE_PARENS);
	            this.state = 300;
	            this.match(K2Asm6502Parser.COMMA);
	            this.state = 301;
	            this.match(K2Asm6502Parser.Y);
	            break;

	        case 6:
	            localctx = new IndexedContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 303;
	            _la = this._input.LA(1);
	            if(!(_la===K2Asm6502Parser.OPC_1 || _la===K2Asm6502Parser.OPC_2)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 304;
	            this.expr(0);
	            this.state = 309;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 305;
	                this.match(K2Asm6502Parser.COMMA);
	                this.state = 306;
	                this.match(K2Asm6502Parser.X);
	                break;

	            case 2:
	                this.state = 307;
	                this.match(K2Asm6502Parser.COMMA);
	                this.state = 308;
	                this.match(K2Asm6502Parser.Y);
	                break;

	            }
	            break;

	        case 7:
	            localctx = new JmpIndContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 311;
	            this.match(K2Asm6502Parser.OPC_JMP);
	            this.state = 312;
	            this.match(K2Asm6502Parser.OPEN_PARENS);
	            this.state = 313;
	            this.expr(0);
	            this.state = 314;
	            this.match(K2Asm6502Parser.CLOSE_PARENS);
	            break;

	        case 8:
	            localctx = new JmpContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 316;
	            this.match(K2Asm6502Parser.OPC_JMP);
	            this.state = 317;
	            this.expr(0);
	            break;

	        case 9:
	            localctx = new ImpliedContext(this, localctx);
	            this.enterOuterAlt(localctx, 9);
	            this.state = 318;
	            _la = this._input.LA(1);
	            if(!(_la===K2Asm6502Parser.OPC_0 || _la===K2Asm6502Parser.OPC_2)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;

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



	timef() {
	    let localctx = new TimefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, K2Asm6502Parser.RULE_timef);
	    try {
	        this.state = 323;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case K2Asm6502Parser.TIMEFRAMES:
	            localctx = new TimeFramesContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 321;
	            this.match(K2Asm6502Parser.TIMEFRAMES);
	            break;
	        case K2Asm6502Parser.TIME:
	            localctx = new TimeContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 322;
	            this.match(K2Asm6502Parser.TIME);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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



	enumItem() {
	    let localctx = new EnumItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, K2Asm6502Parser.RULE_enumItem);
	    try {
	        this.state = 329;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new SimpleEnumItemContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 325;
	            this.match(K2Asm6502Parser.ID);
	            break;

	        case 2:
	            localctx = new AssignEnumItemContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 326;
	            this.match(K2Asm6502Parser.ID);
	            this.state = 327;
	            this.match(K2Asm6502Parser.EQUAL);
	            this.state = 328;
	            this.expr(0);
	            break;

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



	idlist() {
	    let localctx = new IdlistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, K2Asm6502Parser.RULE_idlist);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 331;
	        this.enumItem();
	        this.state = 336;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===K2Asm6502Parser.COMMA) {
	            this.state = 332;
	            this.match(K2Asm6502Parser.COMMA);
	            this.state = 333;
	            this.enumItem();
	            this.state = 338;
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



	list() {
	    let localctx = new ListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, K2Asm6502Parser.RULE_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 339;
	        this.expr(0);
	        this.state = 344;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===K2Asm6502Parser.COMMA) {
	            this.state = 340;
	            this.match(K2Asm6502Parser.COMMA);
	            this.state = 341;
	            this.expr(0);
	            this.state = 346;
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



	array() {
	    let localctx = new ArrayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, K2Asm6502Parser.RULE_array);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 347;
	        this.match(K2Asm6502Parser.OPEN_SQUARE);
	        this.state = 348;
	        this.list();
	        this.state = 349;
	        this.match(K2Asm6502Parser.CLOSE_SQUARE);
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



	map() {
	    let localctx = new MapContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, K2Asm6502Parser.RULE_map);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 351;
	        this.match(K2Asm6502Parser.OPEN_CURLY);
	        this.state = 352;
	        this.pair();
	        this.state = 357;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,39,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 353;
	                this.match(K2Asm6502Parser.COMMA);
	                this.state = 354;
	                this.pair(); 
	            }
	            this.state = 359;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,39,this._ctx);
	        }

	        this.state = 361;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===K2Asm6502Parser.COMMA) {
	            this.state = 360;
	            this.match(K2Asm6502Parser.COMMA);
	        }

	        this.state = 363;
	        this.match(K2Asm6502Parser.CLOSE_CURLY);
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



	pair() {
	    let localctx = new PairContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, K2Asm6502Parser.RULE_pair);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 365;
	        this.key();
	        this.state = 366;
	        this.match(K2Asm6502Parser.COLON);
	        this.state = 367;
	        this.expr(0);
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



	key() {
	    let localctx = new KeyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, K2Asm6502Parser.RULE_key);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 369;
	        _la = this._input.LA(1);
	        if(!(_la===K2Asm6502Parser.ID || _la===K2Asm6502Parser.STRING)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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



	dec() {
	    let localctx = new DecContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, K2Asm6502Parser.RULE_dec);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 371;
	        this.match(K2Asm6502Parser.DEC);
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



	bin() {
	    let localctx = new BinContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, K2Asm6502Parser.RULE_bin);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 373;
	        this.match(K2Asm6502Parser.BIN);
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



	hex() {
	    let localctx = new HexContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, K2Asm6502Parser.RULE_hex);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 375;
	        this.match(K2Asm6502Parser.HEX);
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


}

K2Asm6502Parser.EOF = antlr4.Token.EOF;
K2Asm6502Parser.WS = 1;
K2Asm6502Parser.DOT = 2;
K2Asm6502Parser.COLON = 3;
K2Asm6502Parser.EQUAL = 4;
K2Asm6502Parser.OPEN_CURLY = 5;
K2Asm6502Parser.CLOSE_CURLY = 6;
K2Asm6502Parser.OPEN_PARENS = 7;
K2Asm6502Parser.CLOSE_PARENS = 8;
K2Asm6502Parser.OPEN_SQUARE = 9;
K2Asm6502Parser.CLOSE_SQUARE = 10;
K2Asm6502Parser.UPTO = 11;
K2Asm6502Parser.SCOPE = 12;
K2Asm6502Parser.GLOBAL = 13;
K2Asm6502Parser.LOCAL = 14;
K2Asm6502Parser.EXPORT = 15;
K2Asm6502Parser.STAR = 16;
K2Asm6502Parser.DIVIDE = 17;
K2Asm6502Parser.MINUS = 18;
K2Asm6502Parser.PLUS = 19;
K2Asm6502Parser.AND = 20;
K2Asm6502Parser.OR = 21;
K2Asm6502Parser.EOR = 22;
K2Asm6502Parser.ATSIGN = 23;
K2Asm6502Parser.COMMA = 24;
K2Asm6502Parser.HASH = 25;
K2Asm6502Parser.X = 26;
K2Asm6502Parser.Y = 27;
K2Asm6502Parser.ORG = 28;
K2Asm6502Parser.BYTE = 29;
K2Asm6502Parser.WORD = 30;
K2Asm6502Parser.ALIGN = 31;
K2Asm6502Parser.BUF = 32;
K2Asm6502Parser.ENC = 33;
K2Asm6502Parser.ENCODING = 34;
K2Asm6502Parser.ENUM = 35;
K2Asm6502Parser.REQUIRE = 36;
K2Asm6502Parser.INCBIN = 37;
K2Asm6502Parser.BLOCK_OPEN = 38;
K2Asm6502Parser.SHELL_OPEN = 39;
K2Asm6502Parser.PBM_OPEN = 40;
K2Asm6502Parser.SVG_OPEN = 41;
K2Asm6502Parser.YAML_OPEN = 42;
K2Asm6502Parser.EPS_OPEN = 43;
K2Asm6502Parser.COMMENT_OPEN = 44;
K2Asm6502Parser.OPC_REL = 45;
K2Asm6502Parser.OPC_1 = 46;
K2Asm6502Parser.OPC_JMP = 47;
K2Asm6502Parser.OPC_0 = 48;
K2Asm6502Parser.OPC_2 = 49;
K2Asm6502Parser.ID = 50;
K2Asm6502Parser.DEC = 51;
K2Asm6502Parser.HEX = 52;
K2Asm6502Parser.BIN = 53;
K2Asm6502Parser.STRING = 54;
K2Asm6502Parser.LEFT = 55;
K2Asm6502Parser.RIGHT = 56;
K2Asm6502Parser.SHL = 57;
K2Asm6502Parser.SHR = 58;
K2Asm6502Parser.TIME = 59;
K2Asm6502Parser.TIMEFRAMES = 60;
K2Asm6502Parser.COMMENT_BODY = 61;
K2Asm6502Parser.BLOCK_BODY = 62;
K2Asm6502Parser.SVG_BODY = 63;
K2Asm6502Parser.YAML_BODY = 64;
K2Asm6502Parser.EPS_BODY = 65;
K2Asm6502Parser.SHELL_BODY = 66;
K2Asm6502Parser.PBM_BODY = 67;

K2Asm6502Parser.RULE_input = 0;
K2Asm6502Parser.RULE_line = 1;
K2Asm6502Parser.RULE_comment = 2;
K2Asm6502Parser.RULE_scope = 3;
K2Asm6502Parser.RULE_label = 4;
K2Asm6502Parser.RULE_assign = 5;
K2Asm6502Parser.RULE_modifier = 6;
K2Asm6502Parser.RULE_annotation = 7;
K2Asm6502Parser.RULE_expr = 8;
K2Asm6502Parser.RULE_pseudo = 9;
K2Asm6502Parser.RULE_opcode = 10;
K2Asm6502Parser.RULE_timef = 11;
K2Asm6502Parser.RULE_enumItem = 12;
K2Asm6502Parser.RULE_idlist = 13;
K2Asm6502Parser.RULE_list = 14;
K2Asm6502Parser.RULE_array = 15;
K2Asm6502Parser.RULE_map = 16;
K2Asm6502Parser.RULE_pair = 17;
K2Asm6502Parser.RULE_key = 18;
K2Asm6502Parser.RULE_dec = 19;
K2Asm6502Parser.RULE_bin = 20;
K2Asm6502Parser.RULE_hex = 21;

class InputContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = K2Asm6502Parser.RULE_input;
    }

	EOF() {
	    return this.getToken(K2Asm6502Parser.EOF, 0);
	};

	line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineContext);
	    } else {
	        return this.getTypedRuleContext(LineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterInput(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitInput(this);
		}
	}


}



class LineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = K2Asm6502Parser.RULE_line;
    }

	scope() {
	    return this.getTypedRuleContext(ScopeContext,0);
	};

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
	};

	pseudo() {
	    return this.getTypedRuleContext(PseudoContext,0);
	};

	opcode() {
	    return this.getTypedRuleContext(OpcodeContext,0);
	};

	comment = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CommentContext);
	    } else {
	        return this.getTypedRuleContext(CommentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitLine(this);
		}
	}


}



class CommentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = K2Asm6502Parser.RULE_comment;
    }

	COMMENT_OPEN() {
	    return this.getToken(K2Asm6502Parser.COMMENT_OPEN, 0);
	};

	COMMENT_BODY() {
	    return this.getToken(K2Asm6502Parser.COMMENT_BODY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterComment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitComment(this);
		}
	}


}



class ScopeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = K2Asm6502Parser.RULE_scope;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class UnnamedScopeContext extends ScopeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	OPEN_CURLY() {
	    return this.getToken(K2Asm6502Parser.OPEN_CURLY, 0);
	};

	CLOSE_CURLY() {
	    return this.getToken(K2Asm6502Parser.CLOSE_CURLY, 0);
	};

	annotation() {
	    return this.getTypedRuleContext(AnnotationContext,0);
	};

	line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineContext);
	    } else {
	        return this.getTypedRuleContext(LineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterUnnamedScope(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitUnnamedScope(this);
		}
	}


}

K2Asm6502Parser.UnnamedScopeContext = UnnamedScopeContext;

class NamedScopeContext extends ScopeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	SCOPE() {
	    return this.getToken(K2Asm6502Parser.SCOPE, 0);
	};

	ID() {
	    return this.getToken(K2Asm6502Parser.ID, 0);
	};

	OPEN_CURLY() {
	    return this.getToken(K2Asm6502Parser.OPEN_CURLY, 0);
	};

	CLOSE_CURLY() {
	    return this.getToken(K2Asm6502Parser.CLOSE_CURLY, 0);
	};

	annotation() {
	    return this.getTypedRuleContext(AnnotationContext,0);
	};

	line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineContext);
	    } else {
	        return this.getTypedRuleContext(LineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterNamedScope(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitNamedScope(this);
		}
	}


}

K2Asm6502Parser.NamedScopeContext = NamedScopeContext;

class LabelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = K2Asm6502Parser.RULE_label;
    }

	ID() {
	    return this.getToken(K2Asm6502Parser.ID, 0);
	};

	COLON() {
	    return this.getToken(K2Asm6502Parser.COLON, 0);
	};

	modifier() {
	    return this.getTypedRuleContext(ModifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterLabel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitLabel(this);
		}
	}


}



class AssignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = K2Asm6502Parser.RULE_assign;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class UptoAssignContext extends AssignContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(K2Asm6502Parser.ID);
	    } else {
	        return this.getToken(K2Asm6502Parser.ID, i);
	    }
	};


	EQUAL() {
	    return this.getToken(K2Asm6502Parser.EQUAL, 0);
	};

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

	UPTO() {
	    return this.getToken(K2Asm6502Parser.UPTO, 0);
	};

	modifier() {
	    return this.getTypedRuleContext(ModifierContext,0);
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(K2Asm6502Parser.DOT);
	    } else {
	        return this.getToken(K2Asm6502Parser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterUptoAssign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitUptoAssign(this);
		}
	}


}

K2Asm6502Parser.UptoAssignContext = UptoAssignContext;

class SimpleAssignContext extends AssignContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(K2Asm6502Parser.ID);
	    } else {
	        return this.getToken(K2Asm6502Parser.ID, i);
	    }
	};


	EQUAL() {
	    return this.getToken(K2Asm6502Parser.EQUAL, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	modifier() {
	    return this.getTypedRuleContext(ModifierContext,0);
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(K2Asm6502Parser.DOT);
	    } else {
	        return this.getToken(K2Asm6502Parser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterSimpleAssign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitSimpleAssign(this);
		}
	}


}

K2Asm6502Parser.SimpleAssignContext = SimpleAssignContext;

class SizeAssignContext extends AssignContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(K2Asm6502Parser.ID);
	    } else {
	        return this.getToken(K2Asm6502Parser.ID, i);
	    }
	};


	EQUAL() {
	    return this.getToken(K2Asm6502Parser.EQUAL, 0);
	};

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

	OPEN_SQUARE() {
	    return this.getToken(K2Asm6502Parser.OPEN_SQUARE, 0);
	};

	CLOSE_SQUARE() {
	    return this.getToken(K2Asm6502Parser.CLOSE_SQUARE, 0);
	};

	modifier() {
	    return this.getTypedRuleContext(ModifierContext,0);
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(K2Asm6502Parser.DOT);
	    } else {
	        return this.getToken(K2Asm6502Parser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterSizeAssign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitSizeAssign(this);
		}
	}


}

K2Asm6502Parser.SizeAssignContext = SizeAssignContext;

class ModifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = K2Asm6502Parser.RULE_modifier;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class GlobalModifierContext extends ModifierContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	GLOBAL() {
	    return this.getToken(K2Asm6502Parser.GLOBAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterGlobalModifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitGlobalModifier(this);
		}
	}


}

K2Asm6502Parser.GlobalModifierContext = GlobalModifierContext;

class LocalModifierContext extends ModifierContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LOCAL() {
	    return this.getToken(K2Asm6502Parser.LOCAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterLocalModifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitLocalModifier(this);
		}
	}


}

K2Asm6502Parser.LocalModifierContext = LocalModifierContext;

class ExportModifierContext extends ModifierContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	EXPORT() {
	    return this.getToken(K2Asm6502Parser.EXPORT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterExportModifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitExportModifier(this);
		}
	}


}

K2Asm6502Parser.ExportModifierContext = ExportModifierContext;

class AnnotationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = K2Asm6502Parser.RULE_annotation;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ArgAnnotationContext extends AnnotationContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ATSIGN() {
	    return this.getToken(K2Asm6502Parser.ATSIGN, 0);
	};

	ID() {
	    return this.getToken(K2Asm6502Parser.ID, 0);
	};

	OPEN_PARENS() {
	    return this.getToken(K2Asm6502Parser.OPEN_PARENS, 0);
	};

	list() {
	    return this.getTypedRuleContext(ListContext,0);
	};

	CLOSE_PARENS() {
	    return this.getToken(K2Asm6502Parser.CLOSE_PARENS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterArgAnnotation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitArgAnnotation(this);
		}
	}


}

K2Asm6502Parser.ArgAnnotationContext = ArgAnnotationContext;

class SimpleAnnotationContext extends AnnotationContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ATSIGN() {
	    return this.getToken(K2Asm6502Parser.ATSIGN, 0);
	};

	ID() {
	    return this.getToken(K2Asm6502Parser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterSimpleAnnotation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitSimpleAnnotation(this);
		}
	}


}

K2Asm6502Parser.SimpleAnnotationContext = SimpleAnnotationContext;

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
        this.ruleIndex = K2Asm6502Parser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class SvgContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	SVG_OPEN() {
	    return this.getToken(K2Asm6502Parser.SVG_OPEN, 0);
	};

	SVG_BODY() {
	    return this.getToken(K2Asm6502Parser.SVG_BODY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterSvg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitSvg(this);
		}
	}


}

K2Asm6502Parser.SvgContext = SvgContext;

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

	STAR() {
	    return this.getToken(K2Asm6502Parser.STAR, 0);
	};

	DIVIDE() {
	    return this.getToken(K2Asm6502Parser.DIVIDE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterMulDiv(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitMulDiv(this);
		}
	}


}

K2Asm6502Parser.MulDivContext = MulDivContext;

class ParensContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	OPEN_PARENS() {
	    return this.getToken(K2Asm6502Parser.OPEN_PARENS, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	CLOSE_PARENS() {
	    return this.getToken(K2Asm6502Parser.CLOSE_PARENS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterParens(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitParens(this);
		}
	}


}

K2Asm6502Parser.ParensContext = ParensContext;

class DotContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(K2Asm6502Parser.ID);
	    } else {
	        return this.getToken(K2Asm6502Parser.ID, i);
	    }
	};


	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(K2Asm6502Parser.DOT);
	    } else {
	        return this.getToken(K2Asm6502Parser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterDot(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitDot(this);
		}
	}


}

K2Asm6502Parser.DotContext = DotContext;

class EpsContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	EPS_OPEN() {
	    return this.getToken(K2Asm6502Parser.EPS_OPEN, 0);
	};

	EPS_BODY() {
	    return this.getToken(K2Asm6502Parser.EPS_BODY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterEps(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitEps(this);
		}
	}


}

K2Asm6502Parser.EpsContext = EpsContext;

class LogicalContext extends ExprContext {

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

	AND() {
	    return this.getToken(K2Asm6502Parser.AND, 0);
	};

	OR() {
	    return this.getToken(K2Asm6502Parser.OR, 0);
	};

	EOR() {
	    return this.getToken(K2Asm6502Parser.EOR, 0);
	};

	SHL() {
	    return this.getToken(K2Asm6502Parser.SHL, 0);
	};

	SHR() {
	    return this.getToken(K2Asm6502Parser.SHR, 0);
	};

	LEFT() {
	    return this.getToken(K2Asm6502Parser.LEFT, 0);
	};

	RIGHT() {
	    return this.getToken(K2Asm6502Parser.RIGHT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterLogical(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitLogical(this);
		}
	}


}

K2Asm6502Parser.LogicalContext = LogicalContext;

class ScriptDotContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	DOT() {
	    return this.getToken(K2Asm6502Parser.DOT, 0);
	};

	ID() {
	    return this.getToken(K2Asm6502Parser.ID, 0);
	};

	OPEN_PARENS() {
	    return this.getToken(K2Asm6502Parser.OPEN_PARENS, 0);
	};

	CLOSE_PARENS() {
	    return this.getToken(K2Asm6502Parser.CLOSE_PARENS, 0);
	};

	list() {
	    return this.getTypedRuleContext(ListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterScriptDot(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitScriptDot(this);
		}
	}


}

K2Asm6502Parser.ScriptDotContext = ScriptDotContext;

class UnaryMinusContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	MINUS() {
	    return this.getToken(K2Asm6502Parser.MINUS, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterUnaryMinus(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitUnaryMinus(this);
		}
	}


}

K2Asm6502Parser.UnaryMinusContext = UnaryMinusContext;

class StringContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STRING() {
	    return this.getToken(K2Asm6502Parser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitString(this);
		}
	}


}

K2Asm6502Parser.StringContext = StringContext;

class YamlContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	YAML_OPEN() {
	    return this.getToken(K2Asm6502Parser.YAML_OPEN, 0);
	};

	YAML_BODY() {
	    return this.getToken(K2Asm6502Parser.YAML_BODY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterYaml(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitYaml(this);
		}
	}


}

K2Asm6502Parser.YamlContext = YamlContext;

class ScriptExpressionContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(K2Asm6502Parser.ID, 0);
	};

	OPEN_PARENS() {
	    return this.getToken(K2Asm6502Parser.OPEN_PARENS, 0);
	};

	CLOSE_PARENS() {
	    return this.getToken(K2Asm6502Parser.CLOSE_PARENS, 0);
	};

	list() {
	    return this.getTypedRuleContext(ListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterScriptExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitScriptExpression(this);
		}
	}


}

K2Asm6502Parser.ScriptExpressionContext = ScriptExpressionContext;

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

	MINUS() {
	    return this.getToken(K2Asm6502Parser.MINUS, 0);
	};

	PLUS() {
	    return this.getToken(K2Asm6502Parser.PLUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterPlusMinus(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitPlusMinus(this);
		}
	}


}

K2Asm6502Parser.PlusMinusContext = PlusMinusContext;

class IdentifierContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STAR() {
	    return this.getToken(K2Asm6502Parser.STAR, 0);
	};

	PLUS() {
	    return this.getToken(K2Asm6502Parser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(K2Asm6502Parser.MINUS, 0);
	};

	ID() {
	    return this.getToken(K2Asm6502Parser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitIdentifier(this);
		}
	}


}

K2Asm6502Parser.IdentifierContext = IdentifierContext;

class NumberContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	dec() {
	    return this.getTypedRuleContext(DecContext,0);
	};

	bin() {
	    return this.getTypedRuleContext(BinContext,0);
	};

	hex() {
	    return this.getTypedRuleContext(HexContext,0);
	};

	timef() {
	    return this.getTypedRuleContext(TimefContext,0);
	};

	array() {
	    return this.getTypedRuleContext(ArrayContext,0);
	};

	map() {
	    return this.getTypedRuleContext(MapContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitNumber(this);
		}
	}


}

K2Asm6502Parser.NumberContext = NumberContext;

class PbmContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	PBM_OPEN() {
	    return this.getToken(K2Asm6502Parser.PBM_OPEN, 0);
	};

	PBM_BODY() {
	    return this.getToken(K2Asm6502Parser.PBM_BODY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterPbm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitPbm(this);
		}
	}


}

K2Asm6502Parser.PbmContext = PbmContext;

class PrefixOpContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	LEFT() {
	    return this.getToken(K2Asm6502Parser.LEFT, 0);
	};

	RIGHT() {
	    return this.getToken(K2Asm6502Parser.RIGHT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterPrefixOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitPrefixOp(this);
		}
	}


}

K2Asm6502Parser.PrefixOpContext = PrefixOpContext;

class PseudoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = K2Asm6502Parser.RULE_pseudo;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class EnumContext extends PseudoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ENUM() {
	    return this.getToken(K2Asm6502Parser.ENUM, 0);
	};

	idlist() {
	    return this.getTypedRuleContext(IdlistContext,0);
	};

	modifier() {
	    return this.getTypedRuleContext(ModifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterEnum(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitEnum(this);
		}
	}


}

K2Asm6502Parser.EnumContext = EnumContext;

class EmitblockContext extends PseudoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	BLOCK_OPEN() {
	    return this.getToken(K2Asm6502Parser.BLOCK_OPEN, 0);
	};

	BLOCK_BODY() {
	    return this.getToken(K2Asm6502Parser.BLOCK_BODY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterEmitblock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitEmitblock(this);
		}
	}


}

K2Asm6502Parser.EmitblockContext = EmitblockContext;

class BufContext extends PseudoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	BUF() {
	    return this.getToken(K2Asm6502Parser.BUF, 0);
	};

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

	COMMA() {
	    return this.getToken(K2Asm6502Parser.COMMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterBuf(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitBuf(this);
		}
	}


}

K2Asm6502Parser.BufContext = BufContext;

class RequireContext extends PseudoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	REQUIRE() {
	    return this.getToken(K2Asm6502Parser.REQUIRE, 0);
	};

	STRING() {
	    return this.getToken(K2Asm6502Parser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterRequire(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitRequire(this);
		}
	}


}

K2Asm6502Parser.RequireContext = RequireContext;

class WordContext extends PseudoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	WORD() {
	    return this.getToken(K2Asm6502Parser.WORD, 0);
	};

	list() {
	    return this.getTypedRuleContext(ListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterWord(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitWord(this);
		}
	}


}

K2Asm6502Parser.WordContext = WordContext;

class AlignContext extends PseudoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ALIGN() {
	    return this.getToken(K2Asm6502Parser.ALIGN, 0);
	};

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

	COMMA() {
	    return this.getToken(K2Asm6502Parser.COMMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterAlign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitAlign(this);
		}
	}


}

K2Asm6502Parser.AlignContext = AlignContext;

class OrgContext extends PseudoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ORG() {
	    return this.getToken(K2Asm6502Parser.ORG, 0);
	};

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

	COMMA() {
	    return this.getToken(K2Asm6502Parser.COMMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterOrg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitOrg(this);
		}
	}


}

K2Asm6502Parser.OrgContext = OrgContext;

class ByteContext extends PseudoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	BYTE() {
	    return this.getToken(K2Asm6502Parser.BYTE, 0);
	};

	list() {
	    return this.getTypedRuleContext(ListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterByte(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitByte(this);
		}
	}


}

K2Asm6502Parser.ByteContext = ByteContext;

class IncbinContext extends PseudoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INCBIN() {
	    return this.getToken(K2Asm6502Parser.INCBIN, 0);
	};

	STRING() {
	    return this.getToken(K2Asm6502Parser.STRING, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(K2Asm6502Parser.COMMA);
	    } else {
	        return this.getToken(K2Asm6502Parser.COMMA, i);
	    }
	};


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
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterIncbin(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitIncbin(this);
		}
	}


}

K2Asm6502Parser.IncbinContext = IncbinContext;

class EncodingContext extends PseudoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ENCODING() {
	    return this.getToken(K2Asm6502Parser.ENCODING, 0);
	};

	STRING() {
	    return this.getToken(K2Asm6502Parser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterEncoding(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitEncoding(this);
		}
	}


}

K2Asm6502Parser.EncodingContext = EncodingContext;

class ShellblockContext extends PseudoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	SHELL_OPEN() {
	    return this.getToken(K2Asm6502Parser.SHELL_OPEN, 0);
	};

	SHELL_BODY() {
	    return this.getToken(K2Asm6502Parser.SHELL_BODY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterShellblock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitShellblock(this);
		}
	}


}

K2Asm6502Parser.ShellblockContext = ShellblockContext;

class EncContext extends PseudoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ENC() {
	    return this.getToken(K2Asm6502Parser.ENC, 0);
	};

	list() {
	    return this.getTypedRuleContext(ListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterEnc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitEnc(this);
		}
	}


}

K2Asm6502Parser.EncContext = EncContext;

class OpcodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = K2Asm6502Parser.RULE_opcode;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AbsOrZpContext extends OpcodeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	OPC_1() {
	    return this.getToken(K2Asm6502Parser.OPC_1, 0);
	};

	OPC_2() {
	    return this.getToken(K2Asm6502Parser.OPC_2, 0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterAbsOrZp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitAbsOrZp(this);
		}
	}


}

K2Asm6502Parser.AbsOrZpContext = AbsOrZpContext;

class RelContext extends OpcodeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	OPC_REL() {
	    return this.getToken(K2Asm6502Parser.OPC_REL, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterRel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitRel(this);
		}
	}


}

K2Asm6502Parser.RelContext = RelContext;

class ImmContext extends OpcodeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	HASH() {
	    return this.getToken(K2Asm6502Parser.HASH, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	OPC_1() {
	    return this.getToken(K2Asm6502Parser.OPC_1, 0);
	};

	OPC_2() {
	    return this.getToken(K2Asm6502Parser.OPC_2, 0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterImm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitImm(this);
		}
	}


}

K2Asm6502Parser.ImmContext = ImmContext;

class IndYContext extends OpcodeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	OPC_1() {
	    return this.getToken(K2Asm6502Parser.OPC_1, 0);
	};

	OPEN_PARENS() {
	    return this.getToken(K2Asm6502Parser.OPEN_PARENS, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	CLOSE_PARENS() {
	    return this.getToken(K2Asm6502Parser.CLOSE_PARENS, 0);
	};

	COMMA() {
	    return this.getToken(K2Asm6502Parser.COMMA, 0);
	};

	Y() {
	    return this.getToken(K2Asm6502Parser.Y, 0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterIndY(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitIndY(this);
		}
	}


}

K2Asm6502Parser.IndYContext = IndYContext;

class JmpIndContext extends OpcodeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	OPC_JMP() {
	    return this.getToken(K2Asm6502Parser.OPC_JMP, 0);
	};

	OPEN_PARENS() {
	    return this.getToken(K2Asm6502Parser.OPEN_PARENS, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	CLOSE_PARENS() {
	    return this.getToken(K2Asm6502Parser.CLOSE_PARENS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterJmpInd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitJmpInd(this);
		}
	}


}

K2Asm6502Parser.JmpIndContext = JmpIndContext;

class IndXContext extends OpcodeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	OPC_1() {
	    return this.getToken(K2Asm6502Parser.OPC_1, 0);
	};

	OPEN_PARENS() {
	    return this.getToken(K2Asm6502Parser.OPEN_PARENS, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	COMMA() {
	    return this.getToken(K2Asm6502Parser.COMMA, 0);
	};

	X() {
	    return this.getToken(K2Asm6502Parser.X, 0);
	};

	CLOSE_PARENS() {
	    return this.getToken(K2Asm6502Parser.CLOSE_PARENS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterIndX(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitIndX(this);
		}
	}


}

K2Asm6502Parser.IndXContext = IndXContext;

class JmpContext extends OpcodeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	OPC_JMP() {
	    return this.getToken(K2Asm6502Parser.OPC_JMP, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterJmp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitJmp(this);
		}
	}


}

K2Asm6502Parser.JmpContext = JmpContext;

class ImpliedContext extends OpcodeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	OPC_0() {
	    return this.getToken(K2Asm6502Parser.OPC_0, 0);
	};

	OPC_2() {
	    return this.getToken(K2Asm6502Parser.OPC_2, 0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterImplied(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitImplied(this);
		}
	}


}

K2Asm6502Parser.ImpliedContext = ImpliedContext;

class IndexedContext extends OpcodeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	OPC_1() {
	    return this.getToken(K2Asm6502Parser.OPC_1, 0);
	};

	OPC_2() {
	    return this.getToken(K2Asm6502Parser.OPC_2, 0);
	};

	COMMA() {
	    return this.getToken(K2Asm6502Parser.COMMA, 0);
	};

	X() {
	    return this.getToken(K2Asm6502Parser.X, 0);
	};

	Y() {
	    return this.getToken(K2Asm6502Parser.Y, 0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterIndexed(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitIndexed(this);
		}
	}


}

K2Asm6502Parser.IndexedContext = IndexedContext;

class TimefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = K2Asm6502Parser.RULE_timef;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class TimeFramesContext extends TimefContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	TIMEFRAMES() {
	    return this.getToken(K2Asm6502Parser.TIMEFRAMES, 0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterTimeFrames(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitTimeFrames(this);
		}
	}


}

K2Asm6502Parser.TimeFramesContext = TimeFramesContext;

class TimeContext extends TimefContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	TIME() {
	    return this.getToken(K2Asm6502Parser.TIME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterTime(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitTime(this);
		}
	}


}

K2Asm6502Parser.TimeContext = TimeContext;

class EnumItemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = K2Asm6502Parser.RULE_enumItem;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AssignEnumItemContext extends EnumItemContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(K2Asm6502Parser.ID, 0);
	};

	EQUAL() {
	    return this.getToken(K2Asm6502Parser.EQUAL, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterAssignEnumItem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitAssignEnumItem(this);
		}
	}


}

K2Asm6502Parser.AssignEnumItemContext = AssignEnumItemContext;

class SimpleEnumItemContext extends EnumItemContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(K2Asm6502Parser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterSimpleEnumItem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitSimpleEnumItem(this);
		}
	}


}

K2Asm6502Parser.SimpleEnumItemContext = SimpleEnumItemContext;

class IdlistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = K2Asm6502Parser.RULE_idlist;
    }

	enumItem = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EnumItemContext);
	    } else {
	        return this.getTypedRuleContext(EnumItemContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(K2Asm6502Parser.COMMA);
	    } else {
	        return this.getToken(K2Asm6502Parser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterIdlist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitIdlist(this);
		}
	}


}



class ListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = K2Asm6502Parser.RULE_list;
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

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(K2Asm6502Parser.COMMA);
	    } else {
	        return this.getToken(K2Asm6502Parser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitList(this);
		}
	}


}



class ArrayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = K2Asm6502Parser.RULE_array;
    }

	OPEN_SQUARE() {
	    return this.getToken(K2Asm6502Parser.OPEN_SQUARE, 0);
	};

	list() {
	    return this.getTypedRuleContext(ListContext,0);
	};

	CLOSE_SQUARE() {
	    return this.getToken(K2Asm6502Parser.CLOSE_SQUARE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterArray(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitArray(this);
		}
	}


}



class MapContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = K2Asm6502Parser.RULE_map;
    }

	OPEN_CURLY() {
	    return this.getToken(K2Asm6502Parser.OPEN_CURLY, 0);
	};

	pair = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PairContext);
	    } else {
	        return this.getTypedRuleContext(PairContext,i);
	    }
	};

	CLOSE_CURLY() {
	    return this.getToken(K2Asm6502Parser.CLOSE_CURLY, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(K2Asm6502Parser.COMMA);
	    } else {
	        return this.getToken(K2Asm6502Parser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterMap(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitMap(this);
		}
	}


}



class PairContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = K2Asm6502Parser.RULE_pair;
    }

	key() {
	    return this.getTypedRuleContext(KeyContext,0);
	};

	COLON() {
	    return this.getToken(K2Asm6502Parser.COLON, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterPair(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitPair(this);
		}
	}


}



class KeyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = K2Asm6502Parser.RULE_key;
    }

	STRING() {
	    return this.getToken(K2Asm6502Parser.STRING, 0);
	};

	ID() {
	    return this.getToken(K2Asm6502Parser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterKey(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitKey(this);
		}
	}


}



class DecContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = K2Asm6502Parser.RULE_dec;
    }

	DEC() {
	    return this.getToken(K2Asm6502Parser.DEC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterDec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitDec(this);
		}
	}


}



class BinContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = K2Asm6502Parser.RULE_bin;
    }

	BIN() {
	    return this.getToken(K2Asm6502Parser.BIN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterBin(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitBin(this);
		}
	}


}



class HexContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = K2Asm6502Parser.RULE_hex;
    }

	HEX() {
	    return this.getToken(K2Asm6502Parser.HEX, 0);
	};

	enterRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.enterHex(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof K2Asm6502ParserListener ) {
	        listener.exitHex(this);
		}
	}


}




K2Asm6502Parser.InputContext = InputContext; 
K2Asm6502Parser.LineContext = LineContext; 
K2Asm6502Parser.CommentContext = CommentContext; 
K2Asm6502Parser.ScopeContext = ScopeContext; 
K2Asm6502Parser.LabelContext = LabelContext; 
K2Asm6502Parser.AssignContext = AssignContext; 
K2Asm6502Parser.ModifierContext = ModifierContext; 
K2Asm6502Parser.AnnotationContext = AnnotationContext; 
K2Asm6502Parser.ExprContext = ExprContext; 
K2Asm6502Parser.PseudoContext = PseudoContext; 
K2Asm6502Parser.OpcodeContext = OpcodeContext; 
K2Asm6502Parser.TimefContext = TimefContext; 
K2Asm6502Parser.EnumItemContext = EnumItemContext; 
K2Asm6502Parser.IdlistContext = IdlistContext; 
K2Asm6502Parser.ListContext = ListContext; 
K2Asm6502Parser.ArrayContext = ArrayContext; 
K2Asm6502Parser.MapContext = MapContext; 
K2Asm6502Parser.PairContext = PairContext; 
K2Asm6502Parser.KeyContext = KeyContext; 
K2Asm6502Parser.DecContext = DecContext; 
K2Asm6502Parser.BinContext = BinContext; 
K2Asm6502Parser.HexContext = HexContext; 
