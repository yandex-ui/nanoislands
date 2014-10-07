/*
    Require and initialise PhantomCSS module
    Paths are relative to CasperJs directory
*/
var phantomcss = require('./../node_modules/phantomcss/phantomcss.js');
var system = require('system');
var fs = require('fs');

// var blockName = typeof system.args //.toString.match(/filename=(.*)/)
// console.log(blockName);
phantomcss.init({
    "libraryRoot": "./../node_modules/phantomcss",
    screenshotRoot: './screenshots/',
	fileNameGetter: function (root, filename) {
		var name = root + filename + '.png';
        if (fs.isFile(name)) return root + filename + '.diff.png'
        else return name;
	}
});

var args = Array.prototype.slice.call(system.args).join(' ');

var blockName = args.match(/blockName=([^\s]+)/)[1];
var scenario = args.match(/scenario=([^\s]+)/)[1];

casper.start('http://localhost:3000/regression-tests/index.html');
require(scenario)(casper, phantomcss, blockName);

/*
    The test scenario
*/


// casper.then(function(){

//     casper.click('#coffee-machine-button');

//     // wait for modal to fade-in
//     casper.waitForSelector('#myModal:not([style*="display: none"])',
//         function success(){
//             phantomcss.screenshot('#myModal', 'coffee machine dialog');
//         },
//         function timeout(){
//             casper.test.fail('Should see coffee machine');
//         }
//     );
// });

// casper.then(function(){
//     casper.click('#cappuccino-button');
//     phantomcss.screenshot('#myModal', 'cappuccino success');
// });

// casper.then(function(){
//     casper.click('#close');

//     // wait for modal to fade-out
//     casper.waitForSelector('#myModal[style*="display: none"]',
//         function success(){
//             phantomcss.screenshot('#coffee-machine-wrapper', 'coffee machine close success');
//         },
//         function timeout(){
//             casper.test.fail('Should be able to walk away from the coffee machine');
//         }
//     );
// });

casper.then( function end_it(){
    casper.test.done();
});

/*
Casper runs tests
*/
casper.run(function() {
    phantom.exit(phantomcss.getExitStatus());
});