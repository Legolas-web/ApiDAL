'use strict';

const notaData = require('../data/nota/indexNota');

const getAllNotas = async(req, res, next) => {
    try {
        const notaList = await notaData.getNotas();
        res.send(notaList);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addNota = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await notaData.creatNota(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteNota = async (req, res, next) => {
    try {
        const idNota = req.params.id;
        const deleteNota = await notaData.deleteNota(idNota);
        res.send(deleteNota);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {

    getAllNotas,
    addNota,
    deleteNota

}