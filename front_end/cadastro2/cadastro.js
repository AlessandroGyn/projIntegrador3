const res = require('express/lib/response');

function cadastrar(cpf, nome, sobrenome, senha, confirmSenha) {
    let cadastroJson =
        '{"cpf":"teste","nome":"teste2","sobrenome":"teste3","senha":"teste4","confirmSenha":"teste5"}';
    let obj = JSON.parse(cadastroJson);

    console.log(obj);
}
