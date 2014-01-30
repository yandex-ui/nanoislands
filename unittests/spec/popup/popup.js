describe("Popup Tests", function() {
    beforeEach(function() {
        var result = yr.run('main', {popup: true});
        $('.content').html(result);

        nb.init();
        this.popup = nb.find('popup');
    });

    afterEach(function() {
        delete this.popup;
    });

    describe("Init", function() {
        it("should be inited", function() {
            expect(this.popup).to.not.equal(null);
        });
    });

    describe("Events", function() {
        it("should fire nb-opened event on open", function() {
            var result = false;
            this.popup.on('nb-opened', function(){
                result = true;
            });

            this.popup.open();
            expect(result).to.be.ok();
        });

        it("should fire nb-closed event on close", function() {
            var result = false;
            this.popup.on('nb-closed', function(){
                result = true;
            });

            this.popup.close();
            expect(result).to.be.ok();
        });
    });
});