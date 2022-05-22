const cliente = require("./database.js");
const express = require("express");
const { query } = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// dasdasdasd

const { google } = require("googleapis");
const { OAuth2 } = google.auth;
const oAuth2Client = new OAuth2(
    "231948504308-fkrtg37niocbfrjor22c9j18r9sga8gv.apps.googleusercontent.com",
    "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"
);

oAuth2Client.setCredentials({
    refresh_token:
        "1//04DTamPyzpKJVCgYIARAAGAQSNwF-L9IrtrlnbTm0InsPdO9U7s9NZnLoqOdQbw3Z3PepTForM3gtNe14wZbCy8LVYfp-fp2nHwI",
});
// asdasdasdasd

app.listen(3300, () => {
    console.log("Server is now listening at http://localhost:3300");
});

cliente.connect();

/* Realiza o SELECT de Todos os Usuarios no Banco de Dados */
app.get("/usuarios", (req, res) => {
    var query = "select * from usuarios";

    cliente.query(query, (erro, resultado) => {
        if (!erro) {
            res.send(resultado.rows);
        } else {
            console.log(erro.message);
        }
    });
});

/* Realiza o SELECT no Banco de Dados Pelo ID */
app.get("/usuarios/:id", (req, res) => {
    var id = req.params.id;
    var query = "select * from usuarios where id=" + id;

    cliente.query(query, (erro, resultado) => {
        if (!erro) {
            res.send(resultado.rows);
        } else {
            console.log(erro.message);
        }
    });
});

/* Realiza o INSERT no Banco de Dados Pelo JSON */
app.post("/usuarios", (req, res) => {
    const body = req.body;
    var query =
        "insert into usuarios(usuario, senha) values ('" +
        body.usuario +
        "', '" +
        bodyParser.senha +
        "')";

    cliente.query(query, (erro, resultado) => {
        if (!erro) {
            res.send("Inserido com sucesso!");
        } else {
            console.log(erro);
        }
    });
});

/* Realiza o DELETE no Banco de Dados Pelo ID */
app.delete("/usuarios/:id", (req, res) => {
    var id = req.params.id;
    var query = "delete from usuarios where id = " + id;

    cliente.query(query, (erro, resultado) => {
        if (!erro) {
            res.send("Excluído com sucesso!");
        } else {
            console.log(erro);
        }
    });
});

/* Realiza o UPDATE no Banco de Dados Pelo ID */
app.put("/usuarios/:id", (req, res) => {
    var id = req.params.id;
    var body = req.body;
    var query =
        "update usuarios set usuario = '" +
        body.usuario +
        "', senha = '" +
        body.senha +
        "' where id = " +
        id;

    cliente.query(query, (erro, resultado) => {
        if (!erro) {
            res.send("Atualizado com sucesso!");
        } else {
            console.log(erro);
        }
    });
});

app.get("/calendario", (req, res) => {
    const calendar = google.calendar({ version: "v3", auth: oAuth2Client });

    const eventStartTime = new Date();

    eventStartTime.setDate(eventStartTime.getDay() + 2);

    const eventEndTime = new Date();

    eventEndTime.setDate(eventEndTime.getDay() + 10);
    eventEndTime.setMinutes(eventEndTime.getMinutes() + 45);

    const event = {
        summary: "TESTE do PI3",
        location: "webteste",
        description: "evento de teste node js",
        start: {
            dateTime: eventStartTime,
            timeZone: "GMT-3:00",
        },
        end: {
            dateTime: eventEndTime,
            timeZone: "GMT-3:00",
        },
        colorId: 1,
    };

    calendar.freebusy.query(
        {
            resource: {
                timeMin: eventStartTime,
                timeMax: eventEndTime,
                timeZone: "GMT-3:00",
                items: [{ id: "primary" }],
            },
        },
        (err, res) => {
            if (err) return console.error("Free Busy Query Error", err);

            const eventsArray = res.data.calendars.primary.busy;

            if (eventsArray.length == 0)
                return calendar.events.insert(
                    { calendarId: "primary", resource: event },
                    (err, res) => {
                        if (err)
                            return console.error(
                                "Calendar Event Creation Erro",
                                err
                            );
                        return console.log("Calendar Event Created");
                    }
                );
            return console.log("Soory, I Am Busy");
        }
    );
});

app.post("/teste", (req, res) => {
    const body = req.body;
    var query =
        "insert into teste (cpf, nome, sobrenome, senha, confirmsenha) values ('" +
        body.cpf +
        "', '" +
        bodyParser.nome +
        "', '" +
        bodyParser.sobrenome+
        "', '" +
        bodyParser.senha+
        "', '" +
        bodyParser.confirmsenha+
        "')";

    cliente.query(query, (erro, resultado) => {
        if (!erro) {
            res.send("Inserido com sucesso!");
        } else {
            console.log(erro);
        }
    });
});