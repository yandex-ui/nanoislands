/*
 * jQuery UI Depends:
 *        jquery.ui.button.js
 *        jquery.ui.core.js
 *        jquery.ui.widget.js
 */

nb.define('button', {
    /**
     * Init a button
     * @fires 'nb-inited'
     */

    oninit: function() {
        this.$node.button({
            // set ui button disabled on init
            disabled: this.$node.prop('disabled')
        });
        this.trigger('nb-inited', this);
    },

    /**
     * Set text of the button
     * @param {String} text  — text for the button
     * @fires 'nb-text-set'
     * @returns {Object} nb.block
     */
    setText: function(text) {
        if (this.$node && this.$node.data('uiButton')) {
            this.$node.find('.nb-button-content').html(text);
            this.trigger('nb-text-set', this);
        }
        return this;
    },

    /**
     * Get text of the button
     * @returns {String} — text of the button
     *
     */
    getText: function() {
        return this.$node.find('.nb-button-content').html();
    },

    /**
     * Set href of the link button
     * @param {String} href — link for the button
     * @fires 'nb-url-set'
     * @returns {Object} nb.block
     */
    setUrl: function(href) {
        this.$node.attr('href', href);
        this.trigger('nb-url-set', this);
        return this;
    },

    /**
     * Get href of the link button
     * @returns {String} — text of the button
     */
    getUrl: function() {
        return this.$node.attr('href');
    },

    /**
     * Disables the button
     * @fires 'nb-disabled'
     * @returns {Object} nb.block
     */
    disable: function() {
        if (this.$node && this.$node.data('uiButton')) {
            this.$node.button('disable');
            this.$node.addClass('nb-is-disabled');
            this.trigger('nb-disabled', this);
        }
        return this;
    },

    /**
     * Enables the button
     * @fires 'nb-enabled'
     * @returns {Object} nb.block
     */
    enable: function() {
        if (this.$node && this.$node.data('uiButton')) {
            this.$node.button('enable');
            this.$node.removeClass('nb-is-disabled');
            this.trigger('nb-enabled', this);
        }
        return this;
    },

    /**
     * Return state of the button
     * @returns {Boolean}
     */
    isEnabled: function() {
        return !this.$node.prop("disabled");
    },

    /**
     * Focus the button
     * @fires 'nb-focus'
     * @returns {Object} nb.block
     */
    focus: function() {
        if (this.isEnabled()) {
            this.$node.focus();
        }
        this.trigger('nb-focused', this);
        return this;
    },

    /**
     * Blur the button
     * @fires 'nb-blured'
     * @returns {Object} nb.block
     */
    blur: function() {
        if (this.isEnabled()) {
            this.$node.blur();
        }
        this.trigger('nb-blured', this);
        return this;
    },

    /**
     * Destroy the button
     * @fires 'nb-destroyed'
     */
    destroy: function() {
        // вызвали destroy в одном методе, но ссылка на кнопку была сохранена в другом
        // в результате повторный вызов и ошибка в консоли
        if (this.$node && this.$node.data('uiButton')) {
            this.$node.button('destroy');
        }
        this.trigger('nb-destroyed', this);
        this.nbdestroy();
    }
}, 'base');
