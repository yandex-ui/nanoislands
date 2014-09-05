var fs = require('fs');
var path = require('path');
var concat = require('concat-stream');
var dox = require('dox');
var markdown = require('marked');

var renderer = new markdown.Renderer();

renderer.code = function (text, lang) {
  var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

  return '<div class="code code_' + lang + '"><pre><code>' + text + '</code></pre></div>'
}

var FOLDER_BLOCKS = path.resolve(__dirname, '../blocks/');
var PATH_RESULT = path.resolve(__dirname, '../docs/data.json');

var writable = concat(function(data) {
    process.stdout.write(JSON.stringify(data, null, 2));
});

fs.readdirSync(FOLDER_BLOCKS).forEach(function(nameFolder) {
    var pathJS = path.resolve(FOLDER_BLOCKS, nameFolder, nameFolder + '.js');
    var pathMD = path.resolve(FOLDER_BLOCKS, nameFolder, nameFolder + '.md');

    if (fs.existsSync(pathMD)) {
        var md = markdown(fs.readFileSync(pathMD).toString(), { renderer: renderer })
    }

    if (fs.existsSync(pathJS)) {
        var jsdoc = dox.parseComments(fs.readFileSync(pathJS).toString());
    }

    if (!md) {
        return;
    }

    writable.write({
        block: nameFolder,
        jsdoc: jsdoc,
        md: md
    });
});

writable.end();