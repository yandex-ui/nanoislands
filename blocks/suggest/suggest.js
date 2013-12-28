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
        events: {
            'init': 'oninit',
            'close': 'onClose',
            'disable': 'onDisable',
            'enable': 'onEnable'
        },

        /**
         * Init select
         * @fires 'nb-suggest_inited'
         */
        oninit: function() {
            this.$node = $(this.node);

            this.input = this.children()[0];

            var source = this.$node.data('source');

            this.$node.find('input').on('keydown', function(e) {
                var keyCode = $.ui.keyCode;

                if ($.inArray(e.keyCode, [ keyCode.ENTER, keyCode.NUMPAD_ENTER ]) !== -1) {
                    if (!this.$input.data().uiSuggest.menu.active) {
                        this.trigger('nb-suggest_keypress-enter', this.getValue());
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

            this.$input.on('suggest_search', function() {
                this.trigger('nb-suggest_type', this.getValue());
            }.bind(this));

            this.$input.on('suggestselect', function(e, item) {
                this.trigger('nb-suggest_select', item.item);
            }.bind(this));

            this.trigger('nb-suggest_inited');
        },

        /**
         * Возвращает выбранный в саджесте элемент данных из истоника.
         * @return {Object}
         */
        getSelected: function() {
            return this.$input.data().uiSuggest.selectedItem;
        },

        /**
         * Устанавливает опцию для виджета.
         * По сути является аналогом jq.ui.option
         * http://api.jqueryui.com/autocomplete/#method-option
         * @param  {Object.<string, number>} option — {
         *      name: value —  имя  и значение опцииопции
         * }
         */
        setOption: function(option) {
            var args = ['option', option];
            return this.$input.suggest.apply(this.$input, args);
        },

        /**
         * Скрывает список предложений
         * http://api.jqueryui.com/autocomplete/#method-close
         */
        onClose: function() {
            return this.$input.suggest('close');
        },

        /**
         * Disable input
         */
        onDisable: function() {
            console.log('Disable');
            this.input.trigger('disable');
        },

        /**
         * Enable input
         */
        onEnable: function() {
            this.input.trigger('enable');
        },

        /**
         * Get current value oj the suggest
         * @returns {String | Number}
         */
        getValue: function() {
            return this.$input.val();
        },

        /**
         * Searcch value in the source array and open suggest popup
         * @param  {string | number} value
         */
        search: function(value) {
            this.$input.suggest("search", value);
        }
    });

})();
