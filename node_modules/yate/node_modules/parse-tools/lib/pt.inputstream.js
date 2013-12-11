var fs_ = require('fs');
var path_ = require('path');

//  ---------------------------------------------------------------------------------------------------------------  //

var pt = require('./pt.js');

//  ---------------------------------------------------------------------------------------------------------------  //
//  pt.InputStream
//  ---------------------------------------------------------------------------------------------------------------  //

pt.InputStream = function(src) {
    if (src) {
        if (src.filename) {
            this.read(src.filename);
        } else {
            this.init(src.input);
        }
    }
};

pt.InputStream.prototype.read = function(filename) {
    this.filename = path_.resolve(filename);

    this.init( fs_.readFileSync(this.filename, 'utf-8') );

    return this;
};

pt.InputStream.prototype.init = function(input) {
    //  Strip UTF-8 BOM
    if (input.charAt(0) === '\uFEFF') {
        input = input.slice(1);
    }

    this.lines = input.split('\n');
    this.x = 0;
    this.y = 0;
    this.line = this.lines[0];

    return this;
};

//  ---------------------------------------------------------------------------------------------------------------  //

pt.InputStream.prototype.current = function(n) {
    var line = this.line;

    return (n && line) ? line.substr(0, n) : line;
};

pt.InputStream.prototype.next = function(n) {
    this.x += n;
    this.line = this.line.substr(n);
};

pt.InputStream.prototype.nextLine = function(n) {
    this.x = 0;
    this.y += (n || 1);
    this.line = this.lines[this.y];
};

pt.InputStream.prototype.isEOL = function() {
    return (this.line === '');
};

pt.InputStream.prototype.isEOF = function() {
    return (this.line === undefined);
};

//  ---------------------------------------------------------------------------------------------------------------  //

pt.InputStream.prototype.where = function(pos) {
    var input = (pos) ? pos.input : this;
    var pos = pos || this;

    var where = 'at (' + (pos.x + 1) + ', ' + (pos.y + 1) + ') in ' + input.filename;

    var line = input.lines[pos.y] || '';
    where += ':\n' + line + '\n' + Array(pos.x + 1).join('-') + '^';

    return where;
};

pt.InputStream.prototype.whereKey = function() {
    return this.x + '|' + this.y;
};

//  ---------------------------------------------------------------------------------------------------------------  //

pt.InputStream.prototype.setPos = function(pos) {
    var x = this.x = pos.x;
    var y = this.y = pos.y;
    this.line = this.lines[y].substr(x);
};

pt.InputStream.prototype.getPos = function() {
    return {
        x: this.x,
        y: this.y,
        input: this
    };
};

//  ---------------------------------------------------------------------------------------------------------------  //

