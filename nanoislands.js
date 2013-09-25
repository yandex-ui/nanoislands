/* ../libs/nanoblocks.js begin */
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

    var nodes = $(where).find('._init').addBack().filter('._init');
    for (var i = 0, l = nodes.length; i < l; i++) {
        nb.block( nodes[i] );
    }
};

nb.destroy = function(where) {
    where = where || document;

    var nodes = $(where).find('._init').addBack().filter('._init');
    for (var i = 0, l = nodes.length; i < l; i++) {
        var id = nodes[i].getAttribute('id');
        delete _cache[id];
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

/* ../libs/nanoblocks.js end */


/* button/button.js begin */
nb.define('button', {
    events: {
        'init': 'oninit',
        'textChange': 'onTextChange',
        'disable': 'onDisable',
        'enable': 'onEnable',
        'destroy': 'onDestroy'
    },

    oninit: function () {
        this.$node = $(this.node);

        $(this.node).button();
    },

    /**
     * Changes text of the button
     * @param name — event id that caused the change
     * @param params — {
     *     text: '..'
     * }
     */
    onTextChange: function (name, params) {
        if (this.$node && this.$node.data('uiButton')) {
            this.$node.find('.nb-button__text').html(params.text);
        }
    },

    /**
     * Disables the button
     */
    onDisable: function () {
        if (this.$node && this.$node.data('uiButton')) {
            this.$node.button('disable');
            this.$node.addClass('nb-button_disabled');
        }
    },

    /**
     * Enables the button
     */
    onEnable: function() {
        if (this.$node && this.$node.data('uiButton')) {
            this.$node.button('enable');
            this.$node.removeClass('nb-button_disabled');
        }
    },

    onDestroy: function() {
        // вызвали destroy в одном методе, но ссылка на кнопку была сохранена в другом
        // в результате повторный вызов и ошибка в консоли
        if (this.$node && this.$node.data('uiButton')) {
            this.$node.button('destroy');
        }
    }
});

/* button/button.js end */

/* tooltip/tooltip.js begin */
nb.define('tooltip-jq-toggler', {

    //NOTES: из-за такого определения Factory._onevent постоянно долбится событиями
    // но по другому (mouseeneter/leave) не сделать, потому что они случаться один раз на document
    // как вариант для mouseenter/leave надо делать не $document.on(event), $document.on(event, '.nb')
    events: {
        'mouseover': 'onmouseenter'
    },

    'onmouseenter': function() {
        if (this.getMod('_disabled')) {
            return true;
        }

        var data = this.data()[this.name];

        $(this.node).tooltip({
            content: data.content,
            items: '*',
            tooltipClass: "nb-tooltip nb-island nb-island_type_fly nb-island_padding_s"
        });
        $(this.node).tooltip("open");
    }

});

/* tooltip/tooltip.js end */

/* select/select.js begin */
nb.define('select', {
    events: {
        'init': 'onInit',
        'changeValue': 'onChangeValue' // { value, text }
        //'open' { event, ui}
        //'close' { event, ui}
    },

    onInit: function() {
        var that = this;
        nb.init(that);
        that.data = that.data();

        // find elements and values
        var c = that.children();
        that.button = c[0];
        that.$fallback = $(that.node).find('.nb-select__fallback');
        that.$selected = that.$fallback.children(':selected');

        that.value = that.$selected.val() ? that.$selected.text() : '';

        this.button.trigger('textChange', {
            text: that.value
        });

        // preparing control depending on configuration and content
        that.controlPrepare();
    },

    /**
     * preparing control depending on configuration and content
     */
    controlPrepare: function() {
        var that = this;
        // preparing position parameters for popup from direction data
        var position = {};
        position.collision = 'flip';

        if (that.data.direction == 'top') {
            position.my = "left bottom";
            position.at = "left top";

        } else {
            position.my = "left top";
            position.at = "left bottom";
        }

        // select JUI control init
        $(that.node).autocomplete({
            delay: 0,
            minLength: 0,
            autoFocus: false,
            position: position,
            appendTo: that.node,
            source: function(request, response) {
                response(that.$fallback.children('option').map(function() {
                    return {
                        label: $(this).text(),
                        value: $(this).val(),
                        option: this
                    };
                }));
            },
            select: function(event, ui) {
                ui.item.option.selected = true;

                that.$jUI._trigger('selected', event, {
                    item: ui.item.option
                });
            },
            // delegate handler on 'outer' click on open
            open: function(event, ui) {
                that.$jUI._on(that.$jUI.document, {
                    // on 'outer' mousedown close control
                    mousedown: function(e) {
                        if (e.which == 1 && !$.contains(that.$jUI.element.get(0), e.target)) {
                            this.close();
                        }
                    }
                })
                that.trigger('open', {
                    event: event,
                    ui: ui
                });
            },

            close: function(event, ui) {
                that.$jUI._off(that.$jUI.document, 'mousedown');
                that.trigger('close',  {
                    event: event,
                    ui: ui
                });
            }
        }).addClass('ui-widget ui-widget-content');

        that.$jUI = $(that.node).data('uiAutocomplete')

        // redefine one menu item rendering method, fires every time, then popup opening
        that.$jUI._renderItem = function(ul, item) {
            var $itemNode = $('<li class="nb-select__item"></li>');

            if (item.option.selected) {
                $itemNode.addClass('nb-select__item_selected_yes');
            }

            $itemNode.data('ui-autocomplete-item', item);
            $itemNode.append('<a><span class="nb-select__text">' + item.label + '</span></a>');
            $itemNode.appendTo(ul);

            return $itemNode;
        };

        // redefine valueMethod, extend with button text changing and fallback select value changing
        // if value not provided, return current value of fallback select
        that.$jUI.valueMethod = function(value) {
            if (value) {
               var text = that.$fallback.children('[value="' + value + '"]').text()
               that.trigger('changeValue',{
                   value: value,
                   text: text
               })
            }
            return that.$selected.val();
        };

        // add click event for button
        $(that.button.node).click(function(evt) {
            // иначе сабмитит форму при клике
            evt.preventDefault();
            // close if already visible
            if ($(that.node).autocomplete('widget').css('display') == 'block') {
                $(that.node).autocomplete('close');
                return;
            }
            // pass empty string as value to search for, displaying all results
            $(that.node).autocomplete('search', '');
            $(that.node).focus();
        });
    },

    /**
     * Changes a value of control, text on the button and select value it the fallback
     *
     * @param name — event id that caused the change
     * @param params — {
         *     text: '..'
         *     value: '..'
         * }
     */
    onChangeValue: function(name, params) {
        this.value = params.value;
        this.text = params.text;
        this.$selected.removeAttr('selected');


        this.$selected = this.$fallback.children('[value="' + this.value + '"]').attr('selected', 'selected');
        this.button.trigger('textChange', {
            text: this.text
        });

        this.$fallback.val(params.value);
    }
});



/* select/select.js end */

/* slider/slider.js begin */
nb.define('slider', {
    events: {
        'init': 'onInit',
        'changeValue': 'onChangeValue'
    },

    onInit: function() {
        var that = this;
        that.data = that.data();
        that.$fallback = $(that.node).find('.nb-slider__fallback');
        that.$control = $(that.node).children('.nb-slider__body');

        that.$fallback.attr('readonly','readonly');
        that.$control.show();

        that.$control.slider({
            range: 'min',
            value: that.data.value,
            change: function() {
                that.data.value = that.$control.slider("option", "value");
                that.onChangeValue();
            }
        });
        that.onChangeValue();
    },

    onChangeValue: function(value){
        if (value) {
            this.data.value = this.$control.slider("option", "value", value);
        }
        this.$fallback.attr('value', this.data.value);

        // Adjust the width of an input to its content
        this.$fallback.width(0);
        this.$fallback.width(this.$fallback[0].scrollWidth);
    }
});

/* slider/slider.js end */

/* radio-button/radio-button.js begin */
nb.define('radio-button', {
    events: {
         'init': 'onInit'
     },

    onInit: function() {
         this.control = $(this.node).buttonset();
    }
});
/* radio-button/radio-button.js end */

/* popup/popup.js begin */
(function() {

    /**
     * @fileOverview Надстройки nb над jQueryUI
     */

    $.nb = {};

    $.widget('nb.baseDialog', $.ui.dialog, {
        options: {
            height: 'auto',
            minHeight: 'auto',
            width: 'auto'
        },
        open: function() {
            this._super();
            var that = this;

            if (!this.options.modal) {
                this._onmousedown = function(e) {
                    if (e.which !== 1) {
                        return;
                    }

                    if ($.contains(that.uiDialog[0], e.target)) {
                        return;
                    }

                    that.close();
                };

                this.document.on('mousedown', this._onmousedown);
            }

            this._onpopupclose = nb.on('popup-close', function() {
                that.close();
            });
        },
        close: function() {
            this._super();
            this.document.off('mousedown', this._onmousedown);
            nb.off('popup-close', this._onpopupclose);
        },
        _create: function() {
            this._super();
            this.element[0].widget = this;
        },
        _destroy: function() {
            this._super();
            delete this.element[0].widget;
        },
        _createTitlebar: function() {
            this.uiDialogTitlebarClose = $();
        }
    });

    // диалог с хвостиком
    jQuery.widget('nb.contextDialog', $.nb.baseDialog, {

        tailOffset: 13,

        options: {
            tail: 'center',
            height: 'auto',
            minHeight: 'auto',
            width: 'auto',
            show: {
                effect: 'nb',
                duration: 150
            },
            hide: {
                effect: 'nb',
                duration: 150
            },
            draggable: false,
            resizable: false,
            dialogClass: 'nb-popup-outer ui-dialog-no-close',
            position: {
                my: 'center top',
                at: 'center bottom',
                // horizontal: fit, пытаемся уместить в window
                // vertical: flip - выбирает наилучший вариант - вверх или вних
                collision: "fit flip"
            }
        },

        _create: function() {
            this._super();
            var $tail = $('<div class="nb-popup__tail"><i/></div>');

            if (this.options.tail != 'center') {
                $tail.addClass('nb-popup__tail_to_' + this.options.tail);
            }

            //TODO: проверить, что вызывается один раз
            $tail.prependTo(this.uiDialog);
        },

        _position: function() {
            var position = this.options.position;
            this._super();

            var $handler = position.of;
            var handlerOffset = $handler.offset();

            //TODO: вот этого this.uiDialog.css('top', '+=13px'); можно не делать, если сразу в position писать {at: 'center top+13'}
            // положение надо вычислять все руками, потому что jquery-ui никак не сообщает о том, была ли коллизия

            // позиционирования слева или справа
            if (position.at && /^\s*(left|right)/.test(position.at)) {
                var popupLeft = parseInt(this.uiDialog.css('left'), 10);
                if (popupLeft > handlerOffset.left) {
                    // попап находится справа
                    nb.node.setMod(this.uiDialog[0], 'nb-popup_to', 'right');
                    this.uiDialog.data('nb-tail-dir', 'right');
                    this.uiDialog.css('left', '+=' + this.tailOffset * 2);

                } else {
                    nb.node.setMod(this.uiDialog[0], 'nb-popup_to', 'left');
                    this.uiDialog.data('nb-tail-dir', 'left');
                    this.uiDialog.css('left', '-=' + this.tailOffset * 2);
                }

            } else {
                var popupTop = parseInt(this.uiDialog.css('top'), 10);
                if (popupTop > handlerOffset.top) {
                    nb.node.setMod(this.uiDialog[0], 'nb-popup_to', 'bottom');
                    this.uiDialog.data('nb-tail-dir', 'bottom');
                    this.uiDialog.css('top', '+=' + this.tailOffset * 2);

                } else {
                    nb.node.setMod(this.uiDialog[0], 'nb-popup_to', 'top');
                    this.uiDialog.data('nb-tail-dir', 'top');
                    this.uiDialog.css('top', '-=' + this.tailOffset * 2);
                }
            }
        }
    });

    jQuery.effects.effect.nb = function(o, done) {
        var $this = $(this);
        var mode = $.effects.setMode($this, o.mode || "hide");
        var tailDir = $this.data('nb-tail-dir');

        var res = {
            show: {
                'bottom': {
                    opacity: 1,
                    top: '-=' + $.nb.contextDialog.prototype.tailOffset
                },
                'top': {
                    opacity: 1,
                    top: '+=' + $.nb.contextDialog.prototype.tailOffset
                },
                'left': {
                    opacity: 1,
                    left: '+=' + $.nb.contextDialog.prototype.tailOffset
                },
                'right': {
                    opacity: 1,
                    left: '-=' + $.nb.contextDialog.prototype.tailOffset
                }

            },
            hide: {
                'bottom': {
                    opacity: 0,
                    top: '+=' + $.nb.contextDialog.prototype.tailOffset
                },
                'top': {
                    opacity: 0,
                    top: '-=' + $.nb.contextDialog.prototype.tailOffset
                },
                'left': {
                    opacity: 0,
                    left: '-=' + $.nb.contextDialog.prototype.tailOffset
                },
                'right': {
                    opacity: 0,
                    left: '+=' + $.nb.contextDialog.prototype.tailOffset
                }
            }
        };

        if (mode == 'show') {
            $this.show();
        }

        $this.animate(res[mode][tailDir], {
            queue: false,
            duration: o.duration,
            easing: o.easing,
            complete: function() {
                if (mode == 'hide') {
                    $this.hide();
                }
                done();
            }
        });
    };

    //TODO: не понимаю зачем this.moved и this._home

    var popup = {};

    // ----------------------------------------------------------------------------------------------------------------- //

    popup.events = {
        'init': 'oninit',
        'open': 'onopen',
        'click .nb-popup__close': 'onclose',
        'close': 'onclose',
        'destroy': 'ondestroy',
        'position': 'onposition'
    };

    // ----------------------------------------------------------------------------------------------------------------- //

    popup.onposition = function(e, params) {
        var where = params.where;
        var how = params.how;
        this._move(where, how, params);
    };

    popup.ondestroy = function() {
        if (this.node && this.node.widget) {
            this.node.widget.destroy();
        }
    };

    popup.oninit = function() {
        var data = this.data();

        if ('modal' in data) {
            this.modal = true;
        }

        // Храним исходное положение попапа, чтобы возвращать его на место
        var previous = this.node.previousSibling;
        this._home = previous ? { previous: previous } : { parent: this.node.parentNode };
    };

    // ----------------------------------------------------------------------------------------------------------------- //

    /**
     *
     * @param {String} evtName название события
     * @param {Object} params
     * @param {Boolean} [params.closeOpened=true] закрыть ранее открытые окна
     */
    popup.onopen = function(evtName, params) {
        var where = params.where;
        var how = params.how;

        if (typeof params.closeOpened === 'undefined') {
            params.closeOpened = true;
        }

        //  Специальный флаг-костыль.
        //  Если он true, то это значит, что мы только что передвинули открытый попап в другое место
        //  и его не нужно закрывать на клик.
        this.moved = false;

        if (this.where) {
            //  Попап уже открыт
            //  FIXME: Буэээ. Уродливое условие для варианта, когда заданы координаты вместо ноды.
            if (where === this.where || ( (where instanceof Array) && where[0] === this.where[0] && where[1] === this.where[1] )) {
                //  На той же ноде. Значит закрываем его.
                this.trigger('close');
            } else {
                this.moved = true;
                //  На другой ноде. Передвигаем его в нужное место.
                this._move(where, how, params);
            }
        } else {
            //  Попап закрыт. Будем открывать.

            // закрыть все открытые попапы
            if (params.closeOpened) {
                nb.trigger('popup-close');
            }

            $(this.node).removeClass('_hidden');
            //  Передвигаем попап.
            this._move(where, how, params);
            this.trigger('show');

            // Сообщаем в космос, что открылся попап
            nb.trigger('popup-opened', this);
        }
    };


    popup.onclose = function() {

         //  Снимаем флаг о том, что попап открыт.
        this.where = null;

        if (this.node && this.node.widget && this.node.widget.isOpen()) {
            this.node.widget.close();
        }
    };

    // ----------------------------------------------------------------------------------------------------------------- //

    popup._move = function(where, how, params) {
        //  Запоминаем, на какой ноде мы открываем попап.
        this.where = where;
        var that = this;
        var using;

        var data = this.data();

        if (params.animate) {
            using =  function(props) {
                // без stop событие complete срабатывает дважды
                $(this).stop().animate({
                    left : props.left,
                    top : props.top
                }, {
                    duration: 'fast',
                    queue: false,
                    complete: function() {
                        that.trigger('position.complete');
                    }
                });
            };
        }



        //  Модальный попап двигать не нужно.
        if (this.modal) {
            $(this.node).baseDialog({
                height: data.height,
                minHeight: data.minheight,
                width: data.width,
                show: 'fade',
                hide: 'fade',
                modal: true,
                resizable: false,
                draggable: false,
                dialogClass: 'nb-popup-outer ui-dialog-fixed',
                close: function() {
                    that.trigger('close');
                },
                appendTo: params.appendTo,
                position: {
                    using: using
                }
            });

            return;
        }

        how = how || {};

        $(this.node).contextDialog({
            tail: data.tail,
            position: {
                // где попап
                at: (how.where ? how.where : 'center bottom'),// + ' center',
                // где ссылка, которая открыла попап
                my: (how.what ? how.what : 'center top'),// + ' center',
                of: $(this.where),
                // horizontal: fit, пытаемся уместить в window
                // vertical: flip - выбирает наилучший вариант - вверх или вних
                collision: "fit flip",
                using: using
            },
            close: function() {
                that.trigger('close');
            }
        });
    };

    nb.define('popup', popup);

})();

// ----------------------------------------------------------------------------------------------------------------- //

nb.define('popup-toggler', {

    events: {
        'click': 'onclick'
    },

    'onclick': function() {
        if (this.getMod('_disabled')) {
            return;
        }

        var data = this.data()['popup-toggler'];

        //  Находим соответствующий попап.
        //  Соответствие задается атрибутом `id`.
        var popup = nb.find(data['id']);

        if (popup) {
            popup.trigger('open', {
                //  Относительно чего позиционировать попап.
                //  Если заданы точные координаты в `data.where`, то по ним.
                //  Иначе относительно ноды этого блока.
                where: data.where || this.node,

                //  Как позиционировать попап.
                how: data.how
            });

            return false;
        }
    }

});

/* popup/popup.js end */

/* input/input.js begin */
nb.define('input', {
    events: {
        'init': 'oninit',
        'click': 'makeFocus',
        'changeValue': 'onChangeValue',
        'focusout': 'blur',
        'focusin': 'makeFocus',
        'disable': 'onDisable',
        'enable': 'onEnable'
    },

    oninit: function() {
        this.$node = $(this.node);
        this.$nodeInput = this.$node.find('.nb-input__input');
        this.disabled = this.$nodeInput.prop('disabled');
        this.value = this.$nodeInput.val();
        this.focused = false;
        nb.on('input-focusout', function() {
            this.trigger('focusout');

        });
    },

    makeFocus: function() {
        if (this.$node.is('.nb-input_disabled')) {
            return false;
        }

        if (!this.$node.hasClass('nb-input_focus')) {
            nb.trigger('input-focusout');
            this.$node.addClass('nb-input_focus');
            this.focused = true;
            this.$node.find('input').get(0).focus();
        }
    },

    blur: function() {
        this.$node.removeClass('nb-input_focus');
        this.focused = false;
    },

    /**
     * Disables the input
     */
    onDisable: function() {
        this.$node.addClass('nb-input_disabled');
        this.$nodeInput.prop('disabled', true);
        this.trigger('disabled');
    },

    /**
     * Enables the input
     */
    onEnable: function() {
        this.$node.removeClass('nb-input_disabled');
        this.$nodeInput.prop('disabled', false);
        this.trigger('enabled');
    },

    /**
     * Changes a value of input
     *
     * @param name — event id that caused the change
     * @param params — {
     *     value: '..'
     * }
     */
    onChangeValue: function(name, params) {
        this.value = params.value;
        this.$nodeInput.val(this.value)
    }
});

/* input/input.js end */

/* input-group/input-group.js begin */
nb.define('input-group', {
    events: {
        'click': 'click',
        'focusout': 'blur'
    },

    click: function(e, input) {
        var $node = $(this.node);

        if (!$node.hasClass('nb-input_focus')) {
            $node.addClass('nb-input_focus');
            $node.children('.nb-input').select();
        }
    },

    blur: function() {
        $(this.node).removeClass('nb-input_focus');
    }
});
/* input-group/input-group.js end */

/* progress/progress.js begin */
nb.define('progress', {
    events: {
        'init': 'oninit'
    },

    oninit: function() {
        var data = this.data();

        if ('type' in data) {
            this.type = data.type;
        }

        this.$title = $(this.node).find('.js-title');
        this.$bar = $(this.node).find('.js-bar');
    },

    /**
     * Изменяет значение прогресс бара
     * @param {String} Новое значение.
     */

    update: function(newVal) {
        var newVal = parseFloat(newVal, 10)

        this.$bar.css({width: newVal + '%'})

        if (this.type == 'percentage'){
            this.$title.html(newVal + '%')
        }

        this.data('progress', newVal)
    },

    /**
     * Меняет значение на единицу
     */
    tick: function() {
        var newVal = parseFloat(this.data('progress'), 10)

        newVal < 100 ? newVal++ : newVal

        this.update(newVal)
    }
})
/* progress/progress.js end */

/* paranja/paranja.js begin */
nb.define('paranja', {
    events: {}
});
/* paranja/paranja.js end */

/* tabs/tabs.js begin */
nb.define('tabs', {
    events: {
        'init': 'oninit'
    },

    oninit: function () {
        this.$node = $(this.node);

        this.$node.tabs();
    }
});

/* tabs/tabs.js end */

/* arrow/arrow.js begin */
nb.define('arrow', {
    events: {
        'init': 'oninit',
        'focusin .nb-arrow__input__wrap': 'focus',
        'focusout .nb-arrow__input__wrap': 'blur'
    },

    oninit: function(){
        this.$node = $(this.node);
        this.$wrap = this.$node.find('.nb-arrow__name__wrap');
        this.$requests =  this.$node.find('.nb-arrow__requests');
        this.$node.find('.nb-arrow__input_fake').text(this.$node.find('.nb-input').val());
    },

    focus: function(){
        if (!this.$wrap.hasClass('nb-arrow__name__wrap_focus')) {
            this.$wrap.addClass('nb-arrow__name__wrap_focus');
        }
        this.$requests.fadeOut('fast');

    },
    blur: function() {
        this.$wrap.removeClass('nb-arrow__name__wrap_focus');
        this.$node.find('.nb-arrow__input_fake').text(this.$node.find('.nb-input').val());
        this.$requests.fadeIn('fast');
    }
})

/* arrow/arrow.js end */

/* header/header.js begin */
nb.define('header', {
    events: {
        'init': 'oninit',
        'click .nb-header__button': 'togglePress'
    },

    oninit: function () {
        this.$node = $(this.node);
    },

    /**
     * Toggles pressed state of button
     */

    togglePress: function(e) {
        var $target = $(e.target);
        $target.closest('.nb-header__button').toggleClass('nb-header__button_pressed');

        if ( $target.hasClass('nb-icon_services') ) {
            nb.trigger('services-click');
        }

        if ( $target.hasClass('nb-icon_settings') ) {
            nb.trigger('settings-click');
        }
    }

});
/* header/header.js end */

/* user/user.js begin */
nb.define('user', {
    events: {
        'init': 'oninit'
    },

    oninit: function () {

    }

});
/* user/user.js end */

/* suggest/suggest.js begin */
;(function() {

    /**
     * Саджест
     * @namespace jquery.ui.suggest
     * @extends {jquery.ui.autocomplete} http://api.jqueryui.com/autocomplete/
     * @description
     *      Саджест это блок сотоящий из инпута и выпадающего списка.
     *      При вводе какого-либо значения в инпут это значение матчится на список
     *      слов из источника данных, и подходящие элементы из исходного списка
     *      показываются в выпадающем списке, в котором пользователь может выбрать
     *      нужный ему элемент.
     *      После выбора элемента значение инпута меняется на значение выбранного элемента
     *
     *      Поддерживаемые события:
     *        nb-type – всплывает при вводе значения в инпут
     *        nb-select – всплывает при выборе значения из саджеста
     *        nb-keypress-enter – всплывает при нажатии на энетер и отсутвии саджеста
     */

    /**
     * Опции инициализации саджеста
     * @description
     *     Эти опции могут быть определены в yate шаблонах при описании наноблока.
     *     Опции можно менять в рантайме через метод option
     *
     * @example
     *     var sug = nb.find('#mysuggest');
     *     sug.option('source', 'http://mydomain.com/user/search');
     *
     * @type {Object}
     */
    var optionsSuggest = {
        /**
         * Истоник данных
         * @description См. http://api.jqueryui.com/autocomplete/#option-source
         *
         * @type {(String|Array|Function)}
         */
        source: null,

        /**
         * Количество элеметов, при котором в выпадающем списке появляется скролл
         *
         * @type {Number}
         */
        countMax: 10,

        /**
         * Тип саджеста
         * @description
         *     Указывает из какого шаблона брать верстку для элемента выпадающего списка.
         *     См. файл suggest.yate: match /[.type].item nb-suggest
         *
         * @type {String}
         */
        type: 'default',

        /**
         * Включение или отключение выделения жирным начертанием результатов
         * матчинга в выпадающем списке.
         *
         * @type {Boolean}
         */
        highlight: false,

        /**
         * Размер блока.
         * @description Применятся на размер элементов в выпадающем списке.
         *
         * @type {String}
         */
        size: 's',

        /**
         * Количесвто введенных символов, после которого начинать поиск слов
         */
        minLength: 2
    }

    /**
     * Внешние методы саджеста
     * @interface
     * @type {Object}
     */
    var apiSuggest = {
        /**
         * Возвращает выбранный в саджесте элемент данных из истоника.
         * @return {Object}
         */
        getItemSelected: function() {
            return this.$input.data().uiSuggest.selectedItem;
        },

        /**
         * Устанавливает опцию для виджета.
         * По сути является аналогом jq.ui.option
         * http://api.jqueryui.com/autocomplete/#method-option
         *
         * @param  {String} name  Имя опции
         * @param  [value] Значение опции
         */
        option: function(name, value) {
            var args = Array.prototype.slice.call(arguments);
            args.unshift('option');
            return this.$input.suggest.apply(this.$input, args);
        },

        value: function() {
            return this.$input.val();
        }
    }



    $.widget("ui.suggest", $.ui.autocomplete, {
        options: optionsSuggest,

        _renderMenu: function( ul, items ) {
            var that = this;
            var html = '';

            $.each( items, function(index, item) {
                html += that._renderItem(item);
            });

            $(html).appendTo(ul);

            ul.children('li').each(function(index) {
                $(this).data("ui-autocomplete-item", items[index]);
            });
        },

        _renderItem: function(item) {
            var clone = $.extend({}, item);

            if (this.options.highlight) {
                if (typeof highlightings[this.options.type] == 'function') {
                    highlightings[this.options.type](clone, this._value());
                } else if (typeof this.options.highlight == 'function') {
                    this.options.highlight(clone, this._value());
                }
            }

            return yr.run('main', {
                item: clone,
                type: this.options.type,
                size: this.options.size
            }, 'nb-suggest');
        },

        _suggest: function(items) {
            this._super(items);

            if (this.options.countMax && !this._heightMax) {
                this._heightMax = this.menu.element.children().eq(0).height() * this.options.countMax;
                this.menu.element.css({
                    'max-height': this._heightMax,
                    'overflow-y': 'auto',
                    'overflow-x': 'hidden'
                });
            }
        },

        search: function(value, event) {
            this._trigger('_search');

            return this._super(value, event);
        }
    });

    var highlightings = {
        'default': function(item, term) {
            var matcher = new RegExp( '(' + $.ui.autocomplete.escapeRegex(term) + ')', "i" );
            item.label = item.label.replace(matcher, '<b>$1</b>');
        },

        'username': function(item, term) {
            var matcher = new RegExp( '(' + $.ui.autocomplete.escapeRegex(term) + ')', "ig" );
            var matches = item.label.match(matcher);

            item.usernameHighlighted = item.username.replace(matcher, '<b>$1</b>');

            if (typeof item.email == 'string') {
                item.emailHighlighted = item.email.replace(matcher, '<b>$1</b>');
            }
        }
    }

    nb.define('suggest', $.extend({
        events: {
            'init': 'oninit'
        },

        oninit: function() {
            this.$node = $(this.node);

            var source = this.$node.data('source');

            this.$node.find('input').on('keydown', function(e) {
                var keyCode = $.ui.keyCode;

                if ($.inArray(e.keyCode, [ keyCode.ENTER, keyCode.NUMPAD_ENTER ]) !== -1) {
                    if (!this.$input.data().uiSuggest.menu.active) {
                        this.trigger('nb-keypress-enter', this.value());
                    }
                }
            }.bind(this));

            this.$input = this.$node.find('input').suggest({
                source: source,
                countMax: this.$node.data('countMax'),
                type: this.$node.data('type'),
                size: this.$node.data('size'),
                highlight: this.$node.data('highlight'),
                minLength: this.$node.data('minLength')
            });

            this.$suggest = this.$input.data().uiSuggest.menu.element;

            this.$suggest.addClass(this.$node.data('class-suggest'));

            this.$input.on('suggest_search', function(e) {
                this.trigger('nb-type', this.value());
            }.bind(this));

            this.$input.on('suggestselect', function(e, item) {
                this.trigger('nb-select', item.item);
            }.bind(this));
        }
    }, apiSuggest));

})();



/* suggest/suggest.js end */

