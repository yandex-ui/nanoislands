/*global beforeEach, describe, it, expect, sinon*/
describe("Select Tests", function() {
    it('should bubbling event nb-select_changed', function() {
        var $rootNode = $('<div><div data-nb="select"/></div>');
        var eventHandler = sinon.stub();

        this.bSelect = nb.block($rootNode.find('[data-nb="select"]').get(0));
        $rootNode.on('nb-select_changed', eventHandler);

        this.bSelect.trigger('nb-select_changed');

        expect(eventHandler.called).to.be.equal(true);
    });
});
