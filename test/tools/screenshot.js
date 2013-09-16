var options = {
    dirScreenshots: './screenshots',

    onPass: function(scr) {
        var page = findPage(scr.filename);
        page.fail = false;
        page.filename = scr.filename;
    },

    onFail: function(scr) {
        var page = findPage(scr.filename);
        page.fail = true;
        page.filename = scr.filename;
    },

    onComplete: function(scrs) {
        console.log(JSON.stringify(pages));
    }
};

var fs = require('fs');
var pages = require('system').args[1].split(' ');

var casper = makeCasper();
var phantomcss = makePhantomcss();


casper.start('about:blank');

pages.forEach(function(page) {
    casper
        .thenOpen(page)
        .then(function() {
            var parts = page.split('/');
            var name = parts[parts.length - 1];
            console.log('SHOOT', page);
            phantomcss.screenshot('#test', 1, null, name);
        });
});

// casper.then(function() {
//     phantomcss.compareAll({
//         test: function(filename) {
//             return !findPage(filename);
//         }
//     });
// })

casper.run(function end_it() {
    phantom.exit();
});


function makeCasper() {
    phantom.casperPath = './phantomcss/CasperJs';
    phantom.injectJs(phantom.casperPath + '/bin/bootstrap.js');
    phantom.injectJs('jquery.js');

    var casper = require('casper').create({
        viewportSize: {
            width: 1024,
            height: 800
        }
    });

    return casper;
}


function makePhantomcss() {
    var phantomcss = require('./phantomcss/phantomcss.js');

    phantomcss.init({
        libraryRoot: './phantomcss',
        screenshotRoot: options.dirScreenshots,
        onFail: options.onFail,
        onPass: options.onPass,
        onComplete: options.onComplete,
        fileNameGetter: function(root,filename){
            var name = root + '/' + filename;
            if(fs.isFile(name + '.png')){
                return name + '.diff.png';
            } else {
                return name + '.png';
            }
        }
    });

    return phantomcss;
}

function findPage(filename) {
    var name = filename.replace(/^.*\//g, '').replace(/_[0-9]+(\.diff)?\.png$/, '');
    for (var i = 0, c = pages.length; i < c; i++) {
        var page = pages[i];
        if (page.name == name) {
            return page;
        }
    }

    return null;
}

