const firebase = require('firebase');

exports.getAllCryptos = async (req, res, next) => {
    const snapshot = await firebase.database().ref(`/crypto`).once('value');
    return res.json(snapshot.val());
};

exports.getCrypto = async (req, res, next) => {
    const snapshot = await firebase.database().ref(`/crypto/${req.params.pair}`).once('value');
    if (!snapshot) return next();
    return res.json(snapshot.val());
};
