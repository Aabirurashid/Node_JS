var num=require("readline-sync")
const knex = require('knex')({
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "Papa@123",
      database: "moomin",
    },
  });

knex.schema.createTable('Aabiru',function(table){
    table.string('name')
    table.string('first_name')
    table.string('last_name')
})
.then(()=>{
    console.log("table  created")
}).catch((err)=>{
    console.log("table already created")
})
function crud(){
    const a=num.question("enter the query:-")
    if(a=="insert"){
        const Aabiru = [
            { name: 'Aabiru', first_name:"hummer",last_name: "rashid"},
            { name: 'kajal', first_name:"adii",last_name: "yadav" },
            { name: 'syed', first_name:"jabeena",last_name: "bano" },
            { name: 'bhat', first_name:"moomin",last_name: "rashid" }

        ]

        knex('Aabiru').insert(Aabiru)
        .then(() =>{ 
            console.log("data inserted")
            var b=num.question("you wan to exist or move further yes/no:")
            if (b=="no"){
                console.log("exit");  
            }
            else{
                crud()
                    }
         })
        .catch((err) => {
            console.log(err)
         })
        
        }
        else if(a=="select"){
            return knex.from('Aabiru').select("*")
            .then((rows) => {
                for (row of rows) {
                    console.log(`${row['name']} ${row['first_name']} ${row['last_name']}`);
                }
                var b=num.question("you wan to exist or move further yes/no:")
            if (b=="no"){
                console.log("exit");  
            }
            else{
                crud()
                    }
            }).catch((err) => { console.log( err); throw err })
            .finally(() => {
                knex.destroy();
            })
        
        }
        else if(a=="update"){
            knex.schema.hasTable("Aabiru")
            .then(function (exists) {
                if (exists) {
                console.log({ Success: `users data updated successfully.` });
                var b=num.question("you wan to exist or move further yes/no:")
                if (b=="no"){
                    console.log("exit");  
                }
                else{
                    crud()
                        }  
                return knex("Aabiru")
                    .update({ first_name: "sonam", last_name: "Kumari" })
                    .where("name", 'Aabiru')}                
                
       
            }).catch((err)=>{
                console.log(err)
            })
        }
        else if(a=="delete"){
            knex.schema.hasTable("Aabiru").then(function (exists) {
                if (exists) {
                    console.log({ Success: `data deleted by name successfully.` });
                    var b=num.question("you wan to exist or move further yes/no:")
                if (b=="no"){
                    console.log("exit");  
                }
                else{
                    crud()
                        }  
                        return knex("Aabiru").where("name", 'Aabiru').del();
            

                    } 
                else {
                console.log({ Sorry: `users table not found` });
                
                }
                
            });
            }
}
crud()