
const express = require('express');

const router = express.Router();

const {login} = require ("../controladores/index");

router.get("/", login);

module.exports = router;
