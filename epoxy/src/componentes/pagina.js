import React from 'react'
import Imagen1 from '../img/Logosyrecursos/fda.png'
import Imagen from '../img/Imágenesdeproductos/TRANSLUCIDOS/28.png'
import '../estilos/pagina.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Alert, Breadcrumb, Card} from 'react-bootstrap'
class Pagina extends React.Component {
    render(){
        const {nombre} = this.props
        return 'Hola ' //nombre
        // return (
        
        //             <div className="card mx-auto Fitness-Card"
        //               style={{
        //                 backgroundImage:`url(${Imagen}) linear-gradient(to right, ${rightColor}, ${leftColor})`
        //             }}   
        //             >
                   
        //                      <div className="card-body"> 
        //                          <div className="row center">
        //                              <div className="col-12">
        //                              {/* <Card  style={{color:"#A74CF2"}}>
        //                                 <Card.img src= "https://picsum.photos/200/100"/>
        //                                 <Card.Body>
        //                                     <Card.Title>
        //                                         que pex
        //                                     </Card.Title>
        //                                 </Card.Body>
        //                                 </Card> */}
        //                                 <img src={Imagen1} className="float-right"/> 
                                  
        //                             </div>               
        //                         </div>
        //                    </div>
        //                  </div>           
          
            
        // )
       
    }

}

export default Pagina