;(function() {

    /**
     * Саджест
     * @namespace jquery.ui.suggest
     *
     * @description
     *      Саджест это блок сотоящий из инпута и выпадающего списка.
     *      При вводе какого-либо значения в инпут это значение матчится на список
     *      слов из источника данных, и подходящие элементы из исходного списка
     *      показываются в выпадающем списке, в котором пользователь может выбрать
     *      нужный ему элемент.
     *      После выбора элемента значение инпута меняется на значение выбранного элемента
     *
     */

    /**
     * Опции инициализации саджеста
     * @description
     *     Эти опции могут быть определены в yate шаблонах при описании наноблока.
     *     Опции можно менять в рантайме через стандартные механизмы jquery.ui
     *
     * @example
     *     var sug = nb.find('#mysuggest');
     *     sug.suggest('option', 'source', 'http://mydomain.com/user/search');
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
         * @description ВНИМАНИЕ! Экспериментальная фича. В продакшене не использовать.
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
        size: 's'
    }

    /**
     * Методы саджеста помимо методов jquery.autocomplete (http://api.jqueryui.com/autocomplete/)
     * @type {Object}
     */
    var apiSuggest = {
        /**
         * Возвращает выбранный в саджесте элемент данных из истоника.
         * @return {Object}
         */
        getSelectedItem: function() {
            return this.$input.data().uiSuggest.selectedItem;
        }
    }



    $.widget("ui.suggest", $.ui.autocomplete, {
        options: optionsSuggest,

        _renderItem: function( ul, item ) {
            var clone = $.extend({}, item);

            if (this.options.highlight) {
                if (typeof highlightings[this.options.type] == 'function') {
                    highlightings[this.options.type](clone, this._value());
                }
            }

            var html = yr.run('main', {
                item: clone,
                type: this.options.type,
                size: this.options.size
            }, 'nb-suggest');

            return $(html).appendTo(ul);
        },

        _suggest: function(items) {
            this._super(items);

            if (this.options.countMax) {
                var heightMax = this.menu.element.children().eq(0).height() * this.options.countMax;
                this.menu.element.css({
                    'max-height': heightMax,
                    'overflow-y': 'auto',
                    'overflow-x': 'hidden'
                });
            }
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

            item.username = item.username.replace(matcher, '<b>$1</b>');

            var partsEmail = item.email.split('@', 2);

            if (partsEmail.length > 1) {
                item.email = partsEmail[0].replace(matcher, '<b>$1</b>') + '@' + partsEmail[1];
            } else {
                item.email = item.email.replace(matcher, '<b>$1</b>');
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

            this.$input = this.$node.find('input').suggest({
                source: source,
                countMax: this.$node.data('countMax'),
                type: this.$node.data('type'),
                size: this.$node.data('size'),
                highlight: this.$node.data('highlight')
            });

            this.$suggest = this.$input.data().uiSuggest.menu.element;

            this.$suggest.addClass(this.$node.data('class-suggest'));


            console.log(this.$input);

        }
    }, apiSuggest));

})();


