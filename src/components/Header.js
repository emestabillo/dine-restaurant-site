import React from "react";
import logo from "../images/logo.svg";
import {Link} from "react-router-dom";

export default function Header({ children, hero }) {
  return (
    <header className={`header ${hero}`}>
      <Link to="/">
        <img src={logo} className="logo" alt="dine logo" /></Link>
      {children}
      
    </header>
  );
}
