var mouse;

// shots selector are after executing passed actions
function shot (selector, actions, eventName) {
    return function () {

    	if (typeof actions === 'function')
    		actions()
    	else eventName = actions;

        phantomcss.screenshot(selector, blockName + selector + '.' + eventName);
    }
}

// shot current state of selector area
function shotCurrent (selector, name) {
	return phantomcss.screenshot.bind(phantomcss, selector, blockName + '.' + name);
}

// runs an array of functions
function sequence (steps) {
    steps.forEach(function (step) {
        casper.then(step);
    });
}


// applies arbitrary number of actions to selector
// for the full list of actions see spec of "mouse" Class
function actions (selector) {
	var args = arguments;
	return function () {
		Array.prototype.slice.call(args, 1).forEach(function (action) {
			console.log('mouse' + action + ' ' + selector);
			mouse[action](selector);
		});
	};
}

function click (selector) {
	return actions(selector, 'move', 'click');
}

function down (selector) {
	return actions(selector, 'move', 'down');
}

function clickNShot (selector) {
	return shot(selector, click(selector), 'click');
}

function downNShot (selector) {
	return shot(selector, down(selector), 'down');
}

function changeViewport (width, height) {
	return function() {
		casper.viewport(width, height);
	}

}

module.exports = function () {
	// casper, phantomcss, blockName are in global
	mouse = casper.mouse;
	return {
		shotCurrent: shotCurrent,
		shot: shot,
		sequence: sequence,
		actions: actions,
		click: click,
		clickNShot: clickNShot,
		downNShot: downNShot,
		changeViewport: changeViewport
	};
}