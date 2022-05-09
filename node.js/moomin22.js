var num=require("readline-sync")
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



// while (true){
// create table
var sql = "CREATE TABLE data3 (name VARCHAR(255), address VARCHAR(255))";
con.query(sql, function (err) {
    if (err){
        console.log("table already create")
    }
    else{
    console.log("Table create");
    }
});


// //insert 

function called(){
    var a=num.question("enter the query:")
    if (a=="insert"){
        var sql = "INSERT INTO data2 (name, address) VALUES ('Company Inc', 'Highway 37')";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
            var b=num.question("you wan to exist or move further yes/no:")
            if (b=="yes"){
                called()
            }
            else{
                console.log("exit");
                    }

                });
            }
                // called()
    else if(a=="select"){
    con.query("SELECT * FROM data2", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        var a=num.question("you wan to exist or move further Yes/NO:")
        if (a=="yes"){
            called()
        }
        else {
            console.log("exit");
            }
            
        });
        // called()
    }
    else if(a=="delete"){
    var sql = "DELETE FROM data2 WHERE address = 'Mountain 21'";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
        var c=num.question("you wan to exist or move further Yes/NO:")
        if (c=="yes"){
            called()
        }
        else {
            console.log("exit");
        }
    });
    }
}  
called()





    


    




