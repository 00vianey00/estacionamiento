const { request, response } = require("express");
const { query } = require("../db/connection");
const pool = require("../db/connection");
const modelParking = require("../models/parking");

const getChars = async (req = request, res = response) => {
    let conn;

    try {
        conn = await pool.getConnection()//Realizamos la conexión

        const char = await conn.query(modelParking.queryGetChars, (error) => {if(error) throw error})
        //console.log(plant)
        if (!char) {//En caso de no haber resgistros lo informamos
            res.status(404).json({msg: "No Existe vehículo Registrado"})
            return
        }
        res.json({char})//Se manda la lista de usuarios
    }
    catch (error){
        console.log(error)
        res.status(500).json({msg: error})//informamos el error
    }finally{
        if (conn) conn.end()//Termina la conexión
    }

}
const getCharByMatricula = async (req = request, res = response) => {
    const {Matricula} = req.params//URI params
    let conn;

    try {
        conn = await pool.getConnection()//Realizamos la conexión
        //generamos la consulta
        const [char] = await conn.query(modelParking.queryGetCharByMatricula,[Matricula], (error) => {if(error) throw error})

        if (!char) {//En caso de no haber resgistros lo informamos
            res.status(404).json({msg: `No Existe vehículo Registrado Con la Matricula ${Matricula}`})
            return
        }

        res.json({char})//Se manda la lista de usuarios
    }
    catch (error){
        console.log(error)
        res.status(500).json({msg: error})//informamos el error
    }finally{
        if (conn) conn.end()//Termina la conexión
    }
}
const addChar = async (req = request, res = response) => {
    const {NameClient, IncomingVehicle, EntryTime, OutgoingVehicle, DepartureTime, TotalPrice$30PerHour, SpecialIndication, Active} = req.body//URI params

    if(!NameClient || !IncomingVehicle || !EntryTime || !OutgoingVehicle || !DepartureTime || !TotalPrice$30PerHour || !SpecialIndication || !Active){
        res.status(400).json({msg: "Faltan Datos"})
        return
    }

    let conn;

    try {

        conn = await pool.getConnection()//Realizamos la conexión
        //generamos la consulta
        const [charExist] = await conn.query(modelParking.queryCharExists, [SpecialIndication], (error) =>{if(error) throw error})
        
        if (charExist) {
            res.json({msg:`El estacionamiento '${SpecialIndication}' ya se encuentra ocupado.`})
            return
        }
        //generamos la consulta
        const result = await conn.query( modelParking.queryAddChar, [NameClient, IncomingVehicle, EntryTime, OutgoingVehicle, DepartureTime, TotalPrice$30PerHour, SpecialIndication, Active], (error) => {if(error) throw error})

        if (result.affectedRows === 0) {//En caso de no haber resgistros lo informamos
            res.status(404).json({msg: `No se pudo asignar el estacionamiento ${SpecialIndication}`})
            return
        }
        res.json({msg:`Se asigno satisfactoriamente el estacionamiento  ${SpecialIndication}`})//Se manda la lista de usuarios
        
    } catch (error){
        console.log(error)
        res.status(500).json({msg: error})//informamos el error
    }finally{
        if (conn) conn.end()//Termina la conexión
    }

}
const deleteCharByMatricula = async (req = request, res = response) => {
    const {Matricula} = req.params//URI params
    let conn;

    try {
        conn = await pool.getConnection()//Realizamos la conexión
        //generamos la consulta
        const result = await conn.query(modelParking.queryDeleteCharByMatricula,[Matricula], (error) => {if(error) throw error})

        console.log(result.affectedRows)
        if (result.affectedRows === 0) {//En caso de no haber resgistros lo informamos
            res.status(404).json({msg: `No Existe Vehículo Registrado Con la Matricula ${Matricula}`})
            return
        }

        res.json({msg:`Se Eliminó Satisfactoriamente El vehículo Con la Matricula ${Matricula}`})//Se manda la lista de usuarios
    }
    catch (error){
        console.log(error)
        res.status(500).json({msg: error})//informamos el error
    }finally{
        if (conn) conn.end()//Termina la conexión
    }
}
const updateCharByChar = async (req = request, res = response) => {
    const {NameClient, IncomingVehicle, EntryTime, OutgoingVehicle, DepartureTime, TotalPrice$30PerHour, SpecialIndication, Active} = req.body//URI params
    if(!NameClient || !IncomingVehicle || !EntryTime || !OutgoingVehicle || !DepartureTime || !TotalPrice$30PerHour || !SpecialIndication || !Active){
        res.status(400).json({msg: "Faltan Datos"})
        return
    }
    let conn;
    try {
        conn = await pool.getConnection()//Realizamos la conexión

        const [charExist] = await conn.query(modelParking.queryCharExists, [NameClient])
        
        //generamos la consulta
            if(!charExist){ 
                res.json({msg:`El cliente ${NameClient} No Existe.`})
                return
            }
            const result = await conn.query(modelParking.queryUpdateCharByChar, [NameClient, IncomingVehicle, EntryTime, OutgoingVehicle, DepartureTime, TotalPrice$30PerHour, SpecialIndication, Active], (error) => {if (error) throw error})

            if (result.affectedRows === 0) {//En caso de no haber resgistros lo informamos
                res.status(404).json({msg: `No Se Pudo Actualizar El cliente Con El Nombre ${NameClient}`})
                return
            }
            res.json({msg:`Se Actualizó Satisfactoriamente El cliente ${NameClient}`})//Se manda la lista de usuarios
    }catch (error){
        console.log(error)
        res.status(500).json({msg: error})//informamos el error
    }finally{
        if (conn) conn.end()//Termina la conexión
    }
}

module.exports = {addChar, getChars, getCharByMatricula, deleteCharByMatricula, updateCharByChar}