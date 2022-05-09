// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Papa@123"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE mydata", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });


//create data base
var mysql=require('mysql')
var con=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"Papa@123"
});
con.connect(function(err){
  if (err)throw err;
  console.log("connected");
  con.query("CREATE DATABASE mydb",function(err){
    if (err)throw err;
    console.log("database created")
    
      });
    });

