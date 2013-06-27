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
    var F = function() {};
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

nb.node = {};

(function() {

//  ---------------------------------------------------------------------------------------------------------------  //

nb.node.data = function(node, key, value) {
    //  Возвращаем или меняем data-атрибут.
    if (key) {
        if (value !== undefined) {
            node.setAttribute('data-nb-' + key, value);
        } else {
            return parseValue( node.getAttribute('data-nb-' + key) || '' );
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
        return (ch === '[' || ch === '{') ? eval( '(' + value + ')' ) : value;
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
    'change',
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
var _rx_domEvents = new RegExp( '^(' + _domEvents.join('|') + ')\\b\\s*(.*)?$' );

//  Автоинкрементный id для блоков, у которых нет атрибута id.
var _id = 0;
//  Кэш проинициализированных блоков.
var _cache = {};

//  ---------------------------------------------------------------------------------------------------------------  //

//  Block
//  --------

//  Базовый класс для блоков. В явном виде не используется.
//  Все реальные блоки наследуются от него при помощи функции nb.define.

var Block = function() {};

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
//    * data                    -- получает/меняет/удаляет data-nb-атрибуты блока.
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

        for (var event in events) {
            (function(handlers) {
                that.__bindCustomEvent(event, function(e, params) {

                    //  Перебираем обработчики справа налево: самый правый это обработчик самого блока,
                    //  затем родительский и т.д.
                    for (var i = handlers.length; i--; ) {
                        var r = handlers[i].call(that, e, params);
                        //  false означает, что нужно прекратить обработку и не баблиться дальше,
                        //  а null -- что просто прекратить обработку (т.е. не вызывать унаследованные обработчики).
                        if (r === false || r === null) { return r; }
                    }
                });
            })( events[event] );
        }
    }
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

        //  В r[1] тип события (например, click), в r[2] необязательный селекторо.
        $(this.node).on( r[1], r[2] || '', handler );
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

        $(this.node).off( r[1], r[2] || '', handler );
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
Block.prototype.data = function(key, value) {
    return nb.node.data(this.node, key, value);
};

//  ---------------------------------------------------------------------------------------------------------------  //

//  Показываем блок.
Block.prototype.show = function() {
    $(this.node).removeClass('_hidden');
    this.trigger('show');
};

//  Прячем блок.
Block.prototype.hide = function() {
    $(this.node).addClass('_hidden');
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
        //  Пробуем создать блок.
        var block = nb.block( $nodes[i] );
        if (block) {
            children.push(block);
        }
    }

    return children;
};

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

    //  В нормальной ситуации events это объект, который необходимо еще дополнительно
    //  обработать, вызвав _prepareEvents.
    //  но при создании микс-класса, в качестве events будет передан массив с уже готовыми объектами.
    this.events = (events instanceof Array) ? events : this._prepareEvents(events);
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

    for (var event in events) {
        //  Матчим строки вида 'click' или 'click .foo'.
        var r = _rx_domEvents.exec(event);
        var handlers, key;
        if (r) {
            //  Тип DOM-события, например, click.
            var type = r[1];

            handlers = dom[type] || (( dom[type] = {} ));
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

    //  Возвращаем структуру, которая будет сохранена в this.events.
    return [
        {
            dom: dom,
            custom: custom
        }
    ];

};

//  ---------------------------------------------------------------------------------------------------------------  //

//  Создаем экземпляр соответствующего класса на переданной ноде node.
//  Опциональный параметр events позволяет сразу навесить на экземпляр блока
//  дополнительных событий (помимо событий, объявленных в nb.define).
Factory.prototype.create = function(node, events) {
    var block;

    var id = node.getAttribute('id');
    if (id) {
        //  Пытаемся достать блок из кэша по id.
        block = _cache[id];
    } else {
        //  У блока нет атрибута id. Создаем его, генерим уникальный id.
        //  В следующий раз блок можно будет достать из кэша при по этому id.
        id = 'nb-' + _id++;
        node.setAttribute('id', id);
    }

    if (!block) {
        //  Блока в кэше нет. Создаем его.

        //  FIXME: Что будет, если node.getAttribute('data-nb') !== this.name ?
        //  У ноды каждого блока должен быть атрибут data-nb.
        if ( node.getAttribute('data-nb') === null ) {
            node.setAttribute('data-nb', this.name);
        }

        block = new this.ctor(node);

        //  Инициализируем блок.
        block.__init(node);

        //  Если переданы events, навешиваем их.
        if (events) {
            for (var event in events) {
                block.on( event, events[event] );
            }
        }

        //  Кэшируем блок. Последующие вызовы nb.block на этой же ноде
        //  достанут блок из кэша.
        _cache[id] = block;
    }

    return block;
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
        extend( t_dom[event] || (( t_dom[event] = {} )), b_dom[event] );
    }

    //  Конкатим обработчиков кастомных событий.
    extend( this.events[0].custom, base.events[0].custom );

    function extend(dest, src) {
        for (var key in src) {
            var s_handlers = src[key];
            var d_handlers = dest[key];

            //  Если встречаем null, это значит, что нужно все родительские обработчики выкинуть.
            dest[key] = (d_handlers === null) ? [] : s_handlers.concat( d_handlers || [] );
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
    //  Текущий блок. Создание блока откладывается как можно дальше.
    //  До тех пор, пока точно не будет понятно, что найдена нода,
    //  подходящая для одного из DOM-событий блока.
    var block;

    //  Мы проходим вверх по DOM'у, начиная от e.target до самого верха (<html>).
    //  Пытаемся найти ближайший блок, внутри которого случилось событие и
    //  у которого есть событие, подходящее для текущей ноды.

    //  Переменная цикла.
    var node = origNode;
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
        if ( !findBlockNodes() ) {
            //  Все, больше никаких блоков выше node нет.
            break;
        }

        //  Мы собрали в nodes все ноды внутри блока с именем name.
        factory = Factory.get(name);
        //  Берем все события, на которые подписан этот блок.
        var mixinEvents = factory.events;

        //  Для каждого миксина проверяем все ноды из nodes.
        var r = true;
        for (var i = 0, l = mixinEvents.length; i < l; i++) {
            //  Пытаемся найти подходящее событие для node среди всех событий миксина.
            if ( checkEvents( mixinEvents[i].dom[type] ) === false ) {
                r = false;
            }
        }

        //  Нашли подходящий блок, один из обработчиков события этого блока вернул false.
        //  Значит все, дальше вверх по DOM'у не идем. Т.е. останавливаем "баблинг".
        if (!r) { return false; }

        //  В случае hover-события с определенным fromNode можно останавливаться после первой итерации.
        //  fromNode означает, что мышь передвинули с одной ноды в другую.
        //  Как следствие, это событие касается только непосредственно того блока,
        //  внутри которого находится e.target. Потому что остальные блоки обработали этот ховер
        //  во время предыдущего mouseover/mouseout.
        //
        //  А вот в случае, когда fromNode === null (возможно, когда мышь передвинули, например,
        //  с другого окна в центр нашего окна), все блоки, содержащие e.target должны обработать ховер.
        if (fromNode) { break; }

        //  Идем еще выше, в новый блок.
        node = node.parentNode;

    }

    function findBlockNodes() {
        //  Сбрасываем значения на каждой итерации.
        nodes = [];
        $nodes = [];
        block = null;
        blockNode = null;

        var parent;
        //  Идем по DOM'у вверх, начиная с node и заканчивая первой попавшейся нодой блока (т.е. с атрибутом data-nb).
        //  Условие о наличии parentNode позволяет остановиться на ноде <html>.
        while (( parent = node.parentNode )) {
            if (( name = node.getAttribute('data-nb') )) {
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
    function checkEvents(events) {
        if (!events) { return; }

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
                    var r = doHandlers( node, events[selector] );
                    if (r === false) {
                        R = r;
                    }
                }
            }

            //  Стоп "баблинг"! В смысле выше по DOM'у идти не нужно.
            if (R === false) { return R; }
        }

        //  Отдельно обрабатываем ситуацию, когда node === blockNode.
        //  В этом случае мы смотрим только события без селекторов.
        //  События с селектором относятся только к нодам строго внутри блока.
        var handlers = events[''];
        //  Опять таки костыль для ховер-событий.
        if ( handlers && !( isHover && fromNode && $.contains(blockNode, fromNode)) ) {
            return doHandlers(blockNode, handlers);
        }
    }

    function doHandlers(node, handlers) {
        //  Блок создаем только один раз и только, если мы таки дошли до сюда.
        //  Т.е. если мы нашли подходящее для node событие.
        block = block || factory.create(blockNode);

        //  В handlers лежит цепочка обработчиков этого события.
        //  Самый последний обработчик -- это обработчик собственно этого блока.
        //  Перед ним -- обработчик предка и т.д.
        //  Если в nb.define не был указан базовый блок, то длина цепочки равна 1.
        for (var i = handlers.length; i--; ) {
            //  В обработчик передаем событие и ноду, на которой он сработал.
            var r = handlers[i].call(block, e, node);
            //  Обработчик вернул false или null, значит оставшиеся обработчики не вызываем.
            //  При этом false означает, что не нужно "баблиться" выше по DOM'у.
            if (r === false) { return false; }
            if (r === null) { break; }
        }
    }
};

//  ---------------------------------------------------------------------------------------------------------------  //

//  Достаем класс по имени.
//  Имя может быть "простым" -- это классы, которые определены через nb.define.
//  Или "сложным" -- несколько простых классов через пробел (микс нескольких блоков).
Factory.get = function(name) {
    //  Смотрим в кэше.
    var factory = _factories[name];

    //  В кэше нет, это будет "сложный" класс, т.к. все простые точно в кэше есть.
    if (!factory) {
        //  Пустой конструктор.
        var ctor = function() {};

        var events = [];

        var names = name.split(/\s+/);
        if (names.length < 2) {
            throw "Block '" + name + "' is undefined";
        }
        for (var i = 0, l = names.length; i < l; i++) {
            //  Примиксовываем все "простые" классы.
            var mixin = Factory.get( names[i] );
            nb.inherit(ctor, mixin.ctor);

            //  Собираем массив из структур с событиями.
            //  mixin.events[0] -- здесь 0 потому, что у "простых" классов там всегда один элемент.
            events.push( mixin.events[0] );
        }

        //  Создаем новую фабрику для миксового класса.
        factory = new Factory(name, ctor, events);

        //  Запоминаем в кэше.
        _factories[name] = factory;
    }

    return factory;
};

//  ---------------------------------------------------------------------------------------------------------------  //

//  Интерфейсная часть
//  ------------------

//  Метод создает блок на заданной ноде:
//
//      var popup = nb.block( document.getElementById('popup') );
//
nb.block = function(node, events) {
    var name = node.getAttribute('data-nb');
    if (!name) {
        //  Эта нода не содержит блока. Ничего не делаем.
        return null;
    }

    return Factory.get(name).create(node, events);
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
    var ctor = function() {};
    //  Наследуемся либо от дефолтного конструктора, либо от указанного базового.
    nb.inherit( ctor, (base) ? base.ctor : Block );
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

    var nodes = $(where).find('._init');
    for (var i = 0, l = nodes.length; i < l; i++) {
        nb.block( nodes[i] );
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
}).create( document.getElementsByTagName('html')[0] );

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

//  Инициализация библиотеки
//  ------------------------

$(function() {
    //  Инициализируем все неленивые блоки.
    nb.init();
});

//  ---------------------------------------------------------------------------------------------------------------  //

})();

nb.vec = {};

//  ---------------------------------------------------------------------------------------------------------------  //

//  Складывает два вектора.
nb.vec.add = function(a, b, s) {
    s = s || 1;
    return [ a[0] + s * b[0], a[1] + s * b[1] ];
};

//  Скалярно умножает два вектора.
nb.vec.mulS = function(a, b) {
    return a[0] * b[0] + a[1] * b[1];
};

//  Умножает матрицу на вектор.
nb.vec.mulM = function(m, a) {
    return [ nb.vec.mulS(m[0], a), nb.vec.mulS(m[1], a) ];
};

//  "Растягивает" вектор. Либо на скаляр, либо на вектор.
nb.vec.scale = function(a, b) {
    b = (typeof b === 'number') ? [ b, b ] : b;
    return [ a[0] * b[0], a[1] * b[1] ];
};

//  Превращаем строку направления вида в соответствующий вектор.
//  Например, 'right top' -> (1, -1)
//
//  (l, t)       (c, t)      (r, t)
//         *-------*-------*
//         |               |
//         |               |
//  (l, c) *     (c, c)    * (r, c)
//         |               |
//         |               |
//         *-------*-------*
//  (l, b)       (c, b)      (r, b)
//
nb.vec.dir2vec = function(dir) {
    return [ nb.vec.dirs[ dir[0] ], nb.vec.dirs[ dir[1] ] ];
};

nb.vec.dirs = {
    left: -1,
    center: 0,
    right: 1,
    top: -1,
    bottom: 1
};

nb.vec.flipDir = {
    left: 'right',
    right: 'left',
    top: 'bottom',
    bottom: 'top'
};

//  ---------------------------------------------------------------------------------------------------------------  //

//  Создаем из ноды прямоугольник: верхний левый угол и вектор-диагональ.
nb.rect = function(node) {
    if (node instanceof Array) {
        return [ node, [ 0, 0 ] ];
    }

    var $node = $(node);
    var offset = $node.offset();

    return [
        [ offset.left, offset.top ],
        [ $node.outerWidth(), $node.outerHeight() ]
    ];
};

//  Сдвигает прямоугольник.
nb.rect.move = function(r, a) {
    return [ nb.vec.add(r[0], a), r[1] ];
};

//  "Нормирует" прямоугольник.
nb.rect.norm = function(r) {
    var x = r[0];
    var y = nb.vec.add( x, r[1] );

    var a = [ Math.min( x[0], y[0] ), Math.min( x[1], y[1] ) ];
    var b = [ Math.max( x[0], y[0] ), Math.max( x[1], y[1] ) ];

    return [ a, nb.vec.add(b, a, -1) ];
};

//  Трансформирует прямоугольник.
nb.rect.trans = function(r, m) {
    r = [ nb.vec.mulM( m, r[0] ), nb.vec.mulM( m, r[1] ) ];
    return nb.rect.norm(r);
};

nb.rect.dir2vec = function(r, dir) {
    //  Полудиагональ.
    var h = nb.vec.scale( r[1], 0.5 );
    //  Центр прямоугольника.
    var c = nb.vec.add( r[0], h );
    //  Вектор, указывающий из центра прямоугольника на одну из 9 точек прямоугольника.
    //  См. комментарий к nb.vec.dir2vec.
    var d = nb.vec.scale( nb.vec.dir2vec(dir), h );

    //  Одна из 9 точек.
    return nb.vec.add(c, d);
};

//  ---------------------------------------------------------------------------------------------------------------  //

//  Сдвигаем прямоугольник what относительно where так, чтобы, совпали две заданные точки привязки (их всего 9).
//  Например, правый верхний угол what совпал с левым верхним углом where.
//
//            what            where
//  *----------*----------*----*----*
//  |                     |         |
//  |                     *    *    *
//  |                     |         |
//  *          *          *----*----*
//  |                     |
//  |                     |
//  |                     |
//  *----------*----------*

//  what и where -- прямоугольники.
//  В how может быть массив вида:
//
//      [
//          'right top',    // Точка привязки для what.
//          'left top'      // Точка привязки для where.
//      ]
//
nb.rect.adjust = function(what, where, how) {
    //  Точка приложения what.
    var a = nb.rect.dir2vec(what, how.what);
    //  Точка приложение where.
    var b = nb.rect.dir2vec(where, how.where);

    //  Смещаем what на смещение от a к b.
    return {
        rect: nb.rect.move( what, nb.vec.add(b, a, -1) ),
        point: b
    };
};

