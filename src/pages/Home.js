import React from "react";
import Header from "../components/Header";
import HeaderText from "../components/HeaderText";
// import Container from "../components/Container";
import CTA from "../components/CTA";
import About from "../components/About";
import { MenuList } from "../components/MenuList";

// import logo from "../images/logo.svg";

function Home() {
  return (
    <>
      <Header hero="homeHeader">
        <div className="container">
          <div className="hero">
            <HeaderText
              title="Exquisite dining since 1989"
              subtitle="Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse"
            ></HeaderText>
            <CTA ctaColor="cta--dark" ctaText="Book a table" />
          </div>
        </div>
      </Header>
      <About />
      <MenuList/>
    </>
  );
}

export default Home;
