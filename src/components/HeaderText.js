import React from "react";
// import logo from "../images/logo.svg";

function HeaderText({ title, subtitle }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}

export default HeaderText;
