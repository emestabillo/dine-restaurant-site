import React from "react";
import logo from "../assets/logo.svg";
import {Link} from "react-router-dom";
import Container from "./Container"

export default function Header({ children, hero }) {
  return (
    <header className={`header ${hero}`}>
      <Container>
        <div className="hero">
            <Link to="/">
              <img src={logo} className="header__logo" alt="Dine Home" />
            </Link>
            {children}
        </div>      
      </Container>       
    </header>
  );
}
