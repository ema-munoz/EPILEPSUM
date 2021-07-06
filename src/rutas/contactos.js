
const express = require('express');

const router = express.Router();

const {Ingreso} = require ("../lib/auth");

const {contactos} = require ("../controladores/Contactos");

router.use(Ingreso)

router.get("/Contactos", Ingreso, contactos);

module.exports = router;
