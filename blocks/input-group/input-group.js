nb.define('public_url', {
    events: {
        'click': 'click',
        'focusout': 'blur'
    },

    click: function(e, input) {
        var $node = $(this.node);

        if (!$(this.node).hasClass('nb-input_focus')) {
            $(this.node).addClass('nb-input_focus');
            $(this.node).children('.nb-input').select();
        }
    },

    blur: function() {
        $(this.node).removeClass('nb-input_focus');
    }
});