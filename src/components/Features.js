import React, { useState } from 'react';
import { items } from '../data';

function Features() {
  const [featureInfo, setFeatureInfo] = useState(0);

  const {title, description, imgMob} = items[featureInfo]

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
        <img src={require('../images/homepage/family-gathering-mobile.jpg').default} alt={title}/>
      </article>
    </section>
  )
}

export default Features;