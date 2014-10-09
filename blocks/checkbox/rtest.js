var checkBox1 = '._nb-checkbox-checkbox';
var buttonCheckbox = '._nb-button-checkbox'

var downNShot = util.downNShot;
var clickNShot = util.clickNShot;

util.shotCurrent('body', 'default')();

util.sequence([
    clickNShot(checkBox1),
    downNShot(buttonCheckbox),
	clickNShot(buttonCheckbox)
]);

