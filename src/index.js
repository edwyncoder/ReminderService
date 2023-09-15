const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const EmailService = require('./services/email-service');

const setupAndStartServer = async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);
        // EmailService.sendBasicEmail("test@example.com","edwynbtrocks@gmail.com","this is subject to","thsi is the bosy oft he email");
    });
}

setupAndStartServer();

