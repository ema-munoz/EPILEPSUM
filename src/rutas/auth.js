const express = require('express');

const router = express.Router();

const {vista, registro, vistaLogin, login, logout} = require ("../controladores/auth");

router.get("/Registro", vista);

router.post("/Registro", registro);

router.get("/Login", vistaLogin);

router.post("/Login", login);

router.get("/logout", logout);

module.exports = router;
