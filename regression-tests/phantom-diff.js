var phantomcss = require('../../node_modules/phantomcss/phantomcss.js');
var system = require('system');
var fs = require('fs')
var blockName = system.args.join(' ').match(/blockName=([^\s]+)/)[1];

casper.start();

phantomcss.init({
    libraryRoot: '../node_modules/phantomcss',
    cleanupComparisonImages: true
});

var diffs = {};
var filesRe = new RegExp('(' + blockName + '\.[^;]*)', 'g'); //takes all files matching blockname.
var re = /.*diff\.png$/;

casper.then( function () {
    // compare screenshots
    var files = fs.list('./screenshots')
		.join(';')
		.match(filesRe);
	if (files) files.forEach(function (fileName) {
			if (re.test(fileName))
				phantomcss.compareFiles('screenshots/' + fileName.replace('.diff', ''), 'screenshots/' + fileName);
		});
});

casper.then(function() {
    casper.test.done();
});

casper.run(function() {
    console.log('\nTHE END.');
    phantom.exit(phantomcss.getExitStatus());
});