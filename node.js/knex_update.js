// var num=require("readline-sync")
const knex = require('knex')({
    client: "mysql",
    connection: {
      host: "localhost",
      user: "root",
      password: "Papa@123",
      database: "moomin",
    },
  });
knex.schema.hasTable("Aabiru").then(function (exists) {
          if (exists) {
            console.log({ Success: `users data updated successfully.` });
            return knex("Aabiru")
              .update({ first_name: "Anand", last_name: "Patel" })
              .where(id,"syed");
          } else {
            console.log({ Sorry: `users table not found` });
          }
        });