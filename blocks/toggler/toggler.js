nb.define('toggler', {
    events: {
        'click': 'toggle'
    },

    /**
     * Init the toggler
     * @fires 'nb-inited'
     */
    oninit: function() {
        this.$control = this.$node.find('.nb-toggler-checkbox');
        this.trigger('nb-inited', this);
        return this;
    },

    /**
     * Set value of the toggler
     * @param {String} value of the check state
     * @fires 'nb-value-set'
     * @returns {Object} nb.block
     */
    setValue: function(value) {
        this.$control.attr('value', value);
        this.trigger('nb-value-set', this);
        return this;
    },

    /**
     * Returns value of the toggler
     * @return {String} value
     */
    getValue: function() {
        return this.$control.prop('value');
    },

    /**
     * Toggle to the oppocite value
     * Do nothing if toggler is disabled
     * @fires 'nb-changed'
     * @returns {Object} nb.block
     */
    toggle: function() {
        if (this.isEnabled()) {
            if (this.isChecked()) {
                this.uncheck();
            } else {
                this.check();
            }
            this.trigger('nb-changed', this);
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
     * @fires 'nb-name-set'
     * @returns {Object} nb.block
     */
    setName: function(value) {
        this.$control.attr('name', value);
        this.trigger('nb-name-set', this);
        return this;
    },

    /**
     * Disable toggler
     * @fires 'nb-disabled'
     */
    disable: function() {
        this.$control.prop('disabled', true);
        this.$node.addClass('nb-is-disabled');
        this.trigger('nb-disabled', this);
        return this;
    },

    /**
     * Enable toggler
     * @fires 'nb-enabled'
     */
    enable: function() {
        this.$control.prop('disabled', false);
        this.$node.removeClass('nb-is-disabled');
        this.trigger('nb-enabled', this);
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
     * @fires 'nb-focused'
     * @returns {Object} nb.block
     */
    focus: function() {
        if (this.isEnabled()) {
            if (!this.$node.hasClass('is-focused')) {
                this.$node.addClass('is-focused').focus();
                this.focused = true;
                this.$control.focus();
                this.trigger('nb-focused', this);
            }
        }
        return this;
    },

    /**
     * Blur the input
     * @fires 'nb-blured'
     * @returns {Object} nb.block
     */
    blur: function() {
        this.$node.removeClass('is-focused').blur();
        this.focused = false;
        this.trigger('nb-blured', this);
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
     * @fires 'nb-checked'
     * @returns {Object} nb.block
     */
    check: function() {
        if (this.isEnabled() && !this.isChecked()) {
            this.$control.prop({
                'checked': true
            });
            this.$node.addClass('is-checked');
            this.trigger('nb-checked', this);
        }
        return this;
    },

    /**
     * Unchecking toggler
     * @fires 'nb-unchecked'
     * @returns {Object} nb.block
     */
    uncheck: function() {
        if (this.isEnabled() && this.isChecked()) {
            this.$control.prop({
                'checked': false
            });
            this.$node.removeClass('is-checked');
            this.trigger('nb-unchecked', this);
        }
        return this;
    },

    /**
     * Destroy the toggler
     * @fires 'nb-destroyed'
     */
    destroy: function() {
        this.trigger('nb-destroyed', this);
        this.nbdestroy();
    }
}, 'base');
