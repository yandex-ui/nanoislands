var phantomcss = require('../../node_modules/phantomcss/phantomcss.js');
var system = require('system');

var blockName = system.args.join(' ').match(/blockName=([^\s]+)/)[1];

casper.start();
phantomcss.init({
    // failedComparisonsRoot: './failures',
    // casper: specific_instance_of_casper,
    libraryRoot: '../node_modules/phantomcss',
    cleanupComparisonImages: true,
    comparisonResultRoot: './results',
    // fileNameGetter: function overide_file_naming(){console.log('here'); return 'name'},
    // onFail: function failCallback(){},
    // onTimeout: function timeoutCallback(){},
    // onComplete: function completeCallback(){},
    // hideElements: '#thing.selector',
    // addLabelToFailedImage: true,
    // outputSettings: {
    //     errorColor: {
    //         red: 255,
    //         green: 255,
    //         blue: 0
    //     },
    //     errorType: 'movement',
    //     transparency: 0.3
    // }
});



casper.then( function () {
    // compare screenshots
    phantomcss.compareFiles('screenshots/' + blockName + '.png', 'screenshots/' + blockName + '.diff.png');
});

casper.then( function end_it(){
    casper.test.done();
});

/*
Casper runs tests
*/
casper.run(function(){
    console.log('\nTHE END.');
    phantom.exit(phantomcss.getExitStatus());
});