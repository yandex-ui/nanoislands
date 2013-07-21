nb.define('select', {
    events: {
        'init': 'onInit',
        'changeValue': 'onChangeValue'
    },

    onInit: function() {
        var that = this;
        nb.init(that);
        nb.init(that);

        // find elements and values
        var c = that.children();
        that.button = c[0];
        that.$fallback = $(that.node).find('.nb-select__fallback');
        that.$selected = that.$fallback.children(':selected');
        that.value = that.$selected.val() ? that.$selected.text() : '';

        // preparing control depending on configuration and content
        that.controlPrepare();
    },

    /**
     * preparing control depending on configuration and content
     */
    controlPrepare: function() {
        var that = this;
        var control = $(that.button.node).autocomplete({
            delay: 0,
            minLength: 0,
            autoFocus: false,
            source: function(request, response) {
                response(that.$fallback.children('option').map(function() {
                    return {
                        label: $(this).text(),
                        value: $(this).val(),
                        option: this
                    };
                }));
            },
            select: function(event, ui) {
                ui.item.option.selected = true;

                control.data('uiAutocomplete')._trigger('selected', event, {
                    item: ui.item.option
                });
            }
        }).addClass('ui-widget ui-widget-content');

        control.data('uiAutocomplete')._renderItem = function(ul, item) {
            console.log('item', item.label, item.option.selected);

            var $itemNode = $('<li class="nb-select__item"></li>');

            if(item.option.selected){
                $itemNode.addClass('nb-select__item_selected_yes');
            }

            $itemNode.data('ui-autocomplete-item', item);
            $itemNode.append('<a class="nb-select__text">' + item.label + '</a>');
            $itemNode.appendTo(ul);

            return $itemNode;
        };

        control.data('uiAutocomplete').valueMethod = function(value) {
            if (value) {
                that.$selected.removeAttr('selected');
                that.$selected = that.$fallback.children('[value="' + value + '"]').attr('selected', 'selected');
                that.button.trigger('textChange', {
                    text: that.$selected.text()
                });
            }
            return that.$selected.val();
        };

        $(that.button.node).click(function() {
            // close if already visible
            if ($(that.button.node).autocomplete('widget').is(':visible')) {
                $(that.button.node).autocomplete('close');
                return;
            }
            // pass empty string as value to search for, displaying all results
            $(that.button.node).autocomplete('search', '');
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
        this.value = params.value;
        this.text = params.text;
        this.button.trigger('textChange', params);
        this.$selected = this.$fallback.children(':selected');
        this.$selected.removeAttr('selected');
        this.$selected = this.$fallback.children('option[value = ' + params.value + ']');
        this.$selected.attr('selected', 'selected');
    }
});


