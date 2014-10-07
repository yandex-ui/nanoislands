var blocksDirPath  = '../blocks/';
var fs = require('fs');
var exec = require('child_process').exec;

var casper = function (block, cb) {
    return exec('casperjs test phantom-diff.js --blockName=' + block, cb);
}

function diff (block, cb) {
    if (!fs.statSync(blocksDirPath + block).isDirectory())
        return cb();
    // var blockDirPath = blocksDirPath + block + '/';
    // var config;

    // if (fs.existsSync(blockDirPath + 'testConfig.json'))
    //     config = require(blockDirPath + 'testConfig.json')
    // else
    //     config = {}
    casper(block, cb).stdout.on('data', function (data) {
        console.log(data);
    });

}

function end () {
    console.log('end diff');
}

module.exports = function iterate (blocks) {
    if (blocks.length === 0) return end();
    diff(blocks.shift(), iterate.bind(null, blocks))
}