var no = no || require('./no.base.js');

if  ( no.de ) {
    require('./no.events.js');

    module.exports = no;
}

//  ---------------------------------------------------------------------------------------------------------------  //

//  Объект, обещающий вернуть некий результат в будущем.
//  Обычно результат получается в результате некоторых асинхронных действий.
//
//  В сущности, это аналог обычных callback'ов, но более продвинутый.
//  А точнее, это событие, генерящееся при получении результата и на которое
//  можно подписаться:
//
//      var promise = new no.Promise();
//
//      promise.done(function(result) { // Подписываемся на получение результата.
//          console.log(result); // 42
//      });
//
//      // И где-то дальше:
//      ... promise.resolve(42); // Рассылаем результат всем подписавшимся.
//
//  Можно подписать на результат несколько callback'ов:
//
//      promise.done(function(result) { // Все методы done, fail, resolve, reject и wait -- chainable.
//          // Сделать что-нибудь.
//      }).done(function(result) {
//          // Сделать что-нибудь еще.
//      });
//
//  Можно подписываться на результат даже после того, как он уже получен:
//
//      var promise = new no.Promise();
//      promise.resolve(42);
//
//      promise.done(function(result) { // callback будет выполнен немедленно.
//          console.log(result); // 42
//      });
//
//  Имея список из нескольких promise'ов, можно создать новый promise,
//  которое зарезолвится только после того, как зарезолвятся все promise'ы из списка:
//
//      var p1 = new no.Promise();
//      var p2 = new no.Promise();
//
//      var p = no.Promise.wait([ p1, p2 ]);
//      p.done(function(result) { // В result будет массив из результатов p1 и p2.
//          console.log(result); // [ 42, 24 ]
//      });
//
//      p2.resolve(24); // Порядок, в котором резолвятся promise'ы из списка не важен.
//                      // При это в результате порядок будет тем же, что и promise'ы в wait([ ... ]).
//      p1.resolve(42);
//
//  К методам done/resolve есть парные методы fail/reject для ситуации, когда нужно вернуть
//  не результат, а какую-нибудь ошибку.
//
//      var p1 = new no.Promise();
//      var p2 = new no.Promise();
//
//      var p = no.Promise.wait([ p1, p2 ]);
//      p.fail(function(error) {
//          console.log(error); // 'Foo!'
//      });
//
//      p1.resolve(42);
//      p2.reject('Foo!'); // Если режектится любой promise из списка, p тоже режектится.
//
no.Promise = function() {
    this._init();
};

no.extend(no.Promise.prototype, no.Events);

//  ---------------------------------------------------------------------------------------------------------------  //

no.Promise.prototype._init = function() {
    this._dones = [];
    this._fails = [];
};

//  ---------------------------------------------------------------------------------------------------------------  //

//  NOTE: Да, ниже следует "зловещий копипаст". Методы done/fail и resolve/reject совпадают почти дословно.
//  Альтернатива в виде прокладки, реализующей только done/resolve (как, например, в jQuery), мне не нравится.


//  Добавляем callback, ожидающий обещанный результат.
//  Если promise уже зарезолвился, callback выполняется немедленно.
//
no.Promise.prototype.done = function(done) {
    if (!this._rejected) {
        if (this._resolved) {
            done(this._result);
        } else {
            this._dones.push(done);
        }
    }

    return this;
};

//  Тоже самое, что и done.
//
no.Promise.prototype.fail = function(fail) {
    if (!this._resolved) {
        if (this._rejected) {
            fail(this._error);
        } else {
            this._fails.push(fail);
        }
    }

    return this;
};

no.Promise.prototype.then = function(done, fail) {
    this.done(done);
    this.fail(fail);

    return this;
};

no.Promise.prototype.always = function(always) {
    this.done(always);
    this.fail(always);

    return this;
};

//  ---------------------------------------------------------------------------------------------------------------  //

//  Передать результат всем подписавшимся.
//
no.Promise.prototype.resolve = function(result) {
    if ( !(this._resolved || this._rejected) ) {
        this._resolved = true;
        this._result = result;

        var dones = this._dones;
        for (var i = 0, l = dones.length; i < l; i++) {
            dones[i](result);
        }
        this._dones = this._fails = null;
    }

    return this;
};

//  Тоже самое, что и resolve.
//
no.Promise.prototype.reject = function(error) {
    if ( !(this._rejected || this._resolved) ) {
        this._rejected = true;
        this._error = error;

        var elses = this._fails;
        for (var i = 0, l = elses.length; i < l; i++) {
            elses[i](error);
        }
        this._dones = this._fails = null;
    }

    return this;
};

//  ---------------------------------------------------------------------------------------------------------------  //

//  Проксируем resolve/reject в другой promise.
//
no.Promise.prototype.pipe = function(promise) {
    this.done(function(result) {
        promise.resolve(result);
    });
    this.fail(function(error) {
        promise.reject(error);
    });

    return this;
};

//  ---------------------------------------------------------------------------------------------------------------  //

//  Создаем из массива promise'ов новый promise, который зарезолвится только после того,
//  как зарезолвятся все promise'ы из списка. Результатом будет массив результатов.
//
no.Promise.wait = function(promises) {
    var wait = new no.Promise();

    var results = [];

    var l = promises.length;
    //  Если нет промисов, то сразу возвращаем зарезолвленный.
    if (l === 0) {
        return wait.resolve(results);
    }

    var n = l;
    for (var i = 0; i < l; i++) {
        //  Замыкание, чтобы сохранить значения promise и i.
        (function(promise, i) {

            promise.done( function(result) {
                results[i] = result;
                if (!--n) {
                    wait.resolve(results);
                }
            } );

            promise.fail( function(error) {
                //  FIXME: Может тут нужно сделать results = null; ?
                wait.reject(error);
            } );

        })(promises[i], i);

    };

    return wait;
};

//  ---------------------------------------------------------------------------------------------------------------  //

no.promise = function(promises) {
    if (promises) {
        return no.Promise.wait(promises);
    }

    return new no.Promise();
};

no.Promise.resolved = function(result) {
    return ( new no.Promise() ).resolve(result);
};

no.Promise.rejected = function(result) {
    return ( new no.Promise() ).reject(result);
};

//  ---------------------------------------------------------------------------------------------------------------  //

