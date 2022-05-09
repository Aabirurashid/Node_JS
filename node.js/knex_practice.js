// var mysql=require('mysql')
// var con=mysql.createConnection({
//   host:"localhost",
//   user:"root",
//   password:"Papa@123"
// });
// con.connect(function(err){
//   if (err)throw err;
//   console.log("connected");
//   con.query("CREATE DATABASE data",function(err){
//     if (err)throw err;
//     console.log("database created")
    
//       });
//     });


// const knex = require('knex')({
//     client: "mysql",
//     connection: {
//       host: "127.0.0.1",
//       user: "root",
//       password: "Papa@123",
//       database: "data",
//     },
//   });
// // for creating table..
// function create(){
//     return knex.schema.createTable('salesman',function(table){
//         table.string('name')
//         table.string('first_name')
//         table.string('last_name')
//     })
//     .then(()=>{
//         console.log("table created")
//     }).catch((err)=>{
//         console.log(err)
//     })
// }
// create()



// const knex = require('knex')({
//     client: "mysql",
//     connection: {
//       host: "127.0.0.1",
//       user: "root",
//       password: "Papa@123",
//       database: "data",
//     },
//   });
// // for creating table..
// function create(){
//     return knex.schema.dropTable('salesman',function(table){
//         table.string('name')
//         table.string('first_name')
//         table.string('last_name')
//     })
//     .then(()=>{
//         console.log("table droped")
//     }).catch((err)=>{
//         console.log(err)
//     })
// }
// create()

// const knex = require('knex')({
//     client: "mysql",
//     connection: {
//       host: "127.0.0.1",
//       user: "root",
//       password: "Papa@123",
//       database: "data",
//     },
//   });
// // for creating table..
// function create(){
//     return knex.schema.renameTable('salesman','jabeena',function(table){
//         table.string('name')
//         table.string('first_name')
//         table.string('last_name')
//     })
//     .then(()=>{
//         console.log("renameTable name")
//     }).catch((err)=>{
//         console.log(err)
//     })
// }
// create()



// const knex = require('knex')({
//     client: "mysql",
//     connection: {
//       host: "127.0.0.1",
//       user: "root",
//       password: "Papa@123",
//       database: "data",
//     },
//   });
// // for creating table..
// function create(){
//     knex.schema.hasTable('jabeena').then(function(exists){
//         if (!exists){
//             return knex.schema.hasTable('jabeena',function(table){
//                 table.string('name')
//                 table.string('first_name')
//                 table.string('last_name')
//             })
//         }
//     })
// }
// create()