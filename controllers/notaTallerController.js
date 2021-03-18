'use strict';

const notaTallerData = require('../data/notaTaller/indexNotaTaller');

const addNotaTaller = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await notaTallerData.creatNotaTaller(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getNotasTalleresById = async (req, res, next) => {
    try {
        const idUsuario = req.params.id;
        const notaTaller = await notaTallerData.getById(idUsuario);
        res.send(notaTaller);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {

    addNotaTaller,
    getNotasTalleresById

}