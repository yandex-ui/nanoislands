/**
 * @class nb.block.Base
 * @augments Block
 */
nb.define('base', {
    events: {
        'init': '_oninit'
    },

    /**
     * @constuctor
     */
    _oninit: function() {
        this.$node = $(this.node);

        if (this.oninit) {
            this.oninit();
        }
    },

    /**
     * @returns {String} type of block
     */
    getType: function() {
        return this.$node.attr('data-nb');
    }
});
