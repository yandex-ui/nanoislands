describe("Popup Tests", function() {

    beforeEach(function() {
        var result = yr.run('main', {popup: true});
        $('.content').html(result);

        nb.init();

        this.popup = nb.find('popup');
        this.toggler = nb.find('popup-toggler');
    });

    afterEach(function() {
        this.popup.destroy();
        this.toggler.destroy();
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
            expect(this.popup.$node.css('display')).to.equal('block');
        });

        it("#Open check event", function() {
            var flag = false;
            this.toggler.on('nb-opened', function() {
                flag = true;
            });

            this.toggler.open();
            expect(flag).to.ok();
        });

        it("#Close event", function() {
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

        it("#Open check event", function() {
            var flag = false;
            this.popup.on('nb-opened', function() {
                flag = true;
            });

            this.popup.open({where: this.toggler.node, appendTo: '.content'});
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


    describe("#Popup", function() {
        it("#Close check event", function() {
            var flag = false;
            this.popup.on('nb-closed', function() {
                flag = true;
            });

            this.popup.open({where: this.toggler.node, appendTo: '.content'});
            this.popup.close();
            expect(flag).to.ok();
        });
    });
});