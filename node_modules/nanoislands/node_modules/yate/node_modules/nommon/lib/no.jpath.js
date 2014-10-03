var no = no || require('./no.base.js');

if ( no.de ) {
    require('./no.parser.js');

    module.exports = no;
}

//  ---------------------------------------------------------------------------------------------------------------  //

(function() {

//  ---------------------------------------------------------------------------------------------------------------  //

/**
    @constructor
    @param {Object} data
*/
function JNode(data) {
    this.data = data;
};

//  ---------------------------------------------------------------------------------------------------------------  //

JNode.prototype.empty = new JNodeset();

/**
    @return {boolean}
*/
JNode.prototype.isEmpty = function() {
    return false;
};

/**
    @param {string} name
    @param {JNodeset=} result
    @return {(JNode|JNodeset)}
*/
JNode.prototype.nametest = function(name, result) {
    var data = this.data;
    if (!data) {
        return this.empty;
    }

    if ( Array.isArray(data) ) {
        result || (( result = new JNodeset() ));
        for (var i = 0; i < data.length; i++) {
            ( new JNode( data[i] ) ).nametest(name, result);
        }
        return result;
    }

    var r = data[name];
    if (r === undefined) {
        return this.empty;
    }

    var node = new JNode(r);
    if (result) {
        return result.push(node);
    }

    return node;
};

/**
    @param {JNodeset=} result
    @return {JNodeset}
*/
JNode.prototype.startest = function(result) {
    result || (( result = new JNodeset() ));

    var data = this.data;
    if ( Array.isArray(data) ) {
        for (var i = 0; i < data.length; i++) {
            ( new JNode( data[i] ) ).startest(result);
        }
    } else {
        for (var key in data) {
            this.nametest(key, result)
        }
    }

    return result;
};

/**
    @param {function(JNode, JNode): boolean} filter
    @param {JNode} root
    @return {(JNode|JNodeset)}
*/
//  FIXME: Добавить тут четвертый параметр result?
JNode.prototype.pred = function(filter, root, vars) {
    var data = this.data;

    if ( Array.isArray(data) ) {
        var result = new JNodeset();
        for (var i = 0; i < data.length; i++) {
            var node = new JNode( data[i] );
            if ( filter(node, root, vars) ) {
                result.push(node);
            }
        }
        return result;
    }

    return ( filter(this, root, vars) ) ? this : this.empty;
};

/**
    @param {number} index
    @return {JNodeset}
*/
JNode.prototype.index = function(index, root, vars) {
    var data = this.data;

    if ( Array.isArray(data) ) {
        var r = data[ index(this, root, vars) ];
        return (r !== undefined) ? ( new JNode(r) ).toNodeset() : this.empty;
    }

    return (index === 0) ? this : this.empty;
};

/**
    @return {Array}
*/
JNode.prototype.toArray = function() {
    return [ this.data ];
};

/**
    @return {JNodeset}
*/
JNode.prototype.toNodeset = function() {
    return ( new JNodeset() ).push(this);
};

JNode.prototype.scalar = function() {
    var data = this.data;
    return (typeof data === 'object') ? '' : data;
};

/**
    @return {boolean}
*/
JNode.prototype.boolean = function() {
    var data = this.data;

    if ( Array.isArray(data) ) {
        //  FIXME: Нужно ли отдельно рассматривать случай, когда это массив
        //  из одного falsy элемента?
        return data.length > 0;
    }

    return !!data;
};

/**
    @param {JNodeset} nodeset
    @return {boolean}
*/
JNode.prototype.cmpN = function(nodeset) {
    var data = this.data;

    if ( Array.isArray(data) ) {
        for (var i = 0; i < data.length; i++) {
            if ( cmpN(new JNode( data[i] ), nodeset) ) {
                return true;
            }
        }
        return false;
    }

    return cmpN(this, nodeset);
};

function cmpN(node, nodeset) {
    if (nodeset instanceof JNode) {
        return cmpS( nodeset, node.scalar() );
    }

    var nodes = nodeset.nodes;
    var value = node.scalar();
    for (var i = 0; i < nodes.length; i++) {
        if ( value == nodes[i].scalar() ) {
            return true;
        }
    }
    return false;
};

JNode.prototype.cmpS = function(scalar) {
    return cmpS(this, scalar);
};

function cmpS(node, scalar) {
    var data = node.data;

    if ( Array.isArray(data) ) {
        for (var i = 0; i < data.length; i++) {
            if ( ( new JNode( data[i] ) ).scalar() == scalar ) {
                return true;
            }
        }
        return false;
    }

    return node.scalar() == scalar;
}

//  ---------------------------------------------------------------------------------------------------------------  //

/**
    @constructor
*/
function JNodeset() {
    this.nodes = [];
};

//  ---------------------------------------------------------------------------------------------------------------  //

JNodeset.prototype.empty = JNode.prototype.empty;

/**
    @return {boolean}
*/
JNodeset.prototype.isEmpty = function() {
    return !this.nodes.length;
};

/**
    @param {JNode} node
    @return {JNodeset}
*/
JNodeset.prototype.push = function(node) {
    this.nodes.push(node);

    return this;
};

/**
    @param {string} name
    @param {JNodeset=} result
    @return {JNodeset}
*/
JNodeset.prototype.nametest = function(name, result) {
    var nodes = this.nodes;
    result || (( result = new JNodeset() ));
    for (var i = 0; i < nodes.length; i++) {
        nodes[i].nametest(name, result);
    }
    return result;
};

/**
    @param {JNodeset=} result
    @return {JNodeset}
*/
JNodeset.prototype.startest = function(result) {
    var nodes = this.nodes;
    result || (( result = new JNodeset() ));
    for (var i = 0; i < nodes.length; i++) {
        nodes[i].startest(result);
    }
    return result;
};

/**
    @param {function(JNode, JNode): boolean} filter
    @param {JNode} root
    @param {JNodeset=} result
    @return {JNodeset}
*/
JNodeset.prototype.pred = function(filter, root, vars) {
    var nodes = this.nodes;
    //  FIXME: result || (( result = new JNodeset() ));
    var result = new JNodeset();
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        if ( filter(node, root, vars) ) {
            result.push(node);
        }
    }
    return result;
};

/**
    @param {number} index
    @return {JNodeset}
*/
JNodeset.prototype.index = function(index) {
    var node = this.nodes[index];

    if (node !== undefined) {
        return ( new JNodeset() ).push(node);
    }

    return this.empty;
};

/**
    @return {Array}
*/
JNodeset.prototype.toArray = function() {
    var r = [];
    var nodes = this.nodes;
    for (var i = 0; i < nodes.length; i++) {
        r.push( nodes[i].data );
    }
    return r;
};

JNodeset.prototype.scalar = function() {
    var nodes = this.nodes;
    return (nodes.length) ? nodes[0].scalar() : '';
};

/**
    @return {boolean}
*/
JNodeset.prototype.boolean = function() {
    var nodes = this.nodes;
    return (nodes.length) ? nodes[0].boolean() : false;
};

/**
    @param {JNodeset} nodeset
    @return {boolean}
*/
JNodeset.prototype.cmpN = function(nodeset) {
    var nodes = this.nodes;
    for (var i = 0, l = nodes.length; i < l; i++) {
        if ( nodes[i].cmpN(nodeset) ) {
            return true;
        }
    }
    return false;
};

JNodeset.prototype.cmpS = function(scalar) {
    var nodes = this.nodes;
    for (var i = 0, l = nodes.length; i < l; i++) {
        if ( nodes[i].cmpS(scalar) ) {
            return true;
        }
    }
    return false;
};

//  ---------------------------------------------------------------------------------------------------------------  //

no.JNode = JNode;
no.JNodeset = JNodeset;

//  ---------------------------------------------------------------------------------------------------------------  //

//  ---------------------------------------------------------------------------------------------------------------  //
//  Grammar
//  ---------------------------------------------------------------------------------------------------------------  //

//  ---------------------------------------------------------------------------------------------------------------  //
//  Grammar consts
//  ---------------------------------------------------------------------------------------------------------------  //

//  Types.
//
var TYPE_SCALAR = 'scalar';
var TYPE_NODESET = 'nodeset';
var TYPE_BOOL = 'boolean';

//  Priorities of binary operators.
//
var BINOPS = {
    '*': 6,
    '/': 6,
    '%': 6,
    '+': 5,
    '-': 5,
    '<=': 4,
    '>=': 4,
    '<': 4,
    '>': 4,
    '==': 3,
    '!=': 3,
    '&&': 2,
    '||': 1
};

//  ---------------------------------------------------------------------------------------------------------------  //
//  Grammar tokens
//  ---------------------------------------------------------------------------------------------------------------  //

var tokens = {};

//  ---------------------------------------------------------------------------------------------------------------  //

tokens.SELF = /^\.(?![a-zA-Z_*.[])/;
tokens.ROOT = /^\/(?![.[])/;
tokens.BINOP = /^(?:\+|-|\*|\/|%|==|!=|<=|>=|<|>|&&|\|\|)/;
tokens.UNOP = /^(?:\+|-|!)/;
tokens.DIGIT = /^[0-9]/;

tokens.ID = /^[a-zA-Z_][a-zA-Z0-9-_]*/;
tokens.NUMBER = /^[0-9]+(?:\.[0-9]+)?/;
tokens.CHARS = /^[^"{}\\]+/;

//  ---------------------------------------------------------------------------------------------------------------  //
//  Grammar rules
//  ---------------------------------------------------------------------------------------------------------------  //

var rules = {};

//  ---------------------------------------------------------------------------------------------------------------  //

//  expr := unary ( BIN_OP unary )*

rules.expr = function() {
    //  Here we have list of expressions (arguments) and operators.
    //  We need to group them according to operator's priorities.

    //  There are two stacks. One for operators:
    var ops = [];
    //  And one for arguments. There should be at least one argument so we parse it now:
    var args = [ this.parse('unary') ];
    this.skip();

    var op;
    //  Priority of operator on top of `ops`.
    //  In the beginning it's 0.
    var cp = 0;

    //  In the loop we do two operations:
    //
    //    * Shift: read one operator and one argument and put them in `ops` and `args`.
    //    * Reduce: pop all operators with priority greater or equal than given.
    //      For each operator pop two arguments, group them and push back to `args`.
    //
    //  For example: [ 'a', '*', 'b', '+', 'c' ].
    //
    //      args: [ 'a' ]               ops: []
    //      shift
    //      args: [ 'b', 'a' ]          ops: [ '*' ]
    //      reduce(5)
    //      args: [ '(a * b)' ]         ops: []
    //      shift
    //      args: [ 'c', '(a * b)' ]    ops: [ '+' ]
    //      reduce(0)
    //      args: [ '((a * b) + c)' ]   ops: []
    //
    while (( op = this.test('BINOP') )) {
        this.move(op.length);
        this.skip();

        var p = BINOPS[op];
        //  Next op has less or equal priority than top of `ops`.
        if (p <= cp) {
            //  Reduce.
            reduce(p);
        }
        //  Shift.
        ops.unshift(op);
        args.unshift( this.parse('unary') );
        this.skip();

        //  Update cp.
        cp = p;
    }
    //  Reduce all remaining operators.
    reduce(0);

    //  Result is on top of the `args`.
    return args[0];

    function reduce(p) {
        var op, left, right;
        //  If top of `ops` has greater or equal priority than `p` -- reduce it.
        while ( (( op = ops[0] )) && (BINOPS[op] >= p) ) {
            //  Pop two arguments.
            right = args.shift();
            left = args.shift();
            //  Push back result of `op`.
            args.unshift({
                _id: 'binop',
                //  Type of '+', '-', '*', '/', '%' is scalar. Boolean otherwise.
                _type: ('+-*/%'.indexOf(op) > -1) ? TYPE_SCALAR : TYPE_BOOL,
                //  If either of left or right is local, then binary expression is local too.
                _local: left._local || right._local,

                //  Do not forget to pop `op` out of `ops`.
                op: ops.shift(),
                left: left,
                right: right
            });
        }
    }
};

//  ---------------------------------------------------------------------------------------------------------------  //

//  unary := UNOP? unary | primary

rules.unary = function() {
    var op;
    if (( op = this.test('UNOP') )) {
        this.move();

        var expr = this.parse('unary');

        return {
            _id: 'unop',
            //  Type of '!' is boolean, '+' and '-' -- scalar.
            _type: (op === '!') ? TYPE_BOOL : TYPE_SCALAR,
            _local: expr._local,

            op: op,
            expr: expr
        };
    }

    return this.parse('primary');
};

//  ---------------------------------------------------------------------------------------------------------------  //

//  primary := string | jpath | subexpr | number | filter | var

rules.primary = function() {
    var la = this.la();

    switch (la) {
        case '"':
            return this.parse('string');

        case '.':
        case '/':
            return this.parse('jpath');

        case '(':
            return this.parse('subexpr');
    }

    if ( this.test('DIGIT') ) {
        return {
            _id: 'number',
            _type: TYPE_SCALAR,

            value: this.match('NUMBER')
        };
    }

    var name = this.match('ID');

    if ( this.test('.') ) {
        return {
            _id: 'filter',
            _type: TYPE_NODESET,

            name: name,
            jpath: this.parse('jpath')
        };
    }

    return {
        _id: 'var',
        _type: TYPE_NODESET,

        name: name
    };
};

//  ---------------------------------------------------------------------------------------------------------------  //

//  subexpr := '(' expr ')'

rules.subexpr = function() {
    this.move();
    this.skip();
    var expr = this.parse('expr');
    this.skip();
    this.match(')');

    return {
        _id: 'subexpr',
        _type: expr._type,
        _local: expr._local,

        expr: expr
    };
};

//  ---------------------------------------------------------------------------------------------------------------  //

//  jpath := '.' | '/' | '/'? step+

rules.jpath = function() {

    if ( this.test('SELF') ) {
        this.move();

        return {
            _id: 'self',
            _type: TYPE_NODESET,
            _local: true
        };
    }

    if ( this.test('ROOT') ) {
        this.move();

        return {
            _id: 'root',
            _type: TYPE_NODESET
        };
    }

    var abs;
    if ( this.test('/') ) {
        this.move();
        abs = true;
    }

    var steps = [];
    while (1) {
        var la = this.la();

        if (la === '.') {
            steps.push( this.parse('step') );
        } else if (la === '[') {
            var pred = this.parse('pred');
            if (pred._id === 'guard') {
                steps.unshift(pred);
            } else {
                steps.push(pred);
            }
        } else {
            break;
        }
    }

    return {
        _id: 'jpath',
        _type: TYPE_NODESET,
        _local: !abs,

        abs: abs,
        steps: steps
    };
};

//  ---------------------------------------------------------------------------------------------------------------  //

//  step := '.' pred | '.*' | '.' ID

rules.step = function() {
    this.move();

    var la = this.la();

    if (la === '[') {
        return this.parse('pred');
    }

    if (la === '*') {
        this.move();

        return {
            _id: 'star'
        };
    }

    return {
        _id: 'nametest',

        nametest: this.match('ID')
    };
};

//  ---------------------------------------------------------------------------------------------------------------  //

//  pred := '[' expr ']'

rules.pred = function() {
    this.move();
    this.skip();
    var expr = this.parse('expr');
    this.skip();
    this.match(']');

    //  There are three types of "predicates":
    //
    //    * Predicate. `expr` is local (i.e. it depends on current context).
    //      Basically it means that it contains at least one non-absolute jpath.
    //
    //    * Global predicate (or guard). `expr` is not local but it has boolean type.
    //
    //    * Index. Global non-boolean expression.
    //
    var _id = 'index';
    if (expr._local) {
        _id = 'pred';
    } else if (expr._type === TYPE_BOOL) {
        _id = 'guard';
    }

    return {
        _id: _id,

        expr: expr
    };
}

//  ---------------------------------------------------------------------------------------------------------------  //

rules.string = function() {
    this.match('"');
    var content = this.parse('string_content');
    this.match('"');

    return content;
};

var disymbols = {
    '{{': '{',
    '}}': '}',
    '\\"': '"',
    '\\\\': '\\'
    //  FIXME: Нужны ли тут \', \n, \t и т.д.?
};

rules.string_content = function() {
    var parts = [];
    var c;
    var str = '';

    while (this.s) {
        c = disymbols[ this.la(2) ];
        if (c) {
            str += c;
            this.move(2);
        } else {
            c = this.la();

            if (c === '"') {
                break;
            }

            if (c === '\\') {
                str += c;
                this.move();
            } else if (c === '{') {
                pushStr();

                this.move();
                this.skip();
                parts.push( this.parse('expr') );
                this.skip();
                this.match('}');
            } else {
                str += this.match('CHARS');
            }
        }
    }
    pushStr();

    //  Это пустая строка.
    if (!parts.length) {
        parts.push( stringLiteral('') );
    }

    return {
        _id: 'string',
        _type: TYPE_SCALAR,

        value: parts
    };

    function pushStr() {
        if (str) {
            parts.push( stringLiteral(str) );
            str = '';
        }
    }

    function stringLiteral(s) {
        return {
            _id: 'string_literal',
            _type: TYPE_SCALAR,

            value: s
        };
    }
};


//  ---------------------------------------------------------------------------------------------------------------  //

var parser = new no.Parser(rules, tokens);

var _cache = {};

//  ---------------------------------------------------------------------------------------------------------------  //
//  no.jpath
//  ---------------------------------------------------------------------------------------------------------------  //

no.jpath = function(expr, data, vars) {
    return no.jpath.toScalar( no.jpath.expr(expr)(data, vars) );
};

no.jpath.raw = function(expr, data, vars) {
    return no.jpath.expr(expr)(data, vars);
};

no.jpath.scalar = function(expr) {
    var compiled = no.jpath.expr(expr);

    return function(data, vars) {
        return no.jpath.toScalar( compiled(data, vars) );
    };
};

no.jpath.boolean = function(expr) {
    var compiled = no.jpath.expr(expr);

    return function(data, vars) {
        return no.jpath.toBoolean( compiled(data, vars) );
    };
};

no.jpath.string = function(str) {
    return compileString(str, 'string_content');
};

//  Возвращает функцию с сигнатурой:
//
//      function(data, vars) { ... }
//
no.jpath.expr = function(expr) {
    var type = typeof expr;

    if (type === 'string') {
        return compileString(expr, 'expr');
    }

    //  Object or array.
    if (expr && type === 'object') {
        return ( Array.isArray(expr) ) ? compileArray(expr) : compileObject(expr);
    }

    //  Value.
    return function() {
        return expr;
    };
};

//  ---------------------------------------------------------------------------------------------------------------  //

no.jpath.toScalar = function(result) {
    if (result instanceof JNode) {
        return result.data;
    } else if (result instanceof JNodeset) {
        return ( result.isEmpty() ) ? undefined : result.toArray();
    } else {
        return result;
    }
};

no.jpath.toBoolean = function(result) {
    if (result instanceof JNode || result instanceof JNodeset) {
        return result.boolean();
    } else {
        return result;
    }
};

//  ---------------------------------------------------------------------------------------------------------------  //

function compileString(expr, id) {
    var key = expr + '::' + id;

    //  FIXME: Разложить по разным кэшам?
    var cached = _cache[key];

    if (!cached) {
        //  expr isn't cached.
        cached = _cache[key] = compile( parser.start(expr, id) );
    }

    return cached;
}

function compileObject(obj) {
    var items = {};

    for (var key in obj) {
        items[key] = no.jpath.expr( obj[key] );
    }

    //  FIXME: Компилировать сразу в функцию без цикла?
    return function(data, vars) {
        var r = {};

        for (var key in items) {
            r[key] = no.jpath.toScalar( items[key](data, vars) );
        }

        return r;
    };
};

function compileArray(arr) {
    var items = [];

    var l = arr.length;
    for (var i = 0; i < l; i++) {
        items.push( no.jpath.expr( arr[i] ) );
    }

    //  FIXME: Компилировать сразу в функцию без цикла?
    return function(data, vars) {
        var r = [];

        for (var i = 0; i < l; i++) {
            r.push( no.jpath.toScalar( items[i](data, vars) ) );
        }

        return r;
    };
};

//  ---------------------------------------------------------------------------------------------------------------  //

//  Compiled jpaths cache.
var _jpaths = {};

//  ---------------------------------------------------------------------------------------------------------------  //
//  Compilation
//  ---------------------------------------------------------------------------------------------------------------  //

function compile(ast) {
    var exprs = [];

    var p = (ast._id === 'jpath') ? jpath2func(ast, exprs) : expr2func(ast, exprs);

    var r = '';
    for (var i = 0; i <= p; i++) {
        r += 'function t' + i + '(node, root, vars) {\n' + exprs[i] + '\n}\n\n';
    }
    r += 'return function(data, vars) {\nvar node = new no.JNode(data);\nreturn t' + p + '(node, node, vars);\n}\n';

    //  console.log(r);
    return Function('no', r)(no);
}

//  ---------------------------------------------------------------------------------------------------------------  //

function expr2func(ast, exprs) {
    var r = 'return (' + ast2js(ast, exprs) + ');';

    return exprs.push(r) - 1;
}


function jpath2func(ast, exprs) {
    var r = '';
    if (ast.abs) {
        //  If it's an absolute jpath, then we should use root instead of data.
        r += 'node = root;\n';
    }

    var steps = ast.steps;
    for (var i = 0, l = steps.length; i < l; i++) {
        var step = steps[i];

        var id = step._id;
        switch (id) {
            case 'nametest':
                r += 'node = node.nametest("' + step.nametest + '");\n'
                break;

            case 'star':
                r += 'node = node.startest();\n'
                break;

            case 'pred':
            case 'index':
                //  Cast `expr` to boolean or scalar.
                step.expr._as = (id === 'pred') ? TYPE_BOOL : TYPE_SCALAR;
                var p = expr2func(step.expr, exprs);
                r += 'node = node.' + id + '(t' + p + ', root, vars);\n'
                break;

            case 'guard':
                r += 'if (!(' + ast2js(step.expr, exprs) + ')) { return node.empty; }\n';
                break;
        }

        if (id !== 'guard') {
            r += 'if (node.isEmpty()) { return node.empty; }\n';
        }
    }

    r += 'return node;';

    return exprs.push(r) - 1;
}

//  ---------------------------------------------------------------------------------------------------------------  //

function ast2js(ast, exprs) {
    var js;

    switch (ast._id) {

        case 'root':
            js = 'root';
            break;

        case 'self':
            js = 'node';
            break;

        case 'number':
            js = ast.value;
            break;

        case 'string_literal':
            js = JSON.stringify(ast.value);
            break;

        case 'string':
            //  FIXME: Убрать map.
            js = '(' + ast.value.map(function(value) {
                value._as = TYPE_SCALAR;
                return ast2js(value, exprs);
            }).join(' + ') + ')';
            break;

        case 'var':
            js = '(new no.JNode(vars["' + ast.name + '"]))';
            break;

        case 'unop':
            //  Cast expr to boolean ('!') or scalar ('+', '-').
            ast.expr._as = (ast.op === '!') ? TYPE_BOOL : TYPE_SCALAR;

            js = ast.op + '(' + ast2js(ast.expr, exprs) + ')';
            break;

        case 'binop':
            var l = ast.left;
            var r = ast.right;

            var lt = l._type;
            var rt = r._type;

            var op = ast.op;
            var as;
            switch (op) {
                case '&&':
                case '||':
                    //  Both operands should be boolean.
                    as = TYPE_BOOL;
                    break;

                case '==':
                case '!=':
                    if ( lt !== rt && (lt === TYPE_BOOL || rt === TYPE_BOOL) ) {
                        //  We compare nodeset or scalar to boolean.
                        //  Both operands should be boolean then.
                        as = TYPE_BOOL;
                    }
                    break;

                default:
                    //  Both operands should be scalar.
                    as = TYPE_SCALAR;
            }
            if (as) {
                //  Cast both operands if `as`.
                l._as = r._as = as;
            }

            var ljs = ast2js(l, exprs);
            var rjs = ast2js(r, exprs);

            if (op === '==' || op === '!=') {
                //  Special case: compare nodeset to nodeset or scalar.
                if (lt === TYPE_NODESET || rt === TYPE_NODESET) {
                    //  (nodeset, nodeset) or (nodeset, scalar)
                    if (lt === TYPE_SCALAR) {
                        var t = rjs;
                        rjs = ljs;
                        ljs = t;
                    }

                    var type = (lt === rt) ? 'N' : 'S';
                    js = '(' + ljs + ').cmp' + type + '(' + rjs + ')';
                }
                if (js && op === '!=') {
                    js = '!(' + js + ')';
                }
            }

            if (js === undefined) {
                //  Usual binary operation.
                js = '(' + ljs + ' ' + ast.op + ' ' + rjs + ')';
            }

            break;

        case 'subexpr':
            js = '(' + ast2js(ast.expr, exprs) + ')';
            break;

        case 'jpath':
            var p = jpath2func(ast, exprs);
            js = 't' + p + '(node, root, vars)';
            break;

        case 'filter':
            var p = jpath2func(ast.jpath, exprs);
            js = 't' + p + '(new no.JNode(vars["' + ast.name + '"]), root, vars)';
            break;
    }

    //  Typecasting.
    if (ast._as && ast._as !== ast._type) {
        if (ast._type === TYPE_NODESET) {
            js = '(' + js + ').' + ast._as + '()';
        } else if (ast._type === TYPE_SCALAR) {
            js = '!!(' + js + ')';
        }
    }

    return js;
}

//  ---------------------------------------------------------------------------------------------------------------  //

var _setters = {};

no.jpath.set = function(jpath, data, value) {
    var compiled = _setters[jpath] || (( _setters[jpath] = compileSetter(jpath) ));

    return compiled(data, value);
};

function compileSetter(jpath) {
    //  В jpath строка вида '.foo.bar'.

    var parts = jpath.split('.');

    //  Первый элемент массива игнорируем (там пустая строка).
    var i = 1;
    //  Последний будем обрабатывать особо. После цикла.
    var l = parts.length - 1;

    var body = 'var r = data; var t;';
    for (; i < l; i++) {
        //  Делаем "шаг". Т.е. примерно `r = r['foo'];`.
        body += 't = r["' + parts[i] + '"];';
        //  Если после "шага" получился null или undefined, создаем на этом месте пустой объект.
        body += 'if (t == null) { t = r["' + parts[i] + '"] = {}; }';
        body += 'r = t;'
    }
    //  Последний шаг — присваиваем значение.
    body += 'r["' + parts[i] + '"] = value;';
    body += 'return data;';

    return new Function('data', 'value', body);
}

//  ---------------------------------------------------------------------------------------------------------------  //

})();

//  ---------------------------------------------------------------------------------------------------------------  //

