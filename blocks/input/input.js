nb.define('input', {
    events: {
             'init': 'oninit',
             'click': 'makeFocus',
             'focusout': 'blur',
             'focusin': 'makeFocus'
         },

        oninit: function(){
            nb.on('input-focusout', function() {
                 this.trigger('focusout');
            });
        },

        makeFocus: function(){
            var $node = $(this.node);

            if ($node.is('.nb-input_disabled')) {
                return false;
            }

            if (!$(this.node).hasClass('nb-input_focus')) {
                nb.trigger('input-focusout');
                $(this.node).addClass('nb-input_focus');

            }
        },

        blur: function() {
            $(this.node).removeClass('nb-input_focus');
            nb.trigger('input-focusout');
        }
});