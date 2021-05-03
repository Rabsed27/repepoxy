const mongoose = require('mongoose');
const Productos = require('../Modelos/productos')

const findAllUsers = (req,res) =>{
    Productos.find((err,productos) =>{
        err && res.status(500).send(err.messange);

        res.status(200).json(productos);
    }

    )
}

const findByid = (req,res) =>{
   // let productofolio = req.params.folio
    Productos.findById(req.params.folio, (err,productos) =>{
        err && res.status(500).send(err.messange);
        res.status(200).send({productos});
       // res.status(200).json(productos);
    });
};

const addUser = (req,res)=> {
    let producto = new Productos({	
       // productos:req.body.productos
       // cliente:req.body.clientes

        // producto: req.body.producto,
        // preciounitario: req.body.preciounitario,
        // cantidad: req.body.candidad,
        // preciototal: req.body.preciototal,
        // nombrecliente: req.body.nombrecliente,
        // colonia: req.body.colonia,
        // codigopostal: req.body.codigopostal,
        // estado: req.body.estado
        folio:req.body.cantidad,
        cantidad: req.body.cantidad,
        preciototal: req.body.preciototal,
        preciounitario: req.body.preciounitario,
        producto: req.body.producto,

        nombre: req.body.nombre,
        colonia: req.body.colonia,
        codigo: req.body.codigo,
        estado: req.body.estado
    });

    producto.save((err,prod) =>{
        err && res.status(500).send(err.messange);

        res.status(200).json(prod);
    });
};

module.exports = {findAllUsers,findByid,addUser};