describe("Common Tests", function() {
    beforeEach(function() {
        var result = yr.run('main', {common: true});
        $('.content').html(result);

        nb.init();

        this.button = nb.find('button');
    });

    afterEach(function() {
        this.button.destroy();
    });

    describe("#hide()", function() {
        it("should have nb-common_hidden class", function() {
            this.button.hide();
            expect(this.button.$node.hasClass('nb-common_hidden')).to.ok();
        });
    });

    describe("#show()", function() {
        it("should not have nb-common_hidden class", function() {
            this.button.hide();
            this.button.show();
            expect(this.button.$node.hasClass('nb-common_hidden')).to.not.ok();
        });
    });
});