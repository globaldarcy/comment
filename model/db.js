/**
 * Created by Shawn on 2017/8/7.
 */
var mongoose = require('mongoose');
var db_url = 'mongodb://localhost:27017/comment';
mongoose.Promise = global.Promise;

/*
* 连接
* */
mongoose.connect(db_url);
/*
* 连接成功
* */
mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to: ' + db_url);
});
/*
* 连接异常
* */
mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});
/*
* 连接断开
* */
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected!');
});


module.exports = mongoose;