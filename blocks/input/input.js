nb.define('input', {
    events: {
             'click': 'click',
             'focusout': 'blur'
         },

         click: function(e, input) {
             var $node = $(this.node);

             if ($node.is('.nb-input_disabled')) {
                 return false;
             }

             if (!$(this.node).hasClass('nb-input_focus')) {
                $(this.node).addClass('nb-input_focus');

             }
         },

        blur: function() {
            $(this.node).removeClass('nb-input_focus');
        }
});