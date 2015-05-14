describe("Select Tests", function() {
    beforeEach(function() {
        var result = yr.run('main', {select: true});
        $('.content').html(result);

        nb.init();
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

    describe("#Yate API", function() {

        it('Select with group should have optgroup', function() {
            var select = nb.find('select-group');
            expect(select.$control.find('optgroup').length).to.be.ok();
        });

        it('Select with group should be inited even with selected on second level', function() {
            var select = nb.find('select-group');
            expect(select.getState().text == 'opt1').to.be.ok();
        });

        it('Select with group should have second level menu in dropdown', function() {
            var select = nb.find('select-group');
            select.open();
            expect(select.$jUI.menu.element.find('li > ul').length).to.be.equal(1);
        });

        it("option should have data-icon attribute, if icon of item is specified", function() {
            var select = nb.find('select-with-icons-in-options');
            var $options = select.$control.find('option');
            var firstOptionData = $options.first().data();

            expect(firstOptionData.icon).to.be.equal('close');
        });

        it('Should substitute the name of the selected element', function() {
            var select = nb.find('select-duplicate-title');
            expect(select.$node.find('._nb-button-content').text()).to.be.equal('2');
        });

        it('Should have additional classes for options', function() {
            var select = nb.find('select');
            this.select.open();
            expect(this.select.$node.autocomplete('widget').find('.class1.class2').length).to.equal(1);
        });

    });

    describe('#getType()', function() {
        it('should return select type', function() {
            expect(this.select.getType()).to.be.equal('select');
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

            this.select.on('nb-name-set', function() {
                flag = false;
            });

            this.select.setName('Vadim');

            expect(flag).to.not.ok();
        });
    });

    describe("#render()", function() {
        it('should open select', function() {
            this.select.render();
            expect(this.select.$node.autocomplete('widget').css('display')).to.equal('block');
        });

        it('shouldn\'t close select', function() {
            this.select.render();
            expect(this.select.$node.autocomplete('widget').css('display')).to.equal('block');
        });

        it("check event", function() {
            var flag = true;

            this.select.on('nb-rendered', function() {
                flag = false;
            });

            this.select.render();

            expect(flag).to.not.ok();
        });

        it('shouldn\'t render disabled select', function() {
            this.select.disable();
            this.select.render();
            expect(this.select.$node.autocomplete('widget').css('display')).to.equal('none');
        });

        it('no event for the disabled select', function() {
            var flag = false;

            this.select.on('nb-rendered', function() {
                flag = true;
            });

            this.select.disable();
            this.select.render();

            expect(flag).to.not.ok();
        });
    });

    describe("#open()", function() {
        it('should open select', function() {
            this.select.open();
            expect(this.select.$node.autocomplete('widget').css('display')).to.equal('block');
        });

        it("check event", function() {
            var flag = true;

            this.select.on('nb-opened', function() {
                flag = false;
            });

            this.select.open();

            expect(flag).to.not.ok();
        });

        it('shouldn\'t open disabled select', function() {
            this.select.disable();
            this.select.open();
            expect(this.select.$node.autocomplete('widget').css('display')).to.equal('none');
        });

        it('no event for the disabled select', function() {
            var flag = false;

            this.select.on('nb-opened', function() {
                flag = true;
            });

            this.select.disable();
            this.select.open();

            expect(flag).to.not.ok();
        });
    });

    describe("#close()", function() {
        it('should close select', function() {
            this.select.close();
            expect(this.select.$node.autocomplete('widget').css('display')).to.not.equal('block');
        });

        it("check event", function() {
            var flag = true;

            this.select.on('nb-closed', function() {
                flag = false;
            });

            this.select.close();

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

        it('should set state with proper value from <option></option>', function() {
            this.select.setState({value: 'option-with-html-text'});
            expect(this.select.getState().text).to.be.equal('<script>alert(1)</script>');
        });

        it("shouldn't change if trying to set nonexistent option", function() {
            var flag = true;

            this.select.on('nb-changed', function() {
                flag = false;
            });

            this.select.setState({value: 'option5'});

            expect(flag).to.ok();
        });

        it("check event", function() {
            var flag = true;

            this.select.on('nb-changed', function() {
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
            var flag = 0;

            this.select.on('nb-source-changed', function() {
                flag++;
            });

            this.select.setSource([
                {'text': 'test', 'value': 'test'},
                {'text': 'test2', 'value': 'test2'}
            ]);

            expect(flag).to.be.equal(1);
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

            this.select.on('nb-source-changed', function() {
                flag = false;
            });

            this.select.addToSource({'text': 'test', 'value': 'test'}, 1);

            expect(flag).to.not.ok();
        });

        describe('add last selected item', function() {

            beforeEach(function() {
                this.select.addToSource({
                    'selected': true,
                    'text': 'add-text',
                    'value': 'add-value'
                });
            });

            it('should set state from added item', function() {
                expect(this.select.getState()).to.be.eql({
                    'text': 'add-text',
                    'value': 'add-value'
                });
            });

            it('should set text from added item', function() {
                expect(this.select.$node.find('._nb-button-content').text()).to.be.eql('add-text');
            });

            it('should has only one selected item in source', function() {
                var cnt = 0;
                this.select.getSource().forEach(function(item) {
                    if (item.selected) {
                        cnt++;
                    }
                });

                expect(cnt).to.be.equal(1);
            });
        });

        describe('add first selected item', function() {

            beforeEach(function() {
                this.select.addToSource({
                    'selected': true,
                    'text': 'add-text',
                    'value': 'add-value'
                }, 0);
            });

            it('should set state from added item', function() {
                expect(this.select.getState()).to.be.eql({
                    'text': 'add-text',
                    'value': 'add-value'
                });
            });

            it('should has only one selected item in source', function() {
                var cnt = 0;
                this.select.getSource().forEach(function(item) {
                    if (item.selected) {
                        cnt++;
                    }
                });

                expect(cnt).to.be.equal(1);
            });
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

        it('should save selected state after remove item from source', function() {
            var select = nb.find('select-with-3-options');
            select.removeFromSource(1);
            expect(select.getState()).to.be.eql({
                'text': 'option-text3',
                'value': 'option-value3'
            });
        });

        it("check event", function() {
            var flag = true;

            this.select.on('nb-source-changed', function() {
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
        beforeEach(function() {
            sinon.spy($.fn, 'autocomplete');
        });

        afterEach(function() {
            $.fn.autocomplete.restore();
        });

        it("check state", function() {
            this.select.disable();
            expect(this.select.isEnabled()).to.not.ok();
        });

        it("check event", function() {
            var flag = true;

            this.select.on('nb-disabled', function() {
                flag = false;
            });

            this.select.disable();

            expect(flag).to.not.ok();
        });

        it("should call $.fn.autocomplete('disable')", function() {
            this.select.disable();
            expect($.fn.autocomplete.calledWithExactly('disable')).to.be.equal(true);
        });

        it("should disable <select> node", function() {
            this.select.disable();
            expect(this.select.$control.attr('disabled')).to.be.equal('disabled');
        });


    });


    describe("#enable()", function() {
        beforeEach(function() {
            sinon.spy($.fn, 'autocomplete');

            this.select.disable();
        });

        afterEach(function() {
            $.fn.autocomplete.restore();
        });

        it("check state", function() {
            this.select.enable();
            expect(this.select.isEnabled()).to.ok();
        });

        it("check event", function() {
            var flag = false;
            this.select.on('nb-enabled', function() {
                flag = true;
            });

            this.select.enable();
            expect(flag).to.ok();
        });

        it("should call $.fn.autocomplete('enable')", function() {
            this.select.enable();
            expect($.fn.autocomplete.calledWithExactly('enable')).to.be.equal(true);
        });

        it("should enable <select> node", function() {
            this.select.enable();
            expect(this.select.$control[0].hasAttribute('disabled')).to.be.equal(false);
        });

        it("should return initial tabindex", function() {
            var select = nb.find('select-tabindex');
            select.disable();
            select.enable();
            expect(select.$node.attr('tabindex')).to.be.equal('1');
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
            this.select.destroy();
            expect($.fn.autocomplete.calledWithExactly('destroy')).to.be.equal(true);
        });
        it("should destroy nb.block", function() {
            this.select.destroy();
            expect(nb.hasBlock($('#select')[0])).to.be.equal(false);
        });
    });

    describe("#focus()", function() {
        it("should throws nb-focused event", function() {
            var handlerWorks = false;
            this.select.on('nb-focused', function() {
                handlerWorks = true;
            });

            this.select.focus();

            expect(handlerWorks).to.be.ok();
        });


        it("should be in focus", function() {
            this.select.focus();
            expect($(document.activeElement).attr('id')).to.equal('select');
        });
    });

    describe("#blur()", function() {
        it("should not to be in focus", function() {
            this.select.focus();
            this.select.blur();
            expect($(document.activeElement)).not.equal('select');
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
            this.select.on('nb-option-set', function() {
                handlerWorks = true;
            });

            this.select.setOption({'autoFocus': false});

            expect(handlerWorks).to.be.ok();
        });


        it("should set option to the jUI widget", function() {
            this.select.setOption({'autoFocus': true});
            expect(this.select.$node.autocomplete('option', 'autoFocus')).to.ok();
        });
    });

    describe("#getOption()", function() {

        it("should return option from jUI widget", function() {
            this.select.setOption({'autoFocus': true});

            expect(this.select.getOption('autoFocus')).to.ok();
        });
    });

    describe("Specific", function() {

        describe("Issues", function() {

            it("#189", function() {
                var flag = 0;

                this.select.on('nb-changed', function() {
                    flag++
                });

                this.select.setState({'value': 'option3'});
                this.select.setState({'value': 'option3'});
                expect(flag).to.equal(1);
            });


            it("#422", function() {
                nb.find('select-texttext').setState({'text': 'Text'});
                expect(nb.find('select-texttext').$node.find('._nb-button-text').html()).to.equal('Text');
            });

            it("XSS in _setText", function() {
                this.select.addToSource({
                    'selected': true,
                    'text': '<b>bold</b>',
                    'value': 'add-value'
                });

                expect(this.select.$node.find('._nb-button-text').html()).to.be.eql('&lt;b&gt;bold&lt;/b&gt;');
            });

        });

        describe("API", function() {
            afterEach(function() {
                $(document).off('click');
            });

            it("Selects's dropdown click event shouldn't propagate to document", function() {
                var flag = false;

                $(document).on('click', function() {
                    flag = true;
                });

                this.select.open();
                this.select.$jUI.menu.element.click();
                expect(flag).to.not.ok();
            });

            it("If maxHeight = 1 should be visilbe only one item", function() {
                var select = nb.find('select-mw1');
                select.open();
                expect(select.$jUI.menu.element.height()).to.equal(select.$jUI.menu.element.find('._nb-select-item').first().height());
            });

            it("If maxHeight = 10px should be visilbe only 10px", function() {
                var select = nb.find('select-mw2');
                select.open();
                expect(select.$jUI.menu.element.height()).to.equal(10);
            });

            it("Icon node should be presented in jUI dropdown menu item, if icon of item is specified", function() {
                var select = nb.find('select-with-icons-in-options');
                select.open();
                expect(select.$jUI.menu.element.find('._nb-select-item').first().find('.nb-icon').length).to.be.equal(1);
            });

            it("Icon node should be presented in button content", function() {
                var select = nb.find('select-with-icons-in-options');
                expect(select.$node.find('._nb-button-content .nb-icon').length).to.be.equal(1);
            });
        });


    });

});
