var express = require('express'),
    bodyParser = require('body-parser'),
    router = express.Router(),
    formidable = require('formidable'),
    http = require('http'),
    util = require('util'),
    node_xj = require("xls-to-json"),
    fs = require('fs-extra'),
    tableController = require('../controller/tablesController').tableController;

router
    .use(bodyParser.json())
    .route('/upload')
    .post(function (req, res) {
        var form = new formidable.IncomingForm();

        var form = new formidable.IncomingForm();
        var fieldsObj = {};
        form.parse(req, function (err, fields, files) {
            fieldsObj = fields;
            // console.log(files)
        });

        form.on('end', function (fields, files) {

            // Temporary location of our uploaded file
            var temp_path = this.openedFiles[0].path,
            // The file name of the uploaded file
                file_name = this.openedFiles[0].name,
                new_location = 'public/uploads/',
                file_origial = new_location + file_name;

            fs.copy(temp_path, file_origial, function (err) {
                if (err) {
                    console.error(err);
                } else {
                    console.log(file_origial);
                    node_xj({
                        input: file_origial,
                        output: null
                    }, function (err, result) {
                        if (err) {
                            console.error(err);
                        } else {

                            res.send(result);
                            //console.log(result);
                        }
                    });
                }
            });

        });


    });

module.exports = router;