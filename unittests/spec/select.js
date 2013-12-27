describe("Select Tests", function() {

    beforeEach(function() {
        this.select = nb.find('select');
    });

    afterEach(function() {
        delete this.select;
    });

    beforeEach(function() {
        this.select = nb.find('select');
    });

    afterEach(function() {
        delete this.select;
    });


    describe("init", function () {

        it('should has disabled button after init', function() {
            var select = nb.find('select-disabled');
            expect(select.button.isEnabled()).to.be.equal(false);
        });

    });

    describe("#addToSource()", function() {
        it('Shoul add item', function() {
            this.select.addToSource({'text': 'test', 'value': 'test'});
            var item = this.select.getSource().pop();
            expect(item.text == 'test' && item.value == 'test').to.ok();
        });

        it('Shoul add array of items', function() {
            var len = this.select.getSource().length;
            this.select.addToSource([{'text': 'test', 'value': 'test'}, {'text': 'test2', 'value': 'test2'}]);
            expect(this.select.getSource().length).to.equal(len + 2);
        });

        it('Shoul add item with index', function() {
            this.select.addToSource({'text': 'test', 'value': 'test'}, 1);
            var item = this.select.getSource()[1];
            expect(item.text == 'test' && item.value == 'test').to.ok();
        });
    });

    describe("#removeFromSource()", function() {
        it('Should remove item', function() {
            var len = this.select.getSource().length;
            this.select.addToSource({'text': 'test', 'value': 'test'});
            this.select.removeFromSource({'text': 'test', 'value': 'test'});
            expect(this.select.getSource().length).to.equal(len);
        });

        it('Should remove item with index', function() {
            this.select.addToSource({'text': 'test', 'value': 'test'} , 0);
            this.select.removeFromSource(0);
            var item = this.select.getSource()[0];
            expect(item.text == 'test' && item.value == 'test').to.not.ok();
        });
    });
});
