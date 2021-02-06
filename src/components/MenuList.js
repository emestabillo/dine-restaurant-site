import React from "react";
import Container from "./Container";
import { menuItems } from "../assets/index";

export const MenuList = () => {
  return (
    <section className="menu">
      <Container>
        <div className="menu__content">
          <header>
            <h2>A few highlights from our menu</h2>
            <p>
              We cater for all dietary requirements, but here’s a glimpse at
              some of our diner’s favourites. Our menu is revamped every season.
            </p>
          </header>
          <ul className="menu__list">
            {menuItems.map((item) => {
              const { id, title, description, images } = item;
              const { mobile, desk } = images;
              return (
                <li key={id} className="menu__item">
                  <picture>
                    <source media="(min-width:768px)" srcSet={desk} />
                    <img src={mobile} alt="" />
                  </picture>
                  <div className="menu__text">
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
};
