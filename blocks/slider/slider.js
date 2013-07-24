nb.define('slider', {
    events: {
         'init': 'onInit'
     },

    onInit: function() {
         this.control = $(this.node).children('.nb-slider__body').slider({range: 'min'});
    }
});