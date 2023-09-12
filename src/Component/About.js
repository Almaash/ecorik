import React from 'react'
import '../Style/About.css'
import g1 from '../Img/g1.jpg'
import g2 from'../Img/g2.jpg'
import g3 from'../Img/g3.jpg'


const About = () => {




  return (
    <>
      
      <div className="container-12">
        <center>
            <h1>About Us</h1>
            <h5>Who We are</h5>
        </center>
      </div>


      <div className="container-13">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">


                          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                              <div class="carousel-item active">
                                <img src={g1} class="d-block w-100" alt="..."/>
                              </div>
                              <div class="carousel-item">
                                <img src={g2} class="d-block w-100" alt="..."/>
                              </div>
                              <div class="carousel-item">
                                <img src={g3} class="d-block w-100" alt="..."/>
                              </div>
                            </div>
                          <button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="sr-only">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                              <span class="carousel-control-next-icon" aria-hidden="true"></span>
                              <span class="sr-only">Next</span>
                            </button>
                          </div>


                </div>
                <div className="col-lg-6">
                        <h2 className="wow fadeInRight" data-wow-duration="1s">About US</h2>
                        <p>Offering luxury, elegance, and world-class service, EcoRIK Hotel, a design hotel in Ranchi can be described in one word i.e. 'Unique'. A beautiful amalgamation of contemporary style and breathtaking views, EcoRIK Hotel, one of the best hotels in Ranchi offers you a dream-like stay.</p>

                            <p>If you're looking for a value-for-money hotel in the heart of the city, EcoRIK Hotel is a deal at a steal. An ideal choice for corporate and leisure travelers, it is located in Purulia Road with close proximity to the Ranchi railway station and Khadgardha bus stand. From the moment you step in, the hotel impresses you with personalization and professionalism.
                            
                            </p>
                            <p>The 30 spacious rooms and 2 suites at 3-star hotels in Ranchi offer a perfect balance of luxurious accommodation and warm hospitality. The excellent services and facilities live up to the expectations of its brand name. The corporate traveler will find the state-of-the-art business facilities and conference rooms exceeding his expectations. Dining options are interesting and entertaining and include a popular Zinnia Restaurant.</p>
                </div>
            </div>
        </div>
      </div>



    </>
  )
}

export default About
