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

        it('suggest with group should have optgroup', function() {
            var suggest = nb.find('suggest-group');
            expect(suggest.$control.find('optgroup').length).to.be.ok();
        });

        it('suggest with group should have second level menu in dropdown', function() {
            var suggest = nb.find('suggest-group');
            suggest.open();
            expect(suggest.$jUI.menu.element.find('li > ul').length).to.be.equal(1);
        });

        it("option should have data-icon attribute, if icon of item is specified", function() {
            var suggest = nb.find('suggest-with-icons-in-options');
            var $options = suggest.$control.find('option');
            var firstOptionData = $options.first().data();

            expect(firstOptionData.icon).to.be.equal('close');
        });

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

    describe("#render()", function() {
        it('should open suggest', function() {
            this.suggest.render();
            expect(this.suggest.$node.autocomplete('widget').css('display')).to.equal('block');
        });

        it('shouldn\'t close suggest', function() {
            this.suggest.render();
            this.suggest.render();
            expect(this.suggest.$node.autocomplete('widget').css('display')).to.equal('block');
        });

        it("check event", function() {
            var flag = true;

            this.suggest.on('nb-rendered', function() {
                flag = false;
            });

            this.suggest.render();

            expect(flag).to.not.ok();
        });

        it('shouldn\'t render disabled suggest', function() {
            this.suggest.disable();
            this.suggest.render();
            expect(this.suggest.$node.autocomplete('widget').css('display')).to.equal('none');
        });

        it('no event for the disabled suggest', function() {
            var flag = false;

            this.suggest.on('nb-rendered', function() {
                flag = true;
            });

            this.suggest.disable();
            this.suggest.render();

            expect(flag).to.not.ok();
        });
    });

    describe("#open()", function() {
        it('should open suggest', function() {
            this.suggest.open();
            expect(this.suggest.$node.autocomplete('widget').css('display')).to.equal('block');
        });

        it("check event", function() {
            var flag = true;

            this.suggest.on('nb-opened', function() {
                flag = false;
            });

            this.suggest.open();

            expect(flag).to.not.ok();
        });

        it('shouldn\'t open disabled suggest', function() {
            this.suggest.disable();
            this.suggest.open();
            expect(this.suggest.$node.autocomplete('widget').css('display')).to.equal('none');
        });

        it('no event for the disabled suggest', function() {
            var flag = false;

            this.suggest.on('nb-opened', function() {
                flag = true;
            });

            this.suggest.disable();
            this.suggest.open();

            expect(flag).to.not.ok();
        });
    });

    describe("#close()", function() {
        it('should close suggest', function() {
            this.suggest.close();
            expect(this.suggest.$node.autocomplete('widget').css('display')).to.not.equal('block');
        });

        it("check event", function() {
            var flag = true;

            this.suggest.on('nb-closed', function() {
                flag = false;
            });

            this.suggest.close();

            expect(flag).to.not.ok();
        });
    });


    describe("#setState()", function() {
        it('should set state by text', function() {
            this.suggest.setState({text: 'Гибрид'});
            expect(this.suggest.getState().value == 'option3').to.be.ok();
        });
        it('should set state by value', function() {
            this.suggest.setState({value: 'option3'});
            expect(this.suggest.getState().text == 'Гибрид').to.be.ok();
        });

        it("shouldn't change if trying to set nonexistent option", function() {
            var flag = true;

            this.suggest.on('nb-changed', function() {
                flag = false;
            });

            this.suggest.setState({value: 'option5'});

            expect(flag).to.ok();
        });

        it("check event", function() {
            var flag = true;

            this.suggest.on('nb-changed', function() {
                flag = false;
            });

            this.suggest.setState({value: 'option3'});

            expect(flag).to.not.ok();
        });
    });

    describe("#getState()", function() {
        it('should return state of suggest control', function() {
            expect(this.suggest.getState().text == 'Карта' && this.suggest.getState().value == 'option1').to.be.ok();
        });
    });

    describe("#getSource()", function() {
        it('should return state of suggest control', function() {
            expect(this.suggest.getSource()[0].value == 'option1' && this.suggest.getSource()[1].text == 'Гибрид').to.ok();
        });
    });

    describe("#setSource()", function() {
        it('should replace source', function() {
            this.suggest.setSource([
                {'text': 'test', 'value': 'test'},
                {'text': 'test2', 'value': 'test2'}
            ]);
            expect(this.suggest.getSource()[0].value == 'test' && this.suggest.getSource()[1].text == 'test2').to.ok();
        });

        it('should set new source', function() {
            this.suggest.setSource();

            this.suggest.setSource([
                {'text': 'test', 'value': 'test'},
                {'text': 'test2', 'value': 'test2'}
            ]);
            expect(this.suggest.getSource()[0].value == 'test' && this.suggest.getSource()[1].text == 'test2').to.ok();
        });

        it("check event", function() {
            var flag = true;

            this.suggest.on('nb-source-changed', function() {
                flag = false;
            });

            this.suggest.setSource([
                {'text': 'test', 'value': 'test'},
                {'text': 'test2', 'value': 'test2'}
            ]);

            expect(flag).to.not.ok();
        });
    });

    describe("#addToSource()", function() {
        it('Should add item', function() {
            this.suggest.addToSource({'text': 'test', 'value': 'test'});
            var item = this.suggest.getSource().pop();
            expect(item.text == 'test' && item.value == 'test').to.ok();
        });

        it('Should add array of items', function() {
            var len = this.suggest.getSource().length;
            this.suggest.addToSource([
                {'text': 'test', 'value': 'test'},
                {'text': 'test2', 'value': 'test2'}
            ]);
            expect(this.suggest.getSource().length).to.equal(len + 2);
        });

        it('Should add item with index', function() {
            this.suggest.addToSource({'text': 'test', 'value': 'test'}, 1);
            var item = this.suggest.getSource()[1];
            expect(item.text == 'test' && item.value == 'test').to.ok();
        });

        it("check event", function() {
            var flag = true;

            this.suggest.on('nb-source-changed', function() {
                flag = false;
            });

            this.suggest.addToSource({'text': 'test', 'value': 'test'}, 1);

            expect(flag).to.not.ok();
        });
    });

    describe("#removeFromSource()", function() {
        it('Should remove item', function() {
            var len = this.suggest.getSource().length;
            this.suggest.addToSource({'text': 'test', 'value': 'test'});
            this.suggest.removeFromSource({'text': 'test', 'value': 'test'});
            expect(this.suggest.getSource().length).to.equal(len);
        });

        it('Should remove item with index', function() {
            this.suggest.addToSource({'text': 'test', 'value': 'test'}, 0);
            this.suggest.removeFromSource(0);
            var item = this.suggest.getSource()[0];
            expect(item.text == 'test' && item.value == 'test').to.not.ok();
        });

        it("check event", function() {
            var flag = true;

            this.suggest.on('nb-source-changed', function() {
                flag = false;
            });

            this.suggest.removeFromSource(0);

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
            sinon.spy($.fn, 'autocomplete');
        });

        afterEach(function() {
            $.fn.autocomplete.restore();
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

        it("should call $.fn.autocomplete('disable')", function() {
            this.suggest.disable();
            expect($.fn.autocomplete.calledWithExactly('disable')).to.be.equal(true);
        });
    });

    describe("#enable()", function() {
        beforeEach(function() {
            sinon.spy($.fn, 'autocomplete');

            this.suggest.disable();
        });

        afterEach(function() {
            $.fn.autocomplete.restore();
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

        it("should call $.fn.autocomplete('enable')", function() {
            this.suggest.enable();
            expect($.fn.autocomplete.calledWithExactly('enable')).to.be.equal(true);
        });
    });

    describe("#destroy()", function() {

        beforeEach(function() {
            sinon.spy($.fn, 'autocomplete');
        });

        afterEach(function() {
            $.fn.autocomplete.restore();
        });

        it("should call $.fn.autocomplete('destroy')", function() {
            this.suggest.destroy();
            expect($.fn.autocomplete.calledWithExactly('destroy')).to.be.equal(true);
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
            expect($(document.activeElement).attr('id')).to.equal('suggest');
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
            this.button.on('nb-blured', function() {
                handlerWorks = true;
            });
            this.button.blur();

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
            expect(this.suggest.$node.autocomplete('option', 'autoFocus')).to.ok();
        });
    });

    describe("#getOption()", function() {

        it("should return option from jUI widget", function() {
            this.suggest.setOption({'autoFocus': true});

            expect(this.suggest.getOption('autoFocus')).to.ok();
        });
    });


    describe("Specific", function() {

        describe("Issues", function() {

            it("#189", function() {
                var flag = 0;

                this.suggest.on('nb-changed', function() {
                    flag++
                });

                this.suggest.setState({'value': 'option3'});
                this.suggest.setState({'value': 'option3'});
                expect(flag).to.equal(1);
            });
        });

        describe("API", function() {
            afterEach(function() {
                $(document).off('click');
            });

            it("suggests's dropdown click event shouldn't propagate to document", function() {
                var flag = false;

                $(document).on('click', function() {
                    flag = true;
                });

                this.suggest.open();
                this.suggest.$jUI.menu.element.click();
                expect(flag).to.not.ok();
            });

            it("If maxHeight = 1 should be visilbe only one item", function() {
                var suggest = nb.find('suggest-mw1');
                suggest.open();
                expect(suggest.$jUI.menu.element.height()).to.equal(suggest.$jUI.menu.element.find('.nb-suggest__item').first().height());
            });

            it("If maxHeight = 10px should be visilbe only 10px", function() {
                var suggest = nb.find('suggest-mw2');
                suggest.open();
                expect(suggest.$jUI.menu.element.height()).to.equal(10);
            });

            it("Icon node should be presented in jUI dropdown menu item, if icon of item is specified", function() {
                var suggest = nb.find('suggest-with-icons-in-options');
                suggest.open();
                expect(suggest.$jUI.menu.element.find('.nb-suggest__item').first().find('.nb-icon').length).to.be.equal(1);
            });
        });
    });

});
