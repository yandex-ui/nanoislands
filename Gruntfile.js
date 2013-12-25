/*global module*/
module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks("grunt-jscs-checker");
//    grunt.loadNpmTasks('grunt-mocha');

    var gruntConfig = {};
    gruntConfig.jshint = {
        options: {
            jshintrc: '.jshintrc'
        },
        files: [
            'blocks/*/*.js'
        ]
    };

    gruntConfig.jscs = {
        src: "blocks/*/*.js",
        options: {
            config: ".jscs.json",
            requireCurlyBraces: [ "if" ]
        }
    };

  /*  gruntConfig.mocha = {
        options: {
            bail: true,
            log: true
        },
        index: ['unittest/index.html']
    };*/

    grunt.initConfig(gruntConfig);

    grunt.registerTask('default', ['jshint', 'jscs']);
}