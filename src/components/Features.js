import React, { useState } from 'react';
import { items } from '../data';

function Features() {
  const [featureInfo, setFeatureInfo] = useState(0);

  const {title, description, imgName} = items[featureInfo]

  return (
    <section className="features">
      <div className="container">
        <article>
        {/* <img 
          srcSet={`assets/${imgName}-mobile.jpg 326w, assets/${imgName}-tablet.jpg 573w, assets/${imgName}-desktop.jpg 540w`}
          sizes="(min-width: 992px) 50vw, 100vw"
        src={`assets/${imgName}-mobile.jpg`} alt="family gathering"/> */}
          
          <picture>
            <source media="(max-width:767px)" srcSet={`assets/${imgName}-mobile.jpg`}/>
            <source media="(max-width:991px)" srcSet={`assets/${imgName}-tablet.jpg`}/>
            <img src={`assets/${imgName}-desktop.jpg`} alt={title}s/>
          </picture>

          <div className="features__info">
            <div className="btn-container">
              {items.map((item, index) => {
                return (
                  <button 
                    key={item.id}
                    onClick={() => setFeatureInfo(index)}>
                    {item.title}
                  </button>
                )} 
              )}
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </article>
      </div>    
    </section>
  )
}

export default Features;