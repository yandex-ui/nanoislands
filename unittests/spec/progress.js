describe('Progress Tests', function() {
    beforeEach(function() {
        this.progress = nb.find('progress');
    });
    afterEach(function() {
        delete this.progress;
    });


    describe('#setValue()', function() {
        it('should change the value', function() {

            this.progress.setValue(30);

            expect(this.progress.$control.val()).to.equal('30');
        });

        it('should change bar width', function() {
            var control = this.progress.setValue(10);
            expect(control.$bar.attr('style').replace(/\s/g, '')).to.equal("width:10%;");
        });

        it('should throws nb-progress_value-set event', function() {
            var checked = false;
            this.progress.on('nb-progress_value-set', function() {
                checked = true;
            });

            this.progress.setValue(48);

            expect(checked).to.be.ok();
        });
    });

    describe('#getValue()', function() {
        it('should return the right value', function() {
            this.progress.setValue(45);
            expect(this.progress.getValue()).to.be.equal('45');
        });
    });

    describe('#tick()', function() {
        it('should return the right value', function() {
            this.progress.setValue(45);
            this.progress.tick();
            expect(this.progress.getValue()).to.equal('46');
        });

        it('should throws nb-progress_value-changed event', function() {
            var checked = false;
            this.progress.on('nb-progress_value-changed', function() {
                checked = true;
            });

            this.progress.tick();

            expect(checked).to.ok();
        });
    });
});