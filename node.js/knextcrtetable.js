// we create new database...
// const knex = require('knex')({
//     client: "mysql",
//     connection: {
//       host: "127.0.0.1",
//       user: "root",
//       password: "Papa@123",
//       database: "user",
//     },
//   });
// // for creating table..
// function create(){
//     return knex.schema.createTable('customers',function(table){
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
//       database: "moomin1",
//     },
//   });
// // for creating table..
// function create(){
//     return knex.schema.createTable('ifra',function(table){
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


const knex = require('knex')({
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "Papa@123",
      database: "file",
    },
  });
// for creating table..
function create(){
    return knex.schema.createTable("file12", function (t) {
        t.increments("id").primary();
        t.string("first_name", 100);
        t.string("last_name", 100);
      })
    .then(()=>{
        console.log("table created")
    }).catch((err)=>{
        console.log(err)
    })
}
create()