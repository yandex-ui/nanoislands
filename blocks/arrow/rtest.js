var searchButton = '._nb-search-arrow-button';

var clickNShot = util.clickNShot;

util.shotCurrent('body', 'default')();

function changeViewport () {
    casper.viewport(200, 300);
}


util.sequence([
    clickNShot(searchButton),
    changeViewport,
    util.shotCurrent('body', '200x300')
]);

