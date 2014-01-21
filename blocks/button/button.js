/*
 * jQuery UI Depends:
 *        jquery.ui.button.js
 *        jquery.ui.core.js
 *        jquery.ui.widget.js
 */

nb.define('button', {
    /**
     * Init a button
     * @fires 'nb-button_inited'
     */

    oninit: function() {
        this.$node.button({
            // set ui button disabled on init
            disabled: this.node.hasAttribute('disabled')
        });
        this.trigger('nb-button_inited');
    },

    /**
     * Set text of the button
     * @param {String} text  — text for the button
     * @fires 'nb-button_text-set'
     * @returns {Object} nb.block
     */
    setText: function(text) {
        if (this.$node && this.$node.data('uiButton')) {
            this.$node.find('.nb-button__text').html(text);
            this.trigger('nb-button_text-set');
        }
        return this;
    },

    /**
     * Get text of the button
     * @returns {String} — text of the button
     *
     */
    getText: function() {
        return this.$node.find('.nb-button__text').html();
    },

    /**
     * Set href of the link button
     * @param {String} href — link for the button
     * @fires 'nb-button_href-set'
     * @returns {Object} nb.block
     */
    setUrl: function(href) {
        this.$node.attr('href', href);
        this.trigger('nb-button_url-set');
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
     * @fires 'nb-button_disabled'
     * @returns {Object} nb.block
     */
    disable: function() {
        if (this.$node && this.$node.data('uiButton')) {
            this.$node.button('disable');
            this.$node.addClass('is-disabled');
            this.trigger('nb-button_disabled');
        }
        return this;
    },

    /**
     * Enables the button
     * @fires 'nb-button_enabled'
     * @returns {Object} nb.block
     */
    enable: function() {
        if (this.$node && this.$node.data('uiButton')) {
            this.$node.button('enable');
            this.$node.removeClass('is-disabled');
            this.trigger('nb-button_enabled');
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
     * @fires 'nb-button_focused'
     * @returns {Object} nb.block
     */
    focus: function() {
        if (this.isEnabled()) {
            this.$node.focus();
        }
        this.trigger('nb-button_focused');
        return this;
    },

    /**
     * Blur the button
     * @fires 'nb-button_blured'
     * @returns {Object} nb.block
     */
    blur: function() {
        if (this.isEnabled()) {
            this.$node.blur();
        }
        this.trigger('nb-button_blured');
        return this;
    },

    /**
     * Destroy the button
     * @fires 'nb-button_destroyed'
     */
    destroy: function() {
        // вызвали destroy в одном методе, но ссылка на кнопку была сохранена в другом
        // в результате повторный вызов и ошибка в консоли
        if (this.$node && this.$node.data('uiButton')) {
            this.$node.button('destroy');
        }
        this.nbdestroy();
    }
}, 'base');
