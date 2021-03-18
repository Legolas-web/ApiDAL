'use strict';

const express = require('express');
const notaTallerController = require('../controllers/notaTallerController');
const router = express.Router();

router.post('/notaTaller', notaTallerController.addNotaTaller);
router.get('/notasTalleres/:id/', notaTallerController.getNotasTalleresById);

module.exports = {
    routes: router
}