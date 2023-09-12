import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link} from 'react-router-dom';
import '../Style/SuiteRoom.css'




const SuiteRoom = () => {


  const {id}=useParams()

  const [users,setUsers] = useState([]);
  
  useEffect(()=>{

    axios
    .get('http://localhost:8002/singledataaccommodation/'+id)
    .then(users=> setUsers(users.data))
    .catch(error=>console.log(error));
    
    },[]);



  return (
    <>
      <div className="container-acc">
            <center>
                <h1>~ {users.room_title}  ~</h1>
                <h5>Best rate & facilities guaranteed</h5>
            </center>
        </div>

        <div className="container-suite">
            <div className="container">

                <div className="row">
                    <div className="col-lg-6">
                        <img src={'http://localhost:8002/'+users.image} alt=''/>
                    </div>
                    <div className="col-lg-6">

                    <div class="card">

                        <div class="card-header">
                        <h5 class="card-title">{users.room_title}</h5>
                        </div>
                        <div class="card-body">
                            
                            <p class="card-text">{users.room_desc}</p>

                            <ul>
                                <li>Express laundry service</li>
                                <li>Free wireless Internet</li>
                                <li>In-room electronic safe</li>
                                <li>Large writing table</li>
                            </ul>

                            <h4>Room Price : Rs {users.room_price}/day</h4>

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
                            

                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="orange" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg> &nbsp;
                            
                           

                            <br />
                            <br />

                            <Link to='/bookingform' class="btn btn-warning">Book Room</Link>
                        </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default SuiteRoom
