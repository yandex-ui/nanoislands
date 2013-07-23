nb.define('slider', {
    events: {
         'init': 'onInit'
     },

    onInit: function() {
         this.control = $(this.node).slider({range: 'min'});
    }
});