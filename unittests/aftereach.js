(function(globalSinon) {
    beforeEach(function() {
        sinon = globalSinon.sandbox.create();
    });

    afterEach(function() {
        sinon.restore();
        // clear blocks
        nb.destroy();
        $('.content').empty();
    });
}(sinon));
