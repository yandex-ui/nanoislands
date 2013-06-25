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
        that.controlPrepare()

        // subscribe through space to the event from a child popups
        nb.on('select:' + that.popup.node.getAttribute('id') + ':change', function (name, params) {
            that.trigger('changeValue', params)
        })

        that._onkeypress = function (e) {
            var button = that.button;
            var popup = that.popup;

            if (e.keyCode === 13 || e.keyCode === 40 || e.keyCode === 38) {
                if (!popup.opened) {
                    if (!button.focused || button.getMod('_disabled')) {
                        return;
                    }

                    var data = button.data()['popup-toggler'];
                    if (popup) {
                        popup.trigger('open', {
                            where: data.where || button.node,
                            how: data.how
                        });

                        return false;
                    }
                } else {
                    var $selected = $(popup.node).find('.nb-select__item_selected_yes')
                    if (e.keyCode === 40) {
                        e.preventDefault()

                        if ($selected.next().length) {
                            popup.selectItem($selected.next())
                        }
                        return false;
                    } else if (e.keyCode === 38) {
                        e.preventDefault()

                        if ($selected.prev().length) {
                            popup.selectItem($selected.prev())
                        }
                        return false;
                    }
                }
            }
        }

        $(document).on('keydown', this._onkeypress);
    },

    /**
     * preparing control depending on configuration and content
     */
    controlPrepare: function () {
        // minimum width of the popup set to the size of the button
        $(this.popup.node).css({
            'min-width': $(this.button.node).outerWidth() - 2
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
})


