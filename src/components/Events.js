import React, { useState } from 'react';
import { eventItems } from '../assets/index';
import Button from "./Button";
import Container from "./Container";

function Events() {
  const [eventInfo, setEventInfo] = useState(0);
  const {title, description, images} = eventItems[eventInfo]
  const {mobile, tablet, desk} = images

  return (
    <section className="events">
      <h2 className="sr-only">events at dine</h2>
      <Container>
        <article>
          <picture>
            <source media="(min-width:992px)" srcSet={desk}/>
            <source media="(min-width:768px)" srcSet={tablet} />
            <img src={mobile} alt={title}  />
          </picture>
            <div className="btn-container">
              {eventItems.map((event, index) => {
                return (
                  <button className={`${index === eventInfo && 'selected'}`}
                    key={event.id}
                    onClick={() => setEventInfo(index)}>
                    {event.title}    
                  </button>
                )} 
              )}
            </div>
            <div className="events__info">
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