const firebase = require('firebase');
let refreshInterval = {};
const pairs = [];

function updateCryptoPrice(pairs) {
    return function () {
        pairs.forEach(pair => {
            firebase.database().ref(`/crypto/${pair}/data`).set({
                latestValue: Math.random() * 15000
            });
        });
    }
}

function scheduler(pairs) {
    clearInterval(refreshInterval);
    refreshInterval = setInterval(updateCryptoPrice(pairs), 2000);
}

function getCurrencies(snapshot) {
    const currency = snapshot.val();
    pairs.push(currency.name);
    scheduler(pairs);
}

function execute() {
    firebase.database().ref('/currencies').on('child_added', getCurrencies);
}

module.exports = {
    execute
}