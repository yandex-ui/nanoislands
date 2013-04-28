nb.define('radio-button', {
    events: {
        'init': 'init',
        'click .nb-button': 'select'
    },

    init: function() {
        this.$node = $(this.node);
        this.$buttons = this.$node.children('.nb-button');
    },

    select: function(e, button) {
        this.deselectAll();
        var $button = $(button);
        $button
            .addClass('nb-button_checked')
    },

    deselectAll: function() {
        this.$buttons.removeClass('nb-button_checked');
    }
});