beforeEach(function() {
    var result = yr.run('main');
    $('.content').html(result);

    nb.init();
});