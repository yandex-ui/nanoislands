describe("Buttton Tests", function () {
    var result = yr.run('main', { username: 'bs' });

    $('.content').append(result);
    nb.init();

    var button = nb.find('button');

    it("Init", function () {
        expect(button).to.not.equal(null);
    });

    it("setText()", function () {
        button.setText("Privet");
        expect($(button.node).find('.nb-button__text').html()).to.equal("Privet");
    });

    it("getText()", function () {
        button.setText("SetText");
        expect(button.getText()).to.equal("SetText");
    });
});