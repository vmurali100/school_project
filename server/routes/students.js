var express = require('express');
var router = express.Router();
var mysql = require('mysql');


/* GET users listing. */
router.get('/', function (req, res, next) {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password'
    });

    connection.connect(function (err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }

        connection.query(`SELECT * FROM school_project.students`, (err, data) => {
            res.send({ studets: data });
        })
    });

});

module.exports = router;
