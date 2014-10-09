var fs = require('fs');
var express = require('express');
var exec = require('child_process').exec;
var server = express();

var indexTemplate = fs.readFileSync('index.yate.template').toString();
var blocksDirPath  = '../blocks/';

server.use('/', express.static('../'));

var serverApp = server.listen(3000);

// executes casper file with params and callback
var casper = function (blockName, scenario, cb) {
    return exec('casperjs test phantom-capture.js --blockName=' + blockName +
        ' --scenario=' + scenario, cb);
}

// actually test block
function test (block, cb) {

    if (!fs.statSync(blocksDirPath + block).isDirectory()) //skipping nondirectories
        return cb();

    var blockDirPath = blocksDirPath + block + '/'
    var files = fs.readdirSync(blockDirPath).join(';');

    // finding config file
    var config = fs.existsSync(blockDirPath + 'testConfig.json') ? require(blockDirPath + 'testConfig.json') : {};

    var mock = ''; // filename for template

    if (config.scenarioFile) // take the scenario from config
        config.scenarioFile = blockDirPath + config.scenarioFile;
    else // roll back to default behaviour
        config.scenarioFile = fs.existsSync(blockDirPath + 'rtest.js') ? blockDirPath + 'rtest.js' : 'defaultScenario';


    // checking if the test(mock) template exists in directory
    function hasMock () {
        if (config.testFile)
            return mock = config.testFile;

        var re = files.match(/[^;]*\.test\.yate/g);
        if (re !== null) return mock = re[0]

        re = files.match(/[^;]*\.example\.yate/g);

        if (re !== null) return mock = re[0];

        return false;
    }

    // create index.yate from template using config file
    function prepareTemplate () {
        fs.writeFileSync('index.yate', indexTemplate
            .replace('{{path}}', '\'' + blockDirPath + mock + '\'')
            .replace('{{blockName}}', config.funName || block + 's'))
    }

    // compiling prepared template
    function compile (cb) {
        prepareTemplate();
        exec('node ../node_modules/yate/yate index.yate > index.yate.js', cb);
    }

    if (!hasMock()) return cb();

    compile(function () {
        console.log('capturing ' + block);
        casper(block, config.scenarioFile, cb).stdout.on('data', function (data) {
            // only in verbose mode - to be implemented
            // console.log(data);
        });
    });

}

function endTest (cb) {
    console.log('end updating');
    serverApp.close();

    if (typeof cb === 'function')
        cb();
}

// recursively iterates over all blocks passed as parameters
module.exports = function iterate (blocks, cb) {
    if (blocks.length === 0) return endTest(cb);
    test(blocks.shift(), iterate.bind(null, blocks, cb))
}

