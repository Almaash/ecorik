import React from 'react'
import deluxe from '../Img/delux.jpg'
import { Link } from 'react-router-dom'

const DeluxeRoom = () => {
  return (
    <>
     

    
<div className="container-acc">
            <center>
                <h1>~ Deluxe Room ~</h1>
                <h5>Best rate & facilities guaranteed</h5>
            </center>
        </div>

        <div className="container-suite">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={deluxe} alt='' />
                    </div>
                    <div className="col-lg-6">

                    <div class="card">

                        <div class="card-header">
                        <h5 class="card-title">Deluxe Room Detail</h5>
                        </div>
                        <div class="card-body">
                            
                            <p class="card-text">Deluxe rooms at Genista Inn spell absolute luxury and comfort.Rooms featuring elegant furnishings and a warm welcoming ambience ,ideal for a business stay or leisure travelers.Rooms featuring elegant furnishings and a warm welcoming ambience</p>

                            <ul>
                                <li>Express laundry service</li>
                                <li>Free wireless Internet</li>
                                <li>In-room electronic safe</li>
                                <li>Large writing table</li>
                            </ul>

                            <h4>Room Price : Rs 3000/day</h4>

                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="orange" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg> &nbsp;
                            

                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="orange" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg> &nbsp;
                            

                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="orange" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg> &nbsp;
                            

                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="orange" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg> &nbsp;
                            

                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="orange" class="bi bi-star-half" viewBox="0 0 16 16">
                            <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
                            </svg>
                            
                           

                            <br />
                            <br />

                            <Link to='/login' class="btn btn-warning">Book Room</Link>
                        </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    </>
  )
}

export default DeluxeRoom
