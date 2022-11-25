const mysql = require('mysql');

var mysqlConnection = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database:'db_pokemon'
  });
  
  mysqlConnection.getConnection((err,connection)=> {
    if(err)
    throw err;
    connection.release();
  });

module.exports = mysqlConnection;