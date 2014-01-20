/*
 * jQuery UI Depends:
 *        jquery.ui.dialog.js
 *        jquery.ui.core.js
 *        jquery.ui.widget.js
 *        jquery.ui.button.js
 *        jquery.ui.draggable.js
 *        jquery.ui.mouse.js
 *        jquery.ui.position.js
 */

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

            if (this.options.position.fixed) {
                this._onresize = $.proxy(this._position, this, true);
                this.window.on('resize', this._onresize);
            }

            this._onpopupclose = nb.on('popup-close', function() {
                that.close();
            });
        },
        close: function() {
            this._super();
            this.document.off('mousedown', this._onmousedown);

            if (this._onresize) {
                this.window.off('resize', this._onresize);
            }

            nb.off('popup-close', this._onpopupclose);
        },
        _create: function() {
            this.options.dialogClass += _getUIDialogExtraClass.call(this);
            this.options.dialogClass += (this.options.position.fixed) ? ' ui-dialog-fixed' : '';
            this._super();
            this.element[0].widget = this;
        },
        _destroy: function() {
            this._super();
            delete this.element[0].widget;
        },
        _position: function() {
            var that = this;
            var using = this.options.position.using;

            // Перестановка базового опорного свойства.
            this.options.position.using = function(props, ui) {
                var position = $.extend({}, props);
                var width;
                var height;

                if (ui.vertical == 'bottom') {
                    height = that.window.height();

                    position.bottom = height - (position.top + ui.element.height);
                    position.top = 'auto';
                }

                if (ui.horizontal == 'right') {
                    width = that.window.width();

                    position.right = width - (position.left + ui.element.width);
                    position.left = 'auto';
                }

                return using.call(ui.element.element[0], position, ui);
            };

            this._super();

            this.options.position.using = using;
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
        _position: function(noEffect) {
            var that = this;
            var using = this.options.position.using;

            // При повторном позиционировании попапа без его скрытия
            // не произойдет вызова эффекта `nb`. Поэтому нет необходимости
            // дополнительно смещать попап, чтобы обеспечить простор для
            // анимации.
            var offsetMultiplier = noEffect ? 1 : 2;

            var inversion = {
                top: 'bottom',
                bottom: 'top',
                left: 'right',
                right: 'left'
            };

            this.options.position.using = function(props, ui) {
                var $el = ui.element.element;
                var el = $el[0];

                var tail = ui[ui.important];
                var direction = inversion[tail];

                nb.node.setMod(el, 'nb-popup_to', direction);
                $el.data('nb-tail-dir', direction);

                props[tail] += (that.tailOffset * offsetMultiplier);

                return using.call(el, props, ui);
            };

            this._super();

            this.options.position.using = using;
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
                    bottom: '-=' + $.nb.contextDialog.prototype.tailOffset
                },
                'left': {
                    opacity: 1,
                    right: '-=' + $.nb.contextDialog.prototype.tailOffset
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
                    bottom: '+=' + $.nb.contextDialog.prototype.tailOffset
                },
                'left': {
                    opacity: 0,
                    right: '+=' + $.nb.contextDialog.prototype.tailOffset
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

        var data = this.data();
        // по умолчанию попап позиционирова абсолютно
        var isFixed = false;

        // сделаем попап фиксированным, если
        // у popup-toggler задан how.fixed = true
        if (how && how.fixed) {
            isFixed = true;
        }
        // или если был задан атрибут data-nb-how = 'fixed'
        // в настройках самого попапа
        if (data.how == 'fixed') {
            isFixed = true;
        }

        var using = function(props) {
            var $el = $(this);

            if (params.animate) {
                $el.stop().animate(props, {
                    duration: 'fast',
                    queue: false,
                    complete: $.proxy(that.trigger, that, 'position.complete')
                });
            } else {
                $el.css(props);
            }
        };

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
                at: (how.at ? how.at : 'center bottom'),// + ' center',
                // где ссылка, которая открыла попап
                my: (how.my ? how.my : 'center top'),// + ' center',
                fixed: isFixed,
                of: $(this.where),
                // horizontal: fit, пытаемся уместить в window
                // vertical: flip - выбирает наилучший вариант - вверх или вних
                collision: (how.collision ? how.collision : 'fit flip'),
                using: using
            },
            close: function() {
                that.trigger('close');
            }
        });
    };

    nb.define('popup', popup, 'base');

    /**
     *  Функция возвращает строку с модификаторами
     *  для обертки попапа, которую добавляет jquery ui,
     *  в соответсвии с модификаторами самого попапа
     *
     *  Например, для попапа заданы классы-модификаторы nb-popup_mod и nb-popup_another-mod,
     *  функция вернет строку 'nb-popup-outer_mod nb-popup-outer_another-mod'
     *
     */
    function _getUIDialogExtraClass() {
        var popupClasses = this.element.attr('class').split(' ') || [];
        // не матчимся на _ в начале слова
        // иначе это глобальный класс,
        // не мачимся на __, чтобы ислючить элемент
        var modRe = /\w+\_(?!_)/;
        var uiDialogClasses;

        uiDialogClasses = $.map(popupClasses, function(item) {
            var parts = item.split(modRe);
            var l = parts.length;
            var modifier = parts.pop();
            var newClass = '';

            // в массиве должно быть больше 1 элемента
            // иначе модификатора не было
            if (l > 1) {
                newClass = 'nb-popup-outer_' + modifier;
            }

            return newClass;
        });

        return uiDialogClasses.join(' ');
    }

})();

// ----------------------------------------------------------------------------------------------------------------- //

nb.define('popup-toggler', {

    events: {
        'click': 'onclick'
    },

    oninit: function() {
        this.$node = $(this.node);
    },

    onclick: function() {
        if (this.$node.hasClass('is-disabled')) {
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

}, 'base');
