/**
 *
 * warning!
 * achtung!
 * увага!
 * внимание!
 *
 * Это автоматически сгенеренный файл. Не редактируйте его самостоятельно.
 *
 */
//  nanoblocks
//  ==========

var nb = {};

//  ---------------------------------------------------------------------------------------------------------------  //

//  Минимальный common.js
//  ---------------------

//  Наследование:
//
//      function Foo() {}
//      Foo.prototype.foo = function() {
//          console.log('foo');
//      };
//
//      function Bar() {}
//      nb.inherit(Bar, Foo);
//
//      var bar = Bar();
//      bar.foo();
//
nb.inherit = function(child, parent) {
    var F = function() {
    };
    F.prototype = parent.prototype;
    child.prototype = new F();
    child.prototype.constructor = child;
};

//  Расширение объекта свойствами другого объекта(ов):
//
//      var foo = { foo: 42 };
//      nb.extend( foo, { bar: 24 }, { boo: 66 } );
//
nb.extend = function(dest) {
    var srcs = [].slice.call(arguments, 1);

    for (var i = 0, l = srcs.length; i < l; i++) {
        var src = srcs[i];
        for (var key in src) {
            dest[key] = src[key];
        }
    }

    return dest;
};

//  nb.node
//  -------

var nb = nb || {};

(function() {

    nb.node = {};

//  ---------------------------------------------------------------------------------------------------------------  //

    nb.node.data = function(node, key, value) {
        //  Возвращаем или меняем data-атрибут.
        if (key) {
            if (value !== undefined) {
                node.setAttribute('data-nb-' + key, value);
            } else {
                return parseValue(node.getAttribute('data-nb-' + key) || '');
            }
        } else {
            //  Возвращаем все data-атрибуты.
            var data = {};

            var attrs = node.attributes;
            var r;
            for (var i = 0, l = attrs.length; i < l; i++) {
                var attr = attrs[i];
                if (( r = /^data-nb-(.+)/.exec(attr.name) )) {
                    data[ r[1] ] = parseValue(attr.value);
                }
            }

            return data;
        }

        function parseValue(value) {
            var ch = value.charAt(0);
            return (ch === '[' || ch === '{') ? eval('(' + value + ')') : value;
        }
    };

//  ---------------------------------------------------------------------------------------------------------------  //

//  Работа с модификаторами.

//  Получить модификатор.
    nb.node.getMod = function(node, name) {
        return nb.node.setMod(node, name);
    };

    var modCache = {};

//  Установить/получить/удалить модификатор.
    nb.node.setMod = function(node, name, value) {
        //  Например, name равно popup_to. В bem-терминах это значит, что имя блока popup, а модификатора to.
        //  Ищем строки вида popup_to_left и popup_to (в этом случае, значение модификатора -- true).
        var rx = modCache[name] || (( modCache[name] = RegExp('(?:^|\\s+)' + name + '(?:_([\\w-]+))?(?:$|\\s+)') ));

        var className = node.className;

        if (value === undefined) {
            //  Получаем модификатор.

            var r = rx.exec(className);
            //  Если !r (т.е. r === null), значит модификатора нет вообще, возвращаем '' (FIXME: или нужно возвращать null?).
            //  Если r[1] === undefined, это значит модификатор со значением true.
            return (r) ? ( (r[1] === undefined) ? true : r[1] ) : '';

        } else {
            //  Удаляем старый модификатор, если он там был.
            className = className.replace(rx, ' ').trim();

            //  Тут недостаточно просто if (value) { ... },
            //  потому что value может быть нулем.
            if (value !== false && value !== '') {
                //  Устанавливаем новое значение.
                //  При этом, если значение true, то просто не добавляем часть после _.
                className += ' ' + name + ( (value === true) ? '' : '_' + value );
            }
            node.className = className;

        }
    };

//  Удалить модификатор.
    nb.node.delMod = function(node, name) {
        nb.node.setMod(node, name, false);
    };

//  ---------------------------------------------------------------------------------------------------------------  //

})();

(function() {

//  ---------------------------------------------------------------------------------------------------------------  //

//  Информация про все объявленные блоки.
    var _factories = {};

//  Список всех уже повешенных на document событий.
    var _docEvents = {};

//  Список всех поддерживаемых DOM-событий.
    var _domEvents = [
        'click',
        'dblclick',
        'mouseup',
        'mousedown',
        'keydown',
        'keypress',
        'keyup',
        'input',
        'change',

        // local: вешаются напрямую на ноду блока / подноду блока по селектору
        'blur',

        /*
         FIXME: Сейчас эти события называются mouseover и mouseout.
         'mouseenter',
         'mouseleave',
         */
        'mouseover',
        'mouseout',
        'focusin',
        'focusout'
    ];

//  Regexp для строк вида 'click', 'click .foo'.
    var _rx_domEvents = new RegExp('^(' + _domEvents.join('|') + ')\\b\\s*(.*)?$');

//  Автоинкрементный id для блоков, у которых нет атрибута id.
    var _id = 0;

//  Кэш проинициализированных блоков.
//  По id ноды хранится хэш с блоками на ноде.
//  Пример: { 'button-id': { 'popup-toggler': {}, 'counter': {} } }
    var _cache = {};

//  Получает название блока по ноде.
    var _getName = function(node) {
        var _data_nb = node.getAttribute('data-nb');
        return _data_nb ? _data_nb.trim().replace(/\s+/g, ' ') : _data_nb;
    };

    var _getNames = function(name) {
        return name.split(/\s+/);
    };

//  ---------------------------------------------------------------------------------------------------------------  //

//  Block
//  --------

//  Базовый класс для блоков. В явном виде не используется.
//  Все реальные блоки наследуются от него при помощи функции nb.define.

    var Block = function() {
    };

//  ---------------------------------------------------------------------------------------------------------------  //

//  Публичные методы и свойства блоков
//  ----------------------------------

//  Публичные свойства:
//
//    * name -- имя блока.
//    * node -- html-нода, на которой был проинициализирован блок.

//  Публичные методы у Block:
//
//    * on, off, trigger        -- методы для работы с событиями (кастомными и DOM).
//    * nbdata                  -- получает/меняет/удаляет data-nb-атрибуты блока.
//    * show, hide              -- показывает/прячет блок.
//    * getMod, setMod, delMod  -- методы для работы с модификаторами.

//  ---------------------------------------------------------------------------------------------------------------  //

//  Сам конструктор пустой для удобства наследования,
//  поэтому вся реальная инициализация тут.
    Block.prototype.__init = function(node) {
        //  Нода блока.
        this.node = node;

        //  Обработчики кастомных событий.
        this.__handlers = {};

        //  Развешиваем обработчики кастомных событий.
        this.__bindEvents();

        //  Возможность что-то сделать сразу после инициализации.
        this.trigger('init');

        //  Отправляем в "космос" сообщение, что блок проинициализирован.
        //  Проверка space нужна для того, чтобы при создании самого space не происходило ошибки.
        //  FIXME: Сделать поддержку специального атрибута, например, data-nb-inited-key, который, если есть,
        //  используется вместо id. Нужно для нескольких одинаковых блоков (у которых id, очевидно, разные).
        if (space) {
            nb.trigger('inited:' + this.id, this);
        }
    };

//  ---------------------------------------------------------------------------------------------------------------  //

//  Вешаем кастомные (не DOM) события на экземпляр блока.
    Block.prototype.__bindEvents = function() {
        var that = this;

        //  Информация про события блока лежат в его factory.
        var mixinEvents = Factory.get(this.name).events;

        //  Вешаем события для каждого миксина отдельно.
        for (var i = 0, l = mixinEvents.length; i < l; i++) {
            var events = mixinEvents[i].custom;
            var local = mixinEvents[i].local;

            for (var event in events) {
                (function(handlers) {
                    that.__bindCustomEvent(event, function(e, params) {

                        //  Перебираем обработчики справа налево: самый правый это обработчик самого блока,
                        //  затем родительский и т.д.
                        for (var i = handlers.length; i--;) {
                            var r = handlers[i].call(that, e, params);
                            //  false означает, что нужно прекратить обработку и не баблиться дальше,
                            //  а null -- что просто прекратить обработку (т.е. не вызывать унаследованные обработчики).
                            if (r === false || r === null) {
                                return r;
                            }
                        }
                    });
                })(events[event]);
            }

            //  Навешиваем локальные обработчики (напрямую на ноды).
            //  Для этого вначале собираем строки вида `event selector`
            for (var event in local) {
                for (var selector in local[event]) {
                    var suffix = (selector || '').length ? (' ' + selector) : '';
                    var eventDefinition = event + suffix;
                    var handlers = local[event][selector];
                    for (var i = 0; i < handlers.length; i++) {
                        (function(handler) {
                            that.on(eventDefinition, function() {
                                handler.apply(that, arguments);
                            });
                        }(handlers[i]));
                    }
                }
            }
        }
    };

//  ---------------------------------------------------------------------------------------------------------------  //

//  Удаляем блок.
    Block.prototype.nbdestroy = function() {

        var mixinEvents = Factory.get(this.name).events;

        for (var i = 0, l = mixinEvents.length; i < l; i++) {
            //  Снимаем все кастомные события.
            for (var event in mixinEvents[i].custom) {
                this.off(event);
            }
            //  Снимаем все локальные события.
            for (var event in mixinEvents[i].local) {
                this.off(event);
            }
        }

        //  Удалем блок из кэша.
        _cache[this.id] = null;

    };

//  ---------------------------------------------------------------------------------------------------------------  //

//  Работа с событиями
//  ------------------

//  Каждый блок реализует простейший pub/sub + возможность вешать DOM-события.

//  Возвращает список обработчиков события name.
//  Если еще ни одного обработчика не забинжено, возвращает (и сохраняет) пустой список.
    Block.prototype.__getHandlers = function(name) {
        var handlers = this.__handlers;

        return handlers[name] || (( handlers[name] = [] ));
    };

//  Подписываем обработчик handler на событие name.
//  При этом name может быть вида:
//
//    * 'click'         -- обычное DOM-событие.
//    * 'click .foo'    -- DOM-событие с уточняющим селектором.
//    * 'init'          -- кастомное событие.
//
//  DOM-события вешаются на ноду блока.
//  Помимо этого, есть еще возможность подписаться на DOM-события,
//  повешенные на document (см. nb.define).
//
    Block.prototype.on = function(name, handler) {
        var r = _rx_domEvents.exec(name);
        if (r) {
            //  DOM-событие.

            //  В r[1] тип события (например, click), в r[2] необязательный селектор.
            $(this.node).on(r[1], r[2] || '', handler);
        } else {
            //  Кастомное событие.

            this.__bindCustomEvent(name, handler);
        }

        return handler;
    };

    Block.prototype.__bindCustomEvent = function(name, handler) {
        this.__getHandlers(name).push(handler);
    };

//  Отписываем обработчик handler от события name.
//  Если не передать handler, то удалятся вообще все обработчики события name.
//  Типы событий такие же, как и в on().
    Block.prototype.off = function(name, handler) {
        var r = _rx_domEvents.exec(name);
        if (r) {
            //  DOM-событие.

            $(this.node).off(r[1], r[2] || '', handler);
        } else {
            //  Кастомное событие.

            if (handler) {
                var handlers = this.__getHandlers(name);
                //  Ищем этот хэндлер среди уже забинженных обработчиков этого события.
                var i = handlers.indexOf(handler);

                //  Нашли и удаляем этот обработчик.
                if (i !== -1) {
                    handlers.splice(i, 1);
                }
            } else {
                //  Удаляем всех обработчиков этого события.
                this.__handlers[name] = null;
            }
        }
    };

//  "Генерим" кастомное событие name.
//  Т.е. вызываем по очереди (в порядке подписки) все обработчики события name.
//  В каждый передаем name и params.
    Block.prototype.trigger = function(name, params) {
        //  Копируем список хэндлеров. Если вдруг внутри какого-то обработчика будет вызван off(),
        //  то мы не потеряем вызов следующего обработчика.
        var handlers = this.__getHandlers(name).slice();

        for (var i = 0, l = handlers.length; i < l; i++) {
            //  Вызываем обработчик в контексте this.
            handlers[i].call(this, name, params);
        }
    };

//  ---------------------------------------------------------------------------------------------------------------  //

//  Метод возвращает или устанавливает значение data-атрибута блока.
//  Блок имеет доступ (через этот метод) только к data-атрибутам с префиксом nb-.
//  Как следствие, атрибут data-nb недоступен -- он определяет тип блока
//  и менять его не рекомендуется в любом случае.
//
//  Если вызвать метод без аргументов, то он вернет объект со всеми data-атрибутами.
//
    Block.prototype.nbdata = function(key, value) {
        return nb.node.data(this.node, key, value);
    };

//  ---------------------------------------------------------------------------------------------------------------  //

//  Показываем блок.
    Block.prototype.show = function() {
        $(this.node).removeClass('nb-is-hidden');
        this.trigger('show');
    };

//  Прячем блок.
    Block.prototype.hide = function() {
        $(this.node).addClass('nb-is-hidden');
        this.trigger('hide');
    };

//  ---------------------------------------------------------------------------------------------------------------  //

//  Работа с модификаторами
//  -----------------------

//  Получить модификатор.
    Block.prototype.getMod = function(name) {
        return nb.node.setMod(this.node, name);
    };

//  Установить модификатор.
    Block.prototype.setMod = function(name, value) {
        nb.node.setMod(this.node, name, value);
    };

//  Удалить модификатор.
    Block.prototype.delMod = function(name) {
        nb.node.setMod(this.node, name, false);
    };

//  ---------------------------------------------------------------------------------------------------------------  //

//  Возвращает массив блоков, находящихся внутри блока.
//  Вариант для применения:
//
//      block.children.forEach(function(block) {
//          block.trigger('init');
//      });
//
    Block.prototype.children = function() {
        var children = [];

        //  Ищем все ноды с атрибутом data-nb. Это потенциальные блоки.
        var $nodes = $(this.node).find('[data-nb]');
        for (var i = 0, l = $nodes.length; i < l; i++) {
            children = children.concat(nb.blocks($nodes[i]));
        }

        return children;
    };

//  Чтобы можно было вызывать методы базового класса.
    nb.Block = Block;

//  ---------------------------------------------------------------------------------------------------------------  //

//  Factory
//  -------

//  Для каждого типа блока ( == вызова nb.define) создается специальный объект,
//  который хранит в себе информацию про конструктор и события, на которые подписывается блок.
//  Кроме того, factory умеет создавать экземпляры нужных блоков.

//  Конструктор.
    var Factory = function(name, ctor, events) {
        this.name = name;

        ctor.prototype.name = name;
        this.ctor = ctor;

        this.events = this._prepareEvents(events);
    };

//  ---------------------------------------------------------------------------------------------------------------  //

//  Делим события на DOM и кастомные и создаем объект this.events,
//  в котором хранится информация про события и их обработчики,
//  с примерно такой структурой:
//
//      //  Каждый элемент массива соответствует одному миксину.
//      //  В случае простых блоков в массиве будет ровно один элемент.
//      [
//          {
//              //  DOM-события.
//              dom: {
//                  //  Тип DOM-события.
//                  click: {
//                      //  Селектор DOM-события (может быть пустой строкой).
//                      '': [
//                          //  Этот массив -- это обработчики для блока и его предков.
//                          //  Для "простых" блоков (без наследования), в массиве всегда один хэндлер.
//                          handler1,
//                          handler2,
//                          ...
//                      ],
//                      '.foo': [ handler3 ],
//                      ...
//                  },
//                  ...
//              },
//              //  Кастомные события.
//              custom: {
//                  'open': [ handler4, handler5 ],
//                  ...
//              }
//          }
//      ]
//
//  В общем есть два типа комбинирования классов:
//
//    * Миксины. Каждый миксин добавляет один объект во внешний массив.
//    * Расширение. Каждое расширение добавляет обработчики во внешние массивы.
//
    Factory.prototype._prepareEvents = function(events) {
        events = events || {};

        var proto = this.ctor.prototype;

        //  Делим события на DOM и кастомные.
        var dom = {};
        var custom = {};
        var local = {};

        for (var event in events) {
            //  Матчим строки вида 'click' или 'click .foo'.
            var r = _rx_domEvents.exec(event);
            var handlers, key;
            if (r) {
                //  Тип DOM-события, например, click.
                var type = r[1];

                if (type === 'blur') {
                    //  Тут те события, которые нужно слушать на конкретной ноде.
                    handlers = local[type] || (( local[type] = {} ));
                } else {
                    //  Тут все события, которые можно слушать на документе.
                    handlers = dom[type] || (( dom[type] = {} ));
                }

                //  Селектор.
                key = r[2] || '';

            } else {
                handlers = custom;
                key = event;
            }

            var handler = events[event];

            //  handlers и key определяют, где именно нужно работать с handler.
            //  Скажем, если event это 'click .foo' или 'init', то это будут соответственно
            //  dom['click']['.foo'] и custom['init'].

            //  Строки превращаем в "ссылку" на метод.
            //  При этом, даже если мы изменим прототип (при наследовании, например),
            //  вызываться будут все равно правильные методы.
            if (typeof handler === 'string') {
                handler = proto[handler];
            }

            if (handler === null) {
                //  @doc
                //  Особый случай, бывает только при наследовании блоков.
                //  null означает, что нужно игнорировать родительские обработчики события.
                handlers[key] = null;
            } else {
                //  Просто добавляем еще один обработчик.
                handlers = handlers[key] || (( handlers[key] = [] ));
                handlers.push(handler);
            }

        }

        //  Для всех типов DOM-событий этого класса вешаем глобальный обработчик на document.
        for (var type in dom) {
            //  При этом, запоминаем, что один раз мы его уже повесили и повторно не вешаем.
            if (!_docEvents[type]) {
                $(document).on(type, function(e) {
                    //  Все обработчики вызывают один чудо-метод:

                    //  https://github.com/nanoblocks/nanoblocks/issues/48
                    //  Цельнотянуто из jquery:
                    //
                    //  Make sure we avoid non-left-click bubbling in Firefox (#3861)
                    if (e.button && e.type === 'click') {
                        return;
                    }

                    return Factory._onevent(e);
                });

                _docEvents[type] = true;
            }
        }

        //  На локальные события блок подписывается только после создания, потому что только в этот момент создаются настоящие ноды.

        //  Возвращаем структуру, которая будет сохранена в this.events.
        return [
            {
                dom: dom,
                custom: custom,
                local: local
            }
        ];

    };

//  ---------------------------------------------------------------------------------------------------------------  //

//  Создаем экземпляр соответствующего класса на переданной ноде node.
//  Опциональный параметр events позволяет сразу навесить на экземпляр блока
//  дополнительных событий (помимо событий, объявленных в nb.define).
    Factory.prototype.create = function(node, events) {

        var id = node.getAttribute('id');
        if (!id) {
            //  У блока нет атрибута id. Создаем его, генерим уникальный id.
            //  В следующий раз блок можно будет достать из кэша при по этому id.
            id = 'nb-' + _id++;
            node.setAttribute('id', id);
        }

        //  Инициализируем кэш для блоков ноды, если нужно.
        if (!_cache[id]) {
            _cache[id] = {};

            //  FIXME: Что будет, если node.getAttribute('data-nb') !== this.name ?
            //  FIXME: для ручных вызовов nb.block() надо будет дописывать имена блоков в атрибут data-nb
            //  У ноды каждого блока должен быть атрибут data-nb.
            if (_getName(node) === null) {
                node.setAttribute('data-nb', this.name);
            }
        }

        //  Создаём блок текущей фабрики для переданной ноды.
        if (!_cache[id][this.name]) {

            var block = new this.ctor();

            //  Инициализируем блок.
            block.id = id;
            block.__init(node);

            //  Если переданы events, навешиваем их.
            if (events) {
                for (var event in events) {
                    block.on(event, events[event]);
                }
            }

            //  Кэшируем блок. Последующие вызовы nb.block на этой же ноде
            //  достанут блок из кэша.
            _cache[id][this.name] = block;
        }

        return _cache[id][this.name];
    };

//  ---------------------------------------------------------------------------------------------------------------  //

//  Наследуем события.
//  При наследовании классов необходимо склеить список обработчиков класса
//  с соответствующим списком обработчиков родителя.
//
//      {
//          dom: {
//              'click': {
//                  '.foo': [ .... ] // handlers
//                  ...
//
//  и
//
//      {
//          custom: {
//              'init': [ ... ] // handlers
//
//
    Factory.prototype._extendEvents = function(base) {
        //  Это всегда "простой" класс (т.е. не миксин), так что всегда берем нулевой элемент.
        var t_dom = this.events[0].dom;
        var b_dom = base.events[0].dom;

        //  Конкатим обработчиков DOM-событий.
        for (var event in b_dom) {
            extend(t_dom[event] || (( t_dom[event] = {} )), b_dom[event]);
        }

        //  Конкатим обработчиков кастомных событий.
        extend(this.events[0].custom, base.events[0].custom);

        function extend(dest, src) {
            for (var key in src) {
                var s_handlers = src[key];
                var d_handlers = dest[key];

                //  Если встречаем null, это значит, что нужно все родительские обработчики выкинуть.
                dest[key] = (d_handlers === null) ? [] : s_handlers.concat(d_handlers || []);
            }
        }

    };

//  ---------------------------------------------------------------------------------------------------------------  //

//  Единый live-обработчик всех DOM-событий.
    Factory._onevent = function(e) {
        var type = e.type;

        //  Нода, на которой произошло событие.
        var origNode = e.target;

        //  Для mouseover/mouseout событий нужна особая обработка.
        var isHover = (type === 'mouseover' || type === 'mouseout');
        //  В случае isHover, это нода, из которой (в которую) переместили указатель мыши.
        var fromNode = e.relatedTarget;

        //  Эти переменные условно "глобальные".
        //  Они все используются нижеописанными функциями, которые имеют побочные эффекты.
        //
        //  Очередной отрезок (см. комментарии ниже).
        var nodes;
        //  Длина массива nodes.
        var n;
        //  Массив с соответствующими $(node) для nodes.
        var $nodes;
        //  Текущая нода блока.
        var blockNode;
        //  Текущее имя блока.
        var name;
        //  Текущая фабрика блоков.
        var factory;

        //  Мы проходим вверх по DOM'у, начиная от e.target до самого верха (<html>).
        //  Пытаемся найти ближайший блок, внутри которого случилось событие и
        //  у которого есть событие, подходящее для текущей ноды.

        //  Переменная цикла.
        var node = origNode;

        //  Оригинальная нода тоже имеет право на события!
        nodes = [];
        $nodes = [];
        n = nodes.length;

        while (1) {
            //  Цепочку нод от e.target до <html> мы разбиваем на отрезки,
            //  по границам блоков. Например:
            //
            //      <html> <!-- node5 -->
            //          <div data-nb="foo"> <!-- node4 -->
            //              <div> <!-- node3 -->
            //                  <div data-nb="bar"> <!-- node2 -->
            //                      <div> <!-- node1 -->
            //                          <span>Hello</span> <!-- node0 -->
            //
            //  Событие случилось на node0 (она же e.target).
            //  Тогда первый отрезок это [ node0, node1, node2 ], второй [ node3, node4 ], ...
            //
            //  Функция findBlockNodes возращает true, если очередной отрезок удалось найти,
            //  и false, если дошли до самого верха, не найдя больше нод блоков.
            //  При этом, она устанавливает значения переменных nodes, n, $nodes, blockNode, name, factory.
            if (!findBlockNodes()) {
                //  Все, больше никаких блоков выше node нет.
                break;
            }

            var names = _getNames(name);
            var r = true;

            for (var j = 0; j < names.length; j++) {

                //  Название текущего проверяемого блока.
                var blockName = names[j];

                //  Мы собрали в nodes все ноды внутри блока с именем name.
                factory = Factory.get(blockName);
                //  Берем все события, на которые подписан этот блок.
                var mixinEvents = factory.events;

                //  Для каждого миксина проверяем все ноды из nodes.
                for (var i = 0, l = mixinEvents.length; i < l; i++) {
                    //  Пытаемся найти подходящее событие для node среди всех событий миксина.
                    if (checkEvents(blockName, mixinEvents[i].dom[type]) === false) {
                        //  Если обработчик вернул false выше текущей ноды обработка события не пойдёт.
                        //  Но на данной ноде событие послушают все блоки.
                        r = false;
                    }
                }
            }

            //  Нашли подходящий блок, один из обработчиков события этого блока вернул false.
            //  Значит все, дальше вверх по DOM'у не идем. Т.е. останавливаем "баблинг".
            if (!r) {
                return false;
            }

            //  В случае hover-события с определенным fromNode можно останавливаться после первой итерации.
            //  fromNode означает, что мышь передвинули с одной ноды в другую.
            //  Как следствие, это событие касается только непосредственно того блока,
            //  внутри которого находится e.target. Потому что остальные блоки обработали этот ховер
            //  во время предыдущего mouseover/mouseout.
            //
            //  А вот в случае, когда fromNode === null (возможно, когда мышь передвинули, например,
            //  с другого окна в центр нашего окна), все блоки, содержащие e.target должны обработать ховер.
            if (fromNode) {
                return;
            }

            //  Догоняем список нод текущей нодой блока.
            nodes.push(node);
            $nodes.push($(node));
            n = nodes.length;

            //  Идем еще выше, в новый блок.
            node = node.parentNode;
        }

        function findBlockNodes() {
            //  Сбрасываем значения на каждой итерации.
            blockNode = null;

            var parent;
            //  Идем по DOM'у вверх, начиная с node и заканчивая первой попавшейся нодой блока (т.е. с атрибутом data-nb).
            //  Условие о наличии parentNode позволяет остановиться на ноде <html>.
            while (( parent = node.parentNode )) {
                if (( name = _getName(node) )) {
                    blockNode = node;
                    break;
                }
                //  При этом в nodes запоминаем только ноды внутри блока.
                nodes.push(node);
                node = parent;
            }

            if (blockNode) {
                if (isHover && fromNode) {
                    //  Мы передвинули указатель мыши с одной ноды на другую.
                    //  Если e.target это и есть нода блока, то внутренних (nodes) нод нет вообще и
                    //  нужно проверить только саму ноду блока. Либо же нужно проверить одну
                    //  внутреннюю ноду (e.target) и ноду блока.
                    nodes = (origNode === blockNode) ? [] : [ origNode ];
                }
                n = nodes.length;

                return true;
            }
        }

        //  Проверяем все ноды из nodes и отдельно blockNode.
        //  blockName название блока, для которого выполняется проверка
        function checkEvents(blockName, events) {
            if (!events) {
                return;
            }

            var R;
            //  Проверяем, матчатся ли ноды какие-нибудь ноды из nodes на какие-нибудь
            //  селекторы из событий блока.
            var node, $node;
            for (var i = 0; i < n; i++) {
                node = nodes[i];
                //  Лениво вычисляем $node.
                $node = $nodes[i] || (( $nodes[i] = $(node) ));

                for (var selector in events) {
                    //  Проверяем, матчится ли нода на селектор.
                    if (
                    //  Во-первых, для внутренних нод блока должен быть селектор и нода должна ему соответствовать.
                        selector && $node.is(selector) &&
                            //  Во-вторых, для ховер-событий нужен отдельный костыль,
                            //  "преобразующий" события mouseover/mouseout в mouseenter/mouseleave.
                            !(
                                //  Если мы пришли из ноды fromNode,
                                isHover && fromNode &&
                                    //  то она должна лежать вне этой ноды.
                                    $.contains(node, fromNode)
                                )
                        ) {
                        //  Вызываем обработчиков событий.
                        var r = doHandlers(node, blockName, events[selector]);
                        if (r === false) {
                            R = r;
                        }
                    }
                }

                //  Стоп "баблинг"! В смысле выше по DOM'у идти не нужно.
                if (R === false) {
                    return R;
                }
            }

            //  Отдельно обрабатываем ситуацию, когда node === blockNode.
            //  В этом случае мы смотрим только события без селекторов.
            //  События с селектором относятся только к нодам строго внутри блока.
            var handlers = events[''];
            //  Опять таки костыль для ховер-событий.
            if (handlers && !( isHover && fromNode && $.contains(blockNode, fromNode))) {
                return doHandlers(blockNode, blockName, handlers);
            }
        }

        function doHandlers(node, blockName, handlers) {
            //  Блок создаем только один раз и только, если мы таки дошли до сюда.
            //  Т.е. если мы нашли подходящее для node событие.
            var block = factory.create(blockNode);

            //  В handlers лежит цепочка обработчиков этого события.
            //  Самый последний обработчик -- это обработчик собственно этого блока.
            //  Перед ним -- обработчик предка и т.д.
            //  Если в nb.define не был указан базовый блок, то длина цепочки равна 1.
            for (var i = handlers.length; i--;) {
                //  В обработчик передаем событие и ноду, на которой он сработал.
                var r = handlers[i].call(block, e, node);
                //  Обработчик вернул false или null, значит оставшиеся обработчики не вызываем.
                //  При этом false означает, что не нужно "баблиться" выше по DOM'у.
                if (r === false) {
                    return false;
                }
                if (r === null) {
                    break;
                }
            }
        }
    };

//  ---------------------------------------------------------------------------------------------------------------  //

//  Достаем класс по имени.
    Factory.get = function(name) {
        return _factories[name];
    };

//  ---------------------------------------------------------------------------------------------------------------  //

//  Интерфейсная часть
//  ------------------

//  Возвращает информацию про то, инициализирован ли блок на ноде.
//  @param {Element} node Нода, для которой выполняется проверка.
//  @param {string=} blockName (optional) Имя блока, созданность которого проверяется.
    nb.hasBlock = function(node, blockName) {
        var id = node.getAttribute('id');
        return !!(id && _cache[id] && (!blockName || _cache[id][blockName]));
    };

//  Если передано название блока, создаётся блок этого типа на ноде. Возвращается созданный блок.
//  Если не передано название блока, создаются все блоки на переданной ноде и возвращается первый из созданных блоков.
//
//      var popup = nb.block( document.getElementById('popup') );
//
    nb.block = function(node, events, blockName) {
        var name = _getName(node);
        if (!name) {
            //  Эта нода не содержит блока. Ничего не делаем.
            return null;
        }

        //  Если указано имя блока - инициализируем и возвращаем только его.
        if (blockName) {
            return Factory.get(blockName).create(node, events);
        }

        //  Инициализируем все блоки на ноде.
        //  Возвращаем первый из списка блоков.
        return nb.blocks(node, events)[0];
    };

//  Метод создает и возвращает все блоки на переданной ноде:
//
//      var popup = nb.blocks( document.getElementById('popup') );
//
    nb.blocks = function(node, events) {
        var name = _getName(node);
        if (!name) {
            return [];
        }

        //  Инициализируем все блоки на ноде.
        //  Возвращаем первый из списка блоков.
        var names = _getNames(name);
        var blocks = [];
        for (var i = 0; i < names.length; i++) {
            blocks.push(Factory.get(names[i]).create(node, events));
        }
        return blocks;
    };

//  Находим ноду по ее id, создаем на ней блок и возвращаем его.
    nb.find = function(id) {
        var node = document.getElementById(id);
        if (node) {
            return nb.block(node);
        }
    };

//  ---------------------------------------------------------------------------------------------------------------  //

//  Метод определяет новый блок (точнее класс):
//
//      nb.define('popup', {
//          //  События, на которые реагирует блок.
//          events: {
//              'click': 'onclick',             //  DOM-событие.
//              'click .close': 'onclose',      //  DOM-событие с уточняющим селектором.
//              'open': 'onopen',               //  Кастомное событие.
//              'close': function() { ... }     //  Обработчик события можно задать строкой-именем метода, либо же функцией.
//              ...
//          },
//
//          //  Дополнительные методы блока.
//          'onclick': function() { ... },
//          ...
//      });
//
    nb.define = function(name, methods, base) {
        if (typeof name !== 'string') {
            //  Анонимный блок.

            //  Сдвигаем параметры.
            base = methods;
            methods = name;
            //  Генерим ему уникальное имя.
            name = 'nb-' + _id++;
        }

        if (base) {
            base = Factory.get(base);
        }

        //  Вытаскиваем из methods информацию про события.
        var events = methods.events;
        //  Оставляем только методы.
        delete methods.events;

        //  Пустой конструктор.
        var ctor = function() {
        };
        //  Наследуемся либо от дефолтного конструктора, либо от указанного базового.
        nb.inherit(ctor, (base) ? base.ctor : Block);
        //  Все, что осталось в methods -- это дополнительные методы блока.
        nb.extend(ctor.prototype, methods);

        var factory = new Factory(name, ctor, events);

        //  Если указан базовый блок, нужно "склеить" события.
        if (base) {
            factory._extendEvents(base);
        }

        //  Сохраняем для дальнейшего применения.
        //  Достать нужную factory можно вызовом Factory.get(name).
        _factories[name] = factory;

        return factory;
    };

//  ---------------------------------------------------------------------------------------------------------------  //

//  Неленивая инициализация.
//  Находим все ноды с классом _init и на каждой из них инициализируем блок.
//  По-дефолту ищем ноды во всем документе, но можно передать ноду,
//  внутри которой будет происходить поиск. Полезно для инициализации динамически
//  созданных блоков.
    nb.init = function(where) {
        where = where || document;

        var nodes = $(where).find('._init').addBack().filter('._init'); // XXX
        for (var i = 0, l = nodes.length; i < l; i++) {
            nb.block(nodes[i]);
        }
    };

//  FIXME метод странный, потому что от него ожидаешь, что он найдёт все блоки внутри ноды и кильнёт их, а он ищет по классу _init только.
//  FIXME тест на то, что подписанные обработчики отписались
    nb.destroy = function(where) {
        where = where || document;

        var nodes = $(where).find('._init').addBack().filter('._init');
        for (var i = 0, l = nodes.length; i < l; i++) {
            var node = nodes[i];
            var id = node.getAttribute('id');
            var blocks = _cache[id];
            if (blocks) {
                for (var name in blocks) {
                    blocks[name].destroy();
                }
            }
        }
    };

//  ---------------------------------------------------------------------------------------------------------------  //

//  Создаем "космос".
//  Физически это пустой блок, созданный на ноде html.
//  Его можно использовать как глобальный канал для отправки сообщений
//  и для навешивания разных live-событий на html.
    var space = nb.define({
        events: {
            'click': function(e) {
                nb.trigger('space:click', e.target);
            }
        }
    }).create(document.getElementsByTagName('html')[0]);

    nb.on = function(name, handler) {
        return space.on(name, handler);
    };

    nb.off = function(name, handler) {
        space.off(name, handler);
    };

    nb.trigger = function(name, params) {
        space.trigger(name, params);
    };

//  ---------------------------------------------------------------------------------------------------------------  //

//  Определение  модуля, в котором находится шаблон YATE для наноостровов
    nb.getYateModuleName = function() {
        return 'main';
    }

})();

