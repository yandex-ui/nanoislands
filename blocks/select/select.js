(function () {


    nb.define('select', {
        events: {
            'init': 'onInit',
            'changeValue': 'onChangeValue'
        },

        onInit: function () {
            var that = this
            nb.init(that)

            // find elements and values
            var c = that.children()

            that.button = c[0]
            that.popup = c[1]
            that.$fallback = $(that.node).find('.nb-select__fallback')
            that.value = that.$fallback.find('option[selected]').attr('value')
            that.text = that.$fallback.find('option[selected]').html()

            // preparing control depending on configuration and content
            this.controlPrepare()

            // subscribe through space to the event from a child popups
            nb.on('select:' + that.popup.node.getAttribute('id') + ':change', function (name, params) {
                that.trigger('changeValue', params)
            })
        },

        /**
         * preparing control depending on configuration and content
         */
        controlPrepare: function () {
            // minimum width of the popup set to the size of the button
            $(that.popup.node).css({
                'min-width': $(that.button.node).outerWidth() - 2
            })
        },

        /**
         * Changes a value of control, text on the button and select value it the fallback
         *
         * @param name — event id that caused the change
         * @param params — {
         *     text: '..'
         *     value: '..'
         * }
         */
        onChangeValue: function (name, params) {
            this.value = params.value
            this.text = params.text
            this.button.trigger('textChange', params)
            this.$fallback.find('option[selected]').removeAttr('selected')
            this.$fallback.find('option[value = ' + params.value + ']').attr('selected', 'selected')
        }
    });

})();


