describe('Slider Tests', function() {
    beforeEach(function() {
        this.slider = nb.find('slider');
        this.sliderDisabled = nb.find('slider-disabled');
    });
    afterEach(function() {
        delete this.slider;
        delete this.sliderDisabled;
    });

    describe('Init', function() {
        it('should be inited', function() {
            expect(this.slider).to.not.equal(null);
        });

        it('should has defined initial value', function() {
            var input = this.slider.node.querySelector('.nb-slider__fallback');

            expect(input.value).to.be.equal('25');
        });
    });

    describe('#setValue()', function() {
        it('should change the value', function() {
            var input = this.slider.node.querySelector('.nb-slider__fallback');
            this.slider.setValue(30);

            expect(input.value).to.be.equal('30');
        });

        it('should throws nb-slider_changed event', function() {
            var checked = false;
            this.slider.on('nb-slider_changed', function() {
                checked = true;
            });

            this.slider.setValue(48);

            expect(checked).to.be.ok();
        });
    });

    describe('#getValue()', function() {
        it('should return the right value', function() {
            expect(this.slider.getValue()).to.be.equal(25);
        });
    });

    describe('#disable()', function() {
        it('should not to change the value', function() {
            var input = this.slider.node.querySelector('.nb-slider__fallback');

            this.slider.disable();
            this.slider.setValue(80);

            expect(input.value).not.to.be.equal('80');
        });
    });

    describe('#enable()', function() {
        it('should reset disabled state', function() {
            var input = this.sliderDisabled.node.querySelector('.nb-slider__fallback');

            this.sliderDisabled.enable();
            this.sliderDisabled.setValue(80);

            expect(input.value).to.be.equal('80');
        });
    });

    describe('#isEnabled()', function() {
        it('should return true if enabled', function() {
            expect(this.slider.isEnabled()).to.be.ok();
        });

        it('should return false if disabled', function() {
            expect(this.sliderDisabled.isEnabled()).not.to.be.ok();
        });
    });
});