var fs = require('fs');

module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
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

    grunt.registerTask('running', 'An example task', function (arg1) {
        var done = this.async(),
            comment = this.options().comment;

        grunt.config.requires('running.taskOwner');
        grunt.log.writeln('grunt running...' + this.name, grunt.config.get('running.taskOwner'));
        grunt.log.writeln(grunt.config.get('running.src'));

        fs.readFile(grunt.config.get('running.src'), function (error, data) {
            fs.writeFile(grunt.config.get('running.dest'), comment + '\n' + data);
            done();
        });
    });

    grunt.registerMultiTask('multi', 'An example multi task', function (arg1) {
        grunt.log.writeln(this.data.message, arg1);

        this.files.forEach(function (file) {
            grunt.log.writeln(file.src[0] + ' ' + file.dest);
        });
    });

    grunt.registerTask('run', 'Run all the tasks', ['running']);
}
