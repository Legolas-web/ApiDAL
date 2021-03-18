'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getNotas = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('nota');
        const notaList = await pool.request().query(sqlQueries.notasList);
        return notaList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const creatNota = async (notaData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('nota');
        const insertNota = await pool.request()
                            .input('valorNota', sql.Float, notaData.valorNota)
                            .input('idRespuesta', sql.Int, notaData.idRespuesta)
                            .input('idUsuario', sql.Int, notaData.idUsuario)
                            .query(sqlQueries.createNota);                            
        return insertNota.recordset;
    } catch (error) {
        return error.message;
    }
}
const deleteNota = async (idNota) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('nota');
        const deleteNota = await pool.request()
                            .input('idNota', sql.Int, idNota)
                            .query(sqlQueries.deleteNota);
        return deleteNota.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {

    getNotas,
    creatNota,
    deleteNota

}