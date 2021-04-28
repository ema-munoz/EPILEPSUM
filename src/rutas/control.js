
const express = require('express');

const router = express.Router();

const {Controlador} = require ("../controladores/control");

router.get("/Control", Controlador);

module.exports = router;
