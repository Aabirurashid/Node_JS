// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Papa@123",
//   database: "mydb"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

const arry = [1, 2, 1, 3, 4, 3, 5];

const toFindDuplicates = arry => arry.filter((item, index) => arr.indexOf(item) !== index)
const duplicateElementa = tofindDuplicates(arry);
console.log(duplicateElements)