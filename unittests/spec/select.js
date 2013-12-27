describe("Select Tests", function () {

    describe("init", function () {

        it('should has disabled button after init', function() {
            var select = nb.find('select-disabled');
            expect(select.button.isEnabled()).to.be.equal(false);
        });

    });

});
