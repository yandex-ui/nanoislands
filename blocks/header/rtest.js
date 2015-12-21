var headerButton = '._nb-header-button';
var username = '._nb-user-label';

var shot = util.shot;
var actions = util.actions;

util.sequence([
	util.changeViewport(800, 200),
	util.shotCurrent('body', '800x200'),
	shot(headerButton, actions(headerButton, 'move'), 'headerButton-hover'),
	shot(username, actions(username, 'move'), 'username-hover')
]);
