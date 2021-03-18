'use strict';

const express = require('express');
const respuestaController = require('../controllers/respuestaController');
const router = express.Router();

router.get('/respuestas', respuestaController.getAllRespuestas);
router.get('/respuestasTaller1/:id/', respuestaController.getRespuestaById);
router.get('/respuestasTaller2/:id/', respuestaController.getRespuestaTaller2);
router.get('/respuestasTaller3/:id/', respuestaController.getRespuestaTaller3);
router.get('/respuestasTaller4/:id/', respuestaController.getRespuestaTaller4);
router.post('/respuesta', respuestaController.addRespuesta);
router.delete('/respuesta/:id', respuestaController.deleteRespuesta)

module.exports = {
    routes: router
}