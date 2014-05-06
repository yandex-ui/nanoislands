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


    describe("YATE API", function() {
        it('iconText', function() {
            var button = nb.find('button-icon-text');
            expect(button.$node.find('._nb-button-content .nb-icon').html()).to.be.equal('▼');
        });
    });

    describe("#setContent()", function() {

        it("check text", function() {
            this.button.setContent("Privet");
            expect($(this.button.node).find('._nb-button-content').html()).to.be.equal("Privet");
        });

        it("check event", function() {

            var flag = false;
            this.button.on('nb-text-set', function() {
                flag = true;
            });

            this.button.setContent("Privet");
            expect(flag).to.ok();
        });
    });

    describe("#getContent()", function() {
        it("should return text", function() {
            expect(this.button.getContent()).to.equal("Button");
        });
        it("should return new text after setContent()", function() {
            this.button.setContent("SetText");
            expect(this.button.getContent()).to.equal("SetText");
        });
    });

    describe("#setUrl()", function() {
        it("check url", function() {
            this.button.setUrl("http://ya.ru");
            expect($(this.button.node).attr('href')).to.be.equal("http://ya.ru");
        });

        it("check event", function() {
            var flag = false;
            this.button.on('nb-url-set', function() {
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

            this.button.on('nb-disabled', function() {
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
            this.button.on('nb-enabled', function() {
                flag = true;
            });

            this.button.disable();
            this.button.enable();
            expect(flag).to.ok();
        });
    });

    describe("#focus()", function() {
        it("should throws nb-focused event", function() {
            var handlerWorks = false;
            this.button.on('nb-focused', function() {
                handlerWorks = true;
            });

            this.button.focus();

            expect(handlerWorks).to.be.ok();
        });


        it("should be in focus", function() {
            this.button.focus();
            expect($(document.activeElement).attr('id')).to.equal('button');
        });
    });

    describe("#blur()", function() {
        it("should not to be in focus", function() {
            this.button.focus();
            this.button.blur();
            expect($(document.activeElement)).not.equal('button');
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
