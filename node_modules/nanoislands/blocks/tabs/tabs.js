/*
 * jQuery UI Depends:
 *        jquery.ui.tabs.js
 *        jquery.ui.core.js
 *        jquery.ui.widget.js
 */
nb.define('tabs', {
    oninit: function() {
        this.$node.tabs();
    }
}, 'base');
