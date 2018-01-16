const express = require('express');
const app = express();
const firebase = require('firebase');
const config = require('./config')['development'].firebase;
const routes = require('../routes');
firebase.initializeApp(config);

function updateCryptoPrice () {
    firebase.database().ref('/crypto/btc-usd/data').set({
        latestValue: Math.random() * 15000
    });
}
//setInterval(updateCryptoPrice, 2000);

app.use(routes);

//Not found route
app.use((req, res, next) => {
    const error = new Error();
    error.status = 404;
    error.message = 'Not found';
    next(error);
});

//Global error handler
app.use((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).json({
        message: err.message
    });
});

module.exports = app;