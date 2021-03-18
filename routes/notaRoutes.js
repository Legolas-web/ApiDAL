'use strict';

const express = require('express');
const notaController = require('../controllers/notaController');
const router = express.Router();

router.get('/notas', notaController.getAllNotas);
router.post('/nota', notaController.addNota);
router.delete('/nota/:id', notaController.deleteNota);

module.exports = {
    routes: router
}