var dropzone = '.nb-dropzone';
var button = '.nb-dropzone-button';


var actions = util.actions;
var shot = util.shot;

util.sequence([
    shot(dropzone, actions(dropzone, 'move'), 'dropzone-hover'),
    shot(button, actions(button, 'move'), 'button-hover'),
    util.downNShot(button)
]);

