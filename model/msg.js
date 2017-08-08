/**
 * Created by Shawn on 2017/8/7.
 */

var mongoose = require('./db');
var Schema = mongoose.Schema;

var msgSchema = new Schema({
    username: String,
    comment: String,
    commentTime: Date
});

//module.exports = mongoose.models('msg', msgSchema);
var Msg = mongoose.model('msg', msgSchema);

module.exports = {
    insert: function (username, comment, cb) {
        var content = new Msg({
            username: username,
            comment: comment,
            commentTime: new Date()
        });
        content.save(function (err, data) {
            if(err){
                //console.log("Error: " + err);
                cb(err);
            }
            //console.log("Data: " + data);
            cb(err, data);
        });
    }
};