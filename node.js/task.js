// var mysql=require('mysql')
// var con=mysql.createConnection({
//   host:"localhost",
//   user:"root",
//   password:"Papa@123"
// });
// con.connect(function(err){
//   if (err)throw err;
//   console.log("connected");
//   con.query("CREATE DATABASE moomin",function(err){
//     if (err)throw err;
//     console.log("database created")
    
//       });
//     });





var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Papa@123",
    database: "moomin22"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

// create table
    // var sql = "CREATE TABLE data2 (name VARCHAR(255), address VARCHAR(255))";
    // con.query(sql, function (err) {
    //     if (err) throw err;
    //     console.log("Table created");
    // });



    // var sql = "INSERT INTO data2 (name, address) VALUES ('Company Inc', 'Highway 37')";
    // con.query(sql, function (err) {
    //   if (err) throw err;
    //   console.log("1 record inserted");
    // });
//   });
  
//   var mysql = require('mysql');

//   var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Papa@123",
//     database: "moomin"
//   });
  
//   con.connect(function(err) {
//     if (err) throw err;
//     var sql = "DELETE FROM data WHERE address = 'Mountain 21'";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Number of records deleted: " + result.affectedRows);
//     });
//   });