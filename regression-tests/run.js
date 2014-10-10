
// exporting function or executing it immediately
if(require.main === module) {
    var len = process.argv.length;
    if (len <= 2) return console.log('not enough params');
    run(process.argv[2], process.argv.slice(3));

} else {
    // changing working directory in order to use reference paths
    var dir = module.id.replace(/\/.[^\/]+$/, ''); //trimming file name and getting a resolved working directory
    process.chdir(dir);
    module.exports = run;
}



// operation: update or diff
// blocks is the array of blocks names
function run (operation, blocks, done) {
    var capture = require('./capture');
    var diff = require.bind(require, './diff');
    var exec = require('child_process').exec;
    blocks = blocks || [];

    var filenames;
    if (blocks.length === 0) {
        filenames = '*';
        blocks = require('fs').readdirSync('../blocks');
    }
    else {
        filenames = blocks.map(function (b) {
            return b + '\.*.png'
        }).join(' ');
    }

    switch (operation) {
        case 'update':
            exec('cd screenshots && rm ' + filenames,
                capture.bind(null, blocks, done));
            break;
        case 'diff':
            exec('cd failures && rm ' + filenames.replace('.png', '.fail.png'),
                capture.bind(null, blocks.slice(), diff().bind(null, blocks)));
            break;
        default:
            console.log('invalid argument');
    }
}