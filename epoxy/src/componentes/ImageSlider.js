import React, { useState } from 'react';
import '../estilos/App2.css';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import "../estilos/Slider.css"
import imgcarrito from '../img/Logosyrecursos/Carrito.PNG'
import { variableslocales } from '../componentes/globales'
import { Link } from 'react-router-dom'
//Agregar valor a arreglo de session
const agregarElemento = (id,tipoproducto,costo) => {
  // console.log("Entra func");
  // ArregloHistorial.setItem("producto",tipoproducto)
  // ArregloHistorial.setItem("preciounitario",costo)
  // ArregloHistorial.setItem("cantidad",0)
  // ArregloHistorial.setItem("preciototal",0.0)
  // console.log(ArregloHistorial.getItem("producto"));
  // console.log(ArregloHistorial.getItem("preciounitario"));
  // console.log(ArregloHistorial.getItem("cantidad"));
  // console.log(ArregloHistorial.getItem("preciototal"));
//   cantidades = cantidades + 1
//   total = cantidades * costo

  let objetoproductosPASO = 
    {
      producto:tipoproducto,		
        preciounitario:costo,
        cantidad:id,
        preciototal:0.0
    }
    if (variableslocales.getItem("variableslocales")){
      var arrayproductos = JSON.parse(variableslocales.getItem("variableslocales"));
      arrayproductos.push(objetoproductosPASO)    
      console.log(arrayproductos);
      variableslocales.setItem('variableslocales', JSON.stringify(arrayproductos));
  //     for (var i in objeto) {
  //      console.log(objeto[i])
  //   }
    }else {
      var arrayperro =[objetoproductosPASO];
      variableslocales.setItem('variableslocales', JSON.stringify(arrayperro));
      console.log(arrayperro);
     console.log("no hay nada");
    }


    
  //   console.log(tipoproducto);
  // console.log(costo);
 


  

  
}



const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }


  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
               <img src={slide.image} alt='travel image' className='image' />  

            )}
            {/* <button  onClick={() => agregarElemento(slide.id,slide.tipoproducto,slide.costo)}   className="imageCarrito" src={imgcarrito}></button> */}
					{/* <a href= {`${"/carrito/"}${slide.id}`}>                             
    
              <img className="imageCarrito" src={imgcarrito} />
              </a>	 */}
           
              <Link key={index} href= "#"  onClick={() => agregarElemento(slide.id,slide.tipoproducto,slide.costo)}>                             
              <img  className="imageCarrito" src={imgcarrito} />
              </Link>	
      
         
          </div>      								    
        );
      })}
    </section>
  );
};

export default ImageSlider;