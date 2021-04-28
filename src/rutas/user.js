
const express = require('express');

const router = express.Router();

const {Ingreso} = require ("../lib/auth");

const {principal} = require ("../controladores/user");

router.get("/Inicio", Ingreso, principal);

module.exports = router;
