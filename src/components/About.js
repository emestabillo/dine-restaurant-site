import React from "react";
import Container from "./Container"
import {aboutItems} from "../assets/index"

function About() {
 return (
    <section className="about">
      <Container>
        {aboutItems.map((about) => {
          const {id, title, description, images, alt} = about
          const {mobile, tablet, desk} = images          
          return (
            <div key={id} className={`about__item ${id % 2 === 0 ?'last' : 'first'}`}>
              <div className="about__img">
                <picture>
                  <source srcSet={desk} media="(min-width: 1200px)" />
                  <source srcSet={tablet} media="(min-width: 768px)" />
                  <img src={mobile} alt={alt} />
                </picture>
              </div>
            <div className="about__text">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
          )})
        }
      </Container>
    </section>
  )}

export default About
