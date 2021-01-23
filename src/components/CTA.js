import React from 'react'
import Container from "./Container"
import Button from "./Button"

export default function CTA() {
  return (
    <section className="cta">
      <Container>
        <div className="cta__text">
          <h2>Ready to make a reservation?</h2>
          <Button link="/booking" btnType="btn--light" btnText="Book a table"></Button>
        </div>       
      </Container>    
    </section>
  )
}
