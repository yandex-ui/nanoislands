nb.define('input', {
    events: {
        'click': 'focus',
        'click .nb-input__reset': 'reset',
        'focusin': 'focus',
        'focusout': 'blur'
    },

    /**
     * Init input
     * @fires 'nb-inited'
     */
    oninit: function() {
        var that = this;

        this.data = this.nbdata();

        if (this.data.type == 'simple') {
            this.$control = this.$node;
        } else {
            this.$control = this.$node.find('.nb-input__controller');
        }

        this.$control.on('change', function(e) {
            that.trigger('nb-changed', this, e);
        });

        this.disabled = this.$control.prop('disabled');
        this.value = this.$control.val();
        this.focused = false;
        if (this.data.ghost) {
            this.$node.on('mouseover mouseout', function() {
                that.$node.toggleClass('is-ghost');
            });
        }

        if (this.data.error) {
            this.error = nb.find(this.data.error.id);
        }

        nb.on('is-focusedout', function() {
            that.blur();
        });

        this.trigger('nb-inited', this);
    },

    /**
     * Show inputs error
     * @returns {Object} nb.block
     */
    showError: function() {
        if (this.data.error) {
            this.$node.addClass('is-wrong');
            var how = {
                collision: 'flip flip',
                autoclose: false
            };

            if (this.data.error.direction && this.data.error.direction == 'left') {
                how.at = "left";
                how.my = "right";

            } else {
                how.at = "right";
                how.my = "left";
            }

            this.error.open({
                autoclose: false,
                where: this.node,
                how: how
            });
        }
        return this;
    },

    /**
     * Hide inputs error
     * @returns {Object} nb.block
     */
    hideError: function() {
        if (this.data.error) {
            this.$node.removeClass('is-wrong');
            this.error.close();
        }
        return this;
    },

    /**
     * Set content of inputs error
     * @param {string} content - content for error
     * @fires 'nb-error-content-set'
     * @returns {Object} nb.block
     */
    setErrorContent: function(content) {
        if (this.data.error) {
            this.error.$node.find('.nb-popup__content').html(content);
            this.trigger('nb-error-content-set', this);
        }
        return this;
    },


    /**
     * Focus the input
     * @fires 'nb-focused'
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
            this.trigger('nb-focused', this);
            return this;
        }

    },

    /**
     * Blur the input
     * @fires 'nb-blured'
     * @returns {Object} nb.block
     */
    blur: function() {
        this.$node.removeClass('is-focused');

        if (this.data.ghost) {
            this.$node.addClass('is-ghost');
        }

        this.focused = false;
        this.trigger('nb-blured', this);

        return this;
    },

    /**
     * Disables the input
     * @fires 'nb-disabled'
     * @returns {Object} nb.block
     */
    disable: function() {
        this.$node.addClass('is-disabled');
        this.$control.prop('disabled', true);
        this.trigger('nb-disabled', this);
        return this;
    },

    /**
     * Enables the input
     * @fires 'nb-enabled'
     * @returns {Object} nb.block
     */
    enable: function() {
        this.$node.removeClass('is-disabled');
        this.$control.prop('disabled', false);
        this.trigger('nb-enabled', this);
        return this;
    },

    /**
     * Set value of the input
     * @param {String|Object} value
     * @fires 'nb-value-set'
     * @returns {Object} nb.block
     */
    setValue: function(value) {
        this.value = value;
        this.$control.val(value);
        this.trigger('nb-value-set', this);
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
     * @fires 'nb-name-set'
     * @returns {Object} nb.block
     */
    setName: function(value) {
        this.$control.attr('name', value);
        this.trigger('nb-name-set', this);
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
     * Resets value of the input
     * @fires 'nb-value-set'
     * @returns {Object} nb.block
     */
    reset: function() {
        this.setValue('');
        return this;
    },

    /**
     * Destroy the button
     */
    destroy: function() {
        this.trigger('nb-destroyed', this);
        this.nbdestroy();
    }
}, 'base');
