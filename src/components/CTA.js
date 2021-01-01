import React from 'react'
import { Link } from "react-router-dom"

export default function CTA() {
  return (
    <section className="cta">
      <h2 className="cta__heading">Ready to make a reservation?</h2>
      <Link to='/booking' className="btn btn--dark">Book a table</Link>
    </section>
  )
}
