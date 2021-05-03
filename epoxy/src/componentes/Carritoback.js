 import React,{useState,localStorage} from 'react'
 import ImageSlider from '../componentes/ImageSlider'
import { useParams } from 'react-router-dom'
import { arrayproductos } from '../componentes/globales'
function Carritoback(){
   
    const {id} = useParams()
    var detail = { name:"Annanomys", email:"annanomys@gmail.com", age:20 };
    // localStorage.setItem('Detail', JSON.stringify(detail));
    // var json = localStorage.getitem('email')
    console.log(detail)
}
export default Carritoback

// class Carrito extends React.Component {
//     // const {id} = useParams()
//     handleChange = e=>{
//         this.setState({
//             [e.]
//         }

//         )
//     }
//     render(){
//         return'Yo sere el carrito para la imagen ' 
//     }
// }
// export default Carrito
