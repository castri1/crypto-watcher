const express = require('express');
const router = express.Router();
const cryptoController = require('../controllers/cryptoController');
const homeController = require('../controllers/homeController');
const { catchErrors } = require('../handlers/errorHandlers');

//home routes
router.get('/', homeController.index);

//Crypto routes
router.get('/cryptos', catchErrors(cryptoController.getAllCryptos));
router.get('/cryptos/:pair', catchErrors(cryptoController.getCrypto));

module.exports = router;