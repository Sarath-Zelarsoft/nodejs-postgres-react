const { Client } = require ('pg');

const client = new Client ({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "1234",
    database: "empdb"
})

client.connect();

client.query(`select * from employees`, (err, result) => {
        if(!err) {
                console.log(result.rows);
        }
        client.end();
})