import React from "react";
import logo from "../images/logo.svg";

function Header({ children, hero }) {
  return (
    <header className={hero}>
      <a href="/">
        <img src={logo} alt="dine logo" />
      </a>
      {children}
    </header>
  );
}

export default Header;
