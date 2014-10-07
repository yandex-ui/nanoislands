var fs = require('fs');
var express = require('express');
var exec = require('child_process').exec;
var server = express();

var indexTemplate = fs.readFileSync('index.yate.template').toString();
var blocksDirPath  = '../blocks/';

server.use('/', express.static('../'));

var serverApp = server.listen(3000);


var casper = function (blockName, scenario, cb) {
    return exec('casperjs test phantom-capture.js --blockName=' + blockName +
        ' --scenario=' + scenario, cb);
}

function test (block, cb) {
    if (!fs.statSync(blocksDirPath + block).isDirectory())
        return cb();
    var blockDirPath = blocksDirPath + block + '/'
    var files = fs.readdirSync(blockDirPath).join(';');
    var config = fs.existsSync(blockDirPath + 'testConfig.json') ? require(blockDirPath + '/testConfig.json') : {};

    var mock = '';

    if (config.scenarioFile)
        config.scenarioFile = blocksDirPath + config.scenarioFile;
    else
        config.scenarioFile = 'defaultScenario';


    function hasMock () {
        if (config.testFile)
            return mock = config.testFile;

        var re = files.match(/[^;]*\.test\.yate/g);
        if (re !== null) return mock = re[0]

        re = files.match(/[^;]*\.example\.yate/g);

        if (re !== null) return mock = re[0];

        return false;
    }

    function prepareTemplate () {
        fs.writeFileSync('index.yate', indexTemplate
            .replace('{{path}}', '\'' + blocksDirPath + block + '/' + mock + '\'')
            .replace('{{blockName}}', config.funName || block + 's'))
    }

    function compile (cb) {
        prepareTemplate();
        exec('node ../node_modules/yate/yate index.yate > index.yate.js', cb);
    }

    if (!hasMock()) return cb();

    compile(function () {
        console.log('capturing ' + block);
        casper(block, config.scenarioFile, cb);
    });

}

function endTest (cb) {
    console.log('end updating');
    serverApp.close();
    cb && cb();
}


module.exports = function iterate (blocks, cb) {
    if (blocks.length === 0) return endTest(cb);
    test(blocks.shift(), iterate.bind(null, blocks, cb))
}

