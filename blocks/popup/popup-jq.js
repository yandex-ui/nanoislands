(function() {

//TODO: не понимаю зачем this.moved и this._home

var popup = {};

// ----------------------------------------------------------------------------------------------------------------- //

popup.events = {
    'init': 'oninit',
    'open': 'onopen',
    'close': 'onclose'
};

// ----------------------------------------------------------------------------------------------------------------- //

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

popup.onopen = function(e, params) {
    var where = params.where;
    var how = params.how;

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

        $(this.node).removeClass('_hidden');
        //  Передвигаем попап.
        this._move(where, how);
        this.trigger('show');

        // Сообщаем в космос, что открылся попап
        nb.trigger('popup-opened', this);
    }
};

popup.onclose = function() {
    //  Снимаем флаг о том, что попап открыт.
    this.where = null;
};

// ----------------------------------------------------------------------------------------------------------------- //

popup._move = function(where, how) {
    //  Запоминаем, на какой ноде мы открываем попап.
    this.where = where;
    var that = this;

    //  Модальный попап двигать не нужно.
    if (this.modal) {
        $(this.node).dialogCloseOnOuterClick({
            show: 'fade',
            hide: 'fade',
            modal: true,
            resizable: false,
            draggable: false,
            dialogClass: 'ui-dialog-fixed',
            close: function() {
                that.trigger('close');
            }
        });

        return;
    }

    how = how || {};

    $(this.node).contextDialog({
        position: {
            // где попап
            at: (how.where ? how.where : 'center bottom'),// + ' center',
            // где ссылка, которая открыла попап
            my: (how.what ? how.what : 'center top'),// + ' center',
            of: $(this.where),
            // horizontal: fit, пытаемся уместить в window
            // vertical: flip - выбирает наилучший вариант - вверх или вних
            collision: "fit flip"
        },
        close: function() {
            that.trigger('close');
        }
    });
};

nb.define('popup-jq', popup);

})();

// ----------------------------------------------------------------------------------------------------------------- //

nb.define('popup-jq-toggler', {

    events: {
        'click': 'onclick'
    },

    'onclick': function() {
        if (this.getMod('_disabled')) {
            return;
        }

        var data = this.data()['popup-jq-toggler'];

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
