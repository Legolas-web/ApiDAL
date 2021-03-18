'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getUsuarios = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('usuarios');
        const userList = await pool.request().query(sqlQueries.usuarioslist);
        return userList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getUsuariosCalificar = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('usuarios');
        const userList = await pool.request().query(sqlQueries.usariosListCalificar);
        return userList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getUsuariosInactivar = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('usuarios');
        const userList = await pool.request().query(sqlQueries.usuariosListInactiva);
        return userList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(idUsuario) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('usuarios');
        const user = await pool.request()
                            .input('idUsuario', sql.Int, idUsuario)
                            .query(sqlQueries.usuariobyId);
        return user.recordset;
    } catch (error) {
        return error.message;
    }
}

const getLoginName = async(nombre) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('usuarios');
        const user = await pool.request()
                            .input('nombre', sql.NVarChar, nombre)
                            .query(sqlQueries.usuarioLoginName);
        return user.recordset;
    } catch (error) {
        return error.message;
    }
}

const creatUsuario = async (usuariodata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('usuarios');
        const insertUsuario = await pool.request()
                            .input('nombre', sql.NVarChar(20), usuariodata.nombre)
                            .input('nombreCompleto', sql.NVarChar(20), usuariodata.nombreCompleto)
                            .input('contrasena', sql.NVarChar(20), usuariodata.contrasena)
                            .input('estado', sql.NVarChar(20), usuariodata.estado)
                            .input('avatar', sql.NVarChar(20), usuariodata.avatar)
                            .query(sqlQueries.createUsuario);                            
        return insertUsuario.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateUsuario = async (idUsuario, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('usuarios');
        const update = await pool.request()
                        .input('idUsuario', sql.Int, idUsuario)
                        .input('nombre', sql.NVarChar(20), data.nombre)
                        .input('nombreCompleto', sql.NVarChar(20), data.nombreCompleto)
                        .input('contrasena', sql.NVarChar(20), data.contrasena)
                        .input('estado', sql.NVarChar(20), data.estado)
                        .input('avatar', sql.NVarChar(20), data.avatar)
                        .query(sqlQueries.updateUsuario);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}
const updateUsuarioInactivo = async (idUsuario) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('usuarios');
        const update = await pool.request()
                        .input('idUsuario', sql.Int, idUsuario)
                        .query(sqlQueries.updateEstado);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateUsuarioActivo = async (idUsuario) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('usuarios');
        const update = await pool.request()
                        .input('idUsuario', sql.Int, idUsuario)
                        .query(sqlQueries.updateEstadoActiva);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}


const deleteUsuario = async (idUsuario) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('usuarios');
        const deleteUsuario = await pool.request()
                            .input('idUsuario', sql.Int, idUsuario)
                            .query(sqlQueries.deleteUsuario);
        return deleteUsuario.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {

    getUsuarios,
    getById,
    creatUsuario,
    updateUsuario,
    deleteUsuario,
    getLoginName,
    getUsuariosCalificar,
    updateUsuarioInactivo,
    getUsuariosInactivar,
    updateUsuarioActivo

}