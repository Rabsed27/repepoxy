const mongoose = require('mongoose');
const CONFIG = require('./config');

module.export = {
connection: null,
connect: function(){
    if(this.connection) return this.connection;
    return mongoose.connect(CONFIG.DB).then(connection => {
        this.connection  = connection;
        console.log('Conexion a BD exitosa');
    }).catch(error => console.log(error))

}

}