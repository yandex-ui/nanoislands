nb.define('radio-button', {
    events: {
        'init': 'init',
        'click': 'select',
        'change': 'change'
    },

    init: function() {
        console.log('init', this.name);
        this.$node = $(this.node);
        this.$buttons = this.$node.children('.nb-button');
    },

    select: function(e, button) {
        this.deselectAll();
        var $button = $(e.target).closest('.nb-button');
        $button.addClass('nb-button_checked');
        $button.find('input').attr('checked', 'checked');
    },

    deselectAll: function() {
        this.$buttons.removeClass('nb-button_checked');
    },

    change: function() {
        console.log('change');
    }
});