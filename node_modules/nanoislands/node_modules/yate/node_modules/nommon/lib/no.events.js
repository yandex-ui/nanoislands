var no = no || require('./no.base.js');

if ( no.de ) {
    module.exports = no;
}

//  ---------------------------------------------------------------------------------------------------------------  //

//  Простейший pub/sub
//  ------------------
//
//  `no.Events` -- объект, который можно подмиксовать к любому другому объекту:
//
//      var foo = {};
//      no.extend(foo, no.Events);
//
//      foo.on('bar', function(e, data) {
//          console.log(e, data);
//      });
//
//      foo.trigger('bar', 42);
//
//  Или же:
//
//      function Foo() {}
//
//      no.extend(Foo.prototype, no.Events);
//
//      var foo = new Foo();
//
//      foo.on('bar', function(e, data) {
//          console.log(e, data);
//      });
//
//      foo.trigger('bar', 42);
//

//  ---------------------------------------------------------------------------------------------------------------  //

no.Events = {};

//  ---------------------------------------------------------------------------------------------------------------  //

//  Подписываем обработчик handler на событие name.
//
no.Events.on = function(name, handler) {
    var handlers = this._noevents_handlers || (( this._noevents_handlers = {} ));

    ( handlers[name] || (( handlers[name] = [] )) ).push(handler);

    return this;
};

//  Отписываем обработчик handler от события name.
//  Если не передать handler, то удалятся вообще все обработчики события name.
//
no.Events.off = function(name, handler) {
    if (handler) {
        var handlers = this._noevents_handlers && this._noevents_handlers[name];
        if (handlers) {
            //  Ищем этот хэндлер среди уже забинженных обработчиков этого события.
            var i = handlers.indexOf(handler);

            if (i !== -1) {
                //  Нашли и удаляем этот обработчик.
                handlers.splice(i, 1);
            }
        }
    } else {
        var handlers = this._noevents_handlers;
        if (handlers) {
            //  Удаляем всех обработчиков этого события.
            //  FIXME: Может тут лучше делать handlers[name] = null?
            delete handlers[name];
        }
    }

    return this;
};

//  ---------------------------------------------------------------------------------------------------------------  //

//  "Генерим" событие name. Т.е. вызываем по-очереди (в порядке подписки) все обработчики события name.
//  В каждый передаем name и params.
//
no.Events.trigger = function(name, param1, param2) {
    var handlers = this._noevents_handlers && this._noevents_handlers[name];

    if (handlers) {
        //  Копируем список хэндлеров.
        //  Если вдруг внутри какого-то обработчика будет вызван `off()`,
        //  то мы не потеряем вызов следующего обработчика.
        handlers = handlers.slice();

        var l = arguments.length;

        if (l === 1) {
            for (var i = 0, l = handlers.length; i < l; i++) {
                handlers[i].call(this, name);
            }
        } else if (l === 2) {
            for (var i = 0, l = handlers.length; i < l; i++) {
                handlers[i].call(this, name, param1);
            }
        } else if (l === 3) {
            for (var i = 0, l = handlers.length; i < l; i++) {
                handlers[i].call(this, name, param1, param2);
            }
        } else {
            for (var i = 0, l = handlers.length; i < l; i++) {
                handlers[i].apply(this, arguments);
            }
        }
    }

    return this;
};

//  "Генерим" событие в следующем тике.
//
no.Events.atrigger = function(event, params) {
    var that = this;
    no.next(function() {
        that.trigger(event, params);
    });
};

//  ---------------------------------------------------------------------------------------------------------------  //

//  "Форвардим" все сообщения name в другой объект.
//
no.Events.forward = function(name, object) {
    return this.on(name, function(e, params) {
        object.trigger(e, params);
    });
};

//  ---------------------------------------------------------------------------------------------------------------  //

