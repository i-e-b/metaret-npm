metaret-npm
===========

A node-ready version of https://github.com/glathoud/js.metaret packaged for NPM

Exposes 2 functions which transform Javascript source code:

metafun recursive composition:
```ecmascript
var metaret = require('metaret');

var output_source = metaret.jsm2js(input_source);
```

inlining function calls:
```ecmascript
var metaret = require('metaret');

var output_source = metaret.inline(input_source);
```
