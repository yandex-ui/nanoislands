// all variable are defined in 'global' variable even with var statement
// this behaviour is similar to the browser window, please be aware not to override them

var phantomcss = require('./../node_modules/phantomcss/phantomcss.js');
var system = require('system');

var args = Array.prototype.slice.call(system.args).join(' ');

var blockName = args.match(/blockName=([^\s]+)/)[1];
var scenario = args.match(/scenario=([^\s]+)/)[1];
var util = require('./util')(casper, phantomcss);

phantomcss.init({
    libraryRoot: "./../node_modules/phantomcss",
    screenshotRoot: './screenshots/',
    fileNameGetter: function (root, filename) {

        var name = root + filename + '.png';

        // if the file exists - write .diff file
        if (fs.isFile(name)) return root + filename + '.diff.png'
        else return name;
    }
});

casper.start('http://localhost:3000/regression-tests/index.html');
require(scenario); //executing scenario
casper.then( function () {

    casper.test.done(); //ending casper
});

casper.run(function() {
    phantom.exit(phantomcss.getExitStatus());
});