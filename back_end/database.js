const {Client} = require('pg')

const cliente = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "admin",
    database: "postgres"
})

module.exports = cliente