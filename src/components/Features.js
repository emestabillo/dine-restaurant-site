import React, { useState } from 'react';
import { items } from '../data';
import { Link } from "react-router-dom";

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
            <source media="(max-width:767px)" srcSet={`assets/${imgName}-mobile.jpg`} />
            <source media="(max-width:991px)" srcSet={`assets/${imgName}-tablet.jpg`}/>
            <img src={`assets/${imgName}-desktop.jpg`} alt={title}  />
          </picture>

            {/*<picture>
            <source media="(max-width:767px)" srcSet={`assets/${imgName}-mobile@2x.jpg`}/>
            <source media="(max-width:991px)" srcSet={`assets/${imgName}-tablet@2x.jpg`}/>
            <img src={`assets/${imgName}-desktop@2x.jpg`} alt={title}/>
            </picture>*/}


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
            <Link to='/booking' className="btn btn--dark">Book a table</Link>
          </div>
          
        </article>
      </div>    
    </section>
  )
}

export default Features;