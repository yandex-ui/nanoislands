var button = '.ui-button-text-only';


var actions = util.actions;
var shot = util.shot;

util.sequence([
	util.changeViewport(800, 200),
    util.shotCurrent('body', '800x200'),
    util.downNShot(button)
]);

