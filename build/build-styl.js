var stylus = require('stylus');
var style = stylus('@import "blocks/nanoislands.styl";')
    .set('filename', '../nanoislands.css')
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
