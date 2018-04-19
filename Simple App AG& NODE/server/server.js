var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var async = require('async');
var app = express();
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({// to support URL-encoded bodies
    extended: true
}));
app.use(express.static('../'));

app.use(cors());
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employee'
});

connection.connect(function (err) {
    if (err)
        throw err;
    console.log("Connected!");
});

app.post('/login', function (req, res) {
    //console.log('here I am now in the Get Request!success');
    //console.log(req);
    //console.log(req.body.email);
    async.waterfall([
        function (next) {
            if (!req.body.email || !req.body.password)
                return next(new Error('Invalid Form'));
            next(null);
        },
        function (next) {
            connection.query('select * from emp where email=? and password=?', [req.body.email, req.body.password], function (error, result, fields) {
                if (error || !result.length) {
                    return next(new Error('Invalid Email or Password try again'));
                }
                next(null, result[0]);
            });
        }
    ], function (mnerror, success) {
        if (mnerror) {
            res.status(400).json({
                error: mnerror.message
            });
        } else {
            res.json({
                user: success
            });
        }
    });
});

app.post('/addUser', function (req, res) {
    //console.log(req.body);
    connection.query("insert into emp set ?", req.body, function (error, result, fields) {
        if (error) {
            throw error;
        }
    });
    
//console.log('Add the User');
//    async.waterfall([
//        function (next) {
//            if (!req.body.name || !req.body.email || !req.body.contact_no || !req.body.address || !req.body.salary) {
//                return next(new Error('Invalid Form Details'));
//                next(null);
//            }
//        },
//        function (next) {
//            connection.query("insert into emp set ?", req.body, function(error,result,fields){
//                if(error){
//                    return next(new Error('Oops ! Something Went Wrong. Please try again.'));
//                }
//                next(null,result[0]);
//            });
//        }
//
//    ],function(mnError,success){
//        if(mnError){
//            res.status(400).json({
//                error:mnError.message
//            });
//        }else{
//            res.json({
//                user:success
//            });
//        }
//    }
//    
//    );
});
app.get('/getAllUser', function (req, res) {
        console.log('here I am now in the Get Request!success');
        connection.query('SELECT * FROM `emp` WHERE `del_emp`="N" and type=0 ORDER BY id DESC', function (error, result, fields) {
            if (error)
                throw error;
            console.log(result);
            res.json(result);
        });
    });

app.listen(3000, function () {
    console.log('The App Listening on Port 3000!');
});