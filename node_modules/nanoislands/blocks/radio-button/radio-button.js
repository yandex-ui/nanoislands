nb.define('radio-button', {
    events: {
         'init': 'onInit'
     },

    onInit: function() {
         this.control = $(this.node).buttonset();
    }
});