import React, { useState } from 'react';
import { events } from '../data';
import Button from "./Button";
import Container from "./Container";

function Events() {
  const [eventInfo, setEventInfo] = useState(0);
  const {title, description, imgName} = events[eventInfo]

  return (
    <section className="events">
      <Container>
        <article>
          <picture>
            <source media="(max-width:767px)" srcSet={`assets/homepage/${imgName}-mobile.jpg`} />
            <source media="(max-width:991px)" srcSet={`assets/homepage/${imgName}-tablet.jpg`}/>
            <img src={`assets/homepage/${imgName}-desktop.jpg`} alt={title}  />
          </picture>
          <div className="features__info">
            <div className="btn-container">
              {events.map((event, index) => {
                return (
                  <button className={`${index === featureInfo && 'selected'}`}
                    key={event.id}
                    onClick={() => setEventInfo(index)}>
                    {event.title}                  
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

export default Events;