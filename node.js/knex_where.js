const options = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'Papa@123',
        database: 'user'
    }
}

const knex = require('knex')(options);

knex.from('customers').where("*")
    .then((rows) => {
        for (row of rows) {
            console.log(`${row['name']} ${row['first_name']} ${row['last_name']}`);
        }
    }).catch((err) => { console.log( err); throw err })
    .finally(() => {
        knex.destroy();
    });