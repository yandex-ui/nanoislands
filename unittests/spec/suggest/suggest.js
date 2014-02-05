describe("suggest Tests", function() {
    beforeEach(function() {
        var result = yr.run('main', {suggest: true});
        $('.content').html(result);

        nb.init();
        this.suggest = nb.find('suggest');
    });

    afterEach(function() {
        delete this.suggest;
    });

    describe("init", function() {

        it('should has disabled button after init', function() {
            var suggest = nb.find('suggest-disabled');
            expect(suggest.isEnabled()).to.be.equal(false);
        });


    });

    describe("#Yate API", function() {
    });

    describe('#getType()', function() {
        it('should return suggest type', function() {
            expect(this.suggest.getType()).to.be.equal('suggest');
        });
    });

    describe("#getName()", function() {
        it('should return name of suggest control', function() {
            expect(this.suggest.getName()).to.be.equal('myname');
        });
    });

    describe("#setName()", function() {
        it('should set name', function() {
            this.suggest.setName('Vadim');
            expect(this.suggest.getName()).to.be.equal('Vadim');
        });

        it("check event", function() {
            var flag = true;

            this.suggest.on('nb-name-set', function() {
                flag = false;
            });

            this.suggest.setName('Vadim');

            expect(flag).to.not.ok();
        });
    });

    describe("#close()", function() {
        it('should close suggest', function() {
            this.suggest.search('Va');
            this.suggest.close();
            expect(this.suggest.$suggest.css('display')).to.not.equal('block');
        });

        it("check event", function() {
            var flag = true;

            this.suggest.on('nb-closed', function() {
                flag = false;
            });

            this.suggest.search('Va');
            this.suggest.close();

            expect(flag).to.not.ok();
        });
    });


    describe("#getSource()", function() {
        it('should return state of suggest control', function() {
            expect(this.suggest.getSource()[0] == 'Variant1').to.ok();
        });
    });

    describe("#setSource()", function() {
        it('should replace source', function() {
            this.suggest.setSource(['var1', 'var2']);
            expect(this.suggest.getSource()[0] == 'var1').to.ok();
        });

        it('should set new source', function() {
            this.suggest.setSource();

            this.suggest.setSource(['var1', 'var2']);
            expect(this.suggest.getSource()[0] == 'var1').to.ok();
        });

        it("check event", function() {
            var flag = true;

            this.suggest.on('nb-source-set', function() {
                flag = false;
            });

            this.suggest.setSource(['var1', 'var2']);

            expect(flag).to.not.ok();
        });
    });

    describe("#isEnabled()", function() {
        it("should return true when enabled", function() {
            expect(this.suggest.isEnabled()).to.be.ok();
        });

        it("should return false when disabled", function() {
            this.suggest.disable();
            expect(this.suggest.isEnabled()).not.to.be.ok();
        });
    });

    describe("#disable()", function() {
        beforeEach(function() {
            sinon.spy($.fn, 'suggest');
        });

        afterEach(function() {
            $.fn.suggest.restore();
        });

        it("check state", function() {
            this.suggest.disable();
            expect(this.suggest.isEnabled()).to.not.ok();
        });

        it("check event", function() {
            var flag = true;

            this.suggest.on('nb-disabled', function() {
                flag = false;
            });

            this.suggest.disable();

            expect(flag).to.not.ok();
        });

        it("should call $.fn.suggest('disable')", function() {
            this.suggest.disable();
            expect($.fn.suggest.calledWithExactly('disable')).to.be.equal(true);
        });
    });

    describe("#enable()", function() {
        beforeEach(function() {
            sinon.spy($.fn, 'suggest');

            this.suggest.disable();
        });

        afterEach(function() {
            $.fn.suggest.restore();
        });

        it("check state", function() {
            this.suggest.enable();
            expect(this.suggest.isEnabled()).to.ok();
        });

        it("check event", function() {
            var flag = false;
            this.suggest.on('nb-enabled', function() {
                flag = true;
            });

            this.suggest.enable();
            expect(flag).to.ok();
        });

        it("should call $.fn.suggest('enable')", function() {
            this.suggest.enable();
            expect($.fn.suggest.calledWithExactly('enable')).to.be.equal(true);
        });
    });

    describe("#destroy()", function() {

        beforeEach(function() {
            sinon.spy($.fn, 'suggest');
        });

        afterEach(function() {
            $.fn.suggest.restore();
        });

        it("should call $.fn.suggest('destroy')", function() {
            this.suggest.destroy();
            expect($.fn.suggest.calledWithExactly('destroy')).to.be.equal(true);
        });
        it("should destroy nb.block", function() {
            this.suggest.destroy();
            expect(nb.hasBlock($('#suggest')[0])).to.be.equal(false);
        });
    });

    describe("#focus()", function() {
        it("should throws nb-focused event", function() {
            var handlerWorks = false;
            this.suggest.on('nb-focused', function() {
                handlerWorks = true;
            });

            this.suggest.focus();

            expect(handlerWorks).to.be.ok();
        });


        it("should be in focus", function() {
            this.suggest.focus();

            expect($(document.activeElement).attr('id')).to.equal(this.suggest.$control.attr('id'));
        });
    });

    describe("#blur()", function() {
        it("should not to be in focus", function() {
            this.suggest.focus();
            this.suggest.blur();
            expect($(document.activeElement)).not.equal('suggest');
        });

        it("should throws nb-blured event", function() {
            var handlerWorks = false;
            this.suggest.on('nb-blured', function() {
                handlerWorks = true;
            });
            this.suggest.blur();

            expect(handlerWorks).to.be.ok();
        });
    });

    describe("#setOption()", function() {
        it("should throws nb-option-set event", function() {
            var handlerWorks = false;
            this.suggest.on('nb-option-set', function() {
                handlerWorks = true;
            });

            this.suggest.setOption({'autoFocus': false});

            expect(handlerWorks).to.be.ok();
        });


        it("should set option to the jUI widget", function() {
            this.suggest.setOption({'autoFocus': true});
            expect(this.suggest.$jUI.suggest('option', 'autoFocus')).to.ok();
        });
    });

    describe("#getOption()", function() {

        it("should return option from jUI widget", function() {
            this.suggest.setOption({'autoFocus': true});

            expect(this.suggest.getOption('autoFocus')).to.ok();
        });
    });

    describe("#setSelected()", function() {

        it("should return selected item", function() {
            this.suggest.$jUI.trigger('suggestselect', { item: 'Variant1'});

            expect(this.suggest.getSelected()).to.equal('Variant1');
        });
    });

    describe("#search()", function() {
        it("should open suggest", function() {
            this.suggest.search('Va');
            expect(this.suggest.$suggest.css('display')).to.equal('block');
        });

        it("suggest shoud have right number of results", function() {
            this.suggest.search('Va');
            expect(this.suggest.$suggest.find('.nb-suggest__item').length).to.equal(3);
        });
    });

    describe("#getValue", function() {
        it("should return value", function() {
            expect(this.suggest.getValue()).to.equal('myValue');
        });
    });

    describe("#setValue", function() {
        it("should set new value", function() {
            this.suggest.setValue('privet');
            expect(this.suggest.getValue()).to.equal('privet');
        });

        it("should throws nb-value-set event", function() {
            var handlerWorks = false;
            this.suggest.on('nb-value-set', function() {
                handlerWorks = true;
            });

            this.suggest.setValue();
            this.suggest.setValue('privet');

            expect(handlerWorks).to.be.ok();
        });
    });

});
