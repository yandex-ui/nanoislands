nb.define('base', {
    events: {
        'init': '_oninit'
    },

    _oninit: function() {
        this.$node = $(this.node);

        // mix all blocks with nb-common on init
        this.$node.addClass('nb-common');

        if (this.oninit) {
            this.oninit();
        }
    },

    show: function() {
        this.$node.removeClass('nb-common_hidden');
    },

    hide: function() {
        this.$node.addClass('nb-common_hidden');
    },

    /**
     * @returns {String} type of block
     */
    getType: function() {
        return this.$node.attr('data-nb');
    }
});
