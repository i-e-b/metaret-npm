metaret-npm
===========

Node-ready versions of https://github.com/glathoud/js.metaret packaged for `npm`

`plain` folder contains the library itself, in a state that can be installed and required as normal.
`grunt` folder contains a grunt task that will apply the jsm-to-js transform to any `.jsm` files specified.


metaret
-------

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
