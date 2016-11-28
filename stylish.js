var express = require('express');
var app = express();

// Serve static files
app.use(express.static(process.argv[3]));
// Plug in stylus
app.use(require('stylus').middleware(process.argv[3]));

app.listen(process.argv[2]);