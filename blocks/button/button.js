nb.define('button', {
    events: {
         'init': 'oninit',
         'click': 'makeFocus',
         'focusout': 'blur',
         'focusin': 'makeFocus',
         'textChange': 'onTextChange'
    },

    oninit: function(){
        nb.on('button-focusout', function() {
             this.trigger('focusout');
        });
    },

    /**
     * Changes text of the button
     * @param name — event id that caused the change
     * @param params — {
     *     text: '..'
     * }
     */
    onTextChange: function(name, params){
        $(this.node).find('.nb-button__text').html(params.text)
    },

    makeFocus: function(e, button) {
         var $node = $(this.node);

         if ($node.is('.nb-button_disabled')) {
             return false;
         }

         if (!$node.is(':focus')) {
             nb.trigger('button-focusout');
             $node.focus();
         }
    },

    focus: function(e, button) {
         $(this.node).addClass('nb-button_focus');
    },

    blur: function() {
         $(this.node).removeClass('nb-button_focus');
         nb.trigger('button-focusout');
    }
})