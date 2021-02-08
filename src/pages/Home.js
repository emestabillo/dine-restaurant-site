import React from "react";
import Header from "../components/Header";
import HeaderText from "../components/HeaderText";
import Events from "../components/Events";
import CTA from "../components/CTA";
import About from "../components/About";
import { MenuList } from "../components/MenuList";
import Button from "../components/Button"
import useWindowWidth from "../components/useWindowWidth"
import homeHeaderDesk from "../assets/homepage/hero-bg-desktop.jpg"
import homeHeaderTab from "../assets/homepage/hero-bg-tablet.jpg"
import homeHeaderMob from "../assets/homepage/hero-bg-mobile.jpg"

function Home() {
  const windowWidth = useWindowWidth();

  const imageUrl = () => {
    if (windowWidth >= 992) {
      return homeHeaderDesk
    } else if 
      (windowWidth >= 768) {
        return homeHeaderTab
    } else {
      return homeHeaderMob
    }
  }

  return (
    <>
      <Header hero="homeHeader" style={{ backgroundImage: `{url(${imageUrl})}`}}>
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
