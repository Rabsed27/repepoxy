const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductosSchema = new Schema({
  folio : {type:String},
  cantidad: {type:String},
    preciototal: {type:String},
    preciounitario: {type:String},
    producto: {type:String},
 nombre: {type:String},
 colonia: {type:String},
 codigo: {type:String},
 estado: {type:String}

});
module.exports = pedidos = mongoose.model('pedidos',ProductosSchema)

  // productos:{type:Object}
    //cliente:{type:Object},

// 
// preciounitario: {type:String},
// 
// 
// nombrecliente: {type:String},
// colonia: {type:String},
// codigopostal: {type:String},
// estado: {type:String}