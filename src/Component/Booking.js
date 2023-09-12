import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Booking = () => {


const auth=sessionStorage.getItem('user')
const navigate=useNavigate()

const [reg,setReg] = useState([]);
const [ord_data,setOrder_data]=useState([]);

    useEffect(()=>{

        if(auth){
            let id=JSON.parse(sessionStorage.getItem('user')).id

            axios
            .get('http://localhost:8002/singledataregister/'+id)
            .then(data=> setReg(data.data))
            .catch(error=>console.log(error));

            axios
            .get('http://localhost:8002/eachbookingtable/'+id)
            .then(data=> setOrder_data(data.data))
            .catch(error=>console.log(error));

        }else{
            alert('Please login first!!');
            navigate('/');
        }
    
    },[]);


  return (
    <>

<div className="container-profile">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">

                    <div className="card">
                        <div className="card-body">

                            <div className="row">
                                <div className="col-lg-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fd7e14" className="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                </svg> &nbsp;
                                </div>
                                <div className="col-lg-10">
                                hello, <br />
                                {reg.first_name}
                                </div>
                            </div>

                            
                        </div>
                    </div>
                    
                    <div className="card">
                        <div className="card-body">
                            <Link to="/profile">My Profile</Link> <br /> <br />
                            
                            
                        </div>
                    </div>

                    </div>
                    <div className="col-lg-8">


                    <div className="card">
                        <div className="card-body">
                            
                            <h2>Booking Information</h2> <br />
                            
    

                        {ord_data.map((cust,index) => { 
                            return (
                            <div className="card booking-card">
                            <div className="card-body">
                                <div className="row">

                                    <div className="col-lg-3">
                                        <h6>Room: {cust.room}</h6>
                                        
                                        <h6>No of Person: {cust.no_of_person}</h6>
                                    </div>
                                    <div className="col-lg-3"><h6>Price: INR {cust.amount}</h6></div>
                                    <div className="col-lg-3"><h6>Check-In: <br /> {cust.checkin} </h6></div>
                                    <div className="col-lg-3"><h6>Check-Out: <br /> {cust.checkout} </h6></div>

                                </div>
                            </div>
                            </div>
                                    )})}
                            
                            
                            

                            {/* <div className="card booking-card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <h6>Room: Premium</h6>
                                        <h6>Room no: 209</h6>
                                        <h6>No of Person: 2</h6>
                                    </div>
                                    <div className="col-lg-3"><h6>Price: INR 5000</h6></div>
                                    <div className="col-lg-3"><h6>Check-In: </h6></div>
                                    <div className="col-lg-3"><h6>Check-Out: </h6></div>
                                </div>
                            </div>
                            </div> */}
                            
                            
                            

                            {/* <div className="card booking-card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <h6>Room: Suite</h6>
                                        <h6>Room no: 208</h6>
                                        <h6>No of Person: 2</h6>
                                    </div>
                                    <div className="col-lg-3"><h6>Price: INR 6000</h6></div>
                                    <div className="col-lg-3"><h6>Check-In: </h6></div>
                                    <div className="col-lg-3"><h6>Check-Out: </h6></div>
                                </div>
                            </div>
                            </div> */}
                            
                            

                        </div>
                    </div>


                    </div>
                </div>
            </div>
        </div>



    </>
  )
}

export default Booking
