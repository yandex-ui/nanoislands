
describe("Buttton Tests", function() {
    beforeEach(function() {
        var result = yr.run('main', { username: 'bs' });
        $('.content').append(result);

        nb.init();

        this.button = nb.find('button');
    });
    describe("Init", function() {
        it("Init", function() {
            expect(this.button).to.not.equal(null);
        });
    });
    describe("setText()", function() {

        it("check text", function() {
            this.button.setText("Privet");
            expect($(this.button.node).find('.nb-button__text').html()).to.equal("Privet");
        });

        it("check event", function() {

            var flag = false;
            this.button.on('nb-button_text-setted', function() {
                flag = true;
            });

            this.button.setText("Privet");
            expect(flag).to.ok();
        });
    });

    describe("getText()", function() {
        it("check text", function() {
            this.button.setText("SetText");
            expect(this.button.getText()).to.equal("SetText");
        });
    });

    describe("setUrl()", function() {
        it("check url", function() {
            this.button.setUrl("http://ya.ru");
            expect($(this.button.node).attr('href')).to.equal("http://ya.ru");
        });

        it("check event", function() {
            var flag = false;
            this.button.on('nb-button_url-setted', function() {
                flag = true;
            });

            this.button.setUrl("http://ya.ru");
            expect(flag).to.ok();
        });
    });

    describe("getUrl()", function() {
        it("check url", function() {
            this.button.setUrl("http://yandex.ru");
            expect(this.button.getUrl()).to.equal("http://yandex.ru");
        });
    });

    describe("disable()", function() {
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

    describe("enable()", function() {
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

    afterEach(function() {
        delete this.button;
    });
});