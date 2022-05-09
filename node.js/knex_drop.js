const knex = require('knex')({
        client: "mysql",
        connection: {
          host: "127.0.0.1",
          user: "root",
          password: "Papa@123",
          database: "user",
        },
      });
    // // for creating table..
    // function create(){
return knex.schema.dropTable('collection',function(table){
    table.string('name')
    table.string('first_name')
    table.string('last_name')
})
.then(()=>{
    console.log("table droped")
}).catch((err)=>{
    console.log(err)
})
    // }
    // create()