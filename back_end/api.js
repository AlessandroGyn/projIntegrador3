const cliente = require('./database.js');
const express = require('express');
const { query } = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.listen(3300, ()=>{
    console.log('Server is now listening at http://localhost:3300');
})

cliente.connect();

/* Realiza o SELECT de Todos os Usuarios no Banco de Dados */
app.get('/usuarios', (req, res)=>{

    var query = 'select * from usuarios';

    cliente.query(query, (erro, resultado)=>{
        if(!erro){
            res.send(resultado.rows);
        } else {
            console.log(erro.message);
        }
    })
})

/* Realiza o SELECT no Banco de Dados Pelo ID */
app.get('/usuarios/:id', (req, res)=>{

    var id = req.params.id;
    var query = 'select * from usuarios where id=' + id;

    cliente.query(query, (erro, resultado)=>{
        if(!erro){
            res.send(resultado.rows);
        } else {
            console.log(erro.message);
        }
    })
})

/* Realiza o INSERT no Banco de Dados Pelo JSON */
app.post('/usuarios', (req, res)=>{

    const body = req.body;
    var query = "insert into usuarios(usuario, senha) values ('"+body.usuario+"', '"+bodyParser.senha+"')";

    cliente.query(query, (erro, resultado)=>{
        if(!erro) {
            res.send('Inserido com sucesso!');
        } else {
            console.log(erro );
        }
    })
});

/* Realiza o DELETE no Banco de Dados Pelo ID */
app.delete('/usuarios/:id', (req, res)=>{

    var id = req.params.id;
    var query = "delete from usuarios where id = "+id;

    cliente.query(query, (erro,resultado)=>{
        if(!erro) {
            res.send("Excluído com sucesso!");
        } else {
            console.log(erro);
        }
    })
})

/* Realiza o UPDATE no Banco de Dados Pelo ID */
app.put('/usuarios/:id', (req, res)=>{

    var id = req.params.id;
    var body = req.body;
    var query = "update usuarios set usuario = '"+body.usuario+"', senha = '"+body.senha+"' where id = "+id;

    cliente.query(query, (erro, resultado)=>{
        if(!erro) {
            res.send("Atualizado com sucesso!");
        } else {
            console.log(erro);
        }
    })
})