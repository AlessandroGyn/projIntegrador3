// Variáveis e suas dependências:
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
    // NÃO DEIXAR ESSE GOOGLE_CLIENT_ID E GOOGLE_CLIENT_SECRET NO CÓDIGO EM PRODUÇÃO!
    // MODIFICAR O GOOGLE_CLIENT_ID E GOOGLE_CLIENT_SECRET PARA UMA VARIÁVEL DE AMBIENTE!
const GOOGLE_CLIENT_ID =
    '231948504308-ju2f4en5f4pvcqrovnhs4arb6us251sg.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

// Autenticação Google:
passport.use(
    new GoogleStrategy(
        {
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: 'http://localhost:3300/google/callback',
        },
        function (accessToken, refreshToken, profile, done) {
            return done(null, profile);
        }
    )
);

passport.serializeUser(function (user, done) {
    done(null, user);
})

passport.deserializeUser(function (user, done) {
    done(null, user);
})