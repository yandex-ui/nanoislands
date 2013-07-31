nb.define('tabs', {
    events: {
        'init': 'oninit'
    },

    oninit: function () {
        this.$node = $(this.node);

        this.$node.tabs();
    }
});
