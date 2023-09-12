import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import '../Style/Profile.css'
import axios from 'axios'

const Profile = () => {



const auth=sessionStorage.getItem('user')
const navigate=useNavigate()

const [reg,setReg] = useState([]);

    useEffect(()=>{

        if(auth){
            let id=JSON.parse(sessionStorage.getItem('user')).id

            axios
            .get('http://localhost:8002/singledataregister/'+id)
            .then(data=> setReg(data.data))
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
                            <Link to="/booking">My Booking</Link> <br /> <br />
                            
                            
                        </div>
                    </div>

                    </div>
                    <div className="col-lg-8">


                    <div className="card">
                        <div className="card-body">
                            
                            <h2>Profile Information</h2> <br />
                            <form>
                            <div className="row">
                                <div className="col">
                                <label htmlFor="formGroupExampleInput">Your First Name</label>
                                <input type="text" className="form-control" value={reg.first_name} readOnly/>
                                </div>
                                <div className="col">
                                <label htmlFor="formGroupExampleInput">Your Last Name</label>
                                <input type="text" className="form-control" value={reg.last_name} readOnly/>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col">
                                <label htmlFor="formGroupExampleInput">Your State</label>
                                <input type="text" className="form-control" value={reg.state}readOnly/>
                                </div>
                                <div className="col">
                                <label htmlFor="formGroupExampleInput">Language</label>
                                <input type="text" className="form-control" value={reg.language} readOnly/>
                                </div>
                            </div>
                            
                            <br />
                            <div className="row">
                                <div className="col">
                                <label htmlFor="formGroupExampleInput">Your Email</label>
                                <input type="text" className="form-control" value={reg.email} readOnly/>
                                </div>
                                <div className="col">
                                <label htmlFor="formGroupExampleInput">Your Phone </label>
                                <input type="text" className="form-control" value={reg.phone_no} readOnly/>
                                </div>
                            </div>
                            </form>

                                <br /> <br /> <br />
                                


                        </div>
                    </div>


                    </div>
                </div>
            </div>
        </div>


    </>
  )
}

export default Profile
