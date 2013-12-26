describe("Buttton Tests", function () {

    beforeEach(function() {
        var result = yr.run('main', { username: 'bs' });

        $('.content').append(result);
        nb.init();

        this.button = nb.find('button');
    });

    afterEach(function() {
        delete this.button;
    });

    it("Init", function () {
        expect(this.button).to.not.equal(null);
    });

    it("setText()", function () {
        this.button.setText("Privet");
        expect($(this.button.node).find('.nb-button__text').html()).to.equal("Privet");
    });

    it("getText()", function () {
        this.button.setText("SetText");
        expect(this.button.getText()).to.equal("SetText");
    });

    it("setUrl()", function () {
       button.setUrl("http://ya.ru");
       expect($(button.node).attr('href')).to.equal("http://ya.ru");
    });

    it("getUrl()", function () {
       $(button.node).removeAttr('href');
       button.setUrl("http://yandex.ru");
       expect(button.getUrl()).to.equal("http://yandex.ru");
    });
});