describe('Suggest widget Tests', function() {
    describe('#_renderItem', function() {
        it('should use the "renderItem" option for create a suggest\'s item HTML, if it is defined', function() {
            var options = {
                renderItem: sinon.stub()
            };
            var suggest = new $.ui.suggest(options);
            suggest._renderItem();
            expect(options.renderItem.called).to.be.ok();
        });

        it('should use default method for create a suggest\'s item HTML, if "renderItem" isn\'t defined', function() {
            var suggest = new $.ui.suggest();
            var renderItemResult = suggest._renderItem({
                label: 'test'
            });
            expect(renderItemResult).to.equal('<li><a href="#">test</a></li>');
        })
    })
});
