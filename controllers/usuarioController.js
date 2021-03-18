'use strict';

const usuarioData = require('../data/usuarios/indexUsu');

const getAllUsuarios = async(req, res, next) => {
    try {
        const usuarioList = await usuarioData.getUsuarios();
        res.send(usuarioList);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllUsuariosCalificar = async(req, res, next) => {
    try {
        const usuarioList = await usuarioData.getUsuariosCalificar();
        res.send(usuarioList);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllUsuariosInactivar = async(req, res, next) => {
    try {
        const usuarioList = await usuarioData.getUsuariosInactivar();
        res.send(usuarioList);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getUsuario = async (req, res, next) => {
    try {
        const idUsuario = req.params.id;
        const usuario = await usuarioData.getById(idUsuario);
        res.send(usuario);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getLoginName = async (req, res, next) => {
    try {
        const nombre = req.params.nombre;
        const usuario = await usuarioData.getLoginName(nombre);
        res.send(usuario);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addUsuario = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await usuarioData.creatUsuario(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateUsuario = async (req, res, next) => {
    try {
        const idUsuario =  req.params.id;
        const data = req.body;
        const updated = await usuarioData.updateUsuario(idUsuario, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateInactivo = async (req, res, next) => {
    try {
        const idUsuario =  req.params.id;
        const updated = await usuarioData.updateUsuarioInactivo(idUsuario);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateActivo = async (req, res, next) => {
    try {
        const idUsuario =  req.params.id;
        const updated = await usuarioData.updateUsuarioActivo(idUsuario);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteUsuario = async (req, res, next) => {
    try {
        const idUsuario = req.params.id;
        const deletedUsuario = await usuarioData.deleteUsuario(idUsuario);
        res.send(deletedUsuario);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllUsuarios,
    getUsuario,
    addUsuario,
    updateUsuario,
    deleteUsuario,
    getLoginName,
    getAllUsuariosCalificar,
    updateInactivo,
    getAllUsuariosInactivar,
    updateActivo
}