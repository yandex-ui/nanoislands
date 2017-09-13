/*!
 * ### jQuery UI Depends
 *
 * - jquery.ui.dialog.js
 * - jquery.ui.core.js
 * - jquery.ui.widget.js
 * - jquery.ui.button.js
 * - jquery.ui.draggable.js
 * - jquery.ui.mouse.js
 * - jquery.ui.position.js
 */

(function() {

    // Надстройки nb над jQueryUI
    $.nb = {};

    // 60 fps is optimal rate for smooth changes
    var TIME_PER_FRAME = 1000 / 60;

    $.widget('nb.baseDialog', $.ui.dialog, {
        options: {
            height: 'auto',
            minHeight: 'auto',
            width: 'auto'
        },
        open: function() {
            this._super();
            var that = this;

            if (this.options.autoclose) {
                if (this.options.modal) {
                    this._onmousedown = function(e) {

                        if (e.which === 2 || e.which === 3) {
                            return;
                        }

                        that.options.closedByOuterClick = true;
                        that.close(e);
                    };
                    this.overlay.click(this._onmousedown);
                } else {
                    this._onmousedown = function(e) {
                        var popupId = $(that.uiDialog[0]).find('.nb-popup').attr('id');
                        var toggler = $(e.target).parents().addBack().filter('[data-nb="popup-toggler"]');

                        if (e.which === 2 || e.which === 3) {
                            return;
                        }

                        if ($.contains(that.uiDialog[0], e.target)) {
                            return;
                        }

                        // if we handle click on toggler we shouldn't close linked popup by outerclick
                        if (toggler.length && nb.find(toggler.attr('id')) && nb.find(toggler.attr('id')).nbdata()["popup-toggler"].id == popupId) {
                            return;
                        }

                         // hacky way to detect click on scroll
                        if (e.clientX > window.screen.width - 18) {
                            return;
                        }

                        that.options.closedByOuterClick = true;
                        that.close(e);
                    };

                    this.document.on('mousedown', this._onmousedown);
                    this.document.on('touchstart', this._onmousedown);
                }
            }

            this._onresize = $.throttle(TIME_PER_FRAME, this._position.bind(this));
            this.window.on('resize', this._onresize);


            this._onpopupclose = nb.on('popup-close', function() {
                if (that.options.autoclose) {
                    that.close();
                }
            });
        },
        close: function(evt) {
            this._super();

            // if we close modal popup by "esc", we should trigger 'nb-closed' event
            if (evt && evt.keyCode === 27 && this.options.modal) {
                this.nbBlock = this.nbBlock || nb.find($(this.uiDialog[0]).find('.nb-popup').attr('id'));

                // Блока может и не быть.
                if (this.nbBlock) {
                    this.nbBlock.trigger('nb-closed', this.nbBlock);
                }
            }

            if (this.options.autoclose) {
                this.document.off('mousedown', this._onmousedown);
                this.document.off('touchstart', this._onmousedown);
                this.document.off('click', this._onmousedown);
            }

            if (this._onresize) {
                this.window.off('resize', this._onresize);
            }

            nb.off('popup-close', this._onpopupclose);
        },
        _focusTabbable: function() {
            if (this.options.autofocus) {
                this._super();
            }
        },
        _keepFocus: $.noop,
        _create: function() {
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

                $(ui.element.element[0]).css({top: 'auto', bottom: 'auto', left: 'auto', right: 'auto'});

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
    $.widget('nb.contextDialog', $.nb.baseDialog, {

        tailOffset: 13,

        options: {
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
            if (!this.options.withoutTail) {
                this.$tail = $('<div class="_nb-popup-tail"><i/></div>');
                //TODO: проверить, что вызывается один раз
                this.$tail.prependTo(this.uiDialog);
            }

        },
        _position: function() {
            var that = this;
            var using = this.options.position.using;

            // Позиционирование хвостика попапа, заданное в CSS.
            var defaultTailPosition = {
                top: '',
                left: '',
                right: '',
                bottom: ''
            };

            this.options.position.using = function(props, ui) {
                var $el = ui.element.element;
                var el = $el[0];
                var tailPosition;
                var tailLimits;

                // Определение направления хвостика.
                var tailDirection = _getPopupTailDirection(ui.target, ui.element);
                var targetCenter = _getElementCenter(ui.target);

                nb.node.setMod(el, '_nb-popup_to', _getInverseDirection(tailDirection));
                $el.data('nb-tail-dir', tailDirection);

                if (!that.options.withoutTail) {
                    // Позиционирование хвостика вдоль попапа, необходимо для того,
                    // чтобы хвостик указывал на центр целевого элемента.
                    if (_isDirectionVertical(tailDirection)) {
                        tailLimits = [that.tailOffset, ui.element.width - that.tailOffset];
                        tailPosition = _limitNumber(Math.abs(targetCenter.x - ui.element.left), tailLimits);

                        that.$tail.css($.extend(defaultTailPosition, {
                            left: tailPosition + 'px'
                        }));

                    } else {
                        tailLimits = [that.tailOffset, ui.element.height - that.tailOffset];
                        tailPosition = _limitNumber(Math.abs(targetCenter.y - ui.element.top), tailLimits);

                        that.$tail.css($.extend(defaultTailPosition, {
                            top: tailPosition + 'px'
                        }));
                    }

                    props[tailDirection] += that.tailOffset;
                }

                return using.call(el, props, ui);
            };

            this._super();

            this.options.position.using = using;
        }
    });

    jQuery.effects.effect.nb = function(o, done) {
        var $this = $(this);
        var nbBlock = nb.block($this.find('.nb-popup').get(0));
        var mode = $.effects.setMode($this, o.mode || 'hide');
        var shouldHide = mode === 'hide';
        var tailDirection = $this.data('nb-tail-dir');
        var distance = $.nb.contextDialog.prototype.tailOffset;

        var animation = {};

        var doWithoutAnimation = function() {

            $this.css({'opacity': '1'});
            if (shouldHide) {
                $this.hide();
                nbBlock.trigger('nb-closed', nbBlock);
                done();
            } else {
                nbBlock.trigger('nb-opened', nbBlock);
                done();
            }
            nbBlock.animationInProgress = false;
            return;
        };

        var doWithAnimation = function() {
            $this.animate(animation, {
                queue: false,
                duration: o.duration,
                easing: o.easing,
                complete: function() {
                    if (shouldHide) {
                        $this.hide();
                        nbBlock.animationInProgress = false;
                        nbBlock.trigger('nb-closed', nbBlock);
                        done();
                    } else {
                        nbBlock.animationInProgress = false;
                        nbBlock.trigger('nb-opened', nbBlock);
                        done();
                    }
                    return;
                }
            });
            return;
        };

        animation.opacity = shouldHide ? 0 : 1;
        animation[tailDirection] = (shouldHide ? '+=' : '-=') + distance;

        nbBlock.animationInProgress = false;

        if (nbBlock.animationInProgress) {
            done();
        } else {
            if (!shouldHide) {
                if (nbBlock.hasAnimation) {
                    $this.css(tailDirection, '+=' + distance);
                }
                $this.show();
            }

            nbBlock.animationInProgress = true;

            if (nbBlock.hasAnimation) {
                doWithAnimation();
            } else {
                doWithoutAnimation();
            }
        }
    };

    /**
     * Вычисляет направление хвостика попапа, принимая во внимание положение
     * и размер обоих элементов.
     *
     * Сперва для каждого элемента вычисляются координаты вершин опоясывающего
     * прямоугольника. После этого, для каждой внешней полуплоскости,
     * образованной сторонами прямоугольника целевого элемента (т.н. тогглера)
     * проверяется попадание вершин прямоугольника попапа.
     *
     * @param  {Object} targetDimensions Положение и измерения элемента, на который указывает попап
     * @param  {Object} popupDimensions  Положение и измерения попапа
     * @return {String} top|right|bottom|left
     * @private
     */
    function _getPopupTailDirection(targetDimensions, popupDimensions) {
        var p = _getBoundingRectangle(popupDimensions);
        var t = _getBoundingRectangle(targetDimensions);

        // Проверка полуплоскости вверх от целевого элемента.
        if (p[0].y <= t[0].y && p[1].y <= t[0].y) {
            return 'bottom';
        }

        // Проверка полуплоскости вправо от целевого элемента.
        if (p[0].x >= t[1].x && p[1].x >= t[1].x) {
            return 'left';
        }

        // Проверка полуплоскости вниз от целевого элемента.
        if (p[0].y >= t[1].y && p[1].y >= t[1].y) {
            return 'top';
        }

        // В оставшихся случаях попап лежит слева от тогглера.
        return 'right';
    }

    /**
     * Рассчитывает координату центра прямоугольника на основе значений
     * `left`, `top`, `width`, `height`.
     * @param  {Object} d
     * @return {Object}
     * @private
     */
    function _getElementCenter(d) {
        return {
            x: Math.round(d.left + (d.width / 2)),
            y: Math.round(d.top + (d.height / 2))
        };
    }

    /**
     * Ограничивает переданное число в заданный промежуток.
     * @param  {Number} number
     * @param  {Array}  range  [min, max]
     * @return {Number}
     * @private
     */
    function _limitNumber(number, range) {
        return Math.min(Math.max(number, range[0]), range[1]);
    }

    /**
     * Возвращает координаты левой верхней и правой нижней вершин прямоугольника,
     * из значений `top`, `left`, `width` и `height`:
     *
     *     {
     *         top: 20,
     *         left: 25,
     *         width: 50,
     *         height: 20
     *     }
     *
     * в
     *
     *     [
     *         {
     *             x: 25,
     *             y: 20
     *         },
     *         {
     *             x: 75,
     *             y: 70
     *         }
     *     ]
     *
     * @param  {Object} d
     * @return {Object}
     * @private
     */
    function _getBoundingRectangle(d) {
        return [
            {
                x: Math.round(d.left),
                y: Math.round(d.top)
            },
            {
                x: Math.round(d.left + d.width),
                y: Math.round(d.top + d.height)
            }
        ];
    }

    /**
     * Возвращает строковое представление противоположного направления,
     * например `top` -> `bottom`.
     * @param  {String} direction
     * @return {String}
     * @private
     */
    function _getInverseDirection(direction) {
        var inversion = {
            top: 'bottom',
            bottom: 'top',
            left: 'right',
            right: 'left'
        };

        return inversion[direction];
    }

    function _isDirectionVertical(direction) {
        return direction === 'top' || direction === 'bottom';
    }

    /*!
     *  Функция возвращает строку с модификаторами
     *  для обертки попапа, которую добавляет jquery ui,
     *  в соответсвии с модификаторами самого попапа
     *
     *  Например, для попапа заданы классы-модификаторы nb-popup_mod и nb-popup_another-mod,
     *  функция вернет строку 'nb-popup-outer_mod nb-popup-outer_another-mod'
     *
     */
    function _getUIDialogExtraClass(classes) {
        var popupClasses = classes.split(' ') || [];
        // не матчимся на _ в начале слова
        // иначе это глобальный класс,
        // не мачимся на __, чтобы ислючить элемент
        var modRe = /[^_]_(?!_)/;
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


    nb.define('popup', {

        events: {
            'click ._nb-popup-close': 'close',
            'position': 'onposition'
        },

        // ----------------------------------------------------------------------------------------------------------------- //
        oninit: function() {
            var data = this.nbdata();

            if ('modal' in data) {
                this.modal = true;
            }

            this._initPopupMenu();
        },

        /**
         * Initialize popup menu
         * @private
         */
        _initPopupMenu: function() {
            // we need first element only because there can be multilevel menu
            this.$menu = this.$node.find('._nb-popup-menu').eq(0);

            if (this.$menu.length) {
                var that = this;
                this.$menu.menu({
                    select: function(event, ui) {
                        that.trigger('nb-select', {
                            event: event,
                            ui: ui
                        });
                    },
                    focus: function(event, ui) {
                        that.trigger('nb-focused', {
                            event: event,
                            ui: ui
                        });
                    },
                    blur: function(event, ui) {
                        that.trigger('nb-blured', {
                            event: event,
                            ui: ui
                        });
                    }
                });
            }
        },

        onposition: function(e, params) {
            var where = params.where;
            var how = params.how;
            this._move(where, how, params);
        },


        /* Open popup
         *
         * ```
         * popup.open({
         *     where: [100, 200],
         *     how: 'top bottom'
         *     height: 100 {number},
         *     minHeight: 100 {number},
         *     maxHeight: 100 {number},
         *     width: 100 {number},
         *     class: 'test'
         *     appendTo: '#test'
         *     autoclose: false,
         *     autofocus: false
         * });
         * ```
         *
         * @param {Object} params settings for popup
         * @fires 'nb-open-started' and 'nb-opened'
         * @return {Object} nb.block
         */
        open: function(p) {
            if (!p && !this.modal) {
                console.warn('Trying to call popup.open() without params;');
                return this;
            }
            var params = p || {};
            var where = params.where;
            var how = params.how;

            if (this.where) {
                //  Попап уже открыт
                //  FIXME: Буэээ. Уродливое условие для варианта, когда заданы координаты вместо ноды.
                if (where !== this.where || ( (where instanceof Array) && (where[0] !== this.where[0] || where[1] !== this.where[1] ))) {
                    //  На другой ноде. Передвигаем его в нужное место.
                    this._move(where, how);
                }
            } else {
                //  Попап закрыт. Будем открывать.
                if (params.where || this.modal) {
                    this.$node.removeClass('_nb-is-hidden');
                    //  Передвигаем попап.
                    this._move(where, how, params);
                    if (this.modal) {
                        this.trigger('nb-opened');
                    } else {
                        this.trigger('nb-open-started');
                    }
                }
            }
            return this;
        },

        /**
         * Close popup
         * @fires 'nb-close-started' and 'nb-closed'
         * @return {Object} nb.block
         */
        close: function() {

            //  Снимаем флаг о том, что попап открыт.
            this.where = null;

            if (this.isOpen()) {
                this.node.widget.close();

                if (this.modal) {
                    this.trigger('nb-closed');
                } else {
                    this.trigger('nb-close-started');
                }
            }


            // if popup closed by document click we also should fire event
            if (this.node && this.node.widget && this.node.widget.options.closedByOuterClick) {
                if (this.modal) {
                    this.trigger('nb-closed');
                } else {
                    this.trigger('nb-close-started');
                }
                this.node.widget.options.closedByOuterClick = false;
            }

            return this;
        },

        /**
         * Set content of popup (not modal)
         * @description
         * For popup-menu `content` is new `<ul class="_nb-popup-menu">...</ul>`.
         * Use yate mode `nb-popup-menu-content` to generate it.
         * @param {string} content New popup/menu content
         * @fires 'nb-content-set'
         * @returns {Object} nb.block
         */
        setContent: function(content) {
            if (this.$menu.length) {
                // destroy old menu
                this.$menu.menu('destroy');
                // replace with new one
                this.$menu.replaceWith(content);
                // init
                this._initPopupMenu();

            } else {
                this.$node.find('._nb-popup-content').html(content);
            }

            this.trigger('nb-content-set');
            return this;
        },

        /**
         * Get content of popup (not menu, not modal)
         * @returns {String} content
         */
        getContent: function() {
            return this.$node.find('._nb-popup-content').html();
        },

        isOpen: function() {
            return this.node && this.node.widget && this.node.widget.isOpen();
        },

        /**
         * Destroy the popup
         */
        destroy: function() {
            if (this.node && this.node.widget) {
                this.node.widget.destroy();
                this.$node.addClass('_nb-is-hidden');
            }

            this.trigger('nb-destroyed', this);
            this.nbdestroy();
        },

        // ----------------------------------------------------------------------------------------------------------------- //

        _move: function(where, how, params) {
            //  Запоминаем, на какой ноде мы открываем попап.
            this.where = where;
            var that = this;
            var params = params || {};
            var how = how || {};
            var data = this.nbdata();

            if (how === 'fixed' || data.how === 'fixed') {
                how = {fixed: true};
            }

            // по умолчанию попап позиционирова абсолютно
            var isFixed = false;

            // сделаем попап фиксированным, если:
            // - у popup-toggler задан how.fixed = true
            // - был задан атрибут data-nb-how = 'fixed' у самого попапа
            if (how.fixed) {
                isFixed = true;
            }

            var using = function(props) {
                var $el = $(this);
                $el.css(props);
            };

            var autoclose = true;

            if (typeof how.autoclose !== 'undefined') {
                autoclose = how.autoclose;
            }

            if (typeof params.autoclose !== 'undefined') {
                autoclose = params.autoclose;
            }


            var autofocus = true;

            if (typeof how.autofocus !== 'undefined') {
                autofocus = how.autofocus;
            }

            if (typeof params.autofocus !== 'undefined') {
                autofocus = params.autofocus;
            }

            this.hasAnimation = true;

            if (typeof how.animation !== 'undefined') {
                this.hasAnimation = how.animation;
            }

            if (typeof params.animation !== 'undefined') {
                this.hasAnimation = params.animation;
            }

            //  Модальный попап двигать не нужно.
            if (this.modal) {
                var dialogClass = params['class'] || '_nb-popup-outer ui-dialog-fixed ';

                dialogClass += _getUIDialogExtraClass(this.$node.attr('class'));

                $(this.node).baseDialog({
                    height: params.height || data.height,
                    minHeight: params.minHeight || data.minheight,
                    maxHeight: params.maxHeight ||  data.maxheight,
                    width: params.width || data.width,
                    show: 'fade',
                    hide: 'fade',
                    modal: true,
                    resizable: false,
                    draggable: false,
                    dialogClass: dialogClass,
                    close: function() {
                        that.close();
                    },
                    appendTo: params.appendTo,
                    position: {
                        using: using
                    },
                    autoclose: autoclose,
                    autofocus: autofocus
                });

                return;
            }

            if (!this.animationInProgress) {
                var dialogClass = '_nb-popup-outer ui-dialog-no-close ';

                if (params['class']) {
                    dialogClass += params['class'];
                }
                if (isFixed) {
                    dialogClass += ' ui-dialog-fixed';
                }
                dialogClass += _getUIDialogExtraClass(this.$node.attr('class'));

                this.$node.hide().contextDialog({
                    height: params.height || data.height || 'auto',
                    minHeight: params.minHeight || data.minheight || 'auto',
                    maxHeight: params.maxHeight || data.maxheight || 'auto',
                    width: params.width || data.width || 'auto',
                    dialogClass: dialogClass,
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
                        using: how.using || using,
                        within: how.within
                    },
                    close: function() {
                        that.close();
                    },
                    appendTo: params.appendTo || how.appendTo,
                    autoclose: autoclose,
                    autofocus: autofocus,
                    withoutTail: params.withoutTail || data.withouttail || false
                });
            }
        }
    }, 'base');
})();

// ----------------------------------------------------------------------------------------------------------------- //

nb.define('popup-toggler', {

    events: {
        'click': 'toggle'
    },

    oninit: function() {
        var that = this;
        this.data = this.nbdata()['popup-toggler'];
        this.popup = nb.find(this.data['id']);

        if (this.popup) {
            this.popup.on('nb-closed', function() {
                that.trigger('nb-closed', that);
            });

            this.popup.on('nb-opened', function() {
                that.trigger('nb-opened', that);
            });
        }

        this.options = {
            //  Относительно чего позиционировать попап.
            //  Если заданы точные координаты в `data.where`, то по ним.
            //  Иначе относительно ноды этого блока.
            where: this.data.where || this.node,

            //  Как позиционировать попап.
            how: this.data.how,
            // Без хвоста
            withoutTail: this.data.withoutTail,

            // Закрывать ли автоматически
            autoclose: this.data.autoclose,

            // Фокусировать ли автоматически
            autofocus: this.data.autofocus,

            // Куда его вставлять
            appendTo: this.data.appendTo
        };
        this.trigger('nb-inited', this);
    },
    /**
     * Toggle popup
     * @returns {Object} nb.block
     */
    toggle: function(evt) {
        if (evt) {
            evt.preventDefault();
        }
        if (this.popup && this.popup.isOpen()) {
            this.close(evt);
        } else {
            this.open(evt);
        }
        return this;
    },

    /**
     * Open popup
     * @fires 'nb-open-started' and 'nb-opened'
     * @returns {Object} nb.block
     */
    open: function(evt) {
        if (evt) {
            evt.preventDefault();
        }
        if (this.isEnabled() && this.popup && !this.popup.isOpen()) {
            this.popup.open(this.options);
            this.trigger('nb-open-started', this);
        }
        return this;
    },

    /**
     * Close popup
     * @fires 'nb-close-started' and 'nb-closed'
     * @returns {Object} nb.block
     */
    close: function() {
        if (this.isEnabled() && this.popup && this.popup.isOpen()) {
            this.popup.close();
            this.trigger('nb-close-started', this);
        }
        return this;
    },

    /**
     * Returns connected popup
     * @returns {Object} nb.block
     */
    getPopup: function() {
        return this.popup;
    },

    /**
     * Sets connected popup
     * @param {Object} params
     *
     *  ```
     *  {
     *       id : 'id' — popupID or link to nb.block
     *       where: '#elem' — to what elem popup attached
     *       how: {
     *          my: 'left',
     *          at:'right',
     *          fixed: true — for position fixed popup
     *      } — to to open popup
     *   }
     *  ```
     * @returns {Object} nb.block
     */
    setPopup: function(params) {
        if (typeof params === 'string') {
            var obj = {};
            obj.popup = params;
            params = obj;
        }

        if (arguments.length === 1 && typeof params === 'object' && params.popup) {
            var id = params.popup;
            delete params.popup;

            if (params.where) {
                this.options = params;
            }

            if (typeof id === 'string') {
                this.popup = nb.find(id);
            } else {
                this.popup = id;
            }
            this.trigger('nb-popup-set', this);
        }
        return this;
    },

    /**
     * Get connected popup  option
     * @returns {Object} options
     */
    getOptions: function() {
        return this.options;
    },

    /**
     * Sets connected popup options
     * @param {Object} params
     *   ```
     *  {
     *       id : 'id' — popupID or link to nb.block
     *       where: '#elem' — to what elem popup attached
     *       how: {
     *          my: 'left',
     *          at:'right',
     *          fixed: true — for position fixed popup
     *      } — to to open popup
     *   }
     *  ```
     * @returns {Object} nb.block
     */
    setOptions: function(params) {
        if (arguments.length === 1 && typeof params === 'object') {
            this.options = params;
            this.trigger('nb-options-set', this);
        }
        return this;
    },

    /**
     * Disable the toggler
     *
     * ```
     * popupToggler.disable();
     * ```
     *
     * @fires 'nb-disabled'
     * @return {Object} blocks for chaining
     */
    disable: function() {
        this._tabindex = this.$node.attr('tabindex');
        this.$node.attr('tabindex', '-1');
        this.$node.addClass('_nb-is-disabled');
        this.trigger('nb-disabled', this);
        return this;
    },

    /**
     * Enables the  toggler
     *
     * ```
     * popupToggler.enable();
     * ```
     *
     * @fires 'nb-enabled'
     * @return {Object} blocks for chaining
     */
    enable: function() {
        this.$node.attr('tabindex', this._tabindex || '0');
        this.$node.removeClass('_nb-is-disabled');
        this.trigger('nb-enabled', this);
        return this;
    },

    /**
     * Return state of the toggler
     *
     *
     * @return {Boolean}
     */
    isEnabled: function() {
        return !this.$node.hasClass('_nb-is-disabled');
    },

    /**
     * Destroy the popup toggler
     * @fires 'nb-destroyed'
     */
    destroy: function() {
        this.nbdestroy();
    }

}, 'base');
