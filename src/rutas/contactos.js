
const express = require('express');

const router = express.Router();

const {contactos} = require ("../controladores/Contactos");

router.get("/Contactos", contactos);

module.exports = router;
