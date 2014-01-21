nb.define('input', {
    events: {
        'click': 'focus',
        'focusin': 'focus',
        'focusout': 'blur',
        'mouseover': '_hover',
        'mouseout': '_hover'
    },

    /**
     * Init input
     * @fires 'nb-input_inited'
     */
    oninit: function() {
        var that = this;

        this.data = this.data();

        if (this.data.type == 'simple') {
            this.$control = this.$node;
        } else {
            this.$control = this.$node.find('.nb-input__controller');
        }

        this.$control.on('change', function(e) {
            that.trigger('nb-input_change', e);
        });

        this.disabled = this.$control.prop('disabled');
        this.value = this.$control.val();
        this.focused = false;
        nb.on('is-focusedout', function() {
            that.blur();
        });
        this.trigger('nb-input_inited');
    },

    _hover: function() {
        if (this.data.ghost) {
            this.$node.toggleClass('is-ghost');
        }
    },
    /**
     * Focus the input
     * @fires 'is-focuseded'
     * @returns {Object} nb.block
     */
    focus: function() {
        if (!this.isEnabled()) {
            return this;
        }

        if (!this.$node.hasClass('is-focused')) {
            nb.trigger('nb-input_focusout');
            this.$node.addClass('is-focused');

            if (this.data.ghost) {
                this.$node.removeClass('is-ghost');
            }

            this.focused = true;
            this.$control.get(0).focus();
            this.trigger('nb-input_focused');
            return this;
        }

    },

    /**
     * Blur the input
     * @fires 'nb-input_blured'
     * @returns {Object} nb.block
     */
    blur: function() {
        this.$node.removeClass('is-focused');

        if (this.data.ghost) {
            this.$node.addClass('is-ghost');
        }

        this.focused = false;
        this.trigger('nb-input_blured');

        return this;
    },

    /**
     * Disables the input
     * @fires 'nb-input_disabled'
     * @returns {Object} nb.block
     */
    disable: function() {
        this.$node.addClass('is-disabled');
        this.$control.prop('disabled', true);
        this.trigger('nb-input_disabled');
        return this;
    },

    /**
     * Enables the input
     * @fires 'nb-input_enabled'
     * @returns {Object} nb.block
     */
    enable: function() {
        this.$node.removeClass('is-disabled');
        this.$control.prop('disabled', false);
        this.trigger('nb-input_enabled');
        return this;
    },

    /**
     * Set value of the input
     * @param {String|Object} value
     * @fires 'nb-input_value-set'
     * @returns {Object} nb.block
     */
    setValue: function(value) {
        this.value = value;
        this.$control.val(value);
        this.trigger('nb-input_value-set');
        return this;
    },

    /**
     * Get value of the input
     * @returns {String|Object} value
     */
    getValue: function() {
        // get actual value from <input/> and save it to instance
        this.value = this.$control.val();
        return this.value;
    },

    /**
     * Get name of the input
     * @returns {String|Object} name
     */
    getName: function() {
        return this.$control.prop('name');
    },

    /**
     * Set name of the input
     * @param {String|Object} value
     * @fires 'nb-input_name-set'
     * @returns {Object} nb.block
     */
    setName: function(value) {
        this.$control.attr('name', value);
        this.trigger('nb-input_name-set');
        return this;
    },

    /**
     * Return state of the input
     * @returns {Boolean}
     */
    isEnabled: function() {
        return !this.$control.prop('disabled');
    },

    /**
     * Destroy the button
     */
    destroy: function() {
        this.$node.off('click focusin focusout mouseover mouseout');
        nb.destroy(this.node.getAttribute('id'));
    }
}, 'base');
