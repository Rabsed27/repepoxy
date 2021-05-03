

import React from 'react'
import { Table } from 'react-bootstrap';
import { variableslocales,liataGLOBAL,paginahistoria } from '../componentes/globales'
import axios from 'axios'
import { Link } from 'react-router-dom'
class Carrito extends React.Component {
  
    state = {}

    handleSubmit = async e => {
        // let lisclon=[]
        
        
        e.preventDefault()

      var  otralista = this.state
        

        // otralista.forEach(element => 
        //     //listdefiniba =  liataGLOBAL.concat(element)
        //     console.log(element)
        //         );
        //GENERAMOS FOLIO
        const tiempoTranscurrido = Date.now();
        var d = new Date(tiempoTranscurrido),
        month = d.getMonth() ,
        day = d.getDate(),
        year = d.getFullYear();        
        var strfolio = 'EPOX' 
        //+++++++++++++++++++++++++++++++
        var listdefiniba =[]
      
        for (var i in liataGLOBAL) {
           
            listdefiniba =  liataGLOBAL[i]//.concat(otralista)

        }
       // listdefiniba =  liataGLOBAL
  
         for (var i in listdefiniba) {

            var nombre = ''
            var codigo = ''
            var colonia = ''
            var estado = ''
                
                    Object.keys(otralista).map((onekey,i)=> {
                    if ([i]== 0){
                        nombre = otralista[onekey]
                        strfolio = strfolio +nombre
                    }
                    if ([i]== 2){
                        codigo = otralista[onekey]
                }
                if ([i]== 1){
                        colonia = otralista[onekey]
                    }
                    if ([i]== 3){
                        estado = otralista[onekey]
                    }

                    })
             let objetoguardar ={
                folio : strfolio,
                cantidad : listdefiniba[i]['cantidad'],
                preciototal : listdefiniba[i]['preciototal'],
                preciounitario : listdefiniba[i]['preciounitario'],
                producto : listdefiniba[i]['producto'],
                nombre:nombre,
                codigo : codigo,
                colonia : colonia,
                estado : estado
                
                }
          
                
           const response = await axios({
            url: 'http://localhost:8000/api/productos/add',
            method:'post',
            data:objetoguardar,
            })
            console.log(response)
       
        
         }      
         variableslocales.clear();
         window.location.reload(true);
    }
    

    handleChange = e => {
         
        this.setState({
            ...this.state.form,
            [e.target.name]: e.target.value
        })
        
    }

// regresa = funregresa =>{
//     this.props.history.goBack
// }

    render()

  {
            
    function guardaproducto(arrayfin) {
        
       // liataGLOBAL = liataGLOBAL

   
      // arrayfin.concat(arrayfin)
    liataGLOBAL.push(arrayfin)
    //console.log(liataGLOBAL)
    }
  

        var contadorproductostrans = 0
        var contadorproductospolvos = 0
        var contadorproductosmigas = 0
        var totalcostoproductostrans = 0
        var totalcostoproductospolvos = 0.0
        var totalcostoproductosmigas = 0
        var costounitariotrans = 0
        var costounitariopolvos = 0.0
        var costounitariomigas = 0.0
        var  arregloresultado = [];
        
        
    
        if (variableslocales.getItem("variableslocales")){
            var objeto = JSON.parse(variableslocales.getItem("variableslocales"));
            
            for (var i in objeto) {
           // console.log(objeto[i]["producto"]);
           // console.log(objeto[i]);
             if (objeto[i]["producto"] == "translucidos"){
                var producto  = objeto[i]["producto"] 
                contadorproductostrans = contadorproductostrans + 1               
                costounitariotrans = parseFloat(objeto[i]["preciounitario"])
      
                totalcostoproductostrans = parseFloat((costounitariotrans * contadorproductostrans))
                // producto: req.body.producto,
                // preciounitario: req.body.preciounitario,
                // cantidad: req.body.candidad,
                // preciototal: req.body.preciototal,
                // nombrecliente: req.body.nombrecliente,
                // colonia: req.body.colonia,
                // codigopostal: req.body.codigopostal,
                // estado: req.body.estado
                var objetoresultadotrans = {
                   // producto: 
                    cantidad: contadorproductostrans,
                    preciototal: totalcostoproductostrans,
                    preciounitario: costounitariotrans,
                    producto: producto
                 }
             }
             if (objeto[i]["producto"] == "polvo"){
                var producto =  objeto[i]["producto"] 
                //console.log("Entra if polvo")
                contadorproductospolvos = contadorproductospolvos + 1
                //console.log(contadorproductospolvos)
                costounitariopolvos = parseFloat(objeto[i]["preciounitario"])
                //console.log(costounitariopolvos)
                totalcostoproductospolvos = parseFloat((costounitariopolvos * contadorproductospolvos))
                //console.log(totalcostoproductospolvos)
                var objetoresultadopolvo = {
                    cantidad: contadorproductospolvos,
                    preciototal: totalcostoproductospolvos,
                    preciounitario: costounitariopolvos,
                    producto: producto
                 }
             }

             if (objeto[i]["producto"] == 'migas'){
                var producto = objeto[i]["producto"] 
                //console.log("Entra if polvo")
                contadorproductosmigas = contadorproductosmigas + 1
                //console.log(contadorproductosmigas)
                costounitariomigas = parseFloat(objeto[i]["preciounitario"])
                //console.log(costounitariomigas)
                totalcostoproductosmigas = parseFloat((costounitariomigas * contadorproductosmigas))
                //console.log(totalcostoproductosmigas)
                var objetoresultadomigas = {
                    cantidad: contadorproductosmigas,
                    preciototal: totalcostoproductosmigas,
                    preciounitario:  costounitariomigas,
                    producto: producto
                 }
             }
            
            
          }
  
          if(objetoresultadotrans){
            arregloresultado.push(objetoresultadotrans)
          }
          if(objetoresultadopolvo){
            arregloresultado.push(objetoresultadopolvo)
        }
        if(objetoresultadomigas){
            arregloresultado.push(objetoresultadomigas)
        }
          
         
         
        
        
          }else {
           console.log("no hay nada");
          }
          
         //console.log(arregloresultado)


           const productosdinamicos = (arregloresultado,index) =>{
               return (
                <tr key={index}>
                     <td>
                     {arregloresultado.producto}
                     </td>
                     <td>
                     { new Intl.NumberFormat("en-IN").format(arregloresultado.preciounitario)}
                     </td>
                     <td>
                     {arregloresultado.cantidad}
                     </td>
                     <td>
                     {new Intl.NumberFormat("en-IN").format( arregloresultado.preciototal)}
                     </td>
                 </tr>
              )                                
          }
 
        return(
            <div className="container">
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                            <th>Producto</th>
                            <th>Precio unitario</th>
                            <th>Cantidad</th>
                            <th>Precio Total</th>
                            </tr>
                        </thead>
                        <tbody>
                        {/* <tr><td></td></tr> */}
               {arregloresultado.map(productosdinamicos)}
                           
                           
                        </tbody>
                </Table>
    
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Nombre Completo" 
                        name="nombre"
                        onChange={this.handleChange}
                        value={this.state.Nombre}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Colonia" 
                        name="colonia"
                        onChange={this.handleChange}
                        value={this.state.Colonia}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Codigo Postal" 
                        name="codigo"
                        onChange={this.handleChange}                   
                        value={this.state.Codigo}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Estado" 
                        name="estado"
                        //  onChange={(e)=>this.setField(e)}
                        onChange={this.handleChange}   
                 
                         value={this.state.Estado}
                    />
                </div>
              <div className="form-group"> 
             <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={() => guardaproducto(arregloresultado)}
                >
                    GENERAR COTIZACIÓN
                </button>


                
               

                </div> 
    
    <div className="form-group">
        <ul className="btn btn-primary"  >
            <li  >

                <Link to={paginahistoria}> </Link>
                SEGUIR COMPRANDO 
            </li>
        </ul>
    {/* <button  
                    type="submit" 
                    className="btn btn-primary"
                    href="/migas"
                >
                    SEGUIR COMPRANDO
                </button> */}
    </div>
               
            </form>
        </div>
        )
    }
}

export default Carrito