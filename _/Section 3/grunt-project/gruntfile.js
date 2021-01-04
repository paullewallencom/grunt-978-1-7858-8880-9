var fs = require('fs');

module.exports = function (grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        jshint: {
            files: {
                src: ['js/**/*.js', 'test/**/*.js']
            }
        },
        clean: ['dist/**/*'],
        coffee: {
            dist: {
                files: {
                    'dist/js/package.js': 'coffee/**/*.coffee'
                }
            },
            options: {
                sourceMap: true
            }
        },
        sass: {
            dist: {
                files: {
                    'dist/css/styles.css': 'sass/**/*.scss'
                }
            },
            options: {
                sourceMap: true
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist/js/package.min.js': 'dist/js/**/*.js'
                }
            },
            options: {
                sourceMap: true,
                sourceMapIn: 'dist/js/package.js.map'
            }
        },
        cssmin: {
            dist: {
                files: {
                    'dist/css/styles.min.css': 'dist/css/**/*.css'
                }
            },
            options: {
                sourceMap: true
            }
        },
        htmlbuild: {
            dist: {
                src: 'index.html',
                dest: 'dist/index.html',
                options: {
                    prefix: 'dist/',
                    relative: true,
                    scripts: {
                        'package': ['dist/js/package.min.js', 'dist/js/app.js']
                    },
                    styles: {
                        css: 'dist/css/styles.min.css'
                    }
                }
            },
            dev: {
                src: 'index.html',
                dest: 'dist/index.html',
                options: {
                    prefix: 'dist/',
                    relative: true,
                    scripts: {
                        'package': 'dist/js/package.js'
                    },
                    styles: {
                        css: 'dist/css/styles.css'
                    }
                }
            }
        },
        connect: {
            server: {
                options: {
                    base: './dist/',
                    keepalive: true,
                    open: true
                }
            }
        }
    });

    grunt.registerTask('default', ['jshint', 'clean', 'coffee', 'sass', 'uglify', 'requirejs', 'cssmin', 'copy', 'htmlbuild:dev', 'connect']);        
}
