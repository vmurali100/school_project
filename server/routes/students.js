var express = require('express');
var router = express.Router();
var mysql = require('mysql');


var mysql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password'
});

/* GET users listing. */
router.get('/', function (req, res, next) {


    mysql.connect(function (err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }

        mysql.query(`SELECT * FROM school_project.students`, (err, data) => {
            res.send({ studets: data });
        })
    });

});

router.post('/createStudent', (req, res) => {
    let student = req.body
    console.log(student)
    mysql.connect(function (err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
        let queryStatement = "INSERT INTO `school_project`.`students` (`student_id`, `student_name`, `student_class`) VALUES ('" + student.student_id + "', '" + student.student_name + "', '" + student.student_class + "'); "
        mysql.query(queryStatement, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                res.send({ studets: data });

            }
        })
    });
})

module.exports = router;
