/*
 * jQuery UI Depends:
 *        jquery.ui.autocomplete.js
 *        jquery.ui.button.js
 *        jquery.ui.core.js
 *        jquery.ui.widget.js
 *        jquery.ui.position.js
 *        jquery.ui.menu.js
 */
(function() {

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
     *     Опции можно менять в рантайме через событие setOption
     *
     * @example
     *     var sug = nb.find('#mysuggest');
     *     sug.setOption({ 'source','http://mydomain.com/user/search'});
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
    };

    $.widget("ui.suggest", $.ui.autocomplete, {
        options: optionsSuggest,

        _renderMenu: function(ul, items) {
            var that = this;
            var html = '';

            $.each(items, function(index, item) {
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

            clone.labelContent = clone.label;
            delete clone.label;

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
            var matcher = new RegExp('(' + $.ui.autocomplete.escapeRegex(term) + ')', "i");
            item.label = item.label.replace(matcher, '<b>$1</b>');
        },

        'username': function(item, term) {
            var matcher = new RegExp('(' + $.ui.autocomplete.escapeRegex(term) + ')', "ig");

            item.usernameHighlighted = item.username.replace(matcher, '<span class="nb-suggest__hl">$1</span>');

            if (typeof item.email == 'string') {
                item.emailHighlighted = item.email.replace(matcher, '<span class="nb-suggest__hl">$1</span>');
            }
        }
    };

    nb.define('suggest', {

        /**
         * Init select
         * @fires 'nb-suggest_inited'
         */
        oninit: function() {

            this.input = this.children()[0];

            var source = this.$node.data('source');

            this.$node.find('input').on('keydown', function(e) {
                var keyCode = $.ui.keyCode;

                if ($.inArray(e.keyCode, [ keyCode.ENTER, keyCode.NUMPAD_ENTER ]) !== -1) {
                    if (!this.$jUI.data().uiSuggest.menu.active) {
                        this.trigger('nb-keypress-enter', this, this.getValue());
                    }
                }
            }.bind(this));

            this.$jUI = this.$node.find('input').suggest({
                source: source,
                countMax: this.$node.data('countMax'),
                type: this.$node.data('type'),
                size: this.$node.data('size'),
                highlight: this.$node.data('highlight'),
                minLength: this.$node.data('minLength')
            });

            this.$suggest = this.$jUI.data().uiSuggest.menu.element;

            this.$suggest.addClass(this.$node.data('class-suggest'));

            this.$jUI.on('suggest_search', function() {
                this.trigger('nb-type', this, this.getValue());
            }.bind(this));

            this.$jUI.on('suggestselect', function(e, item) {
                this.$selected = item.item;
                this.trigger('nb-select', this, item.item);
            }.bind(this));

            this.trigger('nb-inited', this);
        },

        /**
         * Возвращает выбранный в саджесте элемент данных из истоника.
         * @return {Object}
         */
        getSelected: function() {
            return this.$selected;
        },

        /**
         * Sets option to the jUI widget
         * http://api.jqueryui.com/autocomplete/#method-option
         * @param  {Object.<string, number>} option — {
         *      name: value —  имя и значение опцииопции
         * }
         * @fires 'nb-closed'
         * @returns {Object} nb.block
         */
        setOption: function(option) {
            var args = ['option', option];
            this.$jUI.suggest.apply(this.$jUI, args);
            this.trigger('nb-option-set', this);
            return this;
        },


        /**
         * Gets option of the jUI widget
         * http://api.jqueryui.com/autocomplete/#method-option
         * @param {String} option
         * @returns {String} option value
         */
        getOption: function(option) {
            return this.$jUI.suggest.call(this.$jUI, 'option', option);
        },

        /*
         * Set new items for suggest
         * @params {Array} source New source
         * @fires 'nb-source-changed'
         * @returns {Object} nb.block
         */
        setSource: function(source) {
            this.setOption({'source': source});
            this.trigger('nb-source-set', this);
            return this;
        },

        /*
         * Get items from suggest
         * @returns {Array} source
         */
        getSource: function() {
            return this.getOption('source');
        },

        /**
         * Скрывает список предложений
         * @fires 'nb-closed'
         * @returns {Object} nb.block
         */
        close: function() {
            this.$jUI.suggest('close');
            this.trigger('nb-closed', this);
            return this;
        },

        /**
         * Disables the suggest
         * @fires 'nb-disabled'
         * @returns {Object} nb.block
         */
        disable: function() {
            if (this.isEnabled()) {
                this.input.disable();
                this.$node.addClass('is-disabled');
                this.$jUI.suggest('disable');
                this.trigger('nb-disabled', this);
            }
            return this;
        },

        /**
         * Enables the suggest
         * @fires 'nb-enabled'
         * @returns {Object} nb.block
         */
        enable: function() {
            if (!this.isEnabled()) {
                this.input.enable();
                this.$node.removeClass('is-disabled');
                this.$jUI.suggest('enable');
                this.trigger('nb-enabled', this);
            }
            return this;
        },

        /**
         * Return state of the suggest
         * @returns {Boolean}
         */
        isEnabled: function() {
            return !this.$node.hasClass('is-disabled');
        },

        /**
         * Focus the suggest
         * @fires 'nb-focused'
         * @returns {Object} nb.block
         */
        focus: function() {
            if (this.isEnabled()) {
                this.input.focus();
            }
            this.trigger('nb-focused', this);
            return this;
        },

        /**
         * Blur the suggest
         * @fires 'nb-blured'
         * @returns {Object} nb.block
         */
        blur: function() {
            if (this.isEnabled()) {
                this.input.blur();
            }
            this.trigger('nb-blured', this);
            return this;
        },

        /**
         * Get current value of the suggest
         * @returns {String | Number}
         */
        getValue: function() {
            return this.$jUI.val();
        },

        /**
         * Get current value of the suggest
         * @param {String} value
         * @fires 'nb-value-set'
         * @returns {Object} nb.block
         */
        setValue: function(value) {
            if (!this.isEnabled()) {
                this.$jUI.val(value);
                this.trigger('nb-value-set', this);
            }
            return this;
        },

        /**
         * Search value in the source array and open suggest popup
         * @param  {string | number} value
         * @returns {Object} nb.block
         */
        search: function(value) {
            this.$jUI.suggest("search", value);
            return this;
        },

        /**
         * Destroy the suggest
         * @fires 'nb-destroyed'
         */
        destroy: function() {
            if (this.$jUI && this.$jUI.data('ui.suggest')) {
                this.$jUI.suggest('destroy');
            }
            this.trigger('nb-destroyed', this);
            this.nbdestroy();
        }

    }, 'base');

})();
