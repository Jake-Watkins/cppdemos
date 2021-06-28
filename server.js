const calculate = require('./build/Release/calculate');
 console.log(calculate.calc());


'use strict';
var path = require('path');
var express = require('express');

var app = express();

var staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));

app.get('/myapicall', async (req, res) =>
{
    res.json({
        "value":calculate.calc(), error:false
    })
})

// Allows you to set port in the project properties.
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
    console.log('listening at http://localhost:3000');
});