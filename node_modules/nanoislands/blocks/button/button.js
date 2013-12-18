 /*
 * jQuery UI Depends:
 *        jquery.ui.button.js
 *        jquery.ui.core.js
 *        jquery.ui.widget.js
 */

nb.define('button', {
    events: {
        'init': 'oninit',
    },

    /**
     * Init a button
     * @fires 'nb-button_inited'
     */

    oninit: function () {
        this.$node = $(this.node);
        $(this.node).button();
        this.trigger('nb-button_inited');
    },

    /**
     * Set text of the button
     * @param text {String} — text for the button
     * @fires 'nb-button_text-setted'
     * @returns {nb.block}
     */
    setText: function (text) {
        if (this.$node && this.$node.data('uiButton')) {
            this.$node.find('.nb-button__text').html(text);
            this.trigger('nb-button_text-setted');
        }
        return this;
    },

    /**
     * Get text of the button
     * @returns {String} — text of the button
     *
     */
    getText: function () {
        return this.querySelector('.nb-button__text').innerHTML();
    },

    /**
     * Set href of the link button
     * @param href {String} — link for the button
     * @fires 'nb-button_href-setted'
     * @returns {nb.block}
     */
    setUrl: function (href) {
        this.setAttribute('href');
        this.trigger('nb-button_href-setted');
        return this;
    },

    /**
     * Get href of the link button
     * @returns {String} — text of the button
     */
    getUrl: function () {
        return this.getAttribute('href');
    },

    /**
     * Disables the button
     * @fires 'nb-button_disabled'
     * @returns {nb.block}
     */
    disable: function () {
        if (this.$node && this.$node.data('uiButton')) {
            this.$node.button('disable');
            this.$node.addClass('nb-button_disabled');
            this.trigger('nb-button_disabled');
        }
        return this;
    },

    /**
     * Enables the button
     * @fires 'nb-button_enabled'
     * @returns {nb.block}
     */
    enable: function () {
        if (this.$node && this.$node.data('uiButton')) {
            this.$node.button('enable');
            this.$node.removeClass('nb-button_disabled');
            this.trigger('nb-button_enabled');
        }
        return this;
    },

    /**
     * Return state of the button
     * @returns {Boolean}
     */
    isEnabled: function () {

        return !this.node.hasAttribute('disabled');
    },

    /**
     * Focus the button
     * @fires 'nb-button_focused'
     * @returns {nb.block}
     */
    focus: function () {
        if(this.isEnabled()){
            this.$node.focusin();
        }
        this.trigger('nb-button_focused');
        return this;
    },

    /**
     * Blur the button
     * @fires 'nb-button_blured'
     * @returns {nb.block}
     */
    blur: function () {
        if(this.isEnabled()){
            this.$node.focusout();
        }
        this.trigger('nb-button_blured');
        return this;
    },

    /**
     * Destroy the button
     * @fires 'nb-button_destroyed'
     */
    destroy: function () {
        // вызвали destroy в одном методе, но ссылка на кнопку была сохранена в другом
        // в результате повторный вызов и ошибка в консоли
        if (this.$node && this.$node.data('uiButton')) {
            this.$node.button('destroy');
        }
        nb.destroy(this.node.getAttribute('id'));
        this.trigger('nb-button_destroyed');
    }
});
