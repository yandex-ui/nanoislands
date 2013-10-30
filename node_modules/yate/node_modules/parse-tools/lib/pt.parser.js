var path_ = require('path');

//  ---------------------------------------------------------------------------------------------------------------  //

var pt = require('./pt.js');

require('./pt.inputstream.js');

//  ---------------------------------------------------------------------------------------------------------------  //
//  pt.Parser
//  ---------------------------------------------------------------------------------------------------------------  //

pt.Parser = function(grammar, factory) {
    this.grammar = grammar;
    this.factory = factory;
};

//  ---------------------------------------------------------------------------------------------------------------  //

pt.Parser.prototype.read = function(filename) {
    this.input = new pt.InputStream( { filename: filename } );
    this.skipper = null;
    this.cache = {};
};

pt.Parser.prototype.parse = function(filename, rule) {
    this.read(filename);

    return this.match(rule);
};

pt.Parser.prototype.subparser = function() {
    return new pt.Parser( this.grammar, this.factory, path_.dirname(this.input.filename) );
};

//  ---------------------------------------------------------------------------------------------------------------  //

pt.Parser.prototype.makeAST = function(id) {
    return this.factory.make( id, this.input.getPos() );
};

//  ---------------------------------------------------------------------------------------------------------------  //
//  Errors
//  ---------------------------------------------------------------------------------------------------------------  //

pt.Parser.prototype.error = function(msg) {
    throw new pt.Parser.Error( msg || 'Unknown error', this.input.getPos() );
};

//  Этот метод нужен для того, чтобы показать,
//  что правило не смогло правильно сматчиться и нужно делать backtrace.
pt.Parser.prototype.backtrace = function() {
    throw 'backtrace()';
};

pt.Parser.Error = function(msg, pos) {
    this.msg = msg;
    this.pos = pos;
};

pt.Parser.Error.prototype.toString = function() {
    var s = 'ERROR: ' + this.msg + '\n';
    var pos = this.pos;
    s += pos.input.where(pos);

    return s;
};

//  ---------------------------------------------------------------------------------------------------------------  //

pt.Parser.prototype.skip = function(id) {
    id = id || this.skipper;
    var skipper = this.grammar.skippers[id];
    var r = skipper.call(this);

    return r;
};

//  ---------------------------------------------------------------------------------------------------------------  //

pt.Parser.prototype.get = function(id) {
    var grammar = this.grammar;

    var pattern = grammar.patterns[id];
    if (!pattern) {
        pattern = grammar.addToken(id, id);
    }

    return pattern;
};

//  ---------------------------------------------------------------------------------------------------------------  //
//  Test / Match
//  ---------------------------------------------------------------------------------------------------------------  //

pt.Parser.prototype.test = function(id) {
    var key = this.input.whereKey() + '|' + id;
    var cached = this.cache[key];
    if (cached !== undefined) {
        return cached;
    }

    var state = this.getState();
    var r = true;
    try {
        this.get(id).call(this);
        /// console.log('Ok: ' + id);
    } catch (e) {
        r = false;
        /// console.log('Failed: ' + id, e);
    }
    this.setState(state);

    this.cache[key] = r;

    return r;
};

pt.Parser.prototype.testAny = function() {
    for (var i = 0, l = arguments.length; i < l; i++) {
        var id = arguments[i];
        if ( this.test(id) ) {
            return id;
        }
    }

    return false;
};

pt.Parser.prototype.testAll = function() {
    var state = this.getState();
    var r = true;
    try {
        for (var i = 0, l = arguments.length; i < l; i++) {
            this.get( arguments[i] ).call(this);
        }
    } catch (e) {
        r = false;
        /// console.log(e);
    }
    this.setState(state);

    return r;
};

pt.Parser.prototype.match = function(id, params) {
    var options = {};
    if (typeof id === 'object') {
        options = id.options;
        id = id.rule;
    }

    var skipper = this.setSkipper(options.skipper);

    var rule = this.get(id);
    var r = rule.call(this, params);

    this.setSkipper(skipper);

    return r;
};

pt.Parser.prototype.matchAny = function() {
    for (var i = 0, l = arguments.length; i < l; i++) {
        var id = arguments[i];
        if ( this.test(id) ) {
            return this.match(id);
        }
    }

    this.error( 'Expected: ' + arguments.join(', ') );
};

//  ---------------------------------------------------------------------------------------------------------------  //
//  Getters / Setters
//  ---------------------------------------------------------------------------------------------------------------  //

pt.Parser.prototype.getSkipper = function() {
    return this.skipper;
};

pt.Parser.prototype.setSkipper = function(id) {
    var skipper = this.skipper;
    if (id) {
        this.skipper = id;
        this.skip();
    }

    return skipper;
};

//  ---------------------------------------------------------------------------------------------------------------  //

pt.Parser.prototype.setState = function(state) {
    this.input.setPos(state.pos);
    this.setSkipper(state.skipper);
};

pt.Parser.prototype.getState = function() {
    return {
        pos: this.input.getPos(),
        skipper: this.getSkipper()
    };
};

//  ---------------------------------------------------------------------------------------------------------------  //

