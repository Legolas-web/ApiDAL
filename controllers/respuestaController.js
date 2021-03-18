'use strict';

const respuestaData = require('../data/respuesta/indexRes');

const getAllRespuestas = async(req, res, next) => {
    try {
        const resList = await respuestaData.getRespuestas();
        res.send(resList);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getRespuestaById = async (req, res, next) => {
    try {
        const idRespuesta = req.params.id;
        const respuesta = await respuestaData.getById(idRespuesta);
        res.send(respuesta);
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const getRespuestaTaller2 = async (req, res, next) => {
    try {
        const idRespuesta = req.params.id;
        const respuesta = await respuestaData.getRespuestasTaller2(idRespuesta);
        res.send(respuesta);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getRespuestaTaller3 = async (req, res, next) => {
    try {
        const idRespuesta = req.params.id;
        const respuesta = await respuestaData.getRespuestasTaller3(idRespuesta);
        res.send(respuesta);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getRespuestaTaller4 = async (req, res, next) => {
    try {
        const idRespuesta = req.params.id;
        const respuesta = await respuestaData.getRespuestasTaller4(idRespuesta);
        res.send(respuesta);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addRespuesta = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await respuestaData.creatRespuesta(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteRespuesta= async (req, res, next) => {
    try {
        const idRespuesta = req.params.id;
        const deletedRespuesta = await respuestaData.deleteRespuesta(idRespuesta);
        res.send(deletedRespuesta);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {

    getAllRespuestas,
    getRespuestaById,
    addRespuesta,
    deleteRespuesta,
    getRespuestaTaller2,
    getRespuestaTaller3,
    getRespuestaTaller4

}