/*
 * ### jQuery UI Depends:
 * - jquery.ui.slider.js
 * - jquery.ui.core.js
 * - jquery.ui.mouse.js
 * - jquery.ui.widget.js
 */

nb.define('slider', {
    /*!
     * Init the slider
     * @fires 'nb-inited'
     */
    oninit: function() {
        var that = this;

        this.data = this.nbdata();
        this.$control = this.$node.find('._nb-slider-fallback');
        this.$body = this.$node.children('._nb-slider-body');

        this.$body.show();

        this.$body.slider({
            range: 'min',
            disabled: this.$node.hasClass('_nb-is-disabled'),
            value: parseFloat(this.data.value),
            change: function(e, ui) {
                this.$control.val(ui.value);
            }.bind(this)
        });

        this.$body.on('slidestop', function(event, ui) {
            that.trigger('nb-slider_slidestop', ui.value);
        });

        this.$body.on('slidestart', function(event, ui) {
            that.trigger('nb-slider_slidestart', ui.value);
        });

        this.$body.on('slide', function(event, ui) {
            that.trigger('nb-slider_slide', ui.value);
        });


        this.trigger('nb-inited', this);
        return this;
    },

    /**
     * Set specified value to slider
     * @param {Number} value
     * @fires 'nb-value-set'
     */
    setValue: function(value) {
        if (this.$body.slider('option', 'disabled')) {
            return this;
        }
        this.$body.slider('value', value);
        this.trigger('nb-value-set', this);
        return this;
    },

    /**
     * Return slider's value
     * @return {Number} value
     */
    getValue: function() {
        return this.$body.slider('option', 'value');
    },

    /**
     * Set name of the fallback input
     * @param {String|Number} value
     * @fires 'nb-name-set'
     * @return {Object} nb.block
     */
    setName: function(value) {
        this.$control.prop('name', value);
        this.trigger('nb-name-set', this);
        return this;
    },

    /**
     * Get name of the fallback input
     * @return {String|Boolean} name
     */
    getName: function() {
        return this.$control.prop('name');
    },

    /**
     * Set disabled state
     * @fires 'nb-disabled'
     * @return {Object} nb.block
     */
    disable: function() {
        this.$node.addClass('_nb-is-disabled');
        this.$body.slider('disable');
        this.trigger('nb-disabled', this);
        return this;
    },

    /**
     * Reset disabled state
     * @fires 'nb-enabled'
     * @return {Object} nb.block
     */
    enable: function() {
        this.$node.removeClass('_nb-is-disabled');
        this.$body.slider('enable');
        this.trigger('nb-enabled', this);
        return this;
    },

    /**
     * Return state of the slider
     * @return {Boolean}
     */
    isEnabled: function() {
        return !this.$body.slider('option', 'disabled');
    },

    /**
     * Destroy the slider
     * @fires 'nb-destroyed'
     */
    destroy: function() {
        if (this.$body && this.$body.data('uiSlider')) {
            this.$body.slider('destroy');
        }
        this.trigger('nb-destroyed', this);
        this.nbdestroy();
    }
}, 'base');
