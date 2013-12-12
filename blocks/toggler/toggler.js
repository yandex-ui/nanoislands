nb.define('toggler', {
    events: {
        'init'  : 'oninit',
        'click' : 'toggle'
    },

    /**
     * Init the toggler
     * @fires 'nb-toggler_inited'
     */
    oninit: function(){
        this.$node = $(this.node);
        this.$checkbox = this.$node.find('.nb-toggler__checkbox');
        this.trigger('nb-toggler_inited');
        return this;
    },

    /**
     * Returns value of the checked state
     * @return {Boolean} value
     */
    getValue: function() {
        return this.$node.hasClass('nb-toggler_checked');
    },

    /**
     * Set value of the checked state
     * @fires 'nb-toggler_checked'
     */
    setValue: function(state) {
        if (state) {
            this.$node.addClass('nb-toggler_checked');
            this.$checkbox.attr('checked', 'checked');
        } else {
            this.$node.removeClass('nb-toggler_checked');
            this.$checkbox.removeAttr('checked');
        }
        this.trigger('nb-toggler_checked', this.getValue());
        return this;
    },

    /**
     * Toggle to the oppocite value
     */
    toggle: function(){
        if (this.$node.hasClass('nb-toggler_disabled')) {
            return this;
        }

        return this.setValue(!this.getValue());
    },

    /**
     * Disable toggler
     * @fires 'nb-toggler_disabled'
     */
    disable: function() {
        this.$checkbox.attr('disabled', 'disabled');
        this.$node.addClass('nb-toggler_disabled');
        this.trigger('nb-toggler_disabled');
        return this;
    },

    /**
     * Enable toggler
     * @fires 'nb-toggler_enabled'
     */
    enable: function() {
        this.$checkbox.removeAttr('disabled');
        this.$node.removeClass('nb-toggler_disabled');
        this.trigger('nb-toggler_enabled');
        return this;
    }
});
