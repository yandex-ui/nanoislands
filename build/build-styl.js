var ie = process.argv[2] == 'ie' || false;

var content = [
    'ie = ' + ie.toString(),
    '@import "nanoislands.styl";'
].join('\n');

var stylus = require('stylus');
var style = stylus(content)
    .set('filename', ie ? 'nanoislands.ie.css' : 'nanoislands.css')
    .set('resolve url', true)
    .define('url', stylus.resolver())
    .use(require('nib')());

style.render(function(err, css) {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    process.stdout.write(css);
});
