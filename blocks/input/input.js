nb.define('input', {
    events: {
        'init': 'oninit',
        'click': 'makeFocus',
        'changeValue': 'onChangeValue',
        'focusout': 'blur',
        'focusin': 'makeFocus',
        'disable': 'onDisable',
        'enable': 'onEnable'
    },

    oninit: function() {

        this.data = this.data()
        this.$node = $(this.node);

        if (this.data.type == 'simple'){
            this.$nodeInput = this.$node
        } else {
            this.$nodeInput = this.$node.find('.nb-input__controller');
        }

        this.disabled = this.$nodeInput.prop('disabled');
        this.value = this.$nodeInput.val();
        this.focused = false;
        nb.on('input-focusout', function() {
            this.trigger('focusout');
        });
    },

    makeFocus: function() {
        if (this.$node.is('.is-nb-disabled')) {
            return false;
        }

        if (!this.$node.hasClass('nb-input_focus')) {
            nb.trigger('input-focusout');
            this.$node.addClass('nb-input_focus');
            this.focused = true;
            this.$nodeInput.get(0).focus();
        }
    },

    blur: function() {
        this.$node.removeClass('nb-input_focus');
        this.focused = false;
    },

    /**
     * Disables the input
     */
    onDisable: function() {
        this.$node.addClass('is-nb-disabled');
        this.$nodeInput.prop('disabled', true);
        this.trigger('disabled');
    },

    /**
     * Enables the input
     */
    onEnable: function() {
        this.$node.removeClass('is-nb-disabled');
        this.$nodeInput.prop('disabled', false);
        this.trigger('enabled');
    },

    /**
     * Changes a value of input
     *
     * @param name — event id that caused the change
     * @param params — {
     *     value: '..'
     * }
     */
    onChangeValue: function(name, params) {
        this.value = params.value;
        this.$nodeInput.val(this.value)
    }
});
