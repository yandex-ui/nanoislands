nb.define('base', {
    events: {
        'init': '_oninit'
    },

    _oninit: function() {
        this.$node = $(this.node);

        if (this.oninit) {
            this.oninit();
        }
    },

    getType: function() {
        return this.$node.attr('data-nb');
    }
});
