import React from "react";

export default function HeaderText({ title, subtitle }) {
  return (
    <>
      <h1 className="hero__title">{title}</h1>
      <p className="hero__subtitle">{subtitle}</p>
    </>
  );
}
