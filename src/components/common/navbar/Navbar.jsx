import React from "react";
import "./style.scss";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h3 className="logo">OKRA</h3>
      <GiHamburgerMenu color="white" />
    </nav>
  );
};

export default Navbar;
