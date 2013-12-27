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

    onInit: function() {
        nb.init(this);
        this.$node = $(this.node);
        this.data = this.data();

        // find elements and values
        this.button = this.children()[0];

        this.$fallback = this.$node.find('.nb-select__fallback');

        this._updateFromSelect();

        // preparing control depending on configuration and content
        this.controlPrepare();
        this.trigger('nb-select_inited');
    },

    /**
     * preparing control depending on configuration and content
     */
    controlPrepare: function() {
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
        this.$node.autocomplete({
            delay: 0,
            minLength: 0,
            autoFocus: false,
            position: position,
            appendTo: that.node,
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

                that.$jUI._trigger('selected', event, {
                    item: ui.item.option
                });
            },
            // delegate handler on 'outer' click on open
            open: function(event, ui) {
                that.$jUI._on(that.$jUI.document, {
                    // on 'outer' mousedown close control
                    mousedown: function(e) {
                        if (e.which == 1 && !$.contains(that.$jUI.element.get(0), e.target)) {
                            this.close();
                        }
                    }
                });
                that.trigger('open', {
                    event: event,
                    ui: ui
                });
            },

            close: function(event, ui) {
                that.$jUI._off(that.$jUI.document, 'mousedown');
                that.trigger('close', {
                    event: event,
                    ui: ui
                });
            }
        }).addClass('ui-widget ui-widget-content');

        that.$jUI = that.$node.data('uiAutocomplete');

        // redefine one menu item rendering method, fires every time, then popup opening
        that.$jUI._renderItem = function(ul, item) {
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
        that.$jUI.valueMethod = function(value) {
            if (typeof value === 'string') {
                var text = that.$fallback.children('[value="' + value + '"]').text();
                that.setState({
                    value: value,
                    text: text
                });
            }
            return that.$selected.val();
        };

        // add click event for button
        $(this.button.node).on('click', function(evt) {
            // иначе сабмитит форму при клике
            evt.preventDefault();
            // close if already visible
            if (that.$node.autocomplete('widget').css('display') == 'block') {
                that.$node.autocomplete('close');
                return;
            }
            // pass empty string as value to search for, displaying all results
            that.$node.autocomplete('search', '');
            that.$node.focus();
        });
    },

    /**
     * Save value and text from <select> node.
     * @private
     */
    _updateFromSelect: function() {
        // get selected <option/>
        this.$selected = this.$fallback.children(':selected');

        this.value = this.$selected.val();
        // &nbsp; - to prevent button from collapse if no text on <option/>
        this.text = this.$selected.text() || '&nbsp;';

        this.button.setText(this.text);
    },

    /**
     * Changes a value of control, text on the button and select value it the fallback
     * @param {Object} params — {
         *     text: '..'
         *     value: '..'
         * }
     * @fires 'nb-select_changed'
     */
    setState: function(params) {
        this.value = params.value;
        this.text = params.text;
        this.$selected.removeAttr('selected');

        this.$selected = this.$fallback.children('[value="' + this.value + '"]').attr('selected', 'selected');
        this.button.setText(this.text);

        this.trigger('nb-select_changed');

        this.$fallback.val(params.value);
        return this;
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
    getState: function() {
        return {
            value: this.value,
            text: this.text
        };
    },

    /**
     * Disables the select
     * @fires 'nb-select_disabled'
     * @returns {nb.block}
     */
    disable: function() {
        if (this.isEnabled()) {
            this.button.disable();
            this.trigger('nb-select_disabled');
        }
        return this;
    },

    /**
     * Enables the select
     * @fires 'nb-select_enabled'
     * @returns {nb.block}
     */
    enable: function() {
        if (!this.isEnabled()) {
            this.button.enable();
            this.trigger('nb-select_enabled');
        }
        return this;
    },

    /**
     * Return state of the select
     * @returns {Boolean}
     */
    isEnabled: function() {
        return this.button.isEnabled();
    },

    /*
     * Set new items for select
     * @params {Array} source New source
     * @fires 'nb-select_source-changed'
     * @returns {nb.block}
     */
    setSource: function(source) {
        var html = [];
        for (var i = 0, j = source.length; i < j; i++) {
            var item = source[i];
            html.push(
                '<option' +
                    ' label="' + item.text + '"' +
                    ' value="' + item.value + '"' +
                    (item.selected ? ' selected="selected"' : '') +
                    '>' + item.text + '</option>'
            );
        }

        // set new source for select
        this.$fallback.empty().append(html);

        this._updateFromSelect();
        this.trigger('nb-select_source-changed');
        return this;
    },

    /*
     * Get items from select
     * @returns {Array} source
     */
    getSource: function() {
        return $.map(this.$fallback.children('option'), function(node) {
            return {
                text: $(node).text(),
                value: $(node).val()
            };
        });
    },

    /*
     * Add items to select
     * @param {Array|Object} items
     * @param {Number} index to insert
     * @fires 'nb-select_source-changed'
     * @returns {nb.block}
     */
    addToSource: function(items, index) {
        var source = this.getSource();

        if (!(items instanceof Array)) {
            items = [items];
        }

        var insertion = items.filter(function(item) {
            return source.indexOf(item) === -1;
        }, this);

        if (isNaN(index)) {
            index = source.length;
        }

        insertion.forEach(function(item, i) {
            source.splice(index + i, 0, item);
        }, this);

        this.setSource(source);
        return this;
    },

    /*
     * Remove items to select
     * @param {Array|Object|number} items or index
     * @fires 'nb-select_source-changed'
     * @returns {nb.block}
     */
    removeFromSource: function(param) {
        var source = this.getSource();
        var index;

        if (typeof param == 'number' || typeof param == 'string') {
            index = parseInt(param);
        } else if (!(param instanceof Array)) {
            param = [param];
        }

        if (index || index == 0) {
            source.splice(index, 1);
        } else {
            param.forEach(function(item) {
                source = source.filter(function(obj){
                   return obj.text != item.text && obj.value != item.value
                });
            }, this);
        }

        this.setSource(source);
        return this;
    },

    /**
     * Focus the select
     * @fires 'nb-select_focused'
     * @returns {nb.block}
     */
    focus: function() {
        if (this.isEnabled()) {
            this.button.focus();
        }
        this.trigger('nb-select_focused');
        return this;
    },

    /**
     * Blur the select
     * @fires 'nb-select_blured'
     * @returns {nb.block}
     */
    blur: function() {
        if (this.isEnabled()) {
            this.button.blur();
        }
        this.trigger('nb-select_blured');
        return this;
    },

    /**
     * Destroy the select
     * @fires 'nb-select_destroyed'
     */
    destroy: function() {
        if (this.$node && this.$node.data('uiAutocomplete')) {
            this.button.destroy();
            $(this.button.node).off('click');
            this.$node.autocomplete('destroy');
        }

        this.trigger('nb-select_destroyed');
        nb.destroy(this.node.getAttribute('id'));
    }
});
