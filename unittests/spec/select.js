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

    describe("init", function() {

        it('should has disabled button after init', function() {
            var select = nb.find('select-disabled');
            expect(select.button.isEnabled()).to.be.equal(false);
        });

    });

    describe("#getName()", function() {
        it('should return name of select control', function() {
            expect(this.select.getName()).to.be.equal('myname');
        });
    });

    describe("#getState()", function() {
        it('should return name of select control', function() {
            expect(this.select.getState().text == 'Карта' && this.select.getState().value == 'option1').to.be.ok();
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
            this.select.addToSource([
                {'text': 'test', 'value': 'test'},
                {'text': 'test2', 'value': 'test2'}
            ]);
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
            this.select.addToSource({'text': 'test', 'value': 'test'}, 0);
            this.select.removeFromSource(0);
            var item = this.select.getSource()[0];
            expect(item.text == 'test' && item.value == 'test').to.not.ok();
        });
    });

    describe("#isEnabled()", function() {
        it("should return true when enabled", function() {
            expect(this.select.button.isEnabled()).to.be.ok();
        });

        it("should return false when disabled", function() {
            this.select.disable();
            expect(this.select.button.isEnabled()).not.to.be.ok();
        });
    });

    describe("#disable()", function() {
        it("check state", function() {
            this.select.disable();
            expect(this.select.isEnabled()).to.not.ok();
        });

        it("check event", function() {
            var flag = true;

            this.select.on('nb-select_disabled', function() {
                flag = false;
            });

            this.select.disable();

            expect(flag).to.not.ok();
        });
    });

    describe("#enable()", function() {
        it("check state", function() {
            this.select.disable();
            this.select.enable();
            expect(this.select.isEnabled()).to.ok();
        });

        it("check event", function() {
            var flag = false;
            this.select.on('nb-select_enabled', function() {
                flag = true;
            });

            this.select.disable();
            this.select.enable();
            expect(flag).to.ok();
        });
    });

    describe("#destroy()", function() {

        beforeEach(function() {
            sinon.spy($.fn, 'autocomplete');
            sinon.spy($.fn, 'off');
            sinon.spy(nb, 'destroy');
        });

        afterEach(function() {
            $.fn.autocomplete.restore();
            $.fn.off.restore();
            nb.destroy.restore();
        });

        it("should call $.fn.autocomplete('destroy')", function() {
            this.select.destroy();
            expect($.fn.autocomplete.calledWithExactly('destroy')).to.be.equal(true);
        });

        it("should call nb.destroy('select')", function() {
            this.select.destroy();
            expect(nb.destroy.calledWithExactly('select')).to.be.equal(true);
        });

        it("should off() clicks", function() {
            this.select.destroy();
            expect($.fn.off.calledWithExactly('click')).to.be.equal(true);
        });


    });
});
