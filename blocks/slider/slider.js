/* jQuery UI Depends:
 *        jquery.ui.slider.js
 *        jquery.ui.core.js
 *        jquery.ui.mouse.js
 *        jquery.ui.widget.js
 */

nb.define('slider', {
    events: {
        'init': 'oninit'
    },

    /**
     * Init the slider
     * @fires 'nb-slider_inited'
     */
    oninit: function() {
        this.data = this.data();
        this.$node = $(this.node);
        this.$fallback = this.$node.find('.nb-slider__fallback');
        this.$control = this.$node.children('.nb-slider__body');

        this.$control.show();

        this.$control.slider({
            range: 'min',
            disabled: this.$node.hasClass('nb-slider_disabled'),
            value: parseFloat(this.data.value),
            change: function(e, ui) {
                this.$fallback.attr('value', ui.value);
            }.bind(this)
        });
        this.trigger('nb-slider_inited');
        return this;
    },

    /**
     * Set specified value to slider
     * @param {Number} value
     * @fires 'nb-slider_changed'
     */
    setValue: function(value) {
        if (this.$control.slider('option', 'disabled')) {
            return this;
        }
        this.$control.slider('value', value);
        this.trigger('nb-slider_changed');
        return this;
    },

    /**
     * Return slider's value
     * @return {Number} value
     */
    getValue: function() {
        return this.$control.slider('option', 'value');
    },

    /**
     * Set name of the fallback input
     * @param {String|Number} value
     * @fires 'nb-slider_name-set'
     * @return {Object} nb.block
     */
    setName: function(value) {
        this.$fallback.attr('name', value);
        this.trigger('nb-slider_name-set');
        return this;
    },

    /**
     * Get name of the fallback input
     * @return {String|Boolean} name
     */
    getName: function() {
        return this.$fallback.prop('name');
    },

    /**
     * Set disabled state
     * @fires 'nb-slider_disabled'
     */
    disable: function() {
        this.$node.addClass('nb-slider_disabled');
        this.$control.slider('disable');
        return this;
    },

    /**
     * Reset disabled state
     * @fires 'nb-slider_enabled'
     */
    enable: function() {
        this.$node.removeClass('nb-slider_disabled');
        this.$control.slider('enable');
        return this;
    },

    /**
     * Return state of the slider
     * @return {Boolean}
     */
    isEnabled: function() {
        return !this.$control.slider('option', 'disabled');
    }
});
