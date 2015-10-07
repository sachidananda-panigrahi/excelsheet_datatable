/**
 * Created by Sachidananda.Panigra on 10/5/2015.
 */
// Dependencies
var mongoose = require('mongoose');

// Model Definition
var tableSchema = new mongoose.Schema({
    tableName: {type: String},
    tableData: {type: Array},
    createdAt: {type: Date}
});

// Export module.
module.exports = mongoose.model('tables', tableSchema);