'use strict';

const mysql = require("mysql");


const dbConn = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    database : 'node_mysql_crud_db',
    password: '123456789',
    insecureAuth : true
});

dbConn.connect(function (err){
    if (err) throw err;
    console.log("Database Connection")
})

module.exports = dbConn;