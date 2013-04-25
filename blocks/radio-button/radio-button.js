nb.define('radio-button', {
    events: {
        'init': 'init',
        'click .js-button': 'onClick'
    },

    init: function() {
        this.$buttons = $(this.node).children('.js-button');
    },

    onClick: function(e, button) {
        var $button = $(button);

        if (!$button.is('.js-checked')) {
            this.uncheckedAll();
            this.checked($button);
        }
    },

    uncheckedAll: function() {
        this.$buttons
            .removeClass('js-checked')
            .removeClass('nb-button_checked')
    },

    checked: function($button) {
        $button
            .addClass('js-checked')
            .addClass('nb-button_checked')

        this.trigger('checked');
    }
});