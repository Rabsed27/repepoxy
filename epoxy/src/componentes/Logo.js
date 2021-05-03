import React from 'react'
import "../estilos/Logo.css"
import "../estilos/carrito.css"
import imgLogo from  '../img/Logosyrecursos/resina logo.png'
import imgcarrito from '../img/Logosyrecursos/Carrito2.PNG'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

function Logo(){
    
    return(
        <Container>
            <Row>
                <Col>   
                    <a href="/Paginaindex" >
                        <img  src={imgLogo} className = "Logo"></img>
                    </a> 
                </Col>
                <Col>   
                     <a href= {`${"/Carrito/"}${1}`}>
                     <img src={imgcarrito}  className="Carrito"></img>
                    </a> 
                </Col>
            </Row>
 
        </Container>
//  <Container>
//         <div  className = "Logo">
//             <div className = "Logo-Tamanio">
//                 <a href="/Paginaindex" >
//                     <img  src={imgLogo} ></img>
//                 </a>                 
//                  <a href= {`${"/Carrito/"}${1}`} className = "Carrito" >
//                     <img src={imgcarrito}  className="Carrito-Tamanio"></img>
//                  </a>
//             </div>
//             <div  className = "Carrito">
          
//           </div>
//         </div>
// </Container>       
    )
        
    
}

export default Logo