import React,  {useState}   from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import '../estilos/dropdown.css';
import {Dropdown,DropdownItem,DropdownMenu,DropdownToggle} from 'reactstrap'
import traerDatosAppi from '../componentes/traerDatosAppi'
  function Func_Dropdawn(props){
const [dropdown,setDropdown]=useState(false);

const abrirCerrarDropdown = ()=>{
    setDropdown(!dropdown)
}
const datoscliente=()=>{
    alert("que si")
}
let arraypedisorprops = props.arraypedidos;
const pedidos = (arraypedisorprops,index) =>{
    return (
        <DropdownItem >
            arraypedisorprops.nombrecliente
        </DropdownItem>
    
   )                                
}
    return (
        <div className = "dropdown">

        <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}>
            <DropdownToggle caret className = "botonDropdown"  >
                Nombre Clientes
            </DropdownToggle>                              
        </Dropdown>

        <DropdownMenu>
            <DropdownItem heder>Clientes</DropdownItem>
            <DropdownItem >Accion 1</DropdownItem>
            {/* {arraypedisorprops.map(pedidos)}      */}
        </DropdownMenu>
    </div>
    )
  }
  export default  Func_Dropdawn