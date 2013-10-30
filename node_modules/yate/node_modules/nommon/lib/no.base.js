//  ---------------------------------------------------------------------------------------------------------------  //
//  no
//  ---------------------------------------------------------------------------------------------------------------  //

var no = {};

//  ---------------------------------------------------------------------------------------------------------------  //

no.de = (typeof window === 'undefined');

//  ---------------------------------------------------------------------------------------------------------------  //

no.inherit = function(ctor, base, mixin) {
    var F = function() {};
    F.prototype = base.prototype;
    var proto = ctor.prototype = new F();

    if (mixin) {
        if (mixin instanceof Array) {
            for (var i = 0, l = mixin.length; i < l; i++) {
                no.extend( proto, mixin[i] );
            }
        } else {
            no.extend(proto, mixin);
        }
    }

    proto.super_ = base.prototype;
    proto.constructor = ctor;

    return ctor;
};

//  ---------------------------------------------------------------------------------------------------------------  //

/**
    @param {!Object} dest
    @param {...!Object} srcs
    @return {!Object}
*/
no.extend = function(dest) {
    for (var i = 1, l = arguments.length; i < l; i++) {
        var src = arguments[i];
        for (var key in src) {
            dest[key] = src[key];
        }
    }

    return dest;
};

//  ---------------------------------------------------------------------------------------------------------------  //

no.nop = function() {};

//  ---------------------------------------------------------------------------------------------------------------  //

no.true = function() { return true; }
no.false = function() { return false; }

//  ---------------------------------------------------------------------------------------------------------------  //

no.value = function(value) {
    return function() {
        return value;
    };
};

//  ---------------------------------------------------------------------------------------------------------------  //

/**
    @param {string} msg
    @return {function()}
*/
no.logger = function(msg) {
    if (msg) {
        return function() {
            var args = [].slice.call(arguments);
            console.log.apply(null, [ msg ].concat(args) );
        };
    }

    return console.log;
};

//  ---------------------------------------------------------------------------------------------------------------  //

if ( no.de ) {
    no.next = function(callback) {
        process.nextTick(callback);
    };
} else {
    //  FIXME: Посмотреть на postMessage и т.д.
    no.next = function(callback) {
        setTimeout(callback, 0);
    };
}

//  ---------------------------------------------------------------------------------------------------------------  //

if ( no.de ) {
    module.exports = no;
}

//  ---------------------------------------------------------------------------------------------------------------  //

