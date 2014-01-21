describe("Checkbox Tests", function() {

    beforeEach(function() {
        var result = yr.run('main', {checkbox: true});
        $('.content').html(result);

        nb.init();

        this.checkbox = nb.find('checkbox');
    });

    afterEach(function() {
        delete this.checkbox;
    });

    describe("init", function() {

        it('should has checked after init', function() {
            var checkbox = nb.find('checkbox-checked');
            expect(checkbox.isChecked()).to.be.equal(true);
        });

        it('should has disabled after init', function() {
            var checkbox = nb.find('checkbox-disabled');
            expect(checkbox.isEnabled()).to.be.equal(false);
        });
    });

    describe("YATE API", function() {
        it('should has tabindex = -1', function() {
            expect(this.checkbox.$control.attr('tabindex')).to.be.equal('-1');
        })
    });


    describe('#getType()', function() {
        it('should return checkbox type', function() {
            expect(this.checkbox.getType()).to.be.equal('checkbox');
        });
    });

    describe("#getValue()", function() {

        it('should return value', function() {
            expect(this.checkbox.getValue()).to.be.equal('my-value');
        });

        it('should return empty string for checkbox without value', function() {
            var checkbox = nb.find('checkbox-without-attr-value');
            expect(checkbox.getValue()).to.be.equal('');
        });

        it('should return new value after setValue', function() {
            this.checkbox.setValue('new-value');
            expect(this.checkbox.getValue()).to.be.equal('new-value');
        });

    });

    describe("#setValue()", function() {

        it('should set new name to DOM', function() {
            this.checkbox.setName('new-name');
            expect(this.checkbox.$control.attr('name')).to.be.equal('new-name');
        });

        it("should throws nb-value-set event", function() {
            var handlerWorks = false;
            this.checkbox.on('nb-value-set', function() {
                handlerWorks = true;
            });
            this.checkbox.setValue('Vadim');

            expect(handlerWorks).to.be.ok();
        });

    });

    describe("#getName()", function() {
        it('should return new value after setValue', function() {
            this.checkbox.setName('new-name');
            expect(this.checkbox.getName()).to.be.equal('new-name');
        });

    });

    describe("#setName()", function() {

        it('should set new value to DOM', function() {
            this.checkbox.setName('new-name');
            expect(this.checkbox.$control.attr('name')).to.be.equal('new-name');
        });

        it("should throws nb-name-set event", function() {
            var handlerWorks = false;
            this.checkbox.on('nb-name-set', function() {
                handlerWorks = true;
            });
            this.checkbox.setName('new-name');

            expect(handlerWorks).to.be.ok();
        });

    });


    describe("#isChecked()", function() {
        it("should return false when not checked", function() {
            expect(this.checkbox.isChecked()).to.not.ok();
        });

        it("should return true when checked", function() {
            this.checkbox.check();
            expect(this.checkbox.isChecked()).to.be.ok();
        });
    });

    describe("#isEnabled()", function() {
        it("should return true when enabled", function() {
            expect(this.checkbox.isEnabled()).to.be.ok();
        });

        it("should return false when disabled", function() {
            this.checkbox.disable();
            expect(this.checkbox.isEnabled()).not.to.be.ok();
        });
    });

    describe("#disable()", function() {
        it("check state", function() {
            this.checkbox.disable();
            expect(this.checkbox.isEnabled()).to.not.ok();
        });

        it("check event", function() {
            var flag = true;

            this.checkbox.on('nb-disabled', function() {
                flag = false;
            });

            this.checkbox.disable();

            expect(flag).to.not.ok();
        });
    });

    describe("#enable()", function() {
        it("check state", function() {
            this.checkbox.disable();
            this.checkbox.enable();
            expect(this.checkbox.isEnabled()).to.ok();
        });

        it("check event", function() {
            var flag = false;
            this.checkbox.on('nb-enabled', function() {
                flag = true;
            });

            this.checkbox.disable();
            this.checkbox.enable();
            expect(flag).to.ok();
        });
    });

    describe("#check()", function() {
        it("check state", function() {
            this.checkbox.check();
            expect(this.checkbox.isChecked()).to.ok();
        });

        it("check event", function() {
            var flag = false;
            this.checkbox.on('nb-checked', function() {
                flag = true;
            });

            this.checkbox.check();
            expect(flag).to.ok();
        });
    });

    describe("#uncheck()", function() {
        it("check state", function() {
            this.checkbox.check();
            this.checkbox.uncheck();
            expect(this.checkbox.isChecked()).to.not.ok();
        });

        it("check event", function() {
            var flag = false;
            this.checkbox.on('nb-unchecked', function() {
                flag = true;
            });

            this.checkbox.check();
            this.checkbox.uncheck();
            expect(flag).to.ok();
        });
    });

    describe("#toggle()", function() {
        it("shoud check if checkbox is unchecked", function() {
            this.checkbox.toggle();
            expect(this.checkbox.isChecked()).to.ok();
        });

        it("check uncheck if checkbox is checked", function() {
            this.checkbox.check();
            this.checkbox.toggle();
            expect(this.checkbox.isChecked()).not.to.ok();
        });

        it("check event", function() {
            var flag = false;
            this.checkbox.on('nb-change', function() {
                flag = true;
            });

            this.checkbox.toggle();
            expect(flag).to.ok();
        });
    });

    describe("#focus()", function() {
        it("should throws nb-focused event", function() {
            var handlerWorks = false;
            this.checkbox.on('nb-focused', function() {
                handlerWorks = true;
            });

            this.checkbox.focus();

            expect(handlerWorks).to.be.ok();
        });


        it("should be in focus", function() {
            this.checkbox.focus();
            expect($(document.activeElement).attr('id')).to.equal('nb-checkbox_checkbox');
        });
    });

    describe("#blur()", function() {
        it("should not to be in focus", function() {
            this.checkbox.focus();
            this.checkbox.blur();
            expect($(document.activeElement)).not.equal('nb-checkbox_checkbox');
        });

        it("should throws nb-blured event", function() {
            var handlerWorks = false;
            this.checkbox.on('nb-blured', function() {
                handlerWorks = true;
            });
            this.checkbox.blur();

            expect(handlerWorks).to.be.ok();
        });
    });

    describe('#destroy()', function() {
        it("should destroy nb.block", function() {
            this.checkbox.destroy();
            expect(nb.hasBlock($('#checkbox')[0])).to.be.equal(false);
        });

    })


});
