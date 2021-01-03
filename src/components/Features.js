import React, { useState } from 'react';
import { items } from '../data';

function Features() {
  const [featureInfo, setFeatureInfo] = useState(0);

  const {title, description, imgName} = items[featureInfo]

  return (
    <section className="features">
      <div className="container">
        <div className="btn-container">
        {items.map((item, index) => {
          return (
            <button 
              key={item.id}
              onClick={() => setFeatureInfo(index)}>
              {item.title}
            </button>
          )
        } )}
        </div>
      </div>
      <article>
        <h2>{title}</h2>
        <p>{description}</p>
        <img 
        srcSet={`assets/${imgName}-mobile.jpg 375w, assets/${imgName}-tablet.jpg 768w, assets/${imgName}-desktop.jpg 992w`}
        // sizes="(max-width: 767px) 375vw, (max-width: 991px) 991vw, 992vw"
        src={`assets/${imgName}-mobile.jpg`} alt="family gathering"/>
       {/* <img src={require('../images/homepage/family-gathering-mobile.jpg').default} alt={title}/> */}
      </article>
    </section>
  )
}

export default Features;