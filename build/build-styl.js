var ie = process.argv[2] == 'ie' || false;

var content = [
    'ie = ' + ie.toString(),
    '@import "node_modules/stylobate";',
    'rem = rem_px',
    '@import "node_modules/stylobate-islands";',
    'set-skin-namespace("islands");',
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
        'Explorer >= 9',
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
        css = autoprefixer({'browsers': browsers}).process(css).css;
    } else {
        css = autoprefixer({'browsers': ['Explorer >= 9']}).process(css).css;
    }
    process.stdout.write(css);
});
