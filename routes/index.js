var express = require('express');
var msg = require('../model/msg');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/post', function(req, res, next) {
    // var _form = new formidable.IncomingForm();
    // _form.parse(req, function(err, fields, files) {
    //     console.log("内容111" , fields.userName , fields.comment);
    //     res.json({"result":1});
    // });
    var username = req.body.userName;
    var comment = req.body.comment;
    msg.insert(username, comment, function (err, data) {
        if(err){
            res.send({"data":-1});
            next();
        }
        //console.log("数据库内容: " + data);
        res.json({"data":1});
    });
    //res.end("");
});

module.exports = router;
