var extraLargeButton = '._nb-extra-large-promo-button';
var promoButton = '._nb-promo-button';
var actionButton = '._nb-action-button';
var smallButton = '._nb-with-only-button';

var downNShot = util.downNShot;

util.sequence([
    util.shotCurrent('body', 'default'),
    downNShot(extraLargeButton),
    downNShot(promoButton),
    downNShot(actionButton),
    downNShot(smallButton)
]);
