const {Client} = require('pg')

const cliente = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "123",
    database: "postgres"
})

module.exports = cliente