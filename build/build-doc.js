var fs = require('fs');
var path = require('path');
var concat = require('concat-stream');
var dox = require('dox');
var markdown = require('github-flavored-markdown');

var FOLDER_BLOCKS = path.resolve(__dirname, '../blocks/');
var PATH_RESULT = path.resolve(__dirname, '../docs/data.json');

var writable = concat(function(data) {
    process.stdout.write(JSON.stringify(data, null, 2));
});

fs.readdirSync(FOLDER_BLOCKS).forEach(function(nameFolder) {
    var pathJS = path.resolve(FOLDER_BLOCKS, nameFolder, nameFolder + '.js');
    var pathMD = path.resolve(FOLDER_BLOCKS, nameFolder, nameFolder + '.md');
    var data;

    if (fs.existsSync(pathMD)) {
        data = [{
            md: markdown.parse(fs.readFileSync(pathMD).toString())
        }];
    }

    if (fs.existsSync(pathJS)) {
        var parsedJS = dox.parseComments(fs.readFileSync(pathJS).toString());
        data = (data) ? data.concat(parsedJS) : parsedJS;
    }

    if (!data) {
        return;
    }

    writable.write([{
        block: nameFolder,
        data: data
    }]);
});

writable.end();