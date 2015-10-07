/**
 * Created by Sachidananda.Panigra on 10/5/2015.
 */
// Dependencies
var mongoose = require('mongoose'),
    tableModel = require('../model/tablesModel'),
    Promise = require('promise');

function tablesController() {

}

tablesController.prototype.getAllTables = function () {
    return new Promise(function (resolve, reject) {
        tableModel.find().lean().exec(function (err, tables) {
            if (err) {
                console.log('Error fetching all tables.');
                reject(err);
            } else {
                resolve(tables);
            }
        })
    });
};

tablesController.prototype.getTableById = function (tableId) {
    return new Promise(function (resolve, reject) {
        tableModel.findOne({ _id: tableId }).lean().exec(function (err, table) {
            if (err) {
                console.log('Error fetching table by Id.');
                reject(err);
            } else {
                //console.log(table);
                resolve(table);
            }
        })
    });
};

tablesController.prototype.getTableByName = function (tableName) {
    return new Promise(function (resolve, reject) {
        tableModel.findOne({ tableName: tableName }).lean().exec(function (err, table) {
            if (err) {
                console.log('Error fetching table by Name.');
                reject(err);
            } else {
                //console.log(table);
                resolve(table);
            }
        })
    });
};


tablesController.prototype.addTable = function (table) {
    return new Promise(function (resolve, reject) {
        var tableDocument = new tableModel(table);
        tableDocument.save(function (err, tableData) {
            if (err) {
                console.log('Error while adding table.');
                reject(err);
            } else {
                console.log('Table added successfully.');
                resolve(tableData);
            }
        })
    });
};


module.exports = { 'tableController': new tablesController() };