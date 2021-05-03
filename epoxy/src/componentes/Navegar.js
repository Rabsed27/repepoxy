import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
 import Paginaindex from '../Paginas/PaginaIndex'
import pag_migas from '../Paginas/pag_migas'
import pag_polvo from '../Paginas/pag_polvos'
import pag_translucido from '../Paginas/pag_translucidos'
import carrito from '../Paginas/pag_carrito'
import consultapedidos from '../Paginas/pag_consulta_pedidos'
// import carritoback from '../componentes/Carritoback'
//  import MuestraPDF  from '../componentes/MuestraPDF'
function Navegar(){
    return(
            <BrowserRouter>
                <Route exact path="/migas" component = {pag_migas}/>
                <Route exact path="/polvo" component = {pag_polvo}/>
                <Route exact path="/translucido" component = {pag_translucido}/>
                <Route exact path="/Paginaindex" component = {Paginaindex}/>

                <Route exact path="/Carrito/:id" component = {carrito}/>
                 <Route exact path="/consultapedidos" component = {consultapedidos}/> 
              {/* <Route exact path="/MuestraPDF/:objeto" component = {MuestraPDF}/>    */}
                
            </BrowserRouter>

    )
}
export default Navegar