import React from "react"
import { NavbarWrapper } from "../styles/HeaderStyles"

function Navbar({ open }) {

  return (
  
    <NavbarWrapper open={open}>
     
      <a href="/migas">MIGAS PIGMENTOS</a>
      <a href="/polvo">POLVO PIGMENTOS</a>
      <a href="/translucido">TRANSLUCIDOS</a> 

    </NavbarWrapper>
    
  )

}

export default Navbar