import React from "react"
import logo from "../assets/logo.svg";
import {Link} from "react-router-dom";
import Container from "./Container";

export default function Footer () {
  return (
    <section className="footer">
      <Container>
        <div className="footer__contents">
          <Link to="/">
            <img src={logo} className="footer__logo" alt="dine logo" />
          </Link>
  {/* <address className="footer__address">
                Marthwaite, Sedbergh
                <br/>
                Cumbria
                <br/>
                +00 44 123 4567
            </address>
            <p className="footer__hours">
              Open times
              <br/>
              Mon - Fri: 9:00 am - 10:00 pm
              <br/>
              Sat - Sun: 9:00 am - 11:30 pm
  </p> */}

            <address className="footer__address"><span className="sr-only">Dine ltd.</span> 
              <p>Marthwaite, Sedbergh<span style={{display: "block"}}>Cumbria</span></p>
              <p className="phone"><span className="sr-only">Phone:</span>+00 44 123 4567</p></address>
              <p className="footer__hours">
                <h4>Open times</h4>
                <ul>
                  <li>Mon - Fri: 9:00 am - 10:00 pm</li>
                  <li>Sat - Sun: 9:00 am - 11:30 pm</li>
                </ul>              
  </p>

        </div>
      </Container>
    </section>
  )
}