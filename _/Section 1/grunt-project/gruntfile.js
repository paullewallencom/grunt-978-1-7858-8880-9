var fs = require('fs');

module.exports = function (grunt) {
    'use strict';
        prop: 'some property',
        pkg: grunt.file.readJSON('package.json'),
        running: {
            taskOwner: 'Dan',
            src: 'js/somefile.js',
            dest: 'somefile.js',
            options: {
                comment: '/* <%= pkg.author %> */'
            }
        },
        multi: {
            config1: {
                message: 'This is config1',
                files: {
                    'someotherfile.js': 'js/somefile.js'
                }
            },
            config2: {
                message: 'This is config2',
                files: [
                    {
                        src: 'js/somefile.js',
                        dest: 'someotherfile.js'
                    }
                ]
            }
        }
    });

    grunt.registerTask('default', 'An example task', function (arg1) {
        grunt.log.writeln('grunt running...');
    });
}
