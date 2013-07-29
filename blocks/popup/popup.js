(function() {

/**
 * @fileOverview Надстройки nb над jQueryUI
 */

$.nb = {};

// диалог, закрывающий по нажатию вне
jQuery.widget('nb.dialogCloseOnOuterClick', $.ui.dialog, {
    open: function() {
        var that = this;
        this._super();

        this._on(this.document, {
            mousedown: function(e) {
                if (!$.contains(this.uiDialog[0], e.target)) {
                    this.close();
                }
            }
        });

        this._onpopupclose = nb.on('popup-close', function() {
            that.close();
        });
    },
    close: function() {
        this._super();

        this._off(this.document, 'mousedown');
        nb.off('popup-close', this._onpopupclose);
    }
});

// диалог с хвостиком + dialogCloseOnOuterClick
jQuery.widget('nb.contextDialog', $.nb.dialogCloseOnOuterClick, {

    tailOffset: 13,

    options: {
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
        //TODO: проверить, что вызывается один раз
        $('<div class="nb-popup__tail"><i/></div>').prependTo(this.uiDialog);
    },

    _createTitlebar: function(){},
    _title: function(){},
    _createButtonPane: function(){},
    _createButtons: function(){},

    _position: function() {
        var position = this.options.position;
        this._super();

        var $handler = position.of;
        var handlerOffset = $handler.offset();

        //TODO: вот этого this.uiDialog.css('top', '+=13px'); можно не делать, если сразу в position писать {at: 'center top+13'}
        // положение надо вычислять все руками, потому что jquery-ui никак не сообщает о том, была ли коллизия

        // позиционирования слева или справа
        if (position.at && /^\s*(left|right)/.test(position.at) ) {
            var popupLeft = parseInt(this.uiDialog.css('left'), 10);
            if (popupLeft > handlerOffset.left) {
                // попап находится справа
                nb.node.setMod(this.uiDialog[0], 'nb-popup_tail_to', 'right');
                this.uiDialog.data('nb-tail-dir', 'right');
                this.uiDialog.css('left', '+=' + this.tailOffset * 2);

            } else {
                nb.node.setMod(this.uiDialog[0], 'nb-popup_tail_to', 'left');
                this.uiDialog.data('nb-tail-dir', 'left');
                this.uiDialog.css('left', '-=' + this.tailOffset * 2);
            }

        } else {
            var popupTop = parseInt(this.uiDialog.css('top'), 10);
            if (popupTop > handlerOffset.top) {
                nb.node.setMod(this.uiDialog[0], 'nb-popup_tail_to', 'bottom');
                this.uiDialog.data('nb-tail-dir', 'bottom');
                this.uiDialog.css('top', '+=' + this.tailOffset * 2);

            } else {
                nb.node.setMod(this.uiDialog[0], 'nb-popup_tail_to', 'top');
                this.uiDialog.data('nb-tail-dir', 'top');
                this.uiDialog.css('top', '-=' + this.tailOffset * 2);
            }
        }
    }
});

jQuery.effects.effect.nb = function(o, done) {
    var $this = $(this);
    var mode = $.effects.setMode( $this, o.mode || "hide" );
    var tailDir = $this.data('nb-tail-dir');

    if (tailDir)

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
            dialogClass: 'nb-popup-outer ui-dialog-fixed',
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
