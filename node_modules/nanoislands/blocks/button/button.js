nb.define('button', {

    events: {},

    oninit: function() {
        this.$node.button({
            // set ui button disabled on init
            disabled: this.$node.prop('disabled')
        });
        this.trigger('nb-inited', this);
    },

    /**
     * Set text of the button
     *
     * ```
     *     button.setContent('Hello, world!');
     * ```
     * 
     * @param {String} text - text for the button
     * @fires 'nb-content-set'
     * @return {Object} block for chaining
     */
    setContent: function(text) {
        if (this.$node && this.$node.data('uiButton')) {
            this.$node.find('._nb-button-content').html(text);
            this.trigger('nb-text-set', this);
        }
        return this;
    },

    /**
     * Get text of the button
     *
     * ```
     *     button.setText('Hello, world!');
     *     button.getText(); // --> 'Hello, world!'
     * ```
     * 
     * @return {String} text of the button
     *
     */
    getContent: function() {
        return this.$node.find('._nb-button-content').html();
    },

    /**
     * Set href of the link button
     *
     * ```
     * button.setUrl('yandex.ru');
     * ```
     *
     * @param {String} href - link for the button
     * @fires 'nb-url-set'
     * @return {Object} block for chaining
     */
    setUrl: function(href) {
        this.$node.attr('href', href);
        this.trigger('nb-url-set', this);
        return this;
    },

    /**
     * Get href of the link button
     *
     * ```
     * button.setUrl('yandex.ru');
     * button.getUrl(); // --> yandex.ru
     * ```
     *
     * @return {String} text of the button
     */
    getUrl: function() {
        return this.$node.attr('href');
    },

    /**
     * Disable the button
     *
     * ```
     * button.disable();
     * ```
     *
     * @fires 'nb-disabled'
     * @return {Object} blocks for chaining
     */
    disable: function() {
        if (this.$node && this.$node.data('uiButton')) {
            this.$node.button('disable');
            this._tabindex = this.$node.attr('tabindex');
            this.$node.attr('tabindex', '-1');
            this.$node.addClass('_nb-is-disabled');
            this.trigger('nb-disabled', this);
        }
        return this;
    },

    /**
     * Enables the button
     *
     * ```
     * button.enable();
     * ```
     *
     * @fires 'nb-enabled'
     * @return {Object} blocks for chaining
     */
    enable: function() {
        if (this.$node && this.$node.data('uiButton')) {
            this.$node.button('enable');
            this.$node.attr('tabindex', this._tabindex || '0');
            this.$node.removeClass('_nb-is-disabled');
            this.trigger('nb-enabled', this);
        }
        return this;
    },

    /**
     * Return state of the button
     *
     * ```
     * button.isEnabled(); // --> true (by default)
     *
     * button.disable();
     * button.isEnabled(); // --> false
     * ```
     *
     * @return {Boolean}
     */
    isEnabled: function() {
        return !this.$node.prop("disabled");
    },

    /**
     * Focus the button
     *
     * ```
     * button.focus();
     * ```
     *
     * @fires 'nb-focus'
     * @return {Object} blocks for chaining
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
     *
     * ```
     * button.blur();
     * ```
     *
     * @fires 'nb-blured'
     * @return {Object} blocks for chaining
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
     *
     * ```
     * button.destroy();
     * ```
     *
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
