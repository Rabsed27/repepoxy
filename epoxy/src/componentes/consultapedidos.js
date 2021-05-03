import React from 'react'
import {NavDropdown, Table} from 'react-bootstrap';
import  Func_Dropdawn  from '../componentes/Func_Dropdawn'
import jsPDF from 'jspdf';
import ReactDOMServer from "react-dom/server";

class consultapedidos extends React.Component {
state = {
        data:[]
}
async componentDidMount(){
    await this.buscaproductos()

}
buscaproductos = async () => {
    let res = await fetch('http://localhost:8000/api/productos/all');
    let data = await res.json();
    this.setState({data})

}


    render()

    {
        function generaPDF() {
            var doc = new jsPDF();
            doc.fromHTML(ReactDOMServer.renderToStaticMarkup(this.render()));
            doc.save("myDocument.pdf");
        }
        let arrayGetProductos = [];
       arrayGetProductos = this.state.data
       
        // var resultadoproductos = {
        //     cantidad: 10,
        //     preciototal:3 ,
        //     preciounitario: 2 ,
        //     producto: 1
        //  }
        // arrayGetProductos.push(resultadoproductos)
        const pedidosdinamico = (arrayGetProductos,index) =>{
            return (
             <tr key={index}>
                  <td>
                  {arrayGetProductos.nombre}
                  </td>
                  <td>
                  {arrayGetProductos.producto}
                  </td>
                  <td>
                  { new Intl.NumberFormat("en-IN").format(arrayGetProductos.preciounitario)}
                  </td>
                  <td>
                  {arrayGetProductos.cantidad}
                  </td>
                  <td>
                  {new Intl.NumberFormat("en-IN").format( arrayGetProductos.preciototal)}
                  </td>
                  <td>
                  {arrayGetProductos.colonia}
                  </td>
                  <td>
                  {arrayGetProductos.codigo}
                  </td>
                  <td>
                  {arrayGetProductos.estado}
                  </td>
              </tr>
           )                                
       }
     
       return(
                <div className="container">
                    {/* <form onSubmit={this.handleSubmit}> */}
                    <form>
                    <br/>
                        {/* <div className="form-group">
                            <Func_Dropdawn></Func_Dropdawn>
                        </div> */}
                        <br/>
                        <div className="form-group">
                            <Table striped bordered hover variant="dark">
                                    <thead>
                                        <tr>
                                        <th>Clientes</th>
                                        <th>Producto</th>
                                        <th>Precio unitario</th>
                                        <th>Cantidad</th>
                                        <th>Precio Total</th>
                                        <th>Colonia</th>
                                        <th>Codigo Postal</th>
                                        <th>Estado</th>
                                        </tr>
                                    </thead>
                                    <tbody>                       
                                        {arrayGetProductos.map(pedidosdinamico)}                                                        
                                    </tbody>
                            </Table>
                        </div>
                        <div> <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={() => generaPDF()}
                >
                    GENERAR COTIZACIÓN
                </button></div>
                    </form>
                </div>
            )   
    }
}
export default consultapedidos