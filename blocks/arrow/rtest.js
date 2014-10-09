var searchButton = '._nb-search-arrow-button';

var downNShot = util.downNShot;

util.shotCurrent('body', 'default')();

function changeViewport () {
    casper.viewport(200, 300);
}


util.sequence([
    downNShot(searchButton),
    changeViewport,
    util.shotCurrent('body', '200x300')
]);

