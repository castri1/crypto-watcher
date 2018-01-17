const express = require('express');
const app = express();
const firebase = require('firebase');
const config = require('./config')['development'].firebase;
const routes = require('../routes');
const errorHandlers = require('../handlers/errorHandlers');
firebase.initializeApp(config);

function updateCryptoPrice(pairs) {
    return function () {
        pairs.forEach(pair => {
            firebase.database().ref(`/crypto/${pair}/data`).set({
                latestValue: Math.random() * 15000
            });
        });
    }
}

let refreshInterval = {};
function scheduler(pairs) {
    clearInterval(refreshInterval);
    refreshInterval = setInterval(updateCryptoPrice(pairs), 2000);
}

const pairs = [];
firebase.database().ref('/currencies').on('child_added', function (snapshot) {
    const currency = snapshot.val();
    pairs.push(currency.name);
    scheduler(pairs);
});

app.use('/', routes);

//Not found route
app.use(errorHandlers.notFound);

//Global error handler

if (app.get('env') === 'development') {
    app.use(errorHandlers.developmentErrors);
}

app.use(errorHandlers.productionErrors);

module.exports = app;