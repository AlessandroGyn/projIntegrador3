// Depêndecias:
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
