const express = require('express');
const router = express.Router();
const cryptoController = require('./cryptoController');

function catchAsyncErrors(fn) {
    return (req, res, next) => {
        const routePromise = fn(req, res, next);
        if (routePromise.catch) {
            routePromise.catch(err => next(err));
        }
    }
}

router.get('/', (req, res, next) => {
    return res.send("Crypto predictor running");
});
router.get('/crypto', catchAsyncErrors(cryptoController.getCrypto));


module.exports = router;