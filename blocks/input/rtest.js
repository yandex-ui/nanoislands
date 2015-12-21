var resetButton = '._nb-input-reset';
var clearedInput = '[code=input-simple-reset]';

util.sequence([
    util.shot(resetButton, util.actions(resetButton, 'move'), 'reset-button-hover'),
    util.click(resetButton),
    util.shot(clearedInput, 'reset')
]);
