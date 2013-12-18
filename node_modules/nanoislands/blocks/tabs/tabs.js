/*
* jQuery UI Depends:
*        jquery.ui.tabs.js
*        jquery.ui.core.js
*        jquery.ui.widget.js
*/
nb.define('tabs', {
    events: {
        'init': 'oninit'
    },

    oninit: function () {
        this.$node = $(this.node);

        this.$node.tabs();
    }
});
