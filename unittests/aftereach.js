(function($, nb) {

    var $body = $('body');
    var $container = $body.find('.content');

    /**
     * NOTE:
     * You should avoid using DOM in your tests.
     * It significantly slows tests.
     */
    if (!$container.length) {
        $container = $('<div class="content"/>').appendTo('body');
    }

    beforeEach(function() {
        this.$sandbox = $container;
    });

    afterEach(function() {

        /**
         * Destroy widgets
         */
        nb.destroy();

        /**
         * Clear container for
         * DOM nodes
         */
        $container.empty();
        $body.children('.nb-select__dropdown, .ui-dialog').remove();
    });
}(jQuery, nb));
