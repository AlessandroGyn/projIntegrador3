// Dependências:
const { Client } = require("pg");

// Conexão com o banco de dados PostegreSQL. 
const cliente = new Client({
  host: "localhost", // Endereço do Host.
  user: "postgres", // Usuário do PostgresSQL.
  password: "admin", // Senha do usuário do PostgresSQL.
  port: 5432, // Porta do PostgresSQL.
  database: "postgres", // Database do App no PostegreSQL.
});

// Exportação da variável Cliente.
module.exports = cliente;
