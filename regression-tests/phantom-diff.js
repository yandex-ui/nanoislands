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
    fs.list('./screenshots')
		.join(';')
		.match(filesRe)
		.forEach(function (fileName) {
			if (re.test(fileName))
				phantomcss.compareFiles('screenshots/' + fileName.replace('.diff', ''), 'screenshots/' + fileName);
		});
});

casper.then( function end_it(){
    casper.test.done();
});

casper.run(function(){
    console.log('\nTHE END.');
    phantom.exit(phantomcss.getExitStatus());
});