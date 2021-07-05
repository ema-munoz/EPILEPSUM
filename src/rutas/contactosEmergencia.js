const express = require('express');

const rutas = express.Router() 

const {mostrar, agregar, lista, listar, traerDatos, editar, eliminar} = require("../controladores/contactosEmergencia");

rutas.get ("/agregar/", mostrar)

rutas.post ("/agregar/:id", agregar)

rutas.get ("/lista/:id", lista)

rutas.get ("/Inicio/:id", listar)

rutas.get ("/editar/:id", traerDatos)

rutas.post ("/editar/:id", editar)

rutas.get ("/eliminar/:id", eliminar)

module.exports = rutas
