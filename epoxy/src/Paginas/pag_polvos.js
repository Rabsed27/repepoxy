import React from 'react'
import SimpleReactLightbox from 'simple-react-lightbox';
import Logo from '../componentes/App'
import { datapolvos } from '../componentes/datapolvos';
import '../estilos/index.css';
//import Contenorimg from '../componentes/Contenorimg';
import ImsgeSlider from '../componentes/ImageSlider'
import { paginahistoria } from "../componentes/globales"
class pag_polvos extends React.Component{
    render(){
       // paginahistoria = '/polvo'
     //   return 'que pex'
        return(
            <div><Logo></Logo>
       <React.StrictMode>
		<SimpleReactLightbox>
        <ImsgeSlider slides = {datapolvos}></ImsgeSlider>
			{/* <Contenorimg 
            ruta = "/img/POLVO_PIGMENTOS/"
            imgdinamica = {datapolvos}
            /> */}
		</SimpleReactLightbox>
	</React.StrictMode></div>
    )
        
    }

}
export default pag_polvos