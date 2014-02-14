describe("Checkbox Tests", function() {

    beforeEach(function() {
        var result = yr.run('main', {checkbox: true});
        $('.content').html(result);

        nb.init();

        var checkbox = nb.find('checkbox-check');
        var checkboxButton = nb.find('checkbox-button');
        var checkboxRadio = nb.find('checkbox-radio');

        // для тестогенерации
        this.checkboxes = {
            'checkbox': checkbox,
            'button': checkboxButton,
            'radio': checkboxRadio
        };

        this.checkbox = this.checkboxes['checkbox'];
        this.button = this.checkboxes['button'];
    });

    afterEach(function() {
        delete this.checkboxes;
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
        it('should have tabindex = -1', function() {
            var sut = nb.find('checkbox-tabindex');
            expect(sut.$control.attr('tabindex')).to.be.equal('-1');
        });

        describe("'Type' parameter", function() {
            describe('"checkbox"', function() {
                it('should affect control type', function() {
                    expect(this.checkboxes['checkbox'].$control.attr('type')).to.be.equal('checkbox');
                });

                it('should render additional flag node', function() {
                    expect(this.checkboxes['checkbox'].$node.find('.nb-checkbox__flag.nb-checkbox__flag_type_checkbox').length).to.be.greaterThan(0);
                });
            });

            describe('"radio"', function() {
                it('should affect control type', function() {
                    expect(this.checkboxes['radio'].$control.attr('type')).to.be.equal('radio');
                });

                it('should render additional flag node', function() {
                    expect(this.checkboxes['radio'].$node.find('.nb-checkbox__flag.nb-checkbox__flag_type_radio').length).to.be.greaterThan(0);
                });
            });


            describe('"button"', function() {
                it('should affect control type', function() {
                    expect(this.checkboxes['button'].$control.attr('type')).to.be.equal('checkbox');
                });

                it('should render additional nb-button markup', function() {
                    expect(this.checkboxes['button'].$node.find('.nb-button').length).to.be.greaterThan(0);
                    expect(this.checkboxes['button'].$node.find('.nb-button__text').length).to.be.greaterThan(0);
                });
            });
        });

        describe("'Theme' parameter", function() {
            it("should affect appearance of the control", function() {
                var sut = nb.find('checkbox-pseudo-button');
                expect(sut.$node.find('.nb-button_theme_pseudo').length).to.be.greaterThan(0);
            });
        });
    });




    describe('#getType()', function() {
        // FIXME: пока непонятно, что должен возвращать #getType() для разных параметров инициализации
        it('should return checkbox type', function() {
            var sut = this.checkboxes['button'];

            expect(sut.getType()).to.be.equal('checkbox');
        });
    });

    describe("#getValue()", function() {

        describe('should return value', function() {
            it('checkbox', function() {
                expect(this.checkbox.getValue()).to.be.equal('my-value');
            });
            it('button', function() {
                expect(this.button.getValue()).to.be.equal('my-value');
            });
        });

        describe("should return value", function () {
            it('checkbox', function() {
                expect(this.checkbox.getValue()).to.be.equal('my-value');
            });

            it('button', function() {
                expect(this.button.getValue()).to.be.equal('my-value');
            });
        });

        it('should return empty string for checkbox without value', function() {
            var checkbox = nb.find('checkbox-without-attr-value');
            expect(checkbox.getValue()).to.be.equal('');
        });

        describe("should return new value after setValue", function () {
            it('checkbox', function() {
                this.checkbox.setValue('new-value');
                expect(this.checkbox.getValue()).to.be.equal('new-value');
            });

            it('button', function() {
                this.button.setValue('new-value');
                expect(this.button.getValue()).to.be.equal('new-value');
            });
        });
    });

    describe("#setValue()", function() {

        describe('should set new name to DOM', function() {
            it('checkbox', function() {
                this.checkbox.setName('new-name');
                expect(this.checkbox.$control.attr('name')).to.be.equal('new-name');
            });

            it('button', function() {
                this.button.setName('new-name');
                expect(this.button.$control.attr('name')).to.be.equal('new-name');
            });
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
        describe('should return new value after setValue', function() {

            it('checkbox', function() {
                this.checkbox.setName('new-name');
                expect(this.checkbox.getName()).to.be.equal('new-name');
            });

            it('button', function() {
                this.button.setName('new-name');
                expect(this.button.getName()).to.be.equal('new-name');
            });

        });

    });

    describe("#setName()", function() {
        describe('should set new value to DOM', function() {
            it('checkbox', function() {
                this.checkbox.setName('new-name');
                expect(this.checkbox.$control.attr('name')).to.be.equal('new-name');
            });

            it('button', function() {
                this.button.setName('new-name');
                expect(this.button.$control.attr('name')).to.be.equal('new-name');
            });
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
        describe("should return false when not checked", function() {
            it('checkbox', function() {
                expect(this.checkbox.isChecked()).to.not.ok();
            });

            it('button', function() {
                expect(this.button.isChecked()).to.not.ok();
            });
        });

        describe("should return true when checked", function() {
            it('checkbox', function() {
                this.checkbox.check();
                expect(this.checkbox.isChecked()).to.be.ok();
            });

            it('button', function() {
                this.button.check();
                expect(this.button.isChecked()).to.be.ok();
            });

            it('radio group', function() {
                var radio1 = nb.find('checkbox-group1');
                var radio2 = nb.find('checkbox-group2');

                expect(radio1.isChecked()).to.not.ok();
                expect(radio2.isChecked()).to.not.ok();

                radio1.check();

                expect(radio1.isChecked()).to.be.ok();
                expect(radio2.isChecked()).to.not.ok();

                radio2.check();

                expect(radio1.isChecked()).to.not.ok();
                expect(radio2.isChecked()).to.be.ok();
            });
        });
    });

    describe("#isEnabled()", function() {
        describe("should return true when enabled", function() {
            it('checkbox', function() {
                expect(this.checkbox.isEnabled()).to.be.ok();
            });

            it('button', function() {
                expect(this.button.isEnabled()).to.be.ok();
            });
        });

        describe("should return false when disabled", function() {
            it('checkbox', function() {
                this.checkbox.disable();
                expect(this.checkbox.isEnabled()).not.to.be.ok();
            });

            it('button', function() {
                this.button.disable();
                expect(this.button.isEnabled()).not.to.be.ok();
            });
        });
    });

    describe("#disable()", function() {
        describe("check state", function() {
            it('checkbox', function() {
                this.checkbox.disable();
                expect(this.checkbox.isEnabled()).to.not.ok();
            });

            it('button', function() {
                this.button.disable();
                expect(this.button.isEnabled()).to.not.ok();
            });
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
        describe("check state", function() {
            it('checkbox', function() {
                this.checkbox.disable();
                this.checkbox.enable();
                expect(this.checkbox.isEnabled()).to.ok();
            });

            it('button', function() {
                this.button.disable();
                this.button.enable();
                expect(this.button.isEnabled()).to.ok();
            });
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
        describe("check state", function() {
            it('checkbox', function() {
                this.checkbox.check();
                expect(this.checkbox.isChecked()).to.ok();
            });

            it('button', function() {
                this.button.check();
                expect(this.button.isChecked()).to.ok();
            });
        });

        it("check event", function() {
            var flag = false;
            this.checkbox.on('nb-checked', function() {
                flag = true;
            });

            this.checkbox.check();
            expect(flag).to.ok();
        });

        it('method call should cause one changed event', function() {
            var flag = 0;
            this.checkbox.on('nb-changed', function() {
                flag++;
            });

            this.checkbox.check();
            expect(flag).to.be.equal(1);
        });

        it('repeat the method call should cause one changed event', function() {
            var flag = 0;
            this.checkbox.on('nb-changed', function() {
                flag++;
            });

            this.checkbox.check();
            this.checkbox.check();
            this.checkbox.check();

            expect(flag).to.be.equal(1);
        });
    });

    describe("#uncheck()", function() {
        describe("check state", function() {
            it("checkbox", function() {
                this.checkbox.check();
                this.checkbox.uncheck();
                expect(this.checkbox.isChecked()).to.not.ok();
            });

            it("button", function() {
                this.button.check();
                this.button.uncheck();
                expect(this.button.isChecked()).to.not.ok();
            });
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

        it('method call should cause one changed event', function() {
            var flag = 0;
            this.checkbox.on('nb-changed', function() {
                flag++;
            });

            this.checkbox.check();
            this.checkbox.uncheck();

            expect(flag).to.be.equal(2);
        });

        it('repeat the method call should cause one changed event', function() {
            var flag = 0;
            this.checkbox.on('nb-changed', function() {
                flag++;
            });

            this.checkbox.uncheck();
            this.checkbox.uncheck();
            this.checkbox.uncheck();

            expect(flag).to.be.equal(0);
        });
    });

    describe("#toggle()", function() {
        describe("shoud check if checkbox is unchecked", function() {
            it("checkbox", function() {
                this.checkbox.toggle();
                expect(this.checkbox.isChecked()).to.ok();
            });

            it("button", function() {
                this.button.toggle();
                expect(this.button.isChecked()).to.ok();
            });
        });

        describe("check uncheck if checkbox is checked", function() {
            it("checkbox", function() {
                this.checkbox.check();
                this.checkbox.toggle();
                expect(this.checkbox.isChecked()).not.to.ok();
            });

            it("button", function() {
                this.button.check();
                this.button.toggle();
                expect(this.button.isChecked()).not.to.ok();
            });
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
        describe("should be in focus", function() {
            it("checkbox", function() {
                this.checkbox.focus();
                expect($(document.activeElement).attr('id')).to.equal('nb-checkbox_checkbox-check');
            });

            it("button", function() {
                this.button.focus();
                expect($(document.activeElement).attr('id')).to.equal('nb-checkbox_checkbox-button');
            });
        });

        it("should throws nb-focused event", function() {
            var handlerWorks = false;
            this.checkbox.on('nb-focused', function() {
                handlerWorks = true;
            });

            this.checkbox.focus();

            expect(handlerWorks).to.be.ok();
        });
    });

    describe("#blur()", function() {
        describe("should not to be in focus", function() {
            it("checkbox", function() {
                this.checkbox.focus();
                this.checkbox.blur();
                expect($(document.activeElement)).not.equal('nb-checkbox_checkbox-check');
            });

            it("button", function() {
                this.button.focus();
                this.button.blur();
                expect($(document.activeElement)).not.equal('nb-checkbox_checkbox-button');
            });
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
        describe("should destroy nb.block", function() {
            it("checkbox", function() {
                this.checkbox.destroy();
                expect(nb.hasBlock($('#checkbox-check')[0])).to.be.equal(false);
            });

            it("button", function() {
                this.button.destroy();
                expect(nb.hasBlock($('#checkbox-button ')[0])).to.be.equal(false);
            });
        });

    })


});
