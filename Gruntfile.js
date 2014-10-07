/*jshint node:true*/
module.exports = function(grunt) {
    "use strict";

    require("load-grunt-tasks")(grunt);

    var gruntConfig = {};

    gruntConfig.jshint = {
        options: {
            jshintrc: ".jshintrc",
            force: true
        },
        files: [
            "blocks/*/*.js"
        ]
    };

    gruntConfig.jscs = {
        src: "blocks/*/*.js",
        options: {
            config: ".jscs.json",
            requireCurlyBraces: ["if"],
            force: true
        }
    };

    gruntConfig.shell = {
        rebuildNanoislands: {
            command: "make",
            options: {
                stdout: true,
                failOnError: true
            }
        },
        rebuildDocs: {
            command: "make docs",
            options: {
                stdout: true,
                failOnError: true
            }
        }

    };

    gruntConfig.watch = {
        build: {
            files: [
                "<%= jshint.files %>",
                "blocks/*/*.yate",
                "blocks/*/*.md",
                "blocks/*/*.styl",
                "demo/*.yate",
                "docs/*",
                "docs/**/*"
            ],
            tasks: [
                "codestyle",
                "shell:rebuildNanoislands",
                "shell:rebuildDocs"
            ],
            options: {
                // Start a live reload server on the default port 35729
                livereload: true
            }
        },
        test: {
            files: [
                "<%= watch.build.files %>",
                "unittests/**/*.js",
                "unittests/**/*.yate"
            ],
            tasks: [
                "karma:dev:run"
            ]
        }
    };

    gruntConfig.karma = {
        options: {
            configFile: "karma.conf.js"
        },
        continuous: {
            singleRun: true,
            browsers: ["PhantomJS", "Firefox"]
        },
        dev: {
            background: true,
            reporters: "dots"
        }
    };

    grunt.initConfig(gruntConfig);

    grunt.registerTask("codestyle", [
        "jshint",
        "jscs"
    ]);

    grunt.registerTask("test", [
        "codestyle",
        "karma:continuous"
    ]);

    grunt.registerTask("watch_make_test", [
        "codestyle",
        "karma:dev:start",
        "watch"
    ]);

    grunt.registerTask("watch_make", [
        "codestyle",
        "watch:build"
    ]);

    grunt.registerTask("regtest", "asdf", function () {
        console.log('launching testing process...');
        require('child_process').fork('run.js', [process.argv[3].replace(/-/g, '')], {
            cwd: './regression-tests'
        });
    })

    grunt.registerTask("default", ["test"]);
};
