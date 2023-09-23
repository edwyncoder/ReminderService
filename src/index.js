const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const EmailService = require('./services/email-service');
const {startJob} = require("./utils/job");
const TicketController = require('./controllers/ticket-controller');


const setupAndStartServer = async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.post('/api/v1/tickets', TicketController.create);

    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);
        // EmailService.sendBasicEmail("test@example.com","edwynbtrocks@gmail.com","this is subject to","thsi is the bosy oft he email");
        startJob()
    });
}

setupAndStartServer();

