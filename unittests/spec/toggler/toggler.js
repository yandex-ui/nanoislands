describe("Toggler Tests", function() {

    beforeEach(function() {
        var result = yr.run('main', {toggler: true});

        this.$sandbox.html(result);

        nb.init(this.$sandbox);

        this.toggler = nb.find('toggler');
    });

    afterEach(function() {
        delete this.toggler;
    });

    describe("init", function() {

        it('toggler-checked should has checked after init', function() {
            var toggler = nb.find('toggler-checked');
            expect(toggler.isChecked()).to.be.equal(true);
        });

        it('toggler-disabled should has disabled after init', function() {
            var toggler = nb.find('toggler-disabled');
            expect(toggler.isEnabled()).to.be.equal(false);
        });

    });

    describe('#getType()', function() {
        it('should return toggler type', function() {
            expect(this.toggler.getType()).to.be.equal('toggler');
        });
    });

    describe("#getValue()", function() {

        it('should return value', function() {
            expect(this.toggler.getValue()).to.be.equal('value');
        });

        it('should return new value after setValue', function() {
            this.toggler.setValue('new-value');
            expect(this.toggler.getValue()).to.be.equal('new-value');
        });

    });

    describe("#setValue()", function() {

        it('should set new value to DOM', function() {
            this.toggler.setName('new-name');
            expect(this.toggler.$control.attr('name')).to.be.equal('new-name');
        });

        it("should throws nb-value-set event", function() {
            var handlerWorks = false;
            this.toggler.on('nb-value-set', function() {
                handlerWorks = true;
            });
            this.toggler.setValue('Vadim');

            expect(handlerWorks).to.be.ok();
        });

    });

    describe("#getName()", function() {
        it('should return new name after setValue', function() {
            this.toggler.setName('new-name');
            expect(this.toggler.getName()).to.be.equal('new-name');
        });

    });

    describe("#setName()", function() {

        it('should set new name to DOM', function() {
            this.toggler.setName('new-name');
            expect(this.toggler.$control.attr('name')).to.be.equal('new-name');
        });

        it("should throws nb-name-set event", function() {
            var handlerWorks = false;
            this.toggler.on('nb-name-set', function() {
                handlerWorks = true;
            });
            this.toggler.setName('new-name');

            expect(handlerWorks).to.be.ok();
        });

    });


    describe("#isChecked()", function() {
        it("should return false when not checked", function() {
            expect(this.toggler.isChecked()).to.not.ok();
        });

        it("should return true when checked", function() {
            this.toggler.check();
            expect(this.toggler.isChecked()).to.be.ok();
        });
    });

    describe("#isEnabled()", function() {
        it("should return true when enabled", function() {
            expect(this.toggler.isEnabled()).to.be.ok();
        });

        it("should return false when disabled", function() {
            this.toggler.disable();
            expect(this.toggler.isEnabled()).not.to.be.ok();
        });
    });

    describe("#disable()", function() {
        it("check state", function() {
            this.toggler.disable();
            expect(this.toggler.isEnabled()).to.not.ok();
        });

        it("check event", function() {
            var flag = true;

            this.toggler.on('nb-disabled', function() {
                flag = false;
            });

            this.toggler.disable();

            expect(flag).to.not.ok();
        });
    });

    describe("#enable()", function() {
        it("check state", function() {
            this.toggler.disable();
            this.toggler.enable();
            expect(this.toggler.isEnabled()).to.ok();
        });

        it("check event", function() {
            var flag = false;
            this.toggler.on('nb-enabled', function() {
                flag = true;
            });

            this.toggler.disable();
            this.toggler.enable();
            expect(flag).to.ok();
        });
    });

    describe("#check()", function() {
        it("check state", function() {
            this.toggler.check();
            expect(this.toggler.isChecked()).to.ok();
        });

        it("check event", function() {
            var flag = false;
            this.toggler.on('nb-checked', function() {
                flag = true;
            });

            this.toggler.check();
            expect(flag).to.ok();
        });
    });

    describe("#uncheck()", function() {
        it("check state", function() {
            this.toggler.check();
            this.toggler.uncheck();
            expect(this.toggler.isChecked()).to.not.ok();
        });

        it("check event", function() {
            var flag = false;
            this.toggler.on('nb-unchecked', function() {
                flag = true;
            });

            this.toggler.check();
            this.toggler.uncheck();
            expect(flag).to.ok();
        });
    });


    describe("#toggle()", function() {
        it("Should check() then isChecked == false", function() {
            this.toggler.check();
            this.toggler.uncheck();
            this.toggler.toggle();
            expect(this.toggler.isChecked()).to.ok();
        });

        it("Should uncheck() then isChecked == true", function() {
            this.toggler.uncheck();
            this.toggler.check();
            this.toggler.toggle();
            expect(this.toggler.isChecked()).to.not.ok();
        });

        it("Should work on click()", function() {
            this.toggler.check();
            this.toggler.uncheck();
            this.toggler.trigger('click');
            expect(this.toggler.isChecked()).to.not.ok();
        });

    });
    describe("#focus()", function() {
        it("should throws nb-focused event", function() {
            var handlerWorks = false;
            this.toggler.on('nb-focused', function() {
                handlerWorks = true;
            });

            this.toggler.focus();

            expect(handlerWorks).to.be.ok();
        });


        it("should be in focus", function() {
            this.toggler.focus();
            expect($(document.activeElement)[0]).to.equal(this.toggler.$control[0]);
        });
    });

    describe("#blur()", function() {
        it("should not to be in focus", function() {
            this.toggler.focus();
            this.toggler.blur();
            expect($(document.activeElement)).not.equal('toggler');
        });

        it("should throws nb-blured event", function() {
            var handlerWorks = false;
            this.toggler.on('nb-blured', function() {
                handlerWorks = true;
            });
            this.toggler.blur();

            expect(handlerWorks).to.be.ok();
        });
    });


    describe("#destroy()", function() {
        it("should destroy nb.block", function() {
            this.toggler.destroy();
            expect(nb.hasBlock($('#toggler')[0])).to.be.equal(false);
        });
    });
});
