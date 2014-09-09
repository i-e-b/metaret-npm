var jsm2js = require('./lib/jsm2js');
var inline = require('./lib/inline');

console.log("================= tail recursion");

var sampleCode = 
"metafun gcd(self, a, b) {\n"+
"  if (a > b)\n"+
"    metaret self, a-b, b;\n"+
"\n"+
"  if (b > a)\n"+
"    metaret self, b-a, a;\n"+
"\n"+
"  return a;\n"+
"};\n"

console.log("INPUT ---------------------");
console.log(sampleCode);

var outp = jsm2js.jsm2js(sampleCode);

console.log("OUTPUT -------------------");
console.log(outp);


console.log("================= inlining");
var inlineCode = 
"function returnAValue() { return 10; }\n\n"+
"inline returnAValue();\n"+
"inline x = returnAValue();\n"+
"inline var x = returnAValue();\n";

console.log("INPUT ---------------------");
console.log(inlineCode);

var outpi = inline.inline(inlineCode);

console.log("OUTPUT -------------------");
console.log(outpi);

