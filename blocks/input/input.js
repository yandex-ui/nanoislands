(function() {
    
var bindOninput = function(block, callback) {
    if (block.$control.get(0).attachEvent) {
        //IE8 does not supports oninput events: https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.oninput
        block.$control.get(0).attachEvent('onpropertychange', function(e) {
            if (e.propertyName === "value") {
                callback(e);
            }
        });
    } else {
        block.$control.on('input', callback);
    }
};

/**
 * @class nb.block.Input
 * @augments nb.block.Base
 */
nb.define('input', {
    events: {
        'click': 'focus',
        'mousedown ._nb-input-reset': 'reset'
    },

    /**
     * Init input
     * @fires 'nb-inited'
     * @constructor
     */
    oninit: function() {
        var that = this;
        this.focused = false;

        this.data = this.nbdata();

        if (this.data.type == 'simple') {
            this.$control = this.$node;
        } else {
            this.$control = this.$node.find('._nb-input-controller');
        }

        this.$control.on('focusin', function(e) {
            if (!that.focused) {
                that._onfocus(e);
            }
        });
        this.$control.on('focusout', function(e) {
            if (that.focused) {
                that._onblur(e);
            }
        });

        this.disabled = this.$control.prop('disabled');
        this.value = this.getValue();

        this.$control.on('change', function(e) {
            that.trigger('nb-changed', that, e);
        });

        bindOninput(this, function(e) {
            that.value = that.getValue();
            that.trigger('nb-input', this, e);
        });

        this.$hint = this.$node.find('._nb-input-hint');

        if (this.$hint.length) {
            this._inithint();
        }

        if (this.data.ghost) {
            this.$node.on('mouseover mouseout', function() {
                that.$node.toggleClass('_nb-is-ghost');
            });
        }

        if (this.data.error) {
            this.error = nb.find(this.data.error.id);
        }

        this._onmousedown = function(e) {
            if ($.contains(this.$node.get(0), e.target)) {
                return;
            }

            this._onblur(e);
        }.bind(this);

        // IE 9/10 Enter Key causing Form Submit / Button Click
        /* this.$control.keypress(function(e) {
            if (e.which == 13) {
                e.preventDefault();
            }
        }); */

        $(document).on('mousedown', this._onmousedown);
        $(document).on('touchstart', this._onmousedown);

        this.trigger('nb-inited', this);
    },

    _inithint: function() {
        var that = this;

        this.$hintGhost = this.$hint.find('._nb-input-hint-ghost');

        if (this.$hintGhost.length) {

            this.$hintGhost.html(that.getValue());

            bindOninput(this, function() {
                that.$hintGhost.html(that.getValue());
            });

        } else {
            bindOninput(this, function() {
                if (that.getValue() === '') {
                    that.$hint.css('visibility', 'inherit');
                } else {
                    that.$hint.css('visibility', 'hidden');
                }
            });
        }
    },

    _onfocus: function(e) {
        this.$node.addClass('_nb-is-focused');
        this.focused = true;
        // if e this method called after tabulation. TODO checking of focus property
        if (!e) {
            this.$control.focus();
        }
        if (this.$hintGhost && this.$hintGhost.length) {
            this.$hint.css('visibility', 'hidden');
        }

        if (this.data.ghost) {
            this.$node.removeClass('_nb-is-ghost');
        }
    },

    _onblur: function(e) {
        this.$node.removeClass('_nb-is-focused');
        this.focused = false;
        // if e this method called after tabulation. TODO checking of focus property
        if (!e) {
            this.$control.blur();
        }
        if (this.$hintGhost && this.$hintGhost.length) {
            this.$hint.css('visibility', 'inherit');
        }

        if (this.data.ghost) {
            this.$node.addClass('_nb-is-ghost');
        }
    },

    /**
     * Show inputs error
     * @param {Object | String} params —  optional params of error popup or contentof Error
     *    {
     *        autoclose: ...
     *        where: ...
     *        how: ...
     *        appendTo: ...
     *        content: ...
     *    }
     * @returns {Object} nb.block
     */
    showError: function(params) {
        var params = params || {};

        if (this.data.error) {
            this.$node.addClass('_nb-is-wrong');
            var how = {
                collision: 'flip flip'

            };

            if (this.data.error.direction && this.data.error.direction == 'left') {
                how.at = "left";
                how.my = "right";

            } else {
                how.at = "right";
                how.my = "left";
            }

            if (typeof params === 'string') {
                this.setErrorContent(params);
            }

            if (params.content) {
                this.setErrorContent(params.content);
            }

            if (!this.error.isOpen()) {
                this.error.open({
                    autoclose: params.autoclose || false,
                    autofocus: false,
                    where: params.where || this.node,
                    how: params.how || how,
                    appendTo: params.appendTo || false
                });
            }


        }
        return this;
    },

    /**
     * Hide inputs error
     * @returns {Object} nb.block
     */
    hideError: function() {
        if (this.data.error) {
            this.$node.removeClass('_nb-is-wrong');
            this.error.close();
        }
        return this;
    },

    /**
     * Set content of inputs error
     * @param {string} content - content for error
     * @fires 'nb-error-content-set'
     * @returns {Object} nb.block
     */
    setErrorContent: function(content) {
        if (this.data.error) {
            this.error.$node.find('._nb-popup-content').html(content);
            this.trigger('nb-error-content-set', this);
        }
        return this;
    },


    /**
     * Focus the input
     * @fires 'nb-focused'
     * @returns {Object} nb.block
     */
    focus: function() {
        if (!this.focused && this.isEnabled()) {
            nb.trigger('nb-focusout');
            this._onfocus();
            this.trigger('nb-focused', this);
        }
        return this;
    },

    /**
     * Blur the input
     * @fires 'nb-blured'
     * @returns {Object} nb.block
     */
    blur: function() {
        if (this.focused && this.isEnabled()) {
            this._onblur();
            this.trigger('nb-blured', this);
        }
        return this;
    },

    /**
     * Disables the input
     * @fires 'nb-disabled'
     * @returns {Object} nb.block
     */
    disable: function() {
        this.$node.addClass('_nb-is-disabled');
        this.$control.prop('disabled', true);
        this.trigger('nb-disabled', this);
        return this;
    },

    /**
     * Enables the input
     * @fires 'nb-enabled'
     * @returns {Object} nb.block
     */
    enable: function() {
        this.$node.removeClass('_nb-is-disabled');
        this.$control.prop('disabled', false);
        this.trigger('nb-enabled', this);
        return this;
    },

    /**
     * Set value of the input
     * @param {String|Object} value
     * @fires 'nb-value-set', 'nb-changed'
     * @returns {Object} nb.block
     */
    setValue: function(value) {
        /*
         Check newValue and actualValue to avoid recursion

         nbInput.on('nb-changed', function() {
         var validValue = validate(this.getValue());
         this.setValue(validValue);
         });
         */
        if (this.value != value) {
            this.value = value;
            this.$control.val(value);
            this.$control.trigger('input');
            this.trigger('nb-value-set', this);
            this.trigger('nb-changed', this);
        }
        return this;
    },

    /**
     * Get value of the input
     * @returns {String|Object} value
     */
    getValue: function() {
        // get actual value from <input/> and save it to instance
        return this.$control.val();
    },

    /**
     * Get name of the input
     * @returns {String|Object} name
     */
    getName: function() {
        return this.$control.prop('name');
    },

    /**
     * Set name of the input
     * @param {String|Object} value
     * @fires 'nb-name-set'
     * @returns {Object} nb.block
     */
    setName: function(value) {
        this.$control.attr('name', value);
        this.trigger('nb-name-set', this);
        return this;
    },

    /**
     * Return state of the input
     * @returns {Boolean}
     */
    isEnabled: function() {
        return !this.$control.prop('disabled');
    },

    /**
     * Resets value of the input
     * @fires 'nb-value-set'
     * @returns {Object} nb.block
     */
    reset: function(evt) {
        if (evt && evt.preventDefault) {
            evt.preventDefault();
        }

        this.setValue('');
        return this;
    },

    /**
     * Set hint of the input
     * @param {String} value
     * @fires 'nb-hint-set'
     * @returns {Object} nb.block
     */
    setHint: function(value) {
        if (this.$hint.length) {
            if (this.$hintGhost.length) {
                this.$hint.find('._nb-input-hint-content').html(value);
            } else {
                this.$hint.find('._nb-input-hint-inner').html(value);
            }
            this.trigger('nb-hint-set', this);
        }

        return this;
    },

    /**
     * Get hint of the input
     * @returns {String} hint
     */
    getHint: function() {
        var value = '';
        if (this.$hint.length) {

            if (this.$hintGhost.length) {
                value = this.$hint.find('._nb-input-hint-content').html();
            } else {
                value = this.$hint.find('._nb-input-hint-inner').html();
            }

        }
        return value;
    },

    /**
     * Destroy the button
     */
    destroy: function() {
        this.trigger('nb-destroyed', this);
        if (this.error) {
            this.error.nbdestroy();
            this.error.$node.remove();
        }
        $(document).off('mousedown', this._onmousedown);
        $(document).off('touchstart', this._onmousedown);
        $(document).off('keydown', this._onkeydown);
        this.nbdestroy();
    }
}, 'base');


})();    
