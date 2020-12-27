import React from "react";
import Header from "../components/Header";
import HeaderText from "../components/HeaderText";
import Container from "../components/Container";
import CTA from "../components/CTA";

// import logo from "../images/logo.svg";

function Home() {
  return (
    <Header hero="homeHeader">
      <Container>
        <div className="hero">
          <HeaderText
            title="Exquisite dining since 1989"
            subtitle="Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse"
          ></HeaderText>
          <CTA ctaColor="cta--dark" ctaText="Book a table" />
        </div>
      </Container>
    </Header>
  );
}

export default Home;
