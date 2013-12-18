/*
* jQuery UI Depends:
*        jquery.ui.autocomplete.js
*        jquery.ui.button.js
*        jquery.ui.core.js
*        jquery.ui.widget.js
*        jquery.ui.position.js
*        jquery.ui.menu.js
*/

nb.define('select', {
    events: {
        'init': 'onInit'
        //'open' { event, ui}
        //'close' { event, ui}
    },

    /**
    * Init select
    * @fires 'nb-select_inited'
    */

    onInit: function () {
        var that = this;
        nb.init(that);
        that.data = that.data();

        // find elements and values
        var c = that.children();
        that.button = c[0];
        that.$fallback = $(that.node).find('.nb-select__fallback');
        that.$selected = that.$fallback.children(':selected');

        that.value = that.$selected.val() ? that.$selected.text() : '';

        this.button.setText(that.value)


        // preparing control depending on configuration and content
        that.controlPrepare();
        this.trigger('nb-select_inited');
    },

    /**
     * preparing control depending on configuration and content
     */
    controlPrepare: function () {
        var that = this;
        // preparing position parameters for popup from direction data
        var position = {};
        position.collision = 'flip';

        if (that.data.within) {
            position.within = that.data.within;
        }

        if (that.data.direction == 'top') {
            position.my = "left bottom";
            position.at = "left top";

        } else {
            position.my = "left top";
            position.at = "left bottom";
        }

        // select JUI control init
        $(that.node).autocomplete({
            delay: 0,
            minLength: 0,
            autoFocus: false,
            position: position,
            appendTo: that.node,
            source: function (request, response) {
                response(that.$fallback.children('option').map(function () {
                    return {
                        label: $(this).text(),
                        value: $(this).val(),
                        option: this
                    };
                }));
            },
            select: function (event, ui) {
                ui.item.option.selected = true;

                that.$jUI._trigger('selected', event, {
                    item: ui.item.option
                });
            },
            // delegate handler on 'outer' click on open
            open: function (event, ui) {
                that.$jUI._on(that.$jUI.document, {
                    // on 'outer' mousedown close control
                    mousedown: function (e) {
                        if (e.which == 1 && !$.contains(that.$jUI.element.get(0), e.target)) {
                            this.close();
                        }
                    }
                })
                that.trigger('open', {
                    event: event,
                    ui: ui
                });
            },

            close: function (event, ui) {
                that.$jUI._off(that.$jUI.document, 'mousedown');
                that.trigger('close', {
                    event: event,
                    ui: ui
                });
            }
        }).addClass('ui-widget ui-widget-content');

        that.$jUI = $(that.node).data('uiAutocomplete')

        // redefine one menu item rendering method, fires every time, then popup opening
        that.$jUI._renderItem = function (ul, item) {
            var $itemNode = $('<li class="nb-select__item"></li>');

            if (item.option.selected) {
                $itemNode.addClass('nb-select__item_selected_yes');
            }

            $itemNode.data('ui-autocomplete-item', item);
            $itemNode.append('<a><span class="nb-select__text">' + item.label + '</span></a>');
            $itemNode.appendTo(ul);

            return $itemNode;
        };

        // redefine valueMethod, extend with button text changing and fallback select value changing
        // if value not provided, return current value of fallback select
        that.$jUI.valueMethod = function (value) {
            if (value) {
                var text = that.$fallback.children('[value="' + value + '"]').text()
                that.setState({
                    value: value,
                    text: text
                });
            }
            return that.$selected.val();
        };

        // add click event for button
        $(that.button.node).click(function (evt) {
            // иначе сабмитит форму при клике
            evt.preventDefault();
            // close if already visible
            if ($(that.node).autocomplete('widget').css('display') == 'block') {
                $(that.node).autocomplete('close');
                return;
            }
            // pass empty string as value to search for, displaying all results
            $(that.node).autocomplete('search', '');
            $(that.node).focus();
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
     * @fires 'nb-select_changed'
     */
    setState: function (params) {
        this.value = params.value;
        this.text = params.text;
        this.$selected.removeAttr('selected');


        this.$selected = this.$fallback.children('[value="' + this.value + '"]').attr('selected', 'selected');
        this.button.setText(this.text);

        this.trigger('nb-select_changed');

        this.$fallback.val(params.value);
        return this
    },

    /**
     * Returns state of the select
     *
     * @return {Object} -
         * {
         *     value: '..'
         *     text: '..'
         * }
     */
    getState: function () {
        return {
            value: this.value,
            text: this.text
        }
    }

});


