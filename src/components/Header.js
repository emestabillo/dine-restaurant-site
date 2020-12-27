import React from "react";
import logo from "../images/logo.svg";

export default function Header({ children, hero }) {
  return (
    <header className={`header ${hero}`}>
      <a href="/">
        <img src={logo} className="logo" alt="dine logo" />
      </a>
      {children}
    </header>
  );
}
