var express = require('express');
var formidable = require('formidable');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/post', function(req, res, next) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields) {
        if(err){
            next();
        }
        //console.log("内容" + fields.userName + " " + " " + fields.comment);
        //res.send(fields);
    });
    console.log(res.body.userName + " " + res.body.comment);
    res.send("内容");
});

module.exports = router;
