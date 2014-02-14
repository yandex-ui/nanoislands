nb.define('checkbox', {
    events: {
        'change input': 'onchange'
    },

    onchange: function() {
        if (this.$control.prop('checked')) {
            this.check();
        } else {
            this.uncheck();
        }
    },

    /**
     * Init a checkbox
     * @fires 'nb-inited'
     */

    oninit: function() {
        this.$control = this.$node.find('input[type]');
        this._isChecked = this.$control.prop('checked');

        this.$control.on('click', function(evt) {
            evt.stopPropagation();
        });

        if (!this._isChecked) {
            this.$control.prop('indeterminate', true);
        }

        this.trigger('nb-inited', this);
    },

    /**
     * Override base getType()
     * @returns {String} — type of control
     */

    getType: function() {
        return this.$control.attr('type');
    },

    /**
     * Return check state of the checkbox or radio
     * @returns {Boolean}
     */
    isChecked: function() {
        return this._isChecked;
    },

    /**
     * Checking checkbox or radio
     * @fires 'nb-checked', 'nb-changed'
     * @returns {Object} nb.block
     */
    check: function() {
        if (!this.isEnabled()) {
            return this;
        }

        var isChecked = this.isChecked();

        this.$control.prop({
            'indeterminate': false,
            'checked': true
        });

        this._isChecked = true;
        this.trigger('nb-checked', this);

        if (!isChecked) {
            this.trigger('nb-changed', this);
        }

        return this;
    },

    /**
     * Unchecking checkbox or radio
     * @fires 'nb-unchecked', 'nb-changed'
     * @returns {Object} nb.block
     */
    uncheck: function() {
        if (!this.isEnabled()) {
            return this;
        }

        var isChecked = this.isChecked();

        this.$control.prop({
            'indeterminate': false,
            'checked': false
        });

        this._isChecked = false;
        this.trigger('nb-unchecked', this);

        if (isChecked) {
            this.trigger('nb-changed', this);
        }

        return this;
    },

    /**
     * Toggle to the opposite state checkbox or radio
     * @fires 'change'
     * @return {Object} nb.block
     */
    toggle: function() {
        if (!this.isEnabled()) {
            return this;
        }

        this.trigger('nb-change', this);

        if (this.isChecked()) {
            this.uncheck();
        } else {
            this.check();
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
     * @fires 'nb-indeterminated'
     * @returns {Object} nb.block
     */
    setIndeterminate: function() {
        if (this.isEnabled()) {
            this.$control.prop('indeterminate', true);
            this.trigger('nb-indeterminated', this);
        }
        return this;
    },

    /**
     * Set determinate state of the checkbox or radio
     * @fires 'nb-determinated'
     * @returns {Object} nb.block
     */
    setDeterminate: function() {
        if (this.isEnabled()) {
            this.$control.prop('indeterminate', false);
            this.trigger('nb-determinated', this);
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
     * @fires 'nb-enabled'
     * @returns {Object} nb.block
     */
    enable: function() {
        if (!this.isEnabled()) {
            this.$node.removeClass('is-disabled');
            this.$control.removeAttr('disabled');
            this.trigger('nb-enabled', this);
        }
        return this;
    },

    /**
     * Disable the checkbox or radio
     * @fires 'nb-disabled'
     * @returns {Object} nb.block
     */
    disable: function() {
        if (this.isEnabled()) {
            this.blur();
            this.$node.addClass('is-disabled');
            this.$control.attr('disabled', 'disabled');
            this.trigger('nb-disabled', this);
        }
        return this;
    },

    /**
     * Focus the checkbox or radio
     * @fires 'nb-focused'
     * @returns {Object} nb.block
     */
    focus: function() {
        this.$control.focus();
        this.trigger('nb-focused', this);
        return this;
    },

    /**
     * Blur the checkbox or radio
     * @fires 'nb-blured'
     * @returns {Object} nb.block
     */
    blur: function() {
        this.$control.blur();
        this.trigger('nb-blured', this);
        return this;
    },

    /**
     * Sets label of the checkbox or radio
     * @param {String|Number} label
     * @fires 'nb-label-set'
     * @returns {Object} nb.block
     */
    setLabel: function(label) {
        this.$node.find('.nb-checkbox__label').html(label);
        this.trigger('nb-label-set', this);
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
    },

    /**
     * Set checkbox value
     * @param {String|Number} value
     * @fires 'nb-name-set'
     * @returns {Object} nb.block
     */
    setName: function(value) {
        this.$control.attr('name', value);
        this.trigger('nb-name-set', this);
        return this;
    },

    /**
     * Returns checkbox value
     * @returns {String}
     */
    getValue: function() {
        return this.$control.attr('value') || '';
    },

    /**
     * Set checkbox value
     * @param {String|Number} value
     * @fires 'nb-value-set'
     * @returns {Object} nb.block
     */
    setValue: function(value) {
        this.$control.attr('value', value);
        this.trigger('nb-value-set', this);
        return this;
    },

    /**
     * Destroy checkbox
     * @fires 'nb-destroyed'
     */
    destroy: function() {
        this.$control.off('click');
        this.trigger('nb-destroyed', this);
        this.nbdestroy();
    }

}, 'base');




/**
 * Checkbox collection
 *
 * @example
 * <div class="nb-checkbox-group _init" data-nb="checkbox-group">
 *     nb-checkbox({
 *         'name': 'test'
 *         'value': '1'
 *         'content': '1'
 *         'type': 'radio'
 *     })
 *     nb-checkbox({
 *         'name': 'test'
 *         'value': '2'
 *         'content': '2'
 *         'type': 'radio'
 *         'checked': true()
 *     })
 * </div>
 *
 * // return 2
 * nb.block(document.querySelector('.nb-checkbox-group')).getValue();
 *
 * nb.block(document.querySelector('.nb-checkbox-group')).on('nb-changed', function(nameEvent, block) {
 *     console.log(block.getValue());
 * });
 */
nb.define('checkbox-group', {

    /**
     * @param {String} evtName name event
     * @param {nb.block} item
     * @fires 'nb-changed'
     */
    _onItemChecked: function(evtName, item) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i] != item) {
                this.items[i].uncheck();
            }
        }

        this.trigger('nb-changed', this);
    },

    /**
     * Init a checkbox collection
     * @fires 'nb-inited'
     */
    oninit: function() {
        var onItemChecked = $.proxy(this._onItemChecked, this);

        this.items = this.$node.find('.nb-checkbox').map(function() {
            var block = nb.block(this);
            block.on('nb-checked', onItemChecked);
            return block;
        });

        this.trigger('nb-inited', this);
    },

    /**
     * Return check state of the checkbox or radio
     * @returns {Boolean}
     */
    isChecked: function() {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].isChecked()) {
                return true;
            }
        }

        return false;
    },

    /**
     * Gets label of the checked checkbox or radio
     * @returns {String|undefined}
     */
    getLabel: function() {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].isChecked()) {
                return this.items[i].getLabel();
            }
        }
    },

    /**
     * Gets checked checkbox value
     * @returns {String|undefined}
     */
    getValue: function() {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].isChecked()) {
                return this.items[i].getValue();
            }
        }
    },

    /**
     * Set checkbox value
     * @param {String|Number} value
     * @fires 'nb-value-set'
     * @returns {Object} nb.block
     */
    setValue: function(value) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].getValue() == value) {
                this.items[i].check();
                this.trigger('nb-value-set', this);
                break;
            }
        }

        return this;
    },

    /**
     * Get name of the checkbox or radio
     * @returns {String} name
     */
    getName: function() {
        return this.items[0].getName();
    },

    /**
     * @fires 'nb-destroyed'
     */
    destroy: function() {
        this.trigger('nb-destroyed', this);
        this.nbdestroy();
    }

}, 'base');




