nb.define('checkbox', {
    events: {
        'init': 'oninit',
    },

    /**
     * Init a checkbox
     * @fires 'nb-checkbox_inited' | 'nb-radio_inited'
     */

    oninit: function() {
        this.$node = $(this.node);
        this.$control = this.$node.find('input[type]');
        this.type = this.$node.find('input[type]').attr('type');
        if (!this.isChecked()) {
            this.$control.prop('indeterminate', true);
        }
        this.trigger('nb-' + this.type + '_inited');
    },

    /**
     * Return check state of the checkbox or radio
     * @returns {Boolean}
     */
    isChecked: function() {
        return this.$control.prop('checked');
    },

    /**
     * Checking checkbox or radio
     * @fires 'nb-checkbox_checked' | 'nb-radio_checked'
     * @returns {nb.block}
     */
    check: function() {
        if (this.isEnabled()) {
            this.$control
                .prop({
                    'indeterminate', false,
                    'checked', true
                });
            this.trigger('nb-' + this.type + '_checked');
        }
        return this;
    },

    /**
     * Unchecking checkbox or radio
     * @fires 'nb-checkbox_unchecked' | 'nb-radio_unchecked'
     * @returns {nb.block}
     */
    uncheck: function() {
        if (this.isEnabled()) {
            this.$control.prop({
                    'indeterminate', false,
                    'checked', false
                });
            this.trigger('nb-' + this.type + '_unchecked');
        }
        return this;
    },

    /**
     * Return indeterminate state of the checkbox or radio
     * @returns {Boolean}
     */
    isIndeterminate: function() {
        return this.$control.prop('indeterminate');
    },

    /**
     * Set indeterminate state of the checkbox or radio
     * @fires 'nb-checkbox_indeterminated' | 'nb-radio_indeterminated'
     * @returns {nb.block}
     */
    setIndeterminate: function() {
        if (this.isEnabled()) {
            this.$control.prop('indeterminate', true);
            this.trigger('nb-' + this.type + '_indeterminated');
        }
        return this;
    },

    /**
     * Set determinate state of the checkbox or radio
     * @fires 'nb-checkbox_determinated' | 'nb-radio_determinated'
     * @returns {nb.block}
     */
    setDeterminate: function() {
        if (this.isEnabled()) {
            this.$control.prop('indeterminate', false);
            this.trigger('nb-' + this.type + '_determinated');
        }
        return this;
    },

    /**
     * Return enable state of the checkbox or radio
     * @returns {Boolean}
     */
    isEnabled: function() {
        return !this.$control.prop('disabled');
    },

    /**
     * Enable the checkbox or radio
     * @fires 'nb-checkbox_enabled' | 'nb-radio_enabled'
     * @returns {nb.block}
     */
    enable: function() {
        if (!this.isEnabled()) {
            this.$node.removeClass('nb-checkbox_disabled');
            this.$control.removeAttr('disabled');
            this.trigger('nb-' + this.type + '_enabled');
        }
        return this;
    },

    /**
     * Disable the checkbox or radio
     * @fires 'nb-checkbox_disabled' | 'nb-radio_disabled'
     * @returns {nb.block}
     */
    disable: function() {
        if (this.isEnabled()) {
            this.blur();
            this.$node.addClass('nb-checkbox_disabled');
            this.$control.attr('disabled', 'disabled');
            this.trigger('nb-' + this.type + '_disabled');
        }
        return this;
    },

    /**
     * Focus the checkbox or radio
     * @fires 'nb-checkbox_focused' | 'nb-radio_focused'
     * @returns {nb.block}
     */
    focus: function() {
        this.$control.focus();
        this.trigger('nb-' + this.type + '_focused');
        return this;
    },

    /**
     * Blur the checkbox or radio
     * @fires 'nb-checkbox_blured' | 'nb-radio_blured'
     * @returns {nb.block}
     */
    blur: function() {
        this.$control.blur();
        this.trigger('nb-' + this.type + '_blured');
        return this;
    },

    /**
     * Sets label of the checkbox or radio
     * @param {String|Number} label
     * @fires 'nb-checkbox_label-setted' | 'nb-radio_label-setted'
     * @returns {nb.block}
     */
    setLabel: function(label) {
        this.$node.find('.nb-checkbox__label').html(label);
        this.trigger('nb-' + this.type + '_label-setted');
        return this;
    },

    /**
     * Gets label of the checkbox or radio
     * @returns {String | Number}
     */
    getLabel: function() {
        return this.$node.find('.nb-checkbox__label').html();
    },

    /**
     * Get name of the checkbox or radio
     * @returns {String|Object} name
     */
    getName: function() {
        return this.$control.prop('name');
    }

});
