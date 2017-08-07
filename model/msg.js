/**
 * Created by Shawn on 2017/8/7.
 */
var mongoose = require('./db');
var Schema = mongoose.Schema;

var msgSchema = new Schema({
    name: String,
    comment: String
});

module.exports = mongoose.models('msg', msgSchema);