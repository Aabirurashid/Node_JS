// const options = {
//     client: 'mysql',
//     connection: {
//         host: '127.0.0.1',
//         user: 'root',
//         password: 'Papa@123',
//         database: 'user'
//     }
// }

// const knex = require('knex')(options);
// function create(){
// const customers = [
//     { name: 'Aabiru', first_name:"hummer",last_name: "rashid"},
//     { name: 'kajal', first_name:"adii",last_name: "yadav" },
//     { name: 'syed', first_name:"jabeena",last_name: "bano" },
//     { name: 'bhat', first_name:"moomin",last_name: "rashid" }
   
// ]

// return knex('customers').insert(customers).then(() => console.log("data inserted"))
//     .catch((err) => { console.log(err); throw err })
//     .finally(() => {
//         knex.destroy();
//     });
// }
// create()


const options = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'Papa@123',
        database: 'moomin1'
    }
}

const knex = require('knex')(options);
function create(){
const ifra = [
    { name: 'Aabiru', first_name:"hummer",last_name: "rashid"},
    { name: 'kajal', first_name:"adii",last_name: "yadav" },

   
]

return knex('ifra').insert(ifra).then(() => console.log("data inserted"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });
}
create()