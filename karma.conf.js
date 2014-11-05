/*jshint node:true*/
module.exports = function(config) {
    config.set({
        frameworks: ['mocha', 'sinon-expect', 'yate'],
        files: [
            'libs/jquery.min.js',
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
