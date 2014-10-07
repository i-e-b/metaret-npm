var metaret = require('metaret');

//var output_source = metaret.jsm2js(input_source);

module.exports = function(grunt){
    grunt.registerMultiTask('metafun',
            'Builds .jsm files into tail call '+
            'optimised .js files.',
    function (){
        var files = this.filesSrc;

        files.forEach(function(path){
            var inp = grunt.file.read(path);
            var outp = metaret.jsm2js(inp);
            
            var new_path = path.slice(0,-3) + "js"; // TODO assumes .jsm; fix later!
            grunt.file.write(new_path, outp);
        });
    });
};
