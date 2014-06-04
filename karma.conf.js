/*jshint node:true*/
module.exports = function(config) {
    config.set({
        frameworks: ['mocha', 'sinon-expect', 'yate'],
        files: [
            'bower_components/es5-shim/es5-shim.js',
            'bower_components/react/react-with-addons.js',
            'bower_components/x-tag-core/dist/x-tag-core.js',
            'bower_components/xblocks-core/xblocks-core.js',
            'bower_components/xblocks/xblocks.js',

            'http://yandex.st/jquery/1.10.2/jquery.min.js',
            'libs/jquery-ui/jquery-ui.custom.js',

            'blocks/nanoislands.js',

            'unittests/aftereach.js',
            'unittests/tests.yate',
            'externals.yate.js',

            'unittests/spec/**/*.js'
        ],
        autoWatch: true,
        browsers: ['PhantomJS'],
        preprocessors: {
            '**/*.js': ['borschik'],
            '**/*.yate': ['yate']
        },
        singleRun: false
    });
};
