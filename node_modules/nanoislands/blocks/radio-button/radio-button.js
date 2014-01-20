/*
 * jQuery UI Depends:
 *        jquery.ui.button.js
 *        jquery.ui.core.js
 *        jquery.ui.widget.js
 */

nb.define('radio-button', {
    oninit: function() {
        this.control = this.$node.buttonset();
    }
}, 'base');
