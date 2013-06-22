nb.define('button', {
    events: {
    //     'click': 'click',
    //     'focusout': 'blur',
    //     'focusin': 'focus',
        'textChange': 'onTextChange'
    },

    onTextChange: function(name, params){
        $(this.node).find('.nb-button__text').html(params.text)
    }

    // click: function(e, button) {
    //     var $node = $(this.node);

    //     if ($node.is('.nb-button_disabled')) {
    //         return false;
    //     }

    //     if (!$node.is(':focus')) {
    //         $node.focus();
    //     }
    // },

    // focus: function(e, button) {
    //     $(this.node).addClass('nb-button_focus');
    // },

    // blur: function() {
    //     $(this.node).removeClass('nb-button_focus');
    // }
})