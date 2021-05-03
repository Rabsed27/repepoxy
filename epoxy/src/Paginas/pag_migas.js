import React, { Children } from 'react'
import SimpleReactLightbox from 'simple-react-lightbox';
import Logo from '../componentes/App'
import { datamigas } from '../componentes/datamigas';
import '../estilos/index.css';
import ImsgeSlider from '../componentes/ImageSlider';
import  paginahistoria  from "../componentes/globales";
class pag_migas extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.state = {datamigas}
    // }
    
   // paginahistoria = '/migas'
    render(){
     
        return(
            <div><Logo></Logo>
       <React.StrictMode>
		<SimpleReactLightbox>
            <ImsgeSlider slides = {datamigas}></ImsgeSlider>
			{/* <Contenorimg 
            ruta = "/img/MIGAS_PIGMENTOS/"
                imgdinamica = {datamigas}
            /> */}
            {/* {this.state.datamigas} */}
		</SimpleReactLightbox>
	</React.StrictMode></div>
    )
        
    }

}
export default pag_migas