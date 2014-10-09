var extraLargeButton = '._nb-extra-large-promo-button';
var promoButton = '._nb-promo-button';
var actionButton = '._nb-action-button';
var smallButton = '._nb-with-only-button';

var clickNShot = util.clickNShot;

util.sequence([
    util.shotCurrent('body', 'default'),
    clickNShot(extraLargeButton),
    clickNShot(promoButton),
    clickNShot(actionButton),
    clickNShot(smallButton)
]);
