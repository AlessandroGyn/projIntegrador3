// Variáveis e suas dependências:
const { profile } = require('console');
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const app = express();
require('./googleAuth.js');

// Aplicativo:
app.use(
    session({
        secret: 'SENAC',
        resave: true,
        saveUninitialized: true,
    })
);
app.use(passport.initialize()); // Inicializa o PassportJS.
app.use(passport.session()); // Gerencia a sessão do usuário.
    // NÃO DEIXAR ESSE SECRET NO CÓDIGO EM PRODUÇÃO!
    // MODIFICAR O SECRET PARA UMA VARIÁVEL DE AMBIENTE!
    // Aplicativo mantém a sessão do usuário.

    // Inicialização do aplicativo.
app.listen(3300, () => {
    console.log('Listening on http://localhost:3300');
});

// Funções:
    // Função que verifica se o usuário está Logado.
function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}

// API's do aplicativo:
    // Página inicial do aplicativo.
app.get('/', (req, res) => {
    res.send('<a href="/auth/google">Login</a>');
});

    // Página do Login no Google.
app.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email'],
        prompt: 'select_account',
    })
);

    // Redirecionamento após o Login no Google.
app.get(
    '/google/callback',
    passport.authenticate('google', {
        successRedirect: '/protected', // Redirecionado em caso de Login bem-sucedido.
        failureRedirect: '/auth/failure', // Redirecionado em caso de Login  malsucedido.
    })
);

    // Página de redirecionamento em caso de Login malsucedido.
app.get('/auth/failure', (req, res) => {
    res.send('Something went wrong!');
});

    // Página protegida que só é acessado caso o usuário esteja Logado (Por causa da função isLoggedIn).
app.get('/protected/', isLoggedIn, (req, res) => {
    res.send('Olá ' + req.user.displayName + ' email ' + req.user.email);
});

    // API para Deslogar o usuário.
app.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
        res.redirect('/');
    });
});

