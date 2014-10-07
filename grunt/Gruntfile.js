module.exports = function(grunt){
    'use strict';

    grunt.initConfig({
        metafun : {
            files:[
                '**/*.jsm',
                '!node_modules/**'
            ]
        }
    });

    grunt.loadTasks('tasks');

    grunt.registerTask('default', ['metafun']);
}
