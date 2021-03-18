'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getRespuestas = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('respuesta');
        const resList = await pool.request().query(sqlQueries.respuestaList);
        return resList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(idRespuesta) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('respuesta');
        const res = await pool.request()
                            .input('idRespuesta', sql.Int, idRespuesta)
                            .query(sqlQueries.respuestasTaller1);
        return res.recordset;
    } catch (error) {
        return error.message;
    }
}

const getRespuestasTaller2 = async(idRespuesta) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('respuesta');
        const res = await pool.request()
                            .input('idRespuesta', sql.Int, idRespuesta)
                            .query(sqlQueries.respuestasTaller2);
        return res.recordset;
    } catch (error) {
        return error.message;
    }
}

const getRespuestasTaller3 = async(idRespuesta) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('respuesta');
        const res = await pool.request()
                            .input('idRespuesta', sql.Int, idRespuesta)
                            .query(sqlQueries.respuestasTaller3);
        return res.recordset;
    } catch (error) {
        return error.message;
    }
}

const getRespuestasTaller4 = async(idRespuesta) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('respuesta');
        const res = await pool.request()
                            .input('idRespuesta', sql.Int, idRespuesta)
                            .query(sqlQueries.respuestasTaller4);
        return res.recordset;
    } catch (error) {
        return error.message;
    }
}


const creatRespuesta = async (respuestaData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('respuesta');
        const insertRespuesta = await pool.request()
                            .input('respuestaUser', sql.NVarChar(4000), respuestaData.respuestaUser)
                            .input('pregunta', sql.NVarChar(50), respuestaData.pregunta)
                            .input('taller', sql.Int, respuestaData.taller)
                            .input('idUsuario', sql.Int, respuestaData.idUsuario)
                            .query(sqlQueries.createRespuesta);                            
        return insertRespuesta.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteRespuesta = async (idRespuesta) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('respuesta');
        const deleteRespuesta = await pool.request()
                            .input('idRespuesta', sql.Int, idRespuesta)
                            .query(sqlQueries.deleteRespuesta);
        return deleteRespuesta.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {

    getRespuestas,
    getById,
    creatRespuesta,
    deleteRespuesta,
    getRespuestasTaller2,
    getRespuestasTaller3,
    getRespuestasTaller4

}