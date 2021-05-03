import React from 'react'
import SimpleReactLightbox from 'simple-react-lightbox';
import Logo from '../componentes/App'
import { datatranslucidos } from '../componentes/datatranslucidos';
import '../estilos/index.css';
//import Contenorimg from '../componentes/Contenorimg';
import ImsgeSlider from '../componentes/ImageSlider'
class pag_translucidos extends React.Component{
    render(){
     //   return 'que pex'
        return(
            <div><Logo></Logo>
       <React.StrictMode>
		<SimpleReactLightbox>
        <ImsgeSlider slides = {datatranslucidos}></ImsgeSlider>
			{/* <Contenorimg 
            ruta = "/img/TRANSLUCIDOS/"
            imgdinamica = {datatranslucidos}
            /> */}
		</SimpleReactLightbox>
	</React.StrictMode></div>
    )
        
    }

}
export default pag_translucidos