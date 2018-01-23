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

function createCurrency(currencyData) {
    const currency = {
        data: { latestValue: Math.random() * 15000 },
        name: currencyData.currencyName
    };
    firebase.database().ref(`/crypto/${currencyData.pairName}`).set(currency);
}

function onChildAdded(snapshot) {
    const currency = snapshot.val();
    createCurrency(currency);
    pairs.push(currency.pairName);
    scheduler(pairs);
}

function execute() {
    firebase.database().ref('/currencies').on('child_added', onChildAdded);
}

module.exports = {
    execute
}