(function() {

var popup = {
    cfg: {
        // Время анимации попапа
        animationTime: 150,

        // Дистанция с которой появляется поап
        animationDistance: 10,

        // Расстояние на которое попап отстает от тригера
        tailOffset: 23
    }
};

// ----------------------------------------------------------------------------------------------------------------- //

popup.events = {
    'init': 'oninit',
    'open': 'onopen',
    'close': 'onclose',

    'click .nb-popup__close': 'onclose',
    'click': 'onclick'
};

// ----------------------------------------------------------------------------------------------------------------- //

popup.oninit = function() {
    var data = this.data();

    if ('modal' in data) {
        this.modal = true;
        this.$paranja = $(this.node).siblings('nb-paranja')
    }

    //  У попапа есть "хвостик".
    this.$selectParent = $(this.node).parents('.nb-select');
    this.$tail = $(this.node).find('.nb-popup__tail');
    this.hasTail = !!this.$tail.length;
    this.inSelect = !!this.$selectParent.length;

    // Храним исходное положение попапа, чтобы возвращать его на место
    var previous = this.node.previousSibling;
    this._home = previous ? { previous: previous } : { parent: this.node.parentNode };
};

// ----------------------------------------------------------------------------------------------------------------- //

popup.onopen = function(e, params) {
    var where = params.where;
    var how = params.how;

    //  FIXME: Нужно сделать отдельный флаг this.visible.

    //  Специальный флаг-костыль.
    //  Если он true, то это значит, что мы только что передвинули открытый попап в другое место
    //  и его не нужно закрывать на клик.
    this.moved = false;

    if (this.where) {
        //  Попап уже открыт
        //  FIXME: Буэээ. Уродливое условие для варианта, когда заданы координаты вместо ноды.
        if ( where === this.where || ( (where instanceof Array) && where[0] === this.where[0] && where[1] === this.where[1] ) ) {
            //  На той же ноде. Значит закрываем его.
            this.trigger('close');
        } else {
            this.moved = true;
            //  На другой ноде. Передвигаем его в нужное место.
            this._move(where, how);
        }
    } else {
        //  Попап закрыт. Будем открывать.

        //  На всякий случай даем сигнал, что нужно закрыть все открытые попапы.
        nb.trigger('popup-close');

        //  Включаем паранджу, если нужно.
        if (this.modal) {
            //  Ноду блока переносим внутрь паранджи.
            $paranja().append(this.node).show();
        } else {
            //  Переносим ноду попапа в самый конец документа,
            //  чтобы избежать разных проблем с css.
            $('body').append(this.node);
        }

        $(this.node).removeClass('_hidden');
        //  Передвигаем попап.
        this._move(where, how);
        //  Вешаем события, чтобы попап закрывался по нажатие ESC и клику вне попапа.
        this._bindClose();

        //  Показываем.
        $(this.node).animate(
            this._animateParams(this.data('direction')).forward,
            this.cfg.animationTime
        );
        this.trigger('show');


        // Сообщаем в космос, что открылся попап
        nb.trigger('popup-opened', this);
    }
};

popup.onclose = function() {
    var that = this
    //  Снимаем все события, которые повесили в open.
    this._unbindClose();
    //  Снимаем флаг о том, что попап открыт.
    this.where = null;
    //  Прячем.
    if (this.modal) {
        $paranja().hide();
    }

    $(this.node).animate(
        that._animateParams(that.data('direction')).reverse,
        that.cfg.animationTime,
        function(){
            $(this).addClass('_hidden');

            that.trigger('hide');

            // Возвращаем ноду попапа на старое место
            if (that._home.previous) {
                $(that._home.previous).after(that.node);
            } else if (that._home.parent) {
                $(that._home.parent).prepend(that.node);
            }

            // Сообщаем в космос, что закрылся попап
            nb.trigger('popup-closed', that);
    });

};

// ----------------------------------------------------------------------------------------------------------------- //

popup._move = function(where, how) {
    //  FIXME: Не нужно это делать в _move().
    //  Запоминаем, на какой ноде мы открываем попап.
    this.where = where;

    //  Модальный попап двигать не нужно.
    if (this.modal) {
        return;
    }

    how = normalizeHow(how);

    //  Изначальные прямоугольники для what и where.
    var orig_what = nb.rect(this.node);
    where = nb.rect(where);

    //  Adjusted what -- т.е. мы what передвинули так, чтобы точки привязки what и where совпадали.
    //  adj_what -- это объект с двумя свойствами:
    //
    //    * rect -- это собственно сдвинутый what.
    //    * point -- это точка привязки, куда мы его сдвинули.
    //
    var adj_what = nb.rect.adjust(orig_what, where, how);
    var what = adj_what.rect;

    var tailDir;
    var needTail = this.hasTail && (( tailDir = this._tailDirs(how.what, how.where) ));

    if (needTail) {
        //  Показываем "хвост" с нужной стороны попапа.
        this.setMod( 'nb-popup_tail_to', tailDir[1] );

        // Запоминаем направление
        this.data('direction', tailDir[1])

        var css = { left: '', right: '', top: '', bottom: '' };

        //  Позиционируем "хвост", если он должен быть не по-центру попапа.
        if ( tailDir[0] !== 'center' ) {
            //  Сдвиг, который делает точку привязки началом координат.
            var offset2origin = nb.vec.scale(adj_what.point, -1);

            //  Преобразование в "положение 1".
            var transform = transforms[ tailDir.join(' ') ];

            var t_what = nb.rect.trans( nb.rect.move(what, offset2origin), transform );
            var t_where = nb.rect.trans( nb.rect.move(where, offset2origin), transform );

            //  После этих преобразований мы получаем, что точка привязки сместилась в начало координат,
            //  левый нижний угол where в начале координат, левый верхний угол what в начале координат.
            //
            //  -------------
            //  |   where   |
            //  |           |
            //  *-------------------
            //  |       what       |
            //  |                  |
            //  |                  |
            //  |                  |
            //  --------------------
            //

            //  Слевы положение "хвоста" ограничено некой константой.
            var MIN_LEFT = 18;
            //  Справа -- минимумом из середин what и where.
            var r = Math.min( t_what[1][0] / 2, t_where[1][0] / 2);

            var x, y;
            if (MIN_LEFT <= r) {
                //  Для "хвоста" достаточно места.

                x = r;
            } else {
                //  "Хвост" не влезает, поэтому необходимо подвинуть и сам попап.

                x = MIN_LEFT;
                t_what = nb.rect.move( t_what, [ r - MIN_LEFT, 0 ] );
            }

            //  Зазор для "хвоста".
            t_what = nb.rect.move( t_what, [ 0, this.cfg.tailOffset] );

            //  Делаем обратное преобразование попапа...
            what = nb.rect.move( nb.rect.trans( nb.rect.trans( nb.rect.trans( t_what, transform ), transform ), transform ), adj_what.point );
            //  ...и смещения для "хвоста".
            var tailOffset = nb.vec.mulM( transform, nb.vec.mulM( transform, nb.vec.mulM( transform, [ x, 0] ) ) );

            //  Позиционируем "хвост".
            x = tailOffset[0];
            y = tailOffset[1];

            var AUTO = 'auto';
            if (x > 0) {
                css.left = x;
                css.right = AUTO;
            } else if (x < 0) {
                css.left = AUTO;
                css.right = -x;
            } else if (y > 0) {
                css.top = y;
                css.bottom = AUTO;
            } else {
                css.top = AUTO;
                css.bottom = -y;
            }
        } else {
            //  Зазор для "хвоста".
            what = nb.rect.move( what, nb.vec.scale( nb.vec.dir2vec(how.where), this.cfg.tailOffset ) );
        }

        this.$tail.css(css).show();
    } else {
        this.$tail.hide();
    }

    //  Позиционируем попап.
    $(this.node).css({
        left: what[0][0],
        top: what[0][1]
    });

};

function normalizeHow(how) {
    //  Дефолтное направление открытия.
    how = how || { dir: 'bottom' };

    var what, where;

    //  Если направление задано через dir, пересчитываем это в what/where.
    if (how.dir) {
        //  Скажем, если dir === 'bottom', то where === 'bottom', а what === 'top'.
        //  nb.vev.flipDir возвращает противоположное направление.
        what = nb.vec.flipDir[ how.dir ];
        where = how.dir;
    } else {
        what = how.what;
        where = how.where;
    }

    return {
        what: normalizeDir(what),
        where: normalizeDir(where)
    };
}


var transforms = {
    'left bottom':  [ [  1,  0 ], [  0,  1 ] ],
    'right bottom': [ [ -1,  0 ], [  0,  1 ] ],
    'top left':     [ [  0,  1 ], [ -1,  0 ] ],
    'bottom left':  [ [  0, -1 ], [ -1,  0 ] ],
    'right top':    [ [ -1,  0 ], [  0, -1 ] ],
    'left top':     [ [  1,  0 ], [  0, -1 ] ],
    'bottom right': [ [  0, -1 ], [  1,  0 ] ],
    'top right':    [ [  0,  1 ], [  1,  0 ] ]
};

popup._animateParams = function(dir) {
        var res = {
            forward: {
                opacity: 1
            },
            reverse: {
                opacity: 0
            }
        }
        switch (dir) {
            case 'left':
                res.forward['left'] = '+=' + this.cfg.animationDistance;
                res.reverse['left'] = '-=' + this.cfg.animationDistance;
                break;
            case 'right':
                res.forward['left'] = '-=' + this.cfg.animationDistance;
                res.reverse['left'] = '+=' + this.cfg.animationDistance;
                break;
            case 'top':
                res.forward['top'] = '+=' + this.cfg.animationDistance;
                res.reverse['top'] = '-=' + this.cfg.animationDistance;
                break;
            case 'bottom':
                res.forward['top'] = '-=' + this.cfg.animationDistance;
                res.reverse['top'] = '+=' + this.cfg.animationDistance;
                break;
        }
        return res
    };

function normalizeDir(dir) {
    dir = dir || '';

    var parts;
    switch (dir) {
        //  Если направление не задано, считаем, что это 'center center'.
        case '':
            parts = [ 'center', 'center' ];
            break;

        //  Если задано только одно направление, второе выставляем в 'center'.
        case 'left':
        case 'right':
        case 'center':
            parts = [ dir, 'center' ];
            break;

        case 'top':
        case 'bottom':
            parts = [ 'center', dir ];
            break;

        default:
            parts = dir.split(/\s+/);

            //  В случае 'top right' и т.д. переставляем части местами.
            //  Одного сравнения недостаточно, потому что может быть 'top center' или 'center left'.
            if ( /^(?:left|right)/.test( parts[1] ) || /^(?:top|bottom)/.test( parts[0] ) ) {
                parts = [ parts[1], parts[0] ];
            }
    }

    return parts;
}

popup._tailDirs = function(what, where) {

    if ( what[0] === where[0] && nb.vec.flipDir[ what[1] ] === where[1] ) {
        return where;
    }

    if ( what[1] === where[1] && nb.vec.flipDir[ what[0] ] === where[0] ) {
        return [ where[1], where[0] ];
    }

}

// ----------------------------------------------------------------------------------------------------------------- //

//  Вешаем события перед открытием попапа, чтобы он закрывался при:
//
//    * Нажатии ESC;
//    * Клике в любое место вне попапа;
//    * При получении глобального события `popup-close`.
//
//  В случае необходимости, можно закрыть все открытые попапы вот так:
//
//      nb.trigger('popup-close');
//
popup._bindClose = function() {
    var that = this;

    this._onkeypress = function(e) {
        if (e.keyCode === 27) {
            that.trigger('close');
        }
    };
    $(document).on('keydown', this._onkeypress);

    this._onclick = function(e, target) {
        if (that.moved) {
            that.moved = false;
            return;
        }
        //  Проверяем, что клик случился не внутри попапа и не на ноде, на которой попап открыт (если открыт).
        if ( (that.node !== target) && !$.contains(that.node, target) && !( that.where && !( that.where instanceof Array ) && ( $.contains(that.where, target) || that.where == target ) ) ) {
            that.trigger('close');
        }
    };
    nb.on('space:click', this._onclick);

    this._onpopupclose = nb.on('popup-close', function() {
        that.trigger('close');
    });
};

//  Снимаем все события, повешенные в `_bindClose`.
popup._unbindClose = function() {
    if (this.where) {
        $(document).off('keydown', this._onkeypress);
        nb.off('space:click', this._onclick);
        nb.off('popup-close', this._onpopupclose);
    }
    this._onkeypress = this._onclick = this._onpopupclose = null;
};

popup.onlick = function(){

}

// ----------------------------------------------------------------------------------------------------------------- //

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
        var popup = nb.find( data['id'] );

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

//  ---------------------------------------------------------------------------------------------------------------  //

