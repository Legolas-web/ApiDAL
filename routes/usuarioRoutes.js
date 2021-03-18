'use strict';

const express = require('express');
const usuarioController = require('../controllers/usuarioController');
const router = express.Router();

router.get('/usuarios', usuarioController.getAllUsuarios);
router.get('/usuariosCalificar', usuarioController.getAllUsuariosCalificar);
router.get('/usuariosInactivar', usuarioController.getAllUsuariosInactivar);
router.get('/usuario/:id/', usuarioController.getUsuario);
router.post('/usuario', usuarioController.addUsuario);
router.put('/usuario/:id', usuarioController.updateUsuario);
router.put('/usuarioInactivar/:id', usuarioController.updateInactivo);
router.put('/usuarioActivar/:id', usuarioController.updateActivo);
router.delete('/usuario/:id', usuarioController.deleteUsuario);
router.get('/usuarioLogin/:nombre', usuarioController.getLoginName);

module.exports = {
    routes: router
}