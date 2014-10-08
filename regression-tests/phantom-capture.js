var phantomcss = require('./../node_modules/phantomcss/phantomcss.js');
var system = require('system');

phantomcss.init({
    "libraryRoot": "./../node_modules/phantomcss",
    screenshotRoot: './screenshots/',
	fileNameGetter: function (root, filename) {

		var name = root + filename + '.png';

        // if the file exists - write .diff file
        if (fs.isFile(name)) return root + filename + '.diff.png'
        else return name;
	}
});

var args = Array.prototype.slice.call(system.args).join(' ');

var blockName = args.match(/blockName=([^\s]+)/)[1];
var scenario = args.match(/scenario=([^\s]+)/)[1];

casper.start('http://localhost:3000/regression-tests/index.html');
require(scenario)(casper, phantomcss, blockName); //executing scenario

//ending casper
casper.then( function end_it(){
    casper.test.done();
});

casper.run(function() {
    phantom.exit(phantomcss.getExitStatus());
});