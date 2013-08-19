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
        this.$node.find('.nb-button__text').html(params.text)
    },

    /**
     * Disables the button
     */
    onDisable: function () {
        this.$node.button( "disable" );
        this.$node.addClass('nb-button_disabled');
    },

    /**
     * Enables the button
     */
    onEnable: function() {
        this.$node.button( "enable" );
        this.$node.removeClass('nb-button_disabled');
    },

    onDestroy: function() {
        // вызвали destroy в одном методе, но ссылка на кнопку была сохранена в другом
        // в результате повторный вызов и ошибка в консоли
        if (this.$node && this.$node.data('uiButton')) {
            this.$node.button('destroy');
        }
    }
});
