nb.define('radio-button', {
    events: {
         'init': 'onInit'
     },

    onInit: function() {
        console.log('radio');
         this.control = $(this.node).buttonset();
    }
});