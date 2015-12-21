describe("Popup Tests", function() {

    beforeEach(function() {
        var result = yr.run('main', {popup: true});
        $('.content').html(result);

        nb.init();

        this.popup = nb.find('popup');
        this.popupModal = nb.find('popup-modal');
        this.toggler = nb.find('popup-toggler');
    });

    afterEach(function() {
        this.popup.destroy();
        this.toggler.destroy();
        this.popupModal.destroy();
    });

    describe("YATE API", function() {
        it("Popup Without tail", function() {
            var toggler = nb.find('popup-toggler-w-t');
            toggler.open();
            expect(nb.find('popup1').$node.parent().find('._nb-popup-tail').length).to.equal(0);
        });

        it("Toggler Without tail", function() {
            var toggler = nb.find('popup-toggler-w-t1');
            toggler.open();
            expect(nb.find('popup-w-t').$node.parent().find('._nb-popup-tail').length).to.equal(0);
        });

        it('Popup`s tail should not be placed on the edge of popup', function() {
            var toggler = nb.find('popup-toggler-tight');
            toggler.open();
            expect(nb.find('popup-tight').$node.parent().find('._nb-popup-tail')[0].style.left).to.equal('13px');
        });
    });
    describe("Init", function() {
        it("Init popup", function() {
            expect(this.popup).to.not.equal(null);
        });
        it("Init toggler", function() {
            expect(this.toggler).to.not.equal(null);
        });
    });

    describe("Popup should be fixed", function() {
        beforeEach(function() {
            this.toggler1 = nb.find('popup-toggler-fixed1');
            this.toggler2 = nb.find('popup-toggler-fixed2');
        });
        afterEach(function() {
            this.toggler1.destroy();
            this.toggler2.destroy();
        });

        it("when it`s toggler has how: 'fixed' option", function(done) {
            var toggler = this.toggler1;
            var popup = toggler.getPopup();

            popup.on('nb-opened', function() {
                expect(popup.$node.parent().hasClass('ui-dialog-fixed')).to.be.ok();
                done();
            });
            toggler.open();
        });

        it("when it has data-nb-how attr defined as fixed", function(done) {
            var toggler = this.toggler2;
            var popup = toggler.getPopup();

            popup.on('nb-opened', function() {
                expect(popup.$node.parent().hasClass('ui-dialog-fixed')).to.be.ok();
                done();
            });
            toggler.open();
        });
    });

    describe("Popup extra modifier", function() {
        describe("in case of popup_mod", function() {
            beforeEach(function() {
                this.popupWithMod = nb.find('popup-with-mod');
            });
            afterEach(function() {
                this.popupWithMod.destroy();
                this.popupWithMod = null;
            });

            it("nb-popup-outer_mod should be added to jquery ui wrapper", function(done) {
                var popup = this.popupWithMod;

                popup.on('nb-opened', function() {
                    var $wrapper = $(popup.node.widget.uiDialog);
                    expect($wrapper.hasClass('nb-popup-outer_mod')).to.be.ok();
                    done();
                });
                popup.open();
            });

            it("should have nb-popup-outer_mod after reopening", function(done) {
                var popup = this.popupWithMod;
                var isFirstOpen = true;

                popup.on('nb-opened', function() {
                    if (isFirstOpen) {
                        popup.on('nb-closed', function() {
                            isFirstOpen = false;
                            popup.open();
                        });
                        popup.close();
                    } else {
                        var $wrapper = $(popup.node.widget.uiDialog);
                        expect($wrapper.hasClass('nb-popup-outer_mod')).to.be.ok();
                        done();
                    }
                });
                popup.open();
            })
        });

        describe("in case of mix with my-block__element my-block__element_mod", function() {
            beforeEach(function() {
                this.popupWithMix = nb.find('popup-with-mix');
            });
            afterEach(function() {
                this.popupWithMix.destroy();
                this.popupWithMix = null;
            });

            it("nb-popup-outer_mod should be added to jquery ui wrapper", function(done) {
                var popup = this.popupWithMix;

                popup.on('nb-opened', function() {
                    var $wrapper = $(popup.node.widget.uiDialog);
                    expect($wrapper.hasClass('nb-popup-outer_mod')).to.be.ok();
                    done();
                });
                popup.open();
            });

            it("nb-popup-outer_element should not be added to jquery ui wrapper", function(done) {
                var popup = this.popupWithMix;

                popup.on('nb-opened', function() {
                    var $wrapper = $(popup.node.widget.uiDialog);
                    expect($wrapper.hasClass('nb-popup-outer_element')).to.not.be.ok();
                    done();
                });
                popup.open();
            });
        });

        describe("in case _global-mod", function() {
            beforeEach(function() {
                this.popupWithGlobal = nb.find('popup-with-global-mod');
            });
            afterEach(function() {
                this.popupWithGlobal.destroy();
                this.popupWithGlobal = null;
            });

            it("nb-popup-outer_global-mod should not be added to jquery ui wrapper", function(done) {
                var popup = this.popupWithGlobal;

                popup.on('nb-opened', function() {
                    var $wrapper = $(popup.node.widget.uiDialog);
                    expect($wrapper.hasClass('nb-popup-outer_global-mod')).to.not.ok();
                    done();
                });
                popup.open();
            });
        });
    });

    describe("#Toggler", function() {
        it("#Open", function() {
            this.toggler.open();
            expect(this.popup.isOpen()).to.ok();
        });

        it("#Toggle() close popup", function() {
            this.toggler.open();
            this.toggler.toggle();
            expect(this.popup.isOpen()).to.not.ok();
        });

        it("#Toggle() open popup", function() {
            this.toggler.close();
            this.toggler.toggle();
            expect(this.popup.isOpen()).to.ok();
        });

        it("#Open check event", function() {
            this.toggler.close();
            var flag = false;
            this.toggler.on('nb-open-started', function() {
                flag = true;
            });

            this.toggler.open();
            expect(flag).to.ok();
        });

        it("#Open check event", function(done) {
            this.toggler.on('nb-opened', function() {
                done();
            });

            this.toggler.open();
        });

        it("#Close event", function() {
            this.toggler.open();
            var flag = false;
            this.toggler.on('nb-close-started', function() {
                flag = true;
            });

            this.toggler.close();
            expect(flag).to.ok();
        });

        it("#Close check event", function(done) {
            this.toggler.on('nb-closed', function() {
                done();
            });
            this.toggler.open();
            this.toggler.close();
        });

        it("#Close event on popup if closed using toggler", function() {
            var flag = false;
            this.toggler.on('nb-close-started', function() {
                flag = true;
            });

            this.toggler.open();
            this.toggler.close();
            expect(flag).to.ok();
        });

        it("#setPopup", function() {
            this.toggler.setPopup('popup1');
            this.toggler.open();
            expect(nb.find('popup1').$node.css('display')).to.equal('block');
        });

        it("#setPopup check event", function() {
            var flag = false;
            this.toggler.on('nb-popup-set', function() {
                flag = true;
            });

            this.toggler.setPopup('popup1');
            expect(flag).to.ok();
        });

        it("#getPopup", function() {
            this.toggler.getPopup();
            expect(this.toggler.getPopup()).to.not.equal(null);
        });


        it("#setOptions", function() {
            this.toggler.setOptions({where: '.content'});
            expect(this.toggler.options.where).to.equal('.content');
        });

        it("#setOptions check event", function() {
            var flag = false;
            this.toggler.on('nb-options-set', function() {
                flag = true;
            });

            this.toggler.setOptions({where: '.content'});
            expect(flag).to.ok();
        });


        it("#getOptions", function() {
            this.toggler.setOptions({where: '.content'});
            expect(this.toggler.getOptions().where).to.equal('.content');
        });


        it("#disable() check state", function() {
            this.toggler.disable();
            expect(this.toggler.isEnabled()).to.not.ok();
        });

        it("#disable() check event", function() {
            var flag = true;

            this.toggler.on('nb-disabled', function() {
                flag = false;
            });

            this.toggler.disable();

            expect(flag).to.not.ok();
        });

        it("#enable() check state", function() {
            this.toggler.disable();
            this.toggler.enable();
            expect(this.toggler.isEnabled()).to.ok();
        });

        it("#enable() check event", function() {
            var flag = false;
            this.toggler.on('nb-enabled', function() {
                flag = true;
            });

            this.toggler.disable();
            this.toggler.enable();
            expect(flag).to.ok();
        });
        it("should destroy nb.block", function() {
            this.toggler.destroy();
            expect(nb.hasBlock($('#popup-toggler')[0])).to.be.equal(false);
        });

    });

    describe("#Popup", function() {
        it("#Open", function() {
            this.popup.open({where: this.toggler.node, appendTo: '.content'});
            expect(this.popup.$node.css('display')).to.equal('block');
        });

        it("#isOpen show be true if popup opened", function() {
            this.popup.open({where: this.toggler.node, appendTo: '.content'});
            expect(this.popup.isOpen()).to.be.ok();
        });

        it("#isOpen show be false if popup closed", function() {
            this.popup.open({where: this.toggler.node, appendTo: '.content'});
            this.popup.close();
            expect(this.popup.isOpen()).to.not.ok();
        });

        it("#Open check event", function() {
            var flag = false;
            this.popup.on('nb-open-started', function() {
                flag = true;
            });

            this.popup.open({where: this.toggler.node, appendTo: '.content'});
            expect(flag).to.ok();
        });

        it("#Close check event", function() {
            var flag = false;
            this.popup.on('nb-close-started', function() {
                flag = true;
            });

            this.popup.open({where: this.toggler.node, appendTo: '.content'});
            this.popup.close();
            expect(flag).to.ok();
        });

        it("#Open check event", function(done) {
            this.popup.on('nb-opened', function() {
               done();
            });

            this.popup.open({where: this.toggler.node, appendTo: '.content'});
        });

        it("#Close check event", function(done) {
            this.popup.on('nb-closed', function() {
                done();
            });

            this.popup.open({where: this.toggler.node, appendTo: '.content'});
            this.popup.close();
        });

        it('#Focus menu item check event', function(done) {
            this.popup = nb.find('popup-menu');
            this.popup.on('nb-focused', function(eventName, data) {
                expect(data).to.have.keys(['ui', 'event']);
                expect(data.ui.item.find('a').attr('id')).to.be.equal('popup-menu-item-test');
                done();
            });

            this.popup.open({where: this.toggler.node, appendTo: '.content'});
            this.popup.$menu.menu('focus', null, this.popup.$menu.find('.ui-menu-item:last'));
        });

        it('#Select menu item check event', function(done) {
            this.popup = nb.find('popup-menu');
            this.popup.on('nb-select', function(eventName, data) {
                expect(data).to.have.keys(['ui', 'event']);
                expect(data.ui.item.find('a').attr('id')).to.be.equal('popup-menu-item-test');
                done();
            });

            this.popup.open({where: this.toggler.node, appendTo: '.content'});
            this.popup.$menu.menu('focus', null, this.popup.$menu.find('.ui-menu-item:last'));
            this.popup.$menu.menu('select');
        });

        it('#Blur menu item check event', function(done) {
            this.popup = nb.find('popup-menu');
            this.popup.on('nb-blured', function(eventName, data) {
                expect(data).to.have.keys(['ui', 'event']);
                done();
            });

            this.popup.open({where: this.toggler.node, appendTo: '.content'});
            this.popup.$menu.menu('focus', null, this.popup.$menu.find('.ui-menu-item:last'));
            this.popup.$menu.menu('blur');
        });

        it('#Click on overlay should close popup', function(done) {
            this.popupModal.on('nb-closed', function() {
                done();
            });

            this.popupModal.open();

            var $overlay = $('.ui-widget-overlay');
            $overlay.click();
        });

        it("#getContent() ", function() {
            expect(this.popup.getContent()).to.equal('Удалить');
        });

        it("#setContent() ", function() {
            this.popup.setContent('privet');
            expect(this.popup.getContent()).to.equal('privet');
        });

        it("#setContent() check event", function() {
            var flag = false;
            this.popup.on('nb-content-set', function() {
                flag = true;
            });

            this.popup.setContent('privet');
            expect(flag).to.ok();
        });
    });


    describe("#Popup destroy()", function() {

        it("should call $.fn.nbContextDialog('destroy')", function() {
            this.popup.destroy();
            expect(this.popup.node.widget).to.not.ok();
        });

        it("should destroy nb.block", function() {
            this.popup.destroy();
            expect(nb.hasBlock($('#popup')[0])).to.be.equal(false);
        });

        it("should return the class _nb-is-hidden", function() {
            this.popup.destroy();
            expect(this.popup.$node.hasClass('_nb-is-hidden')).to.ok();
        });
    });
});
