nb.define('button', {
    events: {
        'init': 'oninit',
        'textChange': 'onTextChange'
    },

    oninit: function () {
        this.$node = $(this.node);

        $(this.node).button();
    },

    /**
     * Changes text of the button
     * @param name — event id that caused the change
     * @param params — {
     *     text: '..'
     * }
     */
    onTextChange: function (name, params) {
        this.$node.find('.nb-button__text').html(params.text)
    },


})