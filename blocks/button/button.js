nb.define('button', {
    events: {
        'init': 'oninit',
        'textChange': 'onTextChange',
        'disable': 'onDisable',
        'enable': 'onEnable',
        'destroy': 'onDestroy'
    },

    oninit: function () {
        this.$node = $(this.node);

        $(this.node).button();
    },

    /**
     * Changes text of the button
     * @param name — event id that caused the change
     * @param params — {
     *     text: '..'
     * }
     */
    onTextChange: function (name, params) {
        if (this.$node && this.$node.data('uiButton')) {
            this.$node.find('.nb-button-content').html(params.text);
        }
    },

    /**
     * Disables the button
     */
    onDisable: function () {
        if (this.$node && this.$node.data('uiButton')) {
            this.$node.button('disable');
            this.$node.addClass('is-nb-disabled');
        }
    },

    /**
     * Enables the button
     */
    onEnable: function() {
        if (this.$node && this.$node.data('uiButton')) {
            this.$node.button('enable');
            this.$node.removeClass('is-nb-disabled');
        }
    },

    onDestroy: function() {
        // вызвали destroy в одном методе, но ссылка на кнопку была сохранена в другом
        // в результате повторный вызов и ошибка в консоли
        if (this.$node && this.$node.data('uiButton')) {
            this.$node.button('destroy');
        }
    }
});
