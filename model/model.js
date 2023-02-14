const mysql = require('mysql');
const dbConfig = require('../config/db.config');

const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

//open the Mysql connection
connection.connect(error => {
    if (error) throw error;
    console.log("succefully connected to database ")
});

module.exports = connection;