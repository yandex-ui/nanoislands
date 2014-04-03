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
    .define('url', stylus.resolver());

style.render(function(err, css) {
    var browsers = [
        // эти браузеры прибиты по версиям
        'Opera 12',
        'Safari >= 6',

        // эти браузеры обновляются автоматически
        'last 5 Chrome versions',
        'last 5 Firefox versions',
        'last 5 Opera versions'
    ]

    if (err) {
        console.error(err);
        process.exit(1);
    }

    if (!ie) {
        css = autoprefixer.apply(this, browsers).process(css).css;
    } else {
        css = autoprefixer('Explorer >= 9').process(css).css;
    }
    process.stdout.write(css);
});
