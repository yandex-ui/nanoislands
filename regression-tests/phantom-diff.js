var phantomcss = require('../../node_modules/phantomcss/phantomcss.js');
var system = require('system');

var blockName = system.args.join(' ').match(/blockName=([^\s]+)/)[1];

casper.start();

phantomcss.init({
    libraryRoot: '../node_modules/phantomcss',
    cleanupComparisonImages: true
});


// TODO: here we could iterate over all states
casper.then( function () {
    // compare screenshots
    phantomcss.compareFiles('screenshots/' + blockName + '.png', 'screenshots/' + blockName + '.diff.png');
});

casper.then( function end_it(){
    casper.test.done();
});

casper.run(function(){
    console.log('\nTHE END.');
    phantom.exit(phantomcss.getExitStatus());
});