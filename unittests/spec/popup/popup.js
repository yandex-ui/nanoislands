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
            this.toggler.open();
            this.toggler.close();
            this.toggler.toggle();
            expect(this.popup.isOpen()).to.ok();
        });

        it("#Open check event", function() {
            this.toggler.close();
            var flag = false;
            this.toggler.on('nb-opened', function() {
                flag = true;
            });

            this.toggler.open();
            expect(flag).to.ok();
        });

        it("#Close event", function() {
            this.toggler.open();
            var flag = false;
            this.toggler.on('nb-closed', function() {
                flag = true;
            });

            this.toggler.close();
            expect(flag).to.ok();
        });

        it("#Close event on popup if closed using toggler", function() {
            var flag = false;
            this.popup.on('nb-closed', function() {
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
            this.popup.on('nb-opened', function() {
                flag = true;
            });

            this.popup.open({where: this.toggler.node, appendTo: '.content'});
            expect(flag).to.ok();
        });

        it("#Close check event", function() {
            var flag = false;
            this.popup.on('nb-closed', function() {
                flag = true;
            });

            this.popup.open({where: this.toggler.node, appendTo: '.content'});
            this.popup.close();
            expect(flag).to.ok();
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
    });
});