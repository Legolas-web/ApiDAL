'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const creatNotaTaller = async (notaTallerData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('notaTaller');
        const insertNotaTaller = await pool.request()
                            .input('notaFinal', sql.Float, notaTallerData.notaFinal)
                            .input('taller', sql.Int, notaTallerData.taller)
                            .input('idUsuario', sql.Int, notaTallerData.idUsuario)
                            .query(sqlQueries.createNotaTaller);                            
        return insertNotaTaller.recordset;
    } catch (error) {
        return error.message;
    }
}

const getById = async(idUsuario) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('notaTaller');
        const res = await pool.request()
                            .input('idUsuario', sql.Int, idUsuario)
                            .query(sqlQueries.notasTalleresById);
        return res.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {

    creatNotaTaller,
    getById

}