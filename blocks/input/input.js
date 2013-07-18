nb.define('input', {
    events: {
             'init': 'oninit',
             'click': 'makeFocus',
             'focusout': 'blur',
             'focusin': 'makeFocus'
         },

        oninit: function(){
            this.$node = $(this.node);
            this.focused = false;
            nb.on('input-focusout', function() {
                 this.trigger('focusout');

            });
        },

        makeFocus: function(){
            if (this.$node.is('.nb-input_disabled')) {
                return false;
            }

            if (!this.$node.hasClass('nb-input_focus')) {
                nb.trigger('input-focusout');
                this.$node.addClass('nb-input_focus');
                this.focused = true;
                this.$node.find('input').get(0).focus();
            }
        },

        blur: function() {
            this.$node.removeClass('nb-input_focus');
            this.focused = false;
        }
});
