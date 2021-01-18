import React from "react";
import Header from "../components/Header";
import HeaderText from "../components/HeaderText";
import Events from "../components/Events";
import CTA from "../components/CTA";
import About from "../components/About";
import { MenuList } from "../components/MenuList";
import Button from "../components/Button"

function Home() {
  return (
    <>
      <Header hero="homeHeader">
        <HeaderText
          title='Exquisite dining since 1989'
          subtitle="Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.">
          </HeaderText>
        <Button link="/booking" btnType="btn--light" btnText="Book a table"></Button>
      </Header>
      <About />
      <MenuList/>
      <Events />
      <CTA />
    </>
  );
}

export default Home;
