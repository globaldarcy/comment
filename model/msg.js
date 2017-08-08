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
    },
    find: function (condition, pageSize, cb) {
        var pageSize = pageSize;                   //一页多少条
        var currentPage = 1;                //当前第几页
        var sort = {'commentTime':-1};        //排序（按登录时间倒序）
        var condition = condition;                 //条件
        var skipnum = (currentPage - 1) * pageSize;   //跳过数

        Msg.find(condition).skip(skipnum).limit(pageSize).sort(sort).exec(function (err, data) {
            if (err) {
                cb(err);
                console.log("Error:" + err);
            }
            else {
                console.log("Res:" + data);
                cb(err, data);
            }
        })
    }
};