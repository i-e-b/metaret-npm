module.exports = function(grunt){
    grunt.initConfig({
        metafun :{
            files:[
                '**/*.jsm',
                '!node_modules/**'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-metaret');
    grunt.registerTask('default', ['metafun']);
};
