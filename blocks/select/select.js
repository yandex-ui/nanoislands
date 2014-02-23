/** 
 * ## JS
 * ### jQuery UI Depends:
 * 
 * - jquery.ui.autocomplete.js
 * - jquery.ui.button.js
 * - jquery.ui.core.js
 * - jquery.ui.widget.js
 * - jquery.ui.position.js
 * - jquery.ui.menu.js
 */

nb.define('select', {
    events: {
        'click': '_onclick'
        //'open' { event, ui}
        //'close' { event, ui}
    },

    /*!
     * Init select
     * @fires 'nb-inited'
     */
    oninit: function() {
        this.$control = this.$node.find('select');
        this.$dropdown = this.$node.children('.nb-select__dropdown').appendTo('body');
        this.data = this.nbdata();

        this._updateFromSelect();

        // preparing control depending on configuration and content
        this.controlPrepare();
        this.trigger('nb-inited', this);
    },

    /*!
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
            appendTo: that.$dropdown,
            source: function(request, response) {
                response(that.$control.children(['option', 'optgroup']).map(function() {
                    var returnObj;
                    var $this = $(this);

                    if (this.tagName == 'OPTGROUP') {
                        returnObj = {
                            type: 'group',
                            label: $this.attr('label'),
                            option: this,
                            group: $this.children('option').map(function() {
                                return {
                                    label: $(this).text(),
                                    value: $(this).val(),
                                    option: this
                                };
                            })
                        };
                    } else {
                        var icon = $this.data('icon');
                        returnObj = {
                            label: $this.text(),
                            value: $this.val(),
                            option: this
                        };

                        if (icon) {
                            returnObj['icon'] = icon;
                        }
                    }

                    return returnObj;
                }));
            },
            select: function(event, ui) {

                if (ui.item.type != 'group') {
                    ui.item.option.selected = true;

                    that.$jUI._trigger('selected', event, {
                        item: ui.item.option
                    });
                }
            },
            // delegate handler on 'outer' click on open
            open: function() {
                that.$jUI._on(that.$jUI.document, {
                    // on 'outer' mousedown close control
                    mousedown: function(e) {
                        if (e.which == 1 && !$.contains(that.$jUI.element.get(0), e.target) && !$.contains(that.$dropdown[0], e.target)) {
                            this.close();
                        }
                    }
                });
                that.trigger('nb-opened', that);
            },

            close: function() {
                that.$jUI._off(that.$jUI.document, 'mousedown');
                that.trigger('nb-closed', that);
            }
        }).addClass('ui-widget ui-widget-content');

        that.$jUI = that.$node.data('uiAutocomplete');


        // redefine one menu item rendering method, fires every time, then popup opening
        that.$jUI._renderItem = function(ul, item) {
            var $itemNode = $('<li class="nb-select__item"></li>');

            if (item.option.selected) {
                $itemNode.addClass('nb-select__item_selected_yes');
            }

            if (item.type == 'group') {

                $itemNode.addClass('nb-select__item_type_group');
                var $innerUL = $('<ul></ul>');

                item.group.each(function(index, item) {
                    that.$jUI._renderItem($innerUL, item);
                });

                $itemNode.append($innerUL);
            }

            $itemNode.data('ui-autocomplete-item', item);

            var $itemNodeContent = $('<a></a>');
            var $itemText = $('<span class="nb-select__text"></span>').html(item.label).appendTo($itemNodeContent);
            if (item.icon) {
                $itemText.prepend('<img src="//yandex.st/lego/_/La6qi18Z8LwgnZdsAr1qy1GwCwo.gif" class="nb-icon nb-icon_' + item.icon + '">');
            }
            $itemNode
                .append($itemNodeContent)
                .appendTo(ul);

            return $itemNode;
        };

        // redefine valueMethod, extend with button text changing and fallback select value changing
        // if value not provided, return current value of fallback select
        that.$jUI.valueMethod = function(value) {

            if (typeof value === 'string') {
                var text = that.$control.find('option[value="' + value + '"]').text();
                that.setState({
                    value: value,
                    text: text
                });
            }
            return that.$selected.val();
        };

        // safe original function
        that.$jUI.__resizeMenu = that.$jUI._resizeMenu;

        that.$jUI._resizeMenu = function() {
            // set maxHeight before the menu is displayed
            if (that.data.maxheight) {
                that._setMaxHeight(that.data.maxheight);
            }

            this.__resizeMenu();
        };

        that.$jUI.menu.element.on('click', function(evt) {
            evt.stopPropagation();
        });
    },

    /*!
     * Save value and text from <select> node.
     * @private
     */
    _updateFromSelect: function() {
        // get selected <option/>
        this.$selected = this.$control.children(':selected');

        this.value = this.$selected.val();
        // &nbsp; - to prevent button from collapse if no text on <option/>
        this.text = this.$selected.text() || '&nbsp;';

        this._setText(this.text);
    },

    _onclick: function(evt) {
        if (this.$node && this.$node.data('uiAutocomplete')) {
            evt.preventDefault();
            // close if already visible
            if (this.$node.data('uiAutocomplete') && this.$node.autocomplete('widget').css('display') == 'block') {
                this.close();
                return;
            }

            if (this.isEnabled()) {
                this.open();
                this.$node.focus();
            }
        }
    },

    _setText: function(text) {
        this.$node.find('.nb-button__text').html(text);
    },

    _setMaxHeight: function(maxheight) {
        var height;
        if (/^\d+$/.test(maxheight)) {
            var item = this.$jUI.menu.element.find('.nb-select__item').first();
            height = parseInt(item.height()) * maxheight;
        } else {
            height = maxheight;
        }

        this.$jUI.menu.element.css({
            'max-height': height,
            'overflow-y': 'auto',
            'overflow-x': 'hidden'
        });
    },

    /**
     * Render dropdown of the select
     * @fires 'nb-rendered'
     * @returns {Object} nb.block
     */
    render: function() {
        if (!this.isEnabled()) {
            return this;
        }

        // pass empty string as value to search for, displaying all results
        this.$node.autocomplete('search', '');

        this.trigger('nb-rendered', this);
        return this;
    },

    /**
     * Open dropdown of the select
     * @fires 'nb-opened'
     * @returns {Object} nb.block
     */
    open: function() {
        if (this.$node && this.$node.data('uiAutocomplete') && this.isEnabled()) {
            this.render();
        }
        return this;
    },

    /**
     * Close dropdown of the select
     * @fires 'nb-closed'
     * @returns {Object} nb.block
     */
    close: function() {
        if (this.$node && this.$node.data('uiAutocomplete')) {
            this.$node.autocomplete('close');
            this.trigger('nb-closed', this);
        }
        return this;
    },

    /**
     * Changes a value of control, text on the button and select value it the fallback
     * @param {Object} params — `{ text: '..', value: '..'}`
     * @fires 'nb-changed'
     * @returns {Object} nb.block
     */
    setState: function(params) {
        params = params || {};

        if (this.value !== params.value) {
            var selected;

            if (params.value) {
                selected = this.$control.find('option[value="' + params.value + '"]');
            } else {
                selected = this.$control.find('option:contains(' + params.text + ')');
            }

            if (selected.length !== 0) {
                this.$selected.prop('selected', false);

                this.$selected = selected;

                this.$selected.prop('selected', true);

                this.value = this.$selected.val();

                this.text = this.$selected.html();

                this._setText(this.text);

                this.trigger('nb-changed', this);

                this.$control.val(params.value);

            }
        }
        return this;
    },

    /**
     * Returns state of the select
     *
     * @return {Object} `{value: '..', text: '..'}`
     */
    getState: function() {
        return {
            value: this.value,
            text: this.text
        };
    },

    /**
     * Get name of the select
     * @returns {String|Object} name
     */
    getName: function() {
        return this.$control.prop('name');
    },

    /**
     * Changes a value of control, text on the button and select value it the fallback
     * @param {string} name
     * @fires 'nb-name-set'
     * @returns {Object} nb.block
     */
    setName: function(name) {
        this.$control.prop('name', name);
        this.trigger('nb-name-set', this);
        return this;
    },

    /**
     * Disables the select
     * @fires 'nb-disabled'
     * @returns {Object} nb.block
     */
    disable: function() {
        if (this.isEnabled()) {
            this.$node
                .addClass('nb-is-disabled')
                .autocomplete('disable');
            this.trigger('nb-disabled', this);
        }
        return this;
    },

    /**
     * Enables the select
     * @fires 'nb-enabled'
     * @returns {Object} nb.block
     */
    enable: function() {
        if (!this.isEnabled()) {
            this.$node
                .removeClass('nb-is-disabled')
                .autocomplete('enable');
            this.trigger('nb-enabled', this);
        }
        return this;
    },

    /**
     * Return state of the select
     * @returns {Boolean}
     */
    isEnabled: function() {
        return !this.$node.hasClass('nb-is-disabled');
    },

    /*
     * Set new items for select
     * @params {Array} source New source
     * @fires 'nb-source-changed'
     * @returns {Object} nb.block
     */
    setSource: function(source) {

        if (!source) {
            return this;
        }

        if (!(source instanceof Array)) {
            source = [source];
        }

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
        this.$control.empty().append(html);

        this._updateFromSelect();
        this.trigger('nb-source-changed', this);
        return this;
    },

    /*
     * Get items from select
     * @returns {Array} source
     */
    getSource: function() {
        return $.map(this.$control.children('option'), function(node) {
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
     * @fires 'nb-source-changed'
     * @returns {Object} nb.block
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
        this.trigger('nb-source-changed', this);
        return this;
    },

    /*
     * Remove items to select
     * @param {Array|Object|number} items or index
     * @fires 'nb-source-changed'
     * @returns {Object} nb.block
     */
    removeFromSource: function(param) {
        var source = this.getSource();
        var index;

        if (typeof param == 'number' || typeof param == 'string') {
            index = parseInt(param);
        } else if (!(param instanceof Array)) {
            param = [param];
        }

        if (index || index === 0) {
            source.splice(index, 1);
        } else {
            param.forEach(function(item) {
                source = source.filter(function(obj) {
                    return obj.text != item.text && obj.value != item.value;
                });
            }, this);
        }

        this.setSource(source);
        this.trigger('nb-source-changed', this);
        return this;
    },

    /**
     * Focus the select
     * @fires 'nb-focused'
     * @returns {Object} nb.block
     */
    focus: function() {
        if (this.isEnabled()) {
            this.$node.focus();
        }
        this.trigger('nb-focused', this);
        return this;
    },

    /**
     * Blur the select
     * @fires 'nb-blured'
     * @returns {Object} nb.block
     */
    blur: function() {
        if (this.isEnabled()) {
            this.$node.blur();
        }
        this.trigger('nb-blured', this);
        return this;
    },

    /**
     * Sets option to the jUI widget
     * http://api.jqueryui.com/autocomplete/#method-option
     * @param  {Object} option `{name: value}` имя и значение опцииопции
     * @fires 'nb-option-set'
     * @returns {Object} nb.block
     */
    setOption: function(option) {
        this.$node.autocomplete('option', option);
        this.trigger('nb-option-set', this);
        return this;
    },

    /**
     * Gets option of the jUI widget
     * http://api.jqueryui.com/autocomplete/#method-option
     * @param {String} option
     * @returns {String} option value
     */
    getOption: function(option) {
        return this.$node.autocomplete('option', option);
    },

    /**
     * Destroy the select
     * @fires 'nb-destroyed'
     */
    destroy: function() {
        if (this.$node && this.$node.data('uiAutocomplete')) {
            this.$node.autocomplete('destroy');
            this.$dropdown.empty().appendTo(this.$node);
        }
        this.trigger('nb-destroyed', this);
        this.nbdestroy();
    }
}, 'base');
