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
        dialogClass: 'nb-popup ui-dialog-no-close',
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
        $('<div class="nb-popup__tail"></div>').prependTo(this.uiDialog);
    },

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
