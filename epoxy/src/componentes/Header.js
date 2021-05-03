import React, { useState } from "react";
import { HeaderWrapper } from "../styles/Header";
import Navbar from "./Navbar";
import MenuButton from "./MenuButton";
import Logo from './Logo'

function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <HeaderWrapper>
      <h2><Logo></Logo></h2>
      <Navbar open={open} />
      <MenuButton open={open} handleClick={handleClick} />
    </HeaderWrapper>
  );
}

export default Header;
