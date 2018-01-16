const firebase = require('firebase');

exports.getCrypto = async (req, res, next) => {
    const snapshot = await firebase.database().ref(`/crypto/${req.params.pair}`).once('value');
    return res.json(snapshot.val());
};
