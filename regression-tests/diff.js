var blocksDirPath  = '../blocks/';
var fs = require('fs');
var exec = require('child_process').exec;

var casper = function (block, cb) {
    return exec('casperjs test phantom-diff.js --blockName=' + block, cb);
}

function diff (block, cb) {
    if (!fs.statSync(blocksDirPath + block).isDirectory())
        return cb();

    casper(block, cb).stdout.on('data', function (data) {
        console.log(data);
    });

}

function end (cb) {
    console.log('end diff');
    cb && cb();
}

module.exports = function iterate (blocks, cb) {
    if (blocks.length === 0) return end(cb);
    diff(blocks.shift(), iterate.bind(null, blocks, cb))
}