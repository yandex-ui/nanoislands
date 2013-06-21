(function() {

var select = {};

// ----------------------------------------------------------------------------------------------------------------- //

/*select.events = {
    'init': 'oninit',
    'open': 'onopen',
    'close': 'onclose',
    'click': 'onclick'

};*/

// ----------------------------------------------------------------------------------------------------------------- //

select.oninit = function() {
    var data = this.data();


    // Храним исходное положение попапа, чтобы возвращать его на место
    var previous = this.node.previousSibling;
    this._home = previous ? { previous: previous } : { parent: this.node.parentNode };
};

// ----------------------------------------------------------------------------------------------------------------- //


select.onclick = function() {
        if (this.getMod('_disabled')) {
            return;
        }

        var data = this.data()['select'];

        //  Находим соответствующий попап.
        //  Соответствие задается атрибутом `id`.
        this.popup = nb.find('nb-select__popup_' + data['id'] );

        if (popup) {
            select.trigger('open',{
                where: this.node,
                how: 'bottom'
            });

            return false;
        }
    }


select.onopen = function(e, params) {
    var where = params.where;
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
        nb.trigger('select-close');

        //  Переносим ноду попапа в самый конец документа,
        //  чтобы избежать разных проблем с css.
        $('body').append(this.node);

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
        nb.trigger('select-opened', this);
    }
};

select.onclose = function() {
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

select._move = function(where, how) {
    //  FIXME: Не нужно это делать в _move().
    //  Запоминаем, на какой ноде мы открываем попап.
    this.where = this.node;

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
select._bindClose = function() {
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
select._unbindClose = function() {
    if (this.where) {
        $(document).off('keydown', this._onkeypress);
        nb.off('space:click', this._onclick);
        nb.off('popup-close', this._onpopupclose);
    }
    this._onkeypress = this._onclick = this._onpopupclose = null;
};

// ----------------------------------------------------------------------------------------------------------------- //

nb.define('select', select);

})();


