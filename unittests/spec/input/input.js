describe("Input Tests", function() {

    beforeEach(function() {
        var result = yr.run('main', {input: true});
        $('.content').html(result);

        nb.init();
        this.input = nb.find('input');
    });

    afterEach(function() {
        delete this.input;
    });

    describe("Init", function() {
        it("should be inited", function() {
            expect(this.input).to.not.equal(null);
        });
    });

    describe("#YATE API", function() {
        it("error params", function() {
            var input = nb.find('input-error');
            var data = this.input.nbdata();
            expect(input.$node.attr('data-nb-error')).to.be.ok();
        });
        it("error dropdown", function() {
            var input = nb.find('input-error');
            var data = input.nbdata();
            expect($('#' + data.error.id)).to.be.ok();
        });

        it("error dropdown content", function() {
            var input = nb.find('input-error');
            var data = input.nbdata();
            expect($('#' + data.error.id + ' .nb-popup__content').html()).to.be.equal('error');
        });
    });


    describe('#getType()', function() {
        it('should return input type', function() {
            expect(this.input.getType()).to.be.equal('input');
        });
    });

    describe("showError()", function() {
        it("error should be visible", function() {
            var input = nb.find('input-error');
            var data = input.nbdata();
            input.showError();
            expect($(nb.find(data.error.id).node).contextDialog("isOpen")).to.be.ok();
        });
    });

    describe("hideError()", function() {
        it("error should be hidden", function() {
            var input = nb.find('input-error');
            var data = input.nbdata();
            input.showError();
            input.hideError();
            expect($(nb.find(data.error.id).node).contextDialog("isOpen")).to.not.be.ok();
        });
    });

    describe("setErrorContent()", function() {
        it("should set a new content for error", function() {
            var input = nb.find('input-error');
            var data = input.nbdata();
            input.setErrorContent('1');
            expect(nb.find(data.error.id).$node.find('.nb-popup__content').html()).to.equal('1');
        });

        it("should throws nb-error-content-set event", function() {
            var handlerWorks = false;
            var input = nb.find('input-error');

            input.on('nb-error-content-set', function() {
                handlerWorks = true;
            });

            input.setErrorContent('1');

            expect(handlerWorks).to.be.ok();
        });
    });

    describe("#focus()", function() {
        it("should throws nb-focused event", function() {
            var handlerWorks = false;
            this.input.on('nb-focused', function() {
                handlerWorks = true;
            });

            this.input.focus();

            expect(handlerWorks).to.be.ok();
        });

        it("should throws global nb-input_focusout event", function() {
            var handlerWorks = false;
            nb.on('nb-input_focusout', function() {
                handlerWorks = true;
            });
            this.input.focus();

            expect(handlerWorks).to.be.ok();
        });

        it("should be in focus", function() {
            this.input.focus();
            expect(this.input.focused).to.be.ok();
        });
    });

    describe("#blur()", function() {
        it("should not to be in focus", function() {
            this.input.blur();
            expect(this.input.focused).not.to.be.ok();
        });

        it("should throws blur event", function() {
            var handlerWorks = false;
            this.input.on('nb-blured', function() {
                handlerWorks = true;
            });
            this.input.blur();

            expect(handlerWorks).to.be.ok();
        });
    });

    describe("#disable()", function() {
        it("should be disabled", function() {
            this.input.disable();

            expect(this.input.$control.prop('disabled')).to.be.ok();
        });
    });

    describe("#enable()", function() {
        it("should be enabled", function() {
            this.input.enable();

            expect(this.input.$control.prop('disabled')).not.to.be.ok();
        });
    });

    describe("#isEnabled()", function() {
        it("should return true when enabled", function() {
            expect(this.input.isEnabled()).to.be.ok();
        });

        it("should return false when disabled", function() {
            this.input.disable();
            expect(this.input.isEnabled()).not.to.be.ok();
        });
    });

    describe("#setValue()", function() {
        it("should change the value", function() {
            this.input.setValue('Vadim');

            expect(this.input.$control.val()).to.be.equal('Vadim');
        });

        it("should throws nb-value-set event", function() {
            var handlerWorks = false;
            this.input.on('nb-value-set', function() {
                handlerWorks = true;
            });
            this.input.setValue('Vadim');

            expect(handlerWorks).to.be.ok();
        });
    });

    describe("#setName()", function() {
        it("should change the value", function() {
            this.input.setName('Vadim');

            expect(this.input.$control.attr('name')).to.be.equal('Vadim');
        });

        it("should throws nb-name-set event", function() {
            var handlerWorks = false;
            this.input.on('nb-name-set', function() {
                handlerWorks = true;
            });
            this.input.setName('Vadim');

            expect(handlerWorks).to.be.ok();
        });
    });

    describe("#getValue()", function() {
        it("should return the value", function() {
            expect(this.input.getValue()).to.be.equal('Viktor');
        });
    });

    describe("#getName()", function() {
        it("should return the name", function() {
            expect(this.input.getName()).to.be.equal('last-name');
        });
    });

    describe('#destroy()', function() {
        it("should destroy nb.block", function() {
            this.input.destroy();
            expect(nb.hasBlock($('#input')[0])).to.be.equal(false);
        });
    })
});