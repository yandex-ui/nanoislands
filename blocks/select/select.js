nb.define('select', {
    events: {
        'init': 'onInit',
        'changeValue': 'onChangeValue'
    },

    onInit: function() {
        var that = this
        nb.init(that)

        // find elements and values
        var c = that.children();
        that.button = c[0];
        that.popup = c[1];
        that.$fallback = $(that.node).find('.nb-select__fallback');
        that.$selected = that.$fallback.children(":selected");
        that.value = that.$selected.val() ? that.$selected.text() : "";

        // preparing control depending on configuration and content
        that.controlPrepare()

        // subscribe through space to the event from a child popups
        //        nb.on('select:' + that.popup.node.getAttribute('id') + ':change', function (name, params) {
        //            that.trigger('changeValue', params)
        //        })
        //
        //        that._onkeypress = function (e) {
        //            var button = that.button;
        //            var popup = that.popup;
        //
        //            if (e.keyCode === 13 || e.keyCode === 40 || e.keyCode === 38) {
        //                if (!popup.opened) {
        //                    if (!button.focused || button.getMod('_disabled')) {
        //                        return;
        //                    }
        //
        //                    var data = button.data()['popup-toggler'];
        //                    if (popup) {
        //                        popup.trigger('open', {
        //                            where: data.where || button.node,
        //                            how: data.how
        //                        });
        //
        //                        return false;
        //                    }
        //                } else {
        //                    var $selected = $(popup.node).find('.nb-select__item_selected_yes')
        //                    if (e.keyCode === 40) {
        //                        e.preventDefault()
        //
        //                        if ($selected.next().length) {
        //                            popup.selectItem($selected.next())
        //                        }
        //                        return false;
        //                    } else if (e.keyCode === 38) {
        //                        e.preventDefault()
        //
        //                        if ($selected.prev().length) {
        //                            popup.selectItem($selected.prev())
        //                        }
        //                        return false;
        //                    }
        //                }
        //            }
        //        }
        //
        //        $(document).on('keydown', this._onkeypress);
    },

    /**
     * preparing control depending on configuration and content
     */
    controlPrepare: function() {
        var that = this;
        $(that.button.node).autocomplete({
            delay: 0,
            minLength: 0,
            source: function(request, response) {
                response(that.$fallback.children("option").map(function() {
                    var text = $(this).text();
                    return {
                        label: text,
                        value: text,
                        option: this
                    };
                }));
            },
            select: function(event, ui) {
                ui.item.option.selected = true;
            }
        }).addClass("ui-widget ui-widget-content");


        $(that.button.node).attr("tabIndex", -1).click(function() {
                // close if already visible
                if ($(that.button.node).autocomplete("widget").is(":visible")) {
                    $(that.button.node).autocomplete("close");
                    return;
                }
                // pass empty string as value to search for, displaying all results
                $(that.button.node).autocomplete( "search", "" )
            //    $(that.button.node).focus();
            });
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
    onChangeValue: function(name, params) {
        this.value = params.value
        this.text = params.text
        this.button.trigger('textChange', params)
        this.$fallback.find('option[selected]').removeAttr('selected')
        this.$fallback.find('option[value = ' + params.value + ']').attr('selected', 'selected')
    }
})


