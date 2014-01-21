describe("Button Tests", function() {
    beforeEach(function() {
        var result = yr.run('main', {button: true});
        $('.content').html(result);

        nb.init();

        this.button = nb.find('button');
    });

    afterEach(function() {
        this.button.destroy();
    });

    describe("Init", function() {
        it("Init", function() {
            expect(this.button).to.not.equal(null);
        });

        it('should be disabled after init', function() {
            var button = nb.find('button-disabled');
            expect(button.isEnabled()).to.be.equal(false);
        });
    });
    describe("#setText()", function() {

        it("check text", function() {
            this.button.setText("Privet");
            expect($(this.button.node).find('.nb-button__text').html()).to.be.equal("Privet");
        });

        it("check event", function() {

            var flag = false;
            this.button.on('nb-button_text-set', function() {
                flag = true;
            });

            this.button.setText("Privet");
            expect(flag).to.ok();
        });
    });

    describe("#getText()", function() {
        it("should return text", function() {
            expect(this.button.getText()).to.equal("Button");
        });
        it("should return new text after setText()", function() {
            this.button.setText("SetText");
            expect(this.button.getText()).to.equal("SetText");
        });
    });

    describe("#setUrl()", function() {
        it("check url", function() {
            this.button.setUrl("http://ya.ru");
            expect($(this.button.node).attr('href')).to.be.equal("http://ya.ru");
        });

        it("check event", function() {
            var flag = false;
            this.button.on('nb-button_url-set', function() {
                flag = true;
            });

            this.button.setUrl("http://ya.ru");
            expect(flag).to.ok();
        });
    });

    describe("#getUrl()", function() {
        it("should return url", function() {
            expect(this.button.getUrl()).to.not.ok();
        });

        it("should return new url after setUrl()", function() {
            this.button.setUrl("http://yandex.ru");
            expect(this.button.getUrl()).to.be.equal("http://yandex.ru");
        });
    });

    describe("#disable()", function() {
        it("check state", function() {
            this.button.disable();
            expect(this.button.isEnabled()).to.not.ok();
        });

        it("check event", function() {
            var flag = true;

            this.button.on('nb-button_disabled', function() {
                flag = false;
            });

            this.button.disable();

            expect(flag).to.not.ok();
        });
    });

    describe("#enable()", function() {
        it("check state", function() {
            this.button.disable();
            this.button.enable();
            expect(this.button.isEnabled()).to.ok();
        });

        it("check event", function() {
            var flag = false;
            this.button.on('nb-button_enabled', function() {
                flag = true;
            });

            this.button.disable();
            this.button.enable();
            expect(flag).to.ok();
        });
    });

    describe("#destroy()", function() {

        beforeEach(function() {
            sinon.spy($.fn, 'button');
        });

        afterEach(function() {
            $.fn.button.restore();
        });

        it("should call $.fn.button('destroy')", function() {
            this.button.destroy();
            expect($.fn.button.calledWithExactly('destroy')).to.be.equal(true);
        });

        it("should destroy nb.block", function() {
            this.button.destroy();
            expect(nb.hasBlock($('#button')[0])).to.be.equal(false);
        });
    });
});
