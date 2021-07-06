
const express = require('express');

const router = express.Router();

const {Ingreso} = require ("../lib/auth");

const {principal, listar} = require ("../controladores/user");

router.use(Ingreso)

router.get("/Inicio/", Ingreso, listar);

module.exports = router;
