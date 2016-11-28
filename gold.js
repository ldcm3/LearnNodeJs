var express = require('express');
var app = express();
var str = "";
var bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({exteded:false}));

app.use('/form', function(req, res, next) {
     str = req.body.str.split('').reverse().join('');
     next();
})


app.post('/form', function(req,res){
    res.end(str);
})

app.listen(process.argv[2]);
