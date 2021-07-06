
const express = require('express');

const router = express.Router();

const {Ingreso} = require ("../lib/auth");

const {Controlador} = require ("../controladores/control");

router.use(Ingreso)

router.get("/Control", Ingreso, Controlador);

module.exports = router;
