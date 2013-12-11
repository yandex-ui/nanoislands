var pt = require('./pt.js');

var no = require('nommon');

//  ---------------------------------------------------------------------------------------------------------------  //
//  pt.Factory
//  ---------------------------------------------------------------------------------------------------------------  //

pt.Factory = function(base, asts) {
    this.asts = asts;
    this.ctors = {
        '': base
    };
};

//  ---------------------------------------------------------------------------------------------------------------  //

pt.Factory.prototype.make = function(id, where, params) {
    var ctor = this.get(id);
    var ast = new ctor();

    //  Хранилища для "свойств" и "флагов".
    //  Первое -- это то, что создает парсер и что потом доступно в шаблонах кодогенерации.
    //  Второе -- разные дополнительные вычисляемые свойства, которые используются в предикатах кодогенератора.
    ast.p = {};
    ast.f = {};

    //  Точка во входном потоке, соответствующая этому AST.
    ast.where = where;

    //  Вызываем "конструктор". Настоящие конструктор пустой для упрощения наследования.
    ast._init(params);

    return ast;
};

pt.Factory.prototype.get = function(id) {
    var ctor = this.ctors[id];

    if (!ctor) {
        ctor = function() {};

        var proto = this.asts[id] || {};
        var options = proto.options = proto.options || {};

        var base = this.get(options.base || '');

        var that = this;

        var mixin = no.array.map(
            no.array(options.mixin),
            function(id) {
                return that.asts[id];
            }
        );
        mixin.push(proto);

        no.inherit(ctor, base, mixin);

        ctor.prototype.id = id;
        ctor.prototype.factory = this;

        this.ctors[id] = ctor;

        //  В options.events может находиться такая структура:
        //
        //  events: {
        //      'cast': [
        //          'oncast',
        //          function(evt, params) { ... }
        //      ],
        //      ...
        //  }
        //
        options.events = no.object.map(
            options.events || {},
            function(handlers) {
                //  В handlers может быть строка, означающая название метода, или функция.
                //  Или же там может быть массив строк и функций.
                return no.array.map(
                    //  Делаем массив, если было просто значение.
                    no.array(handlers),
                    function(handler) {
                        return (typeof handler === 'string') ? that[handler] : handler;
                    }
                );
            }
        );
    }

    return ctor;
};

//  ---------------------------------------------------------------------------------------------------------------  //

