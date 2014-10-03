var no = no || require('./no.base.js');

//  ---------------------------------------------------------------------------------------------------------------  //

no.Parser = function(rules, tokens) {
    this._rules = rules;
    this._tokens = tokens || {};
};

//  ---------------------------------------------------------------------------------------------------------------  //

no.Parser.prototype.start = function(input, id) {
    this.input = input;
    this.p = 0;
    this.s = input; // this.s === this.input.substr(this.p);

    var ast = this.parse(id);

    if (this.s) {
        this.error('End of string expected');
    }

    return ast;
};

//  ---------------------------------------------------------------------------------------------------------------  //

no.Parser.prototype.parse = function(id, params) {
    var rule = this._rules[id];

    var p = this.p;

    var ast = rule.call(this, params);

    ast._start = p;
    ast._end = this.p;
    ast._input = this.input;

    return ast;
};

no.Parser.prototype.test = function(id) {
    var token = this._tokens[id];

    if (token) {
        var r = token.exec(this.s);
        return r && r[0];
    }

    if ( this.la(id.length) === id ) {
        return id;
    }
};

no.Parser.prototype.match = function(id) {
    var r = this.test(id);

    if (!r) {
        this.error('Token ' + id + ' expected');
    }

    this.move(r.length);

    return r;
};

//  ---------------------------------------------------------------------------------------------------------------  //

no.Parser.prototype.la = function(n) {
    return this.s.substr(0, n || 1);
};

no.Parser.prototype.move = function(n) {
    n || (( n = 1 ));
    this.s = this.s.substr(n);
    this.p += n;
};

no.Parser.prototype.skip = function() {
    var r = /^\s+/.exec(this.s);
    if (r) {
        this.move( r[0].length );
    }
};

//  ---------------------------------------------------------------------------------------------------------------  //

no.Parser.prototype.error = function(msg) {
    throw Error(msg + ' at ' + this.p + ': ' + this.s);
};

//  ---------------------------------------------------------------------------------------------------------------  //

