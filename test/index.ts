var cw = require('../lib');
var fs = require("fs");

const outputFile = fs.WriteStream('./test.cs');
const w = new cw.CodeWriter(outputFile);

w.writeIndentLine('function foo()');
w.writeOpen();
w.writeIndentLine('return 0;');
w.writeClose();

outputFile.end();
