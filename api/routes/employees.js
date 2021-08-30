const { Client } = require('pg');
var connectionString = "postgres://postgres:1234@localhost:5432/empdb";

const client = new Client({
    connectionString: connectionString
});

client.connect();

exports.list = function (req, res) {

    client.query('SELECT * FROM employees', function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.render('employees/list', { title: "Employees", data: result.rows });
    });

};