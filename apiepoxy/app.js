const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Productos = require('./api/productos')

const cors = require('cors')

const app = express()
const corsOptions = {
    origin: '*'
}


//const app = express();
/////////////Configurar cabeceras y cors
// app.use((req, res, next) => {
//      res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// });

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//Database
mongoose.connect('mongodb://localhost/bdepoxy',{
    useNewUrlParser: true ,
     useUnifiedTopology:true
}
);
const db = mongoose.connection;

db.once('open',() =>{
    console.log("Conectado")
})

app.use('/api/productos',cors(corsOptions),Productos);
app.get('/', (req, res) =>  res.send('Welcome to EpoxyAPI'))

const server = app.listen(process.env.PORT || 8000, () => {
    console.log(`http://localhost:${server.address().port}`)
})
//export default app

// app.listen(3000,console.log("Escuchado de el puerto 3000"))

// ,(err,res) =>{
//     err && console.log("Error al conectar a la BD");
//     app.listen(3000,() =>{
//         console.log("Server corriendo en localhost puerto 3000 mi perro");
//     })
// }
