const {Client} = require('pg')

const cliente = new Client({ 
    host: "localhost", // Endereço do Host
    user: "postgres", // Usuário do PostgresSQL
    password: "admin", // Senha do usuário do PostgresSQL
    port: 5432, // Porta do PostgresSQL
    database: "postgres" // Database do App no PostegreSQL
})

module.exports = cliente