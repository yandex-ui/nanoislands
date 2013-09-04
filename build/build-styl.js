var ie = process.argv[2] == 'ie' || false;

var content = [
    'ie = ' + ie.toString(),
    '@import "nanoislands.styl";'
].join('\n');

var stylus = require('stylus');
var autoprefixer = require('autoprefixer');
var style = stylus(content)
    .set('filename', ie ? 'nanoislands.ie.css' : 'nanoislands.css')
    .set('resolve url', true)
    .define('url', stylus.resolver())

style.render(function(err, css) {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    if (!ie) {
        css = autoprefixer.compile(css);
    }
    process.stdout.write(css);
});
