nb.define('button', {
    events: {
        'init': 'oninit',
        'click': 'onClick',
        'focusout': 'blur',
        'focusin': 'makeFocus',
        'textChange': 'onTextChange'
    },

    oninit: function () {
        this.$node = $(this.node);
        this.focused = false;

        nb.on('button-focusout', function () {
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
    onTextChange: function (name, params) {
        this.$node.find('.nb-button__text').html(params.text)
    },

    onClick: function() {
        if (!this.$node.is('.nb-button_disabled')) {
            this.$node.focus();
        }
    },

    makeFocus: function (e, button) {
        if (this.$node.is('.nb-button_disabled')) {
            return false;
        }

        if (!this.focused) {
            nb.trigger('button-focusout');
            this.$node.addClass('nb-button_focus');
            this.focused = true;
        }
    },

    blur: function () {
        this.$node.removeClass('nb-button_focus');
        this.focused = false;
    }
});
