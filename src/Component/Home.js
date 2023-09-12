
import React from 'react'
import '../Style/Home.css'
import home from '../Img/home.png'
import o1 from '../Img/o1.jpg'
import o2 from '../Img/o2.jpg'
import o3 from'../Img/o3.jpg'
import o4 from '../Img/o4.jpg'
import area from '../Img/aera.jpg'
import r from '../Img/r.jpg'
import { Link } from 'react-router-dom'


const Home = () => {




  return (
    <>
      
      <div className="container-2">
        <div className="container">
            <center><h1>Make Memories</h1>
            <p>Descover the place where you have fun and Enjoy a Lot</p></center>
            <div className="row">
                <div className="col-lg-3 col-6">

                    <div className="card">
                    <div className="card-body">
                       <center> <h5>Check-In</h5>
                        <input type="date"/></center>
                    </div>
                    </div>

                </div>
                <div className="col-lg-3 col-6">

                    <div className="card">
                    <div className="card-body">
                        <center>
                          <h5>Cheack-Out</h5>
                        <input type="date"/>
                        </center>
                    </div>
                    </div>

                </div>
                <div className="col-lg-3 col-6">

                    <div className="card">
                    <div className="card-body">
                        <center>
                          <h5>Adults</h5>
                        <input type="number"/>
                        </center>
                    </div>
                    </div>

                </div>
                <div className="col-lg-3 col-6">

                    <div className="card">
                    <div className="card-body">
                        <Link to="/accommodation"><button>Check Avaibility</button></Link>
                    </div>
                    </div>

                </div>
            </div>
        </div>
      </div>



      <div className="container-3">
        <div className="container"> 
            <center>
                <h6 className="wow slideInLeft" data-wow-duration="1s">~ E X P L O R E ~</h6>
                <h1 >We Are Cool to give you Pleasure</h1>
            </center>
            <div className="row">
                <div className="col-lg-6">
                    <h2 className="wow slideInLeft" data-wow-duration="1s">As much as comfort want to give from us everything.</h2>
                    <p className="wow slideInLeft" data-wow-duration="1s">Offering luxury, elegance, and world-class service, EcoRIK, a design hotel in Ranchi can be described in one word i.e. 'Unique'. A beautiful amalgamation of contemporary style and breathtaking views, EcoRIK, one of the best hotels in Ranchi offers you a dream-like stay.If you're looking for a value-for-money hotel in the heart of the city, EcoRIK is a deal at a steal. <br/> <br/>

                      The 30 spacious rooms and 2 suites at 3-star hotels in Ranchi offer a perfect balance of luxurious accommodation and warm hospitality. The excellent services and facilities live up to the expectations of its brand name.
                    </p>
                    <Link to="/accommodation"><button className="wow fadeInUp" data-wow-duration="1s">Check Avaibility</button></Link>
                </div>
                <div className="col-lg-6">
                    
                    <div className="container backcont "></div>
                        <img src={home} />

                    </div>
                </div>
            </div>
        </div>
      


      <div className="container-4">

        <div className="card">
        
                     <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active" data-interval="10000">
                      <h6>T H E &nbsp; C I T Y &nbsp; V I E W</h6>
                      <h4>A Charming View of the city</h4>
                      <center>
                          <p>Offering luxury, elegance, and world-class service, EcoRIK, a design hotel in Ranchi can be described in one word i.e. 'Unique'. A beautiful amalgamation of contemporary style and breathtaking views, EcoRIK,</p>
                          <p> one of the best hotels in Ranchi offers you a dream-like stay.If you're looking for a value-for-money hotel in the heart of the city, EcoRIK is a deal at a steal.</p>
                      </center>
                    </div>
                    <div className="carousel-item" data-interval="2000">
                      <h6>T H E &nbsp; C I T Y &nbsp; V I E W</h6>
                      <h4>A Charming View of the city</h4>
                      <center>
                          <p>The 30 spacious rooms and 2 suites at 3-star hotels in Ranchi offer a perfect balance of luxurious accommodation and warm hospitality. The excellent services and facilities live up to the expectations of its brand name.</p>
                          <p>Offering luxury, elegance, and world-class service, EcoRIK, a design hotel in Ranchi can be described in one word i.e. 'Unique'. A beautiful amalgamation of contemporary style and breathtaking views, EcoRIK,</p>
                      </center>
                    </div>
                    <div className="carousel-item">
                      <h6>T H E &nbsp; C I T Y &nbsp; V I E W</h6>
                      <h4>A Charming View of the city</h4>
                      <center>
                          <p>If you're looking for a value-for-money hotel in the heart of the city, EcoRIK is a deal at a steal. An ideal choice for corporate and leisure travelers, it is located in Purulia Road with close proximity to the Ranchi railway station and Khadgardha bus stand.</p>
                          <p> From the moment you step in, the hotel impresses you with personalization and professionalism.</p>
                      </center>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-target="#carouselExampleInterval" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-target="#carouselExampleInterval" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </button>
                
            </div>
          </div>

      </div>


      <div className="container-5">
        <div className="container">
          <center>
          <p className="wow slideInRight" data-wow-duration="1s">~ F A C I L I T I E S ~</p>
          <h1>Giving entirrely awsome</h1>
        
            <div className="row">
              <div className="col-lg-3">
                <div className="card wow slideInLeft" data-wow-duration="2s">
                    <div className="card-body">
                    <i className="fas fa-shipping-fast" style={{margin: '10px 0 15px 0', 
                    fontSize: '30px', color: '#cc8c18'}}></i>
                    <h5>Pick up & Drop</h5>
                    <p>We have pick and drop facilitates all over the city or outside the city</p>
                    </div>
                  </div>
              </div>

              <div className="col-lg-3 wow fadeIn" data-wow-duration="2s">
                <div className="card">
                    <div className="card-body">
                      <i className="fas fa-mug-hot"  style={{margin: '10px 0 15px 0', 
                    fontSize: '30px', color: '#cc8c18'}}></i>
                      <h5>Resturant</h5>
                      <p>We provide you the best food in EkoRIK, so you can have a great meal</p>
                    </div>
                  </div>
              </div>

              <div className="col-lg-3 wow fadeIn" data-wow-duration="2s ">
                <div className="card">
                    <div className="card-body">
                      <i className="fas fa-wifi" style={{margin: '10px 0 15px 0', 
                    fontSize: '30px', color: '#cc8c18'}}></i>
                      <h5>Fee Wi-fi</h5>
                      <p>The free WiFi fecilitie will give you the freedom of serving all over the Internet</p>
                    </div>
                  </div>
              </div>

              <div className="col-lg-3 wow slideInRight" data-wow-duration="2s">
                <div className="card">
                    <div className="card-body">
                      <i className="fas fa-car"  style={{margin: '10px 0 15px 0', 
                    fontSize: '30px', color: '#cc8c18'}}></i>
                      <h5>Parking Space</h5>
                      <p>We have the adiquate amoute of space so the you can feel free to park your vehicle</p>
                    </div>
                  </div>
              </div>
            </div>
          </center>
        </div>
      </div>






      <div className="container-6">
        <div className="container">

          <center>
            <h6 className="wow slideInLeft" data-wow-duration="1s">~ O U R &nbsp;&nbsp;&nbsp; R O O M S ~</h6>
            <h1>Facinating Room & Suites</h1>
          </center>
          <div className="row">
            <div className="col-lg-6">

              <div className="row">
                <div className="col-lg-6 col-6">
                  <div className="card mb-4">
                    <div className="card-body">
                      
                      <center>
                        <i className="fas fa-user-tie" style={{margin: '10px 0 15px 0', 
                      fontSize: '30px', color: '#775212'}}></i>
                        <p>EcoRIK</p>
                        <h5>Clean Room </h5>
                      </center>

                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-6">
                  <div className="card mb-4">
                    <div className="card-body">
                      
                      <center>
                        <i className="fas fa-dollar-sign" style={{margin: '10px 0 15px 0', 
                      fontSize: '30px', color: '#775212'}}></i>
                        <p>EcoRIK</p>
                        <h5>No Booking fee </h5>
                      </center>

                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-6">
                  <div className="card  mb-4">
                    <div className="card-body">
                      
                      <center>
                        <i className="fas fa-mug-hot" style={{margin: '10px 0 15px 0', 
                      fontSize: '30px', color: '#775212'}}></i>
                        <p>EcoRIK</p>
                        <h5>Breakfast Free </h5>
                      </center>

                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-6">
                  <div className="card mb-4">
                    <div className="card-body">
                      
                      <center>
                        <i className="fas fa-water" style={{margin: '10px 0 15px 0', 
                      fontSize: '30px', color: '#775212'}}></i>
                        <p>EcoRIK</p>
                        <h5>Swimming Pool </h5>
                      </center>

                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-6">
                  <div className="card mb-4">
                    <div className="card-body">
                      
                      <center>
                        <i className="fas fa-cocktail" style={{margin: '10px 0 15px 0', 
                      fontSize: '30px', color: '#775212'}}></i>
                        <p>EcoRIK</p>
                        <h5>BAR </h5>
                      </center>

                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-6">
                  <div className="card mb-4">
                    <div className="card-body">
                      
                      <center>
                        <i className="fas fa-weight" style={{margin: '10px 0 15px 0', 
                      fontSize: '30px', color: '#775212'}}></i>
                        <p>EcoRIK</p>
                        <h5>Free Gym </h5>
                      </center>

                    </div>
                  </div>
                </div>

              </div>

            </div>

            <div className="col-lg-6">
                <img src={r} alt=""/>
            </div>

          </div>
        </div>
      </div>



      <div className="container-7">
        <div className="container">
          <center>
            <h6 className="wow slideInRight" data-wow-duration="1s">~ E X C L U S I V E&nbsp;&nbsp;&nbsp; O F F E R S ~</h6>
            <h1 >You cana get an exclusive offers</h1>
          </center>
          <div className="row">
            <div className="col-lg-6">

              <div className="card mb-3 wow fadeIn" data-wow-duration="1s">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <img src={o1} alt="..."/>     
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">Suit Room</h5>
                    <p className="card-text">Our spacious and elegant Suites are meant to offer you the best of luxury and comfort,perfect for a business or leisure traveler .Each suite boasts of a separate living space and a dining space,  an electronic safe and Free high speed, wireless Internet.</p>
                    
                    <h5>From Rs.6000/nignt</h5>
                    <Link to="/accommodation"><Link to="/accommodation"><button>Check Avaibility</button></Link></Link>

                  </div>
                </div>
              </div>
            </div>

            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-duration="4s">

              <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <img src={o2} alt="..."/>
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">Premium Room</h5>
                    <p className="card-text">Spacious and aesthetic ,Premium rooms offer extra comfort and convenience to guests.The rooms either come with twin beds or king-sized beds.air conditioning, security locks, safes, microwaves, fridge, iron and ironing boards.
                      an electronic safe and Free high speed, wireless Internet.
                    </p>
                    
                    <h5>From Rs.5000/nignt</h5>
                    <Link to="/accommodation"><button>Check Avaibility</button></Link>

                  </div>
                </div>
              </div>
            </div>

            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-duration="1s">

              <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <img src={o3} alt="..."/>
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">Executive Room</h5>
                    <p className="card-text">Spaciously built and tastefully furnished,Executive rooms come equipped with all modern amenities to make your stay comfortable. Executive Suites also feature an LCD television, an electronic safe and Free high speed, wireless Internet.</p>
                    
                    <h5>From Rs.4300/nignt</h5>
                    <Link to="/accommodation"><button>Check Avaibility</button></Link>

                  </div>
                </div>
              </div>
            </div>

            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-duration="4s">

              <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <img src={o4} alt="..."/>
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">Deluxe Room</h5>
                    <p className="card-text">Deluxe rooms at Genista Inn spell absolute luxury and comfort.Rooms featuring elegant furnishings and a warm welcoming ambience ,ideal for a business stay or leisure travelers an electronic safe and Free high speed, wireless Internet.</p>
                    
                    <h5>From Rs.3500/nignt</h5>
                    <Link to="/accommodation"><button>Check Avaibility</button></Link>

                  </div>
                </div>
              </div>
            </div>

            </div>
          </div>
        </div>
      </div>

      <div className="container-8">
        <div className="container">
          <center>
            <h5 className="wow slideInLeft" data-wow-duration="1s">~ R E S T A U R A N T~</h5>
            <h1 >The area we cover under ecorik</h1>
          </center>
          <div className="row">
            <div className="col-lg-6">
              <div className="container backcont" ></div>
              <img src={area} />
            </div>

            <div className="col-lg-6 "  >
                <h6 className="wow slideInRight" data-wow-duration="1s"><span>Restaurant</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Swimming Pool</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Conferance room</span></h6>
                <p className="wow slideInRight" data-wow-duration="1s">The true essence of dining is realized when good food is accompanied with commendable service and complementing ambiance. We at Zinnia are here to provide the best restaurant service in Ranchi for making your outing special.</p>

                <p className="wow slideInRight" data-wow-duration="1s">Professional meetings can be pretty consuming and when it's about giving your best shot, no leaf should be left unturned. That’s why our conference hall is designed in such a way that facilitates all your technical requirements like a projector, display screen, etc.</p>
                <Link to="/accommodation"><button className="wow fadeInUp" data-wow-duration="1s" >Check Avaibility</button></Link>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Home
