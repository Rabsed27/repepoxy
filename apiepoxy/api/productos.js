const ProductosController = require('../Controladores/productos');
const express = require('express');

const router = express.Router();

router.get("/all",ProductosController.findAllUsers);

router.get("/parametro/:folio",ProductosController.findByid);

router.post("/add",ProductosController.addUser);

module.exports = router;