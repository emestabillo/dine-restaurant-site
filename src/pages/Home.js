import React from "react";
import Header from "../components/Header";
import HeaderText from "../components/HeaderText";

// import logo from "../images/logo.svg";

function Home() {
  return (
    <>
      <Header hero="homeHeader">
        <HeaderText
          title="Exquisite dining since 1989"
          subtitle="Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse"
        ></HeaderText>
      </Header>
    </>
  );
}

export default Home;
