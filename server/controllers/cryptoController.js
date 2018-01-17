const firebase = require('firebase');

exports.getAllCryptos = async (req, res, next) => {
    const snapshot = await firebase.database().ref(`/crypto`).once('value');
    console.log(sn.val());
    return res.json(snapshot.val());
};

exports.getCrypto = async (req, res, next) => {
    const snapshot = await firebase.database().ref(`/crypto/${req.params.pair}`).once('value');
    return res.json(snapshot.val());
};
