/* parser generated by jison 0.4.13 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var modelica = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"dummy":3,"$accept":0,"$end":1},
terminals_: {2:"error"},
productions_: [0,[3,0]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
}
},
table: [{1:[2,1],3:1},{1:[3]}],
defaultActions: {},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                this.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};


/* Define Modelica mode for CodeMirror if it has been loaded */
if (typeof CodeMirror !== "undefined") {
  CodeMirror.defineMode("modelica", function () {

    // mapping of tokens to styles
    var TOKEN_STYLE = {
      'COMMENT':          "comment",
      'CONNECT':          "builtin",
      'KEYWORD':          "keyword",
      'UNSIGNED_NUMBER':  "number",
      'STRING':           "string",
      'HTML':             "meta",
      'TAG':              "tag"
    };

    var builtins = [
      "Integer", "String", "abs", "acos", "actualStream", "asin", "atan", "atan2",
      "assert", "cardinality", "ceil", "change", "cos", "cosh", "delay", "der",
      "edge", "exp", "floor", "getInstanceName", "homotopy", "initial", "inStream",
      "integer", "log", "log10", "mod", "pre", "reinit", "rem", "sample",
      "semiLinear", "sign", "sin", "sinh", "smooth", "spatialDistribution", "sqrt",
      "tan", "tanh", "terminal"
    ];

    return {
      // the state covers information spanning multiple lines
      startState: function(/*basecolumn*/) {
        return {
          inComment: false,
          inString: false,
          inHTML: false
        };
      },

      // take a stream for a line, advance by one token and return its style
      token: function (stream, state) {
        var token;
        stream.eatSpace();

        // treat comments as the lexer would eat them and as they may span multiple lines
        if (!state.inString && stream.string.substring(stream.pos).slice(0, 2) === "/*") {
          state.inComment = true;
          stream.pos += 2;
        }
        if (state.inComment) {
          while (stream.skipTo("*")) {
            stream.next();
            if (stream.next() === "/") {
              state.inComment = false;
              return "comment";
            }
          }
        }
        if (state.inComment || stream.string.substring(stream.pos).slice(0, 2) === "//") {
          stream.skipToEnd();
          return "comment";
        }

        // treat strings as they may span multiple lines
        if (!state.inComment && !state.inString && stream.peek() === '"') {
          state.inString = true;
          stream.pos += 1;
          if (stream.string.substring(stream.pos, stream.pos+5).toLowerCase() === "<html") {
            state.inHTML = true;
            return TOKEN_STYLE['HTML'];
          }
          else
            state.inHTML = false;
        }
        if (state.inString) {
          if (state.inHTML && stream.peek() === '<') {
            var close = stream.string.indexOf('>', stream.pos);
            stream.pos = close >= 0? close + 1: stream.pos + 1;
            return TOKEN_STYLE['TAG'];
          }
          outer: while (!stream.eol()) {
            stream.eatWhile(/[^"<\\]/);
            switch (stream.peek()) {
            case '"':
              // terminate string
              stream.pos ++;
              state.inString = false;
              break outer;
            case '<':
              // break for html tag or skip it
              if (state.inHTML) {
                break outer;
              }
              stream.pos ++;
              break;
            default:
              // skip quoted character
              stream.pos += 2;
              break;
            }
          }
          return state.inHTML? TOKEN_STYLE['HTML']: TOKEN_STYLE['STRING'];
        }

        // per default use the lexer to identify the next token
        try {
          parser.lexer.setInput(stream.string.substring(stream.pos));
          parser.lexer.mo_kind = null;
          token = parser.lexer.lex();
          if (token === 'END_IDENT') {
            token = 'END';
            stream.pos += 3;
          }
          else
            stream.pos += parser.lexer.yylloc.last_column;
          if (token === 'IDENT' && builtins.indexOf(parser.lexer.yytext) >= 0)
            return "builtin";
        }
        catch (err) {
          console.log(err.toString());
          stream.skipToEnd();
          return "error " + err;
        }

        return TOKEN_STYLE[token] || TOKEN_STYLE[parser.lexer.mo_kind];
      },

      // declarations for CodeMirror.fold.comment, see comment-fold.js
      blockCommentStart: "/*",
      blockCommentEnd: "*/",
      braceOpen: "(",
      braceClose: ")",
      //lineComment: "//",
      fold: "modelicaBrace", // evaluated by foldCode function

      foldAnnotations: function (cm) {
        var lastLine = cm.lastLine();
        for (var i = 0; i < lastLine; i++) {
          if (cm.getLine(i).indexOf("annotation") >= 0)
            editor.foldCode(i);
        }
      }
    };
  });

  CodeMirror.defineMIME("text/x-modelica", "modelica");

  CodeMirror.registerHelper("fold", "modelicaBrace", function(cm, start) {
    var mode = cm.getModeAt(start);
    var startToken = mode.braceOpen || "{", endToken = mode.braceClose || "}";
    var line = start.line, lineText = cm.getLine(line);
    var startCh, tokenType;

    for (startCh = start.ch;;) {
      startCh = lineText.indexOf(startToken, startCh) + 1;
      if (startCh == 0) return;
      tokenType = cm.getTokenTypeAt(CodeMirror.Pos(line, startCh));
      if (!/^(comment|string)/.test(tokenType)) break;
    }

    var count = 1, lastLine = cm.lastLine(), end, endCh;
    outer: for (var i = line; i <= lastLine; ++i) {
      var text = cm.getLine(i), pos = i == line ? startCh : 0;
      for (;;) {
        var nextOpen = text.indexOf(startToken, pos), nextClose = text.indexOf(endToken, pos);
        if (nextOpen < 0) nextOpen = text.length;
        if (nextClose < 0) nextClose = text.length;
        pos = Math.min(nextOpen, nextClose);
        if (pos == text.length) break;
        if (cm.getTokenTypeAt(CodeMirror.Pos(i, pos + 1)) == tokenType) {
          if (pos == nextOpen) ++count;
          else if (!--count) { end = i; endCh = pos; break outer; }
        }
        ++pos;
      }
    }
    if (end == null || line == end && endCh == startCh) return;
    return {from: CodeMirror.Pos(line, startCh),
            to: CodeMirror.Pos(end, endCh)};
  });
}
/* generated by jison-lex 0.2.1 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input) {
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespaces */
break;
case 1:this.begin('INITIAL');
break;
case 2:/* skip block comments */
break;
case 3:this.begin('COMMENT');
break;
case 4:/* skip comments */
break;
case 5:this.mo_kind = 'KEYWORD';
                         return yy_.yytext.toUpperCase().replace(/\s+/, "_");
break;
case 6:this.mo_kind = 'KEYWORD';
                         return 'END_IDENT';
break;
case 7:this.mo_kind = 'KEYWORD';
                         return yy_.yytext.toUpperCase();
break;
case 8:return 'IDENT';
break;
case 9:return 'STRING';
break;
case 10:return 'UNSIGNED_NUMBER';
break;
case 11:return 'DOT_STAR';
break;
case 12:return 'ASSIGN_OP';
break;
case 13:return 'REL_OP';
break;
case 14:return 'ADD_OP_PARTIAL';
break;
case 15:return 'MUL_OP_PARTIAL';
break;
case 16:return 'EXP_OP';
break;
case 17:return yy_.yytext;
break;
case 18:return 'EOF';
break;
}
},
rules: [/^(?:\s+)/,/^(?:\*\/)/,/^(?:.)/,/^(?:\/\*)/,/^(?:\/\/.*)/,/^(?:((end[\s]+(if|for|when|while))|(initial[\s]+(equation|algorithm))|(operator[\s]+function))\b)/,/^(?:end\s+(([_a-zA-Z])(([0-9])|([_a-zA-Z]))*|('((([_a-zA-Z])|([0-9])|[!#$%&()*+,\-./:;<>=?@[\]\^{}|~ ])|(\\[\'\"\?\\abfnrtv]))+')))/,/^(?:(algorithm|and|annotation|block|break|class|connector|connect|constant|constrainedby|der|discrete|each|else|elseif|elsewhen|encapsulated|end|enumeration|equation|expandable|extends|external|false|final|flow|for|function|if|import|impure|in|initial|inner|input|loop|model|not|operator|or|outer|output|package|parameter|partial|protected|public|pure|record|redeclare|replaceable|return|stream|then|true|type|when|while|within\b)\b)/,/^(?:(([_a-zA-Z])(([0-9])|([_a-zA-Z]))*|('((([_a-zA-Z])|([0-9])|[!#$%&()*+,\-./:;<>=?@[\]\^{}|~ ])|(\\[\'\"\?\\abfnrtv]))+')))/,/^(?:("(([^\"\\])|(\\[\'\"\?\\abfnrtv]))*"))/,/^(?:((([0-9])+)(\.(([0-9])+)?)?([eE][+\-]?(([0-9])+))?))/,/^(?:(\.\*))/,/^(?:(:=))/,/^(?:(==|<>|<=|<|>=|>))/,/^(?:(\.\+|\.-|-))/,/^(?:(\.\/|\/|\*))/,/^(?:(\.\^|\^))/,/^(?:(\.|,|;|:|\(|\)|\[|\]|\{|\}|=|\+))/,/^(?:$)/],
conditions: {"COMMENT":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],"inclusive":true},"INITIAL":{"rules":[0,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = modelica;
exports.Parser = modelica.Parser;
exports.parse = function () { return modelica.parse.apply(modelica, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}