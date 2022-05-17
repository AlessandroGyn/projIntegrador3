const venom = require('venom-bot');

venom
  .create({
    session: 'Atendimento', //name of session
    multidevice: false // for version not multidevice use false.(default: true)
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
    client.onMessage((message) => {
      if (message.body === 'Oi' && message.isGroupMsg === false) {
        client
          .sendText(message.from, 'Olá, Seja bem-vindo.')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
        client.sendText(message.from, 'Escolha uma opção abaixo: \n 1 - Agendar \n 2 - Cancelar Agendamento')
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });   
      }

      if (message.body == '1' && message.isGroupMsg === false) {
        client
          .sendText(message.from, 'Informe seus dados: \n Nome:')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      }

    });
  }