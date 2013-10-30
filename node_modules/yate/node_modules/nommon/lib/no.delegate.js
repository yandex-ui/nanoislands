var no = no || require('./no.base.js');

//  ---------------------------------------------------------------------------------------------------------------  //

//  В delegates должна быть структура, описывающая, что делать,
//  при вызове определенного метода или события.
//
//  {
//      'foo()': 'Foo Bar.bar() Quu.foo'
//  }
//
no.delegate = function(ctor, delegates, resolver) {
    delegates = delegates || ( ctor.prototype.options || {} ).delegate || {};
    resolver = resolver || defaultResolver;

    for (var from in delegates) {
        var to = delegates[from];
    }
};

function defaultResolver(name) {
    if (name) {
        return 'this["' + JSON.stringify(name) + '"]';
    }

    return 'this';
};

//  ---------------------------------------------------------------------------------------------------------------  //

