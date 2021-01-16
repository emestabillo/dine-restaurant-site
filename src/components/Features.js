import React, { useState } from 'react';
import { items } from '../data';
import Button from "./Button";
import Container from "./Container";

function Features() {
  const [featureInfo, setFeatureInfo] = useState(0);
  const {title, description, imgName} = items[featureInfo]

  return (
    <section className="features">
      <Container>
        <article>
          <picture>
            <source media="(max-width:767px)" srcSet={`assets/homepage/${imgName}-mobile.jpg`} />
            <source media="(max-width:991px)" srcSet={`assets/homepage/${imgName}-tablet.jpg`}/>
            <img src={`assets/homepage/${imgName}-desktop.jpg`} alt={title}  />
          </picture>
          <div className="features__info">
            <div className="btn-container">
              {items.map((item, index) => {
                return (
                  <button className={`${index === featureInfo && 'selected'}`}
                    key={item.id}
                    onClick={() => setFeatureInfo(index)}>
                    {item.title}                  
                  </button>
                )} 
              )}
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
            <Button link="/booking" btnType="btn--dark" btnText="Book a table"></Button>
          </div>          
        </article>      
      </Container>   
    </section>
  )
}

export default Features;