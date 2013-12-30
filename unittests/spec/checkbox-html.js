describe("Checkbox HTML Tests", function() {

    describe("checkbox with custom html label", function() {

        beforeEach(function() {
            this.checkbox = nb.find('checkbox-with-html-label');
        });

        afterEach(function() {
            delete this.checkbox;
        });

        it('should has custom html for label', function() {
            var label = this.checkbox.$node.find('.nb-checkbox__label')[0].outerHTML;
            expect(label).to.be.equal('<span class="nb-checkbox__label"><span>1</span></span>');
        });

    });

});
