const express = require('express');
const app = express();
const firebase = require('firebase');
const config = require('./config')['development'].firebase;
const routes = require('../routes');
const errorHandlers = require('../handlers/errorHandlers');

firebase.initializeApp(config);
const tasks = require('../tasks');

app.use('/', routes);

//Not found route
app.use(errorHandlers.notFound);

//Global error handler
if (app.get('env') === 'development') {
    app.use(errorHandlers.developmentErrors);
}

app.use(errorHandlers.productionErrors);

module.exports = app;