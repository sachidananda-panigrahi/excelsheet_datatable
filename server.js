var express = require('express'),
    api = require('./api/api'),
    app = express(),
    mongoose = require('mongoose'),
    connection = mongoose.connect('mongodb://localhost/excel_sheet_db'); // MongoDB

app.use(express.static('./public'))
    .use('/api', api)
    .get('*', function (req, res) {
        res.sendFile('public/main.html', {"root": "."});
    })
    .listen(5000);
console.log("Server is listing on the port 5000");
