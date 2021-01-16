import React from 'react'
import { Link } from "react-router-dom"
import Container from "./Container"

export default function CTA() {
  return (
    <section className="cta">
      <Container>
        <div className="cta__text">
          <h2 className="cta__heading">Ready to make a reservation?</h2>
          <Link to='/booking' className="btn btn--light">Book a table</Link>
        </div>       
      </Container>    
    </section>
  )
}
