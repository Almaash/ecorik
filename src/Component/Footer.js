import '../Style/Footer.css'
import logo from '../Img/logo.png'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      
      <div className="container-9">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <img src={logo} alt=""/> <br/><br/>
              <p > EcoRIK, a design hotel in Ranchi can be described in one word i.e. 'Unique'. <br /> A beautiful amalgamation of contemporary style and breathtaking views, EcoRIK, one of the best hotels in Ranchi offers you a dream-like stay.</p>
            </div>

            <div className="col-lg-3 col-6">
               <h3>Quick Links</h3>
               <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
                <Link to="/accommodation"><li>Accommodation</li></Link>
                
               </ul>
            </div>

            <div className="col-lg-3 col-6">
              <h3>Services</h3>
              <ul>
                <li>Restaurant</li>
                <li>Swimming pool</li>
                <li>Conferance room</li>
                <li>Events</li>
              </ul>
            </div>

            <div className="col-lg-3">
              <h3>Contact</h3>
              <h5>Address</h5>
              <p>Ranchi, Jharkhand</p>
              
              <h5>Phone</h5>
              <p>+123 456 789</p>

              <h5>Email</h5>
              <p>Hotel@gmail.com</p>

            </div>

          </div>
         
        </div>
      </div>


    </>
  )
}

export default Footer
