





// import React, { useEffect, useState } from 'react';
// import '../estilos/App2.css';
// import imgcarrito from '../img/Logosyrecursos/Carrito.PNG'
// import { SRLWrapper } from 'simple-react-lightbox';
// //  const options = {

// // };
// function Contenorimg (props){
// 	const [tag, setTag] = useState('all');	
// 	const [filteredImages, setFilteredImages] = useState([]);

// 	//  if (props.ruta == '/img/TRANSLUCIDOS/'){
// 	// 	import images from './datamigas';
// 	//  }
// //  if (props.ruta == '/img/POLVO_PIGMENTOS/'){
		
// // 	const [datdinamico, images] = datapolvos
		
// // 	 }
	

// 	//  if (props.ruta == '/img/TRANSLUCIDOS/'){
		
// 	// 			tag === 'all' ? setFilteredImages(datapolvos) : setFilteredImages(datapolvos.filter(image => image.tag === tag));
// 	//  }
// 	 useEffect(
// 		() => {
// 			tag === 'all' ? 
// 		setFilteredImages(props.imgdinamica) : setFilteredImages(props.imgdinamica.filter(image => image.tag === tag));
// 		},
// 		[tag]
// 	 );
	

// 	return (
// 		<div className="App">
// 			{/* <div className="tags">
// 				<TagButton name="all" tagActive={tag === 'all' ? true : false} handleSetTag={setTag} /> /
// 				<TagButton name="new" tagActive={tag === 'new' ? true : false} handleSetTag={setTag} /> /
// 				<TagButton name="free" tagActive={tag === 'free' ? true : false} handleSetTag={setTag} /> /
// 				<TagButton name="pro" tagActive={tag === 'pro' ? true : false} handleSetTag={setTag} />
// 			</div> */}
// 			{/* <SRLWrapper options={options}> */}
// 			<SRLWrapper>
// 				<div className="container">
// 					{filteredImages.map(image => (
// 						<div key={image.id} className="image-card">
// 							<a href={`${props.ruta}${image.imageName}`}>
// 								<img className="image" src={`${props.ruta}${image.imageName}`} alt="" />
							
// 							</a>
											
// 						</div>	
										
						
// 					)		)}
// 				</div>
	
// 			</SRLWrapper>

// 						<div className="concarrito">
// 								{filteredImages.map(image => (
// 									<div key={image.id} className="image-card-carrito ">
// 										<a href="/Carrito">
// 											<img className="imagecarrito" src={imgcarrito} alt="" />							
// 										</a>											
// 									</div>																	
// 								)		)}
// 						</div>
// 		</div>
// 	);
// }

// //  const TagButton = ({ name, handleSetTag, tagActive }) => {
// // 	return (
// // 		<button className={`tag ${tagActive ? 'active' : null}`} onClick={() => handleSetTag('/pag/pa2')}>
// // 			{name.toUpperCase()}
// // 		</button>
// // 	);
// // };

// export default Contenorimg;
// //********************************************************************************************** */

// import React, { useEffect, useState } from 'react';
// import '../estilos/App2.css';
// import imgcarrito from '../img/Logosyrecursos/Carrito.PNG'

//   const contador = 0
// function Contenorimg (props){
// 	const [tag, setTag] = useState(props.imgdinamica[1]);	
// 	return (
// 		<div className="App">
// 				<div className="container">
// 						<div  className="image-card">
// 						<a >
// 							<img className="image" src={`${props.ruta}${tag}`} alt="" />
// 							<a href="/Carrito">
// 									<img className="imagecarrito" src={`${imgcarrito}`} alt="" />								
// 							</a>
// 						</a>
										
// 					</div>	
																						
// 				</div>						
// 		</div>
// 	);
// }



// export default Contenorimg;