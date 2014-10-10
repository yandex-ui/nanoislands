var readButton = '[data-value="btn4"]';
var disabledButton = '._nb-is-disabled';

util.sequence([
	util.downNShot(readButton),
	util.clickNShot(readButton),
	util.clickNShot(readButton)
])