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
            expect(select.isEnabled()).to.be.equal(false);
        });

    });

    describe("#getName()", function() {
        it('should return name of select control', function() {
            expect(this.select.getName()).to.be.equal('myname');
        });
    });

    describe("#setName()", function() {
        it('should set name', function() {
            this.select.setName('Vadim');
            expect(this.select.getName()).to.be.equal('Vadim');
        });

        it("check event", function() {
            var flag = true;

            this.select.on('nb-select_name-set', function() {
                flag = false;
            });

            this.select.setName('Vadim');

            expect(flag).to.not.ok();
        });
    });


    describe("#setState()", function() {
        it('should set state by text', function() {
            this.select.setState({text: 'Гибрид'});
            expect(this.select.getState().value == 'option3').to.be.ok();
        });
        it('should set state by value', function() {
            this.select.setState({value: 'option3'});
            expect(this.select.getState().text == 'Гибрид').to.be.ok();
        });

        it("shouldn't change if trying to set nonexistent option", function() {
            var flag = true;

            this.select.on('nb-select_changed', function() {
                flag = false;
            });

            this.select.setState({value: 'option5'});

            expect(flag).to.ok();
        });

        it("check event", function() {
            var flag = true;

            this.select.on('nb-select_changed', function() {
                flag = false;
            });

            this.select.setState({value: 'option3'});

            expect(flag).to.not.ok();
        });
    });

    describe("#getState()", function() {
        it('should return state of select control', function() {
            expect(this.select.getState().text == 'Карта' && this.select.getState().value == 'option1').to.be.ok();
        });
    });

    describe("#getSource()", function() {
        it('should return state of select control', function() {
            expect(this.select.getSource()[0].value == 'option1' && this.select.getSource()[1].text == 'Гибрид').to.ok();
        });
    });

    describe("#setSource()", function() {
        it('should replace source', function() {
            this.select.setSource([
                {'text': 'test', 'value': 'test'},
                {'text': 'test2', 'value': 'test2'}
            ]);
            expect(this.select.getSource()[0].value == 'test' && this.select.getSource()[1].text == 'test2').to.ok();
        });

        it('should set new source', function() {
            this.select.setSource();

            this.select.setSource([
                {'text': 'test', 'value': 'test'},
                {'text': 'test2', 'value': 'test2'}
            ]);
            expect(this.select.getSource()[0].value == 'test' && this.select.getSource()[1].text == 'test2').to.ok();
        });

        it("check event", function() {
            var flag = true;

            this.select.on('nb-select_source-set', function() {
                flag = false;
            });

            this.select.setSource([
                {'text': 'test', 'value': 'test'},
                {'text': 'test2', 'value': 'test2'}
            ]);

            expect(flag).to.not.ok();
        });
    });

    describe("#addToSource()", function() {
        it('Should add item', function() {
            this.select.addToSource({'text': 'test', 'value': 'test'});
            var item = this.select.getSource().pop();
            expect(item.text == 'test' && item.value == 'test').to.ok();
        });

        it('Should add array of items', function() {
            var len = this.select.getSource().length;
            this.select.addToSource([
                {'text': 'test', 'value': 'test'},
                {'text': 'test2', 'value': 'test2'}
            ]);
            expect(this.select.getSource().length).to.equal(len + 2);
        });

        it('Should add item with index', function() {
            this.select.addToSource({'text': 'test', 'value': 'test'}, 1);
            var item = this.select.getSource()[1];
            expect(item.text == 'test' && item.value == 'test').to.ok();
        });

        it("check event", function() {
            var flag = true;

            this.select.on('nb-select_source-changed', function() {
                flag = false;
            });

            this.select.addToSource({'text': 'test', 'value': 'test'}, 1);

            expect(flag).to.not.ok();
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

        it("check event", function() {
            var flag = true;

            this.select.on('nb-select_source-changed', function() {
                flag = false;
            });

            this.select.removeFromSource(0);

            expect(flag).to.not.ok();
        });
    });

    describe("#isEnabled()", function() {
        it("should return true when enabled", function() {
            expect(this.select.isEnabled()).to.be.ok();
        });

        it("should return false when disabled", function() {
            this.select.disable();
            expect(this.select.isEnabled()).not.to.be.ok();
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
    });
});
