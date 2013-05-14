nb.define('input-group', {
    events: {
        'click': 'click',
        'focusout': 'blur'
    },

    click: function(e, input) {
        var $node = $(this.node);

        if (!$node.hasClass('nb-input_focus')) {
            $node.addClass('nb-input_focus');
            $node.children('.nb-input').select();
        }
    },

    blur: function() {
        $(this.node).removeClass('nb-input_focus');
    }
});