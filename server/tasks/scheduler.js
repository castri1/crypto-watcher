const firebase = require('firebase');
let refreshInterval = {};
const pairs = [];

function updateCryptoPrice(pairs) {
    return function () {
        pairs.forEach(pair => {
            const data = { latestValue: Math.random() * 15000 };
            firebase.database().ref(`/crypto/${pair}/data`).set(data);
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