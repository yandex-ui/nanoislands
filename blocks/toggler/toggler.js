nb.define('toggler', {
    events: {
        'click': 'toggle',
        'focusin': 'focus',
        'focusout': 'blur'
    },

    /**
     * Init the toggler
     * @fires 'nb-toggler_inited'
     */
    oninit: function() {
        this.$control = this.$node.find('.nb-toggler__checkbox');
        this.trigger('nb-toggler_inited');
        return this;
    },

    /**
     * Set value of the toggler
     * @param {String} value of the check state
     * @fires 'nb-toggler_value-set'
     * @returns {Object} nb.block
     */
    setValue: function(value) {
        this.$control.attr('value', value);
        this.trigger('nb-toggler_value-set');
        return this;
    },

    /**
     * Returns value of the toggler
     * @return {Boolean} value
     */
    getValue: function() {
        return this.$control.prop('value');
    },

    /**
     * Toggle to the oppocite value
     * Do nothing if toggler is disabled
     * @returns {Object} nb.block
     */
    toggle: function() {
        if (this.isEnabled()) {
            if (this.isChecked()) {
                this.uncheck();
            } else {
                this.check();
            }
        }
        return this;
    },

    /**
     * Returns name of the toggler
     * @return {String} value
     */
    getName: function() {
        return this.$control.attr('name');
    },

    /**
     * Set name of the toggler
     * @param {String} value
     * @fires 'nb-toggler_name-set'
     * @returns {Object} nb.block
     */
    setName: function(value) {
        this.$control.attr('name', value);
        this.trigger('nb-toggler_name-set');
        return this;
    },

    /**
     * Disable toggler
     * @fires 'nb-toggler_disabled'
     */
    disable: function() {
        this.$control.prop('disabled', true);
        this.$node.addClass('is-disabled');
        this.trigger('nb-toggler_disabled');
        return this;
    },

    /**
     * Enable toggler
     * @fires 'nb-toggler_enabled'
     */
    enable: function() {
        this.$control.prop('disabled', false);
        this.$node.removeClass('is-disabled');
        this.trigger('nb-toggler_enabled');
        return this;
    },

    /**
     * Return enable state of the toggler
     * @returns {Boolean}
     */
    isEnabled: function() {
        return !this.$control.prop('disabled');
    },


    /**
     * Focus the input
     * @fires 'nb-toggler_focused'
     * @returns {Object} nb.block
     */
    focus: function() {
        if (this.isEnabled()) {
            if (!this.$node.hasClass('nb-toggler_focus')) {
                nb.trigger('nb-toggler_focusout');
                this.$node.addClass('nb-toggler_focus');
                this.focused = true;
                this.$control.focus();
                this.trigger('nb-toggler_focused');
            }
        }

        return this;
    },

    /**
     * Blur the input
     * @fires 'nb-toggler_blured'
     * @returns {Object} nb.block
     */
    blur: function() {
        this.$node.removeClass('nb-toggler_focus');
        this.focused = false;
        this.trigger('nb-toggler_blured');
        return this;
    },

    /**
     * Return check state of the toggler
     * @returns {Boolean}
     */
    isChecked: function() {
        return this.$control.prop('checked');
    },

    /**
     * Checking toggler
     * @fires 'nb-toggler_checked'
     * @returns {Object} nb.block
     */
    check: function() {
        if (this.isEnabled() && !this.isChecked()) {
            this.$control.prop({
                'checked': true
            });
            this.$node.addClass('nb-toggler_checked');
            this.trigger('nb-toggler_checked');
        }
        return this;
    },

    /**
     * Unchecking toggler
     * @fires 'nb-toggler_unchecked'
     * @returns {Object} nb.block
     */
    uncheck: function() {
        if (this.isEnabled() && this.isChecked()) {
            this.$control.prop({
                'checked': false
            });
            this.$node.removeClass('nb-toggler_checked');
            this.trigger('nb-toggler_unchecked');
        }
        return this;
    },

    /**
     * Destroy the toggler
     */
    destroy: function() {
        nb.destroy(this.node.getAttribute('id'));
    }
}, 'base');
