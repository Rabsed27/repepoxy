// // import React from 'react'
//  //import ImageSlider from '../componentes/ImageSlider'
// import { useParams } from 'react-router-dom'
// import { ArregloHistorial } from '../componentes/globales'
// import { Table } from 'react-bootstrap';
// function Carrito(){
//     if (ArregloHistorial.getItem("arrayproductos")){
//         var objeto = JSON.parse(ArregloHistorial.getItem("arrayproductos"));
       
//         for (var i in objeto) {
//           console.log(objeto[i])
//       }
    
//       }else {
//         console.log("no hay nada");
//       }
//      //const {id} = useParams()    
//      return (

//           <form onSubmit={this.handleSubmit}>
//                        <div className="form-group">
//                     <Table striped bordered hover variant="dark">
//                                <thead>
//                                  <tr>
//                                      <th>#</th>
//                                      <th>Producto</th>
//                                     <th>Precio unitario</th>
//                                      <th>Cantidad</th>
//                                     <th>Precio Total</th>
//                                      </tr>
//                                 </thead>
//                                  <tbody>
//                                     <tr>
//                                      <td>1</td>
//                                         <td>Mark</td>
//                                         <td>Otto</td>
//                                         <td>@mdo</td>
//                                          <td>@mdo</td>
//                                   </tr>
//                                      <tr>
//                                          <td>2</td>
//                                         <td>Jacob</td>
//                                         <td>Thornton</td>
//                                         <td>@fat</td>
//                                         <td>@mdo</td>
//                                     </tr>
//                                  <tr>
//                                       <td>3</td>
//                                          <td >Larry the Bird</td>
//                                         <td>@twitter</td>
//                                         <td>@mdo</td>
//                                     <td>@mdo</td>
//                                     </tr>
//                                      <tr>
//                                         <td>4</td>
//                                          <td >Larry the Bird</td>
//                                        <td>@twitter</td>
//                                         <td>@mdo</td>
//                                         <td>@mdo</td>
//                                     </tr>
//                              </tbody>
//                         </Table>
//                         <div/>
        
//       );
//     };
    




// };

//export default Carrito

// // // class Carrito extends React.Component {
    // const {id} = useParams()
// //     handleChange = e=>{
// //         this.setState({
// //             [e.]
// //         }

// //         )
// //     }
// //     render(){
// //         return'Yo sere el carrito para la imagen ' 
// //     }
// // }
// export default Carrito

import React from 'react'
import { Table } from 'react-bootstrap';
import { variableslocales } from '../componentes/globales'
import ReactDOM from 'react-dom';
import  MuestraPDF  from '../componentes/MuestraPDF'
import imagencabezapdf from '../img/Logosyrecursos/resina logo.png'

import { Page, View, Document,PDFViewer, Text,StyleSheet ,ReactPDF ,Font,Image,Table as tab2,TD as td2} from '@react-pdf/renderer';
import { NavbarWrapper } from "../styles/HeaderStyles"
class Carrito extends React.Component {
  
    state = {}

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
  
    render(){

//           const styles = StyleSheet.create({
//             image: {
//                 marginVertical: 15,
//                 marginHorizontal: 100,
//               },
//               page: { backgroundColor: 'tomato' },
//              section: { color: 'black', textAlign: 'center', margin: 30 },
//              body: {
//                 padding: 35,
//               },
//               content: {
//                 padding: 20,
//                 '@media max-width: 400': {
//                   flexDirection: 'column',
//                 },
//                 '@media min-width: 400': {
//                   flexDirection: 'row',
//                 },
//               },
//               block: {
//                 height: 150,
//                 width: 150,
//                 backgroundColor: 'red',
//               },
//           });
//           //COMPONENTES
//           const MediaComponentIMAGEN = () => (
//           <View style={styles.section}>
//           <Image
//                 style={styles.image}
//                 src={imagencabezapdf}/>
//           </View>
//  );
//           const MediaComponent = () => (
//             <View style={styles.content}>
//               <View style={[styles.block, { backgroundColor: 'red' }]} />
//               <View style={[styles.block, { backgroundColor: 'green' }]} />
//             </View>
//           );

//           const productosdinamicospdf = (arregloresultado,index) =>{
//             return (
//                 <View style={styles.section} >
//                     <Text>Producto</Text>
                 
//                   <Text>
//                   {arregloresultado.producto}
//                   </Text>       
//                   <Text>Precio unitario</Text>       
//                   <Text>
//                   { new Intl.NumberFormat("en-IN").format(arregloresultado.preciounitario)}
//                   </Text>
//                   <Text>Cantidad de productos</Text> 
//                   <Text>
//                   {arregloresultado.cantidad}
//                   </Text>
//                   <Text>Total</Text> 
//                   <Text>
//                   {new Intl.NumberFormat("en-IN").format( arregloresultado.preciototal)}
//                   </Text>
//                 </View>
//            )                                
//        }
//           const MyDocument2 = () => (
//             <Document>
//               <Page  style={styles.body} size={[900, 600]} > 
//                 <MediaComponentIMAGEN/>
               
       
//               </Page>
//               {/* <Page  style={styles.body} size={[900, 600]} > 

               
//                   {arregloresultado.map(productosdinamicospdf)} 
//               </Page> */}
              
//             </Document>
//           );
        function generaPDF() {

      
            //  const container = document.getElementById('root')
            // const App = () => (
            //     <PDFViewer>
            //       <MyDocument2 />
            //     </PDFViewer>
            //   );
              
            // ReactDOM.render(<App/>,container)

            // return (
            //   <div>
            //     <input ref={`${"/MuestraPDF/"}${<MyDocument ></MyDocument>}`} />
            //   </div>
            // );
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
            console.log(objeto[i]);
             if (objeto[i]["producto"] == "translucidos"){
                var producto  = objeto[i]["producto"] 
                contadorproductostrans = contadorproductostrans + 1               
                costounitariotrans = parseFloat(objeto[i]["preciounitario"])
      
                totalcostoproductostrans = parseFloat((costounitariotrans * contadorproductostrans))
       
                var objetoresultadotrans = {
                    cantidad: contadorproductostrans,
                    preciototal: totalcostoproductostrans,
                    preciounitario: costounitariotrans,
                    producto: producto
                 }
             }
             if (objeto[i]["producto"] == "polvo"){
                var producto =  objeto[i]["producto"] 
                console.log("Entra if polvo")
                contadorproductospolvos = contadorproductospolvos + 1
                console.log(contadorproductospolvos)
                costounitariopolvos = parseFloat(objeto[i]["preciounitario"])
                console.log(costounitariopolvos)
                totalcostoproductospolvos = parseFloat((costounitariopolvos * contadorproductospolvos))
                console.log(totalcostoproductospolvos)
                var objetoresultadopolvo = {
                    cantidad: contadorproductospolvos,
                    preciototal: totalcostoproductospolvos,
                    preciounitario: costounitariopolvos,
                    producto: producto
                 }
             }

             if (objeto[i]["producto"] == 'migas'){
                var producto = objeto[i]["producto"] 
                console.log("Entra if polvo")
                contadorproductosmigas = contadorproductosmigas + 1
                console.log(contadorproductosmigas)
                costounitariomigas = parseFloat(objeto[i]["preciounitario"])
                console.log(costounitariomigas)
                totalcostoproductosmigas = parseFloat((costounitariomigas * contadorproductosmigas))
                console.log(totalcostoproductosmigas)
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
          
         console.log(arregloresultado)


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
          const MyDocument = () => (
            <Document>
                 <Page>
                 <View>
        <div className="container">
        <form 
            onSubmit={this.handleSubmit}
        >
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
                    placeholder="Captura Nombre" 
                    name="Nombre"
                    onChange={this.handleChange}
                    value={this.state.title}
                />
            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Colonia" 
                    name="Colonia"
                    onChange={this.handleChange}
                    value={this.state.description}
                />
            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Codigo Postal" 
                    name="CP"
                    onChange={this.handleChange}
                    value={this.state.img}
                />
            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Estado" 
                    name="Estado"
                    onChange={this.handleChange}
                    value={this.state.img}
                />
            </div>
            
         <button 
                type="submit" 
                className="btn btn-primary"
                onClick={() => generaPDF()}
            >
                GENERAR COTIZACIÓN
            </button>


            <button 
                type="submit" 
                className="btn btn-primary"
            >
                SEGUIR COMPRANDO
            </button>
        </form>
    </div>
    </View> </Page> </Document>);
        return (<MyDocument ></MyDocument>
        )
    }
}

export default Carrito