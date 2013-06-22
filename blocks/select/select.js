(function() {


nb.define('select', {
    events : {
        'init': function(){
            this.button = $(this.node).find('.nb-button')
            this.popup = $(this.node).find('.nb-popup')
            this.popup.css({
                'min-width': this.button.outerWidth() - 2
            })
        }
    }
});

})();


