/*global module*/
module.exports = function (grunt) {
    'use strict';

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks)

    var gruntConfig = {};

    gruntConfig.jshint = {
        options: {
            jshintrc: '.jshintrc'
        },
        files: [
            'blocks/**/**.js',
            'src/**/**.js'
        ]
    };

    gruntConfig.jscs = {
        src: "blocks/*/*.js",
        options: {
            config: ".jscs.json",
            requireCurlyBraces: [ "if" ]
        }
    };

    gruntConfig.mocha_phantomjs = {
        all: ['unittests/index.html']
    };

    gruntConfig.shell = {
        rebuildNanoislands: {
            command: "make"
        }
    };

    gruntConfig.watch = {
        test: {
            files: [
                "<%= jshint.files %>",
                "unittests/**/*.js"
            ],
            tasks: [
                "shell:rebuildNanoislands",
                "mocha_phantomjs"
            ]
        }
    };

    grunt.initConfig(gruntConfig);

    grunt.registerTask('default', ['jshint', 'jscs', 'mocha_phantomjs']);
};
