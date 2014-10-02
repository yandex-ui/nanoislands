//  ---------------------------------------------------------------------------------------------------------------  //
//  pt.AST
//  ---------------------------------------------------------------------------------------------------------------  //

require('no.colors');

//  ---------------------------------------------------------------------------------------------------------------  //

var pt = require('./pt.js');

//  ---------------------------------------------------------------------------------------------------------------  //

pt.AST = function() {};

//  ---------------------------------------------------------------------------------------------------------------  //

pt.AST.prototype._init = function() {};

//  ---------------------------------------------------------------------------------------------------------------  //

pt.AST.prototype.error = function(s) {
    var pos = this.where;
    throw new Error( 'ERROR: ' + s + '\n' + pos.input.where(pos) );
};

//  ---------------------------------------------------------------------------------------------------------------  //

//  FIXME: Этот базовый метод в таком виде не используется вообще.
//  Он полностью перекрыт в yate/lib/ast.js.
/*
pt.AST.prototype.make = function(id, params) {
    return this.factory.make(id, this.where, params);
};
*/

//  ---------------------------------------------------------------------------------------------------------------  //

pt.AST.prototype.trigger = function(event, params) {
    var handlers = this.options.events[event];

    var stop;
    var r;

    if (handlers) {
        for (var i = 0, l = handlers.length; i < l; i++) {
            r = handlers[i].call(this, params);
            if (r === false) {
                stop = true;
            }
        }
    }

    if (!stop) {
        this.apply(function(ast, params) {
            ast.trigger(event, params);
        }, params);
    }

    return r;
};

pt.AST.prototype.apply = function(callback, params) {
    var props = this.p;
    for (var key in props) {
        var child = props[key];
        if (child instanceof pt.AST) {
            callback(child, params);
        }
    }
};

pt.AST.prototype.walkdo = function(callback, params, pKey, pObject) {
    var props = this.p;
    for (var key in props) {
        var child = props[key];
        if (child instanceof pt.AST) {
            child.walkdo(callback, params, key, props);
        }
    }

    callback(this, params, pKey, pObject);
};

pt.AST.prototype.dowalk = function(callback, params, pKey, pObject) {
    callback(this, params, pKey, pObject);

    var props = this.p;
    for (var key in props) {
        var child = props[key];
        if (child instanceof pt.AST) {
            child.dowalk(callback, params, key, props);
        }
    }
};

//  ---------------------------------------------------------------------------------------------------------------  //

pt.AST.prototype.w_setParents = function(parent) {
    this.parent = parent || null;
    var that = this;
    this.apply(function(ast, parent) {
        ast.w_setParents(that);
    });
};

pt.AST.prototype.is = function(type) {
    for (var i = 0, l = arguments.length; i < l; i++) {
        if ( this instanceof this.factory.get( arguments[i] ) ) {
            return true;
        }
    }
};

//  ---------------------------------------------------------------------------------------------------------------  //

pt.AST.prototype.toString = function() {
    var r = [];
    var props = this.p;
    for (var key in props) {
        var child = props[key];
        if (child !== undefined) {
            if (child instanceof pt.AST) {
                var s = child.toString();
                if (s) {
                    r.push( key.blue.bold + ': ' + s);
                }
            } else {
                r.push( key.blue.bold + ': ' + JSON.stringify(child) );
            }
        }
    }
    if (r.length) {
        var s = this.id.bold + '( ' + this.getType().lime;
        if (this.AsType) {
            s += ' -> '.lime + this.AsType.lime;
        }
        s += ' )\n' + r.join('\n').replace(/^/gm, '    ');
        return s;
    }
    return '';
};

//  ---------------------------------------------------------------------------------------------------------------  //

