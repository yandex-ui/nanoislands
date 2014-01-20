describe('Progress Tests', function() {
    beforeEach(function() {
        var result = yr.run('main', {progress: true});
        $('.content').html(result);

        nb.init();
        this.nbProgress = nb.find('progress');
    });
    afterEach(function() {
        delete this.nbProgress;
    });


    describe('#setValue()', function() {
        it('should change the value', function() {

            this.nbProgress.setValue(30);

            expect(this.nbProgress.$control.val()).to.equal('30');
        });

        it('should change bar width', function() {
            var control = this.nbProgress.setValue(10);
            expect(control.$bar.attr('style').replace(/\s/g, '')).to.equal("width:10%;");
        });

        it('should throws nb-progress_value-set event', function() {
            var checked = false;
            this.nbProgress.on('nb-progress_value-set', function() {
                checked = true;
            });

            this.nbProgress.setValue(48);

            expect(checked).to.be.ok();
        });
    });

    describe('#getValue()', function() {
        it('should return the right value', function() {
            this.nbProgress.setValue(45);
            expect(this.nbProgress.getValue()).to.be.equal('45');
        });
    });

    describe('#tick()', function() {
        it('should return the right value', function() {
            this.nbProgress.setValue(45);
            this.nbProgress.tick();
            expect(this.nbProgress.getValue()).to.equal('46');
        });

        it('should throws nb-progress_value-changed event', function() {
            var checked = false;
            this.nbProgress.on('nb-progress_value-changed', function() {
                checked = true;
            });

            this.nbProgress.tick();

            expect(checked).to.ok();
        });
    });
});