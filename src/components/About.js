import React from "react";
import Container from "./Container"

export default function About() {
  return (
    <section className="about">
      <Container>
        <div className="about__item">
          <div className="about__img">
             <picture>
              <source srcset="assets/homepage/enjoyable-place-desktop.jpg" media="(min-width: 992px)" />
                <source srcset="assets/homepage/enjoyable-place-tablet.jpg" media="(min-width: 768px)" />
                <img src="assets/homepage/enjoyable-place-mobile.jpg" alt="green field with animals " />
             </picture>
          </div>          
          <div className="about__text">
            <h2>Enjoyable place for all the family</h2>
            <p>
              Our relaxed surroundings make dining with us a great experience
              for everyone. We can even arrange a tour of the farm before your
              meal.
            </p>
          </div>
        </div>
        <div className="about__item">
          <div className="about__img">
            <picture>
              <source srcset="assets/homepage/locally-sourced-desktop.jpg" media="(min-width: 992px)" />
                <source srcset="assets/homepage/locally-sourced-tablet.jpg" media="(min-width: 768px)" />
                <img src="assets/homepage/locally-sourced-mobile.jpg" alt="chef plating" />
             </picture>
          </div>
          <div className="about__text">
            <h2>The most locally sourced food</h2>
            <p>
              All our ingredients come directly from our farm or local fishery.
              So you can be sure that you’re eating the freshest, most
              sustainable food.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
