import React from 'react'
import { Link } from 'react-router-dom'

const Rooms = (props) => {
  return (
    <>
                      <hr style={{marginBottom:'80px',  borderTop: '5px dotted #a36f0e'}}/>
                    <div className="row">
                    
                      <div className="col-lg-6">
                     
                        <img src={props.img1} alt=''/>
                        </div>
                      <div className="col-lg-6">

                       <u style={{borderBottom: '3px solid #a36f0e'}}> <Link to="">{props.roomtitle}</Link></u><br /><br />
                        <p style={{textAlign:'justify',paddingRight:'50px'}}>{props.desc}</p>

                        <h3>PLEASE ENJOY</h3>

                        <div className="row">
                          <div className="col-lg-6">
                              <ul>
                                  <li>Express laundry service</li>
                                  <li>In-room electronic safe</li>
                              </ul>
                          </div>
                          <div className="col-lg-6">
                          <ul>
                                  <li>Free wireless Internet</li>
                                  <li>Large writing table</li>
                              </ul>
                          </div>
                        </div>

                        <hr />
                        <div className="container-det">
                          <p>Starting</p> &nbsp;
                          <h4>{props.price}</h4> &nbsp;
                          <p>/Day</p>

                          <Link to={props.room}><button className='btn1' style={{marginLeft:"300px"}}>View Details</button></Link>
                          {/* <Link to={props.room}><button className='btn2'>Book Now</button></Link> */}
                        </div>
                        <hr style={{marginBottom:'80px'}}/>

                        </div>
                    </div>
                        
                    


                    

                     


    </>
  )
}

export default Rooms
