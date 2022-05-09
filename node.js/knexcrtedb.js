// var mysql=require('mysql')
// var con=mysql.createConnection({
//   host:"localhost",
//   user:"root",
//   password:"Papa@123"
// });
// con.connect(function(err){
//   if (err)throw err;
//   console.log("connected");
//   con.query("CREATE DATABASE user",function(err){
//     if (err)throw err;
//     console.log("database created")
    
//       });
//     });


var mysql=require('mysql')
var con=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"Papa@123"
});
con.connect(function(err){
  if (err)throw err;
  console.log("connected");
  con.query("CREATE DATABASE moomin",function(err){
    if (err)throw err;
    console.log("database created")
    
      });
    });


// var mysql=require('mysql')
// var con=mysql.createConnection({
//   host:"localhost",
//   user:"root",
//   password:"Papa@123"
// });
// con.connect(function(err){
//   if (err)throw err;
//   console.log("connected");
//   con.query("CREATE DATABASE moomin1",function(err){
//     if (err)throw err;
//     console.log("database created")
    
//       });
//     });


var mysql=require('mysql')
var con=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"Papa@123"
});
con.connect(function(err){
  if (err)throw err;
  console.log("connected");
  con.query("CREATE DATABASE file1",function(err){
    if (err)throw err;
    console.log("database created")
    
      });
    });