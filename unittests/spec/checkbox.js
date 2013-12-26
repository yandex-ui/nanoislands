describe("Checkbox Tests", function () {

    beforeEach(function() {
        var result = yr.run('main', { username: 'bs' });

        $('.content').html(result);
        nb.init();

        this.checkbox = nb.find('checkbox');
    });

    afterEach(function() {
        delete this.checkbox;
        $('.content').html();
    });

    describe("#getValue()", function () {

        it('should return value', function() {
            expect(this.checkbox.getValue()).to.be.equal('my-value');
        });

        it('should return new value after setValue', function() {
            this.checkbox.setValue('new-value');
            expect(this.checkbox.getValue()).to.be.equal('new-value');
        });

    });

    describe("#setValue()", function () {

        it('should set new value to DOM', function() {
            this.checkbox.setValue('new-value');
            expect(this.checkbox.$control.attr('value')).to.be.equal('new-value');
        });

    });

});
