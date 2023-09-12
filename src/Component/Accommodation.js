
import '../Style/Accommodation.css'
import Rooms from './Rooms'


import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Accommodation = () => {


    const [users,setUsers] = useState([]);

    useEffect(()=>{

    axios
    .get('http://localhost:8002/showaccommodation')
    .then(users=> setUsers(users.data))
    .catch(error=>console.log(error));
    
    },[]);





  return (
    <>

        <div className="container-acc">
            <center>
                <h1>Accommodation</h1>
                <h5>Best rate & facilities guaranteed</h5>
            </center>
        </div>

    <div className="container-acc1">
        <div className="container">
            <center>
                <h6 style={{marginBottom:'50px'}}>All the 28 well appointed deluxe, premium, executive and 2 Suite rooms in our 3 star class hotel in Ranchi. We are meticulously designed to assure the guests feel pampered.  Designed for luxury and great comfort, the rooms in our hotel, feature marble bathrooms and offer stunning view of flourishing.Suite rooms in our 3 star class hotel in Ranchi. We are meticulously designed to assure the guests feel pampered.</h6>
            </center>



            <div className="row">
                <div className="">
                {
                    users.map(user => {

                        return <Rooms roomtitle={user.room_title} img1={'http://localhost:8002/'+user.image} desc={user.room_desc} price={user.room_price} room={`roominfo/${user.id}`}/>


                    })
                }

                  
                </div>
                
            </div>
        </div>
    </div>

    </>
  )
}

export default Accommodation
