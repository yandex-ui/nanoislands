var JQUI_VERSION = "1.10.3";
var DOWNLOAD_URL = "http://download.jqueryui.com/download";
var BLOCK_LIST = "./blocks/nanoislands.js";
var LIB_PATH = "./libs/";
var BLOCKS_PATH = "./blocks/";
var CURL_BIN = "curl";

var fs = require('fs');
var http = require('http');
var exec = require('child_process').exec;
var path = require('path');

function parseBlockList(blockListPath){
    var blockPaths = [];
    var pattern = /include:(\w\S+\.js)/;
    var file = fs.readFileSync(blockListPath, {encoding: 'utf8'});
    file.split('\n').forEach(function (line) {
        var blockPath = line.match(pattern);
        if (blockPath) {
            blockPaths.push(blockPath[1]);
        }
    });
    return blockPaths;
}

function parseDepends(blockFilePath) {
    var blockJs = fs.readFileSync(BLOCKS_PATH + blockFilePath, {encoding: 'utf8'});
    blockJs.split('\n').forEach(function(line){
        var dep = line.match(/jquery\.ui\.(.+)\.js/);
        if (dep) {
            postData[dep[1]] = "on";
        }
    });
}

var postData = {
    'version': JQUI_VERSION,
    'theme': 'none'
};

var blockPaths = parseBlockList(BLOCK_LIST);

blockPaths.forEach(function(block){
    parseDepends(block);
});

var curlArgs = CURL_BIN + " " + DOWNLOAD_URL;
for (key in postData) {
    curlArgs += " -d " + key + "=" + postData[key];
}
curlArgs += " > jqui.zip";
var unzipArgs = "unzip jqui.zip -d temp";

console.log("Downloadin jQueryUI build: \n", curlArgs);

exec(curlArgs, function(error, stdout, stderr) {
    if (error) {
        console.log(error);
    }
    console.log("Unzipping:");
    exec(unzipArgs, function(error, stdout, stderr){
        console.log("Unziped. Copying, cleaning.");
        exec( ("cp ./temp/jquery-ui-%v.custom/css/no-theme/jquery-ui-%v.custom.min.css " + LIB_PATH + "/jquery-ui/jqui.custom.css;"+
            "cp ./temp/jquery-ui-%v.custom/js/jquery-ui-%v.custom.min.js " + LIB_PATH + "/jquery-ui/jqui.custom.js;"+
            "rm -rf ./temp;"+
            "rm jqui.zip").replace(/%v/g, JQUI_VERSION) );
    });
});




