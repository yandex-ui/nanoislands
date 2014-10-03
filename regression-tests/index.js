/*
    Require and initialise PhantomCSS module
    Paths are relative to CasperJs directory
*/
var phantomcss = require('./../node_modules/phantomcss/phantomcss.js');


phantomcss.init({
    // screenshotRoot: '/screenshots',
    // failedComparisonsRoot: '/failures'
    // casper: specific_instance_of_casper,
    libraryRoot: './../node_modules/phantomcss',
    // fileNameGetter: function overide_file_naming(){console.log('here'); return 'name'},
    // onPass: function passCallback(){console.log('pass');},
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


/*
    The test scenario
*/
casper.start( 'http://localhost:3000/docs/index.html' );

casper.then(function(){
    phantomcss.screenshot('._nb-header-main', 'testing');
});

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

casper.then( function now_check_the_screenshots(){
    // compare screenshots
    phantomcss.compareAll();
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

