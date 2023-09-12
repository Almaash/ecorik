import React, { useState } from 'react'
import '../Style/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

// const auth=sessionStorage.getItem('user')
// const userid=JSON.parse(sessionStorage.getItem('user')).id
// console.log(userid)



const Login = () => {

  const navigate=useNavigate()

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  
  function handleSubmit(event){
    event.preventDefault();
    axios.post('http://localhost:8002/login',{email,password})
    .then(res => {                                      // data save in cookies then redirect to other page...
      // console.log(res.data)
      
      if(res.data.status === 'success'){
        
        delete res.data.userData.password
                
        sessionStorage.setItem('user',JSON.stringify(res.data.userData))
        
        console.log(res.data.userData)
        console.log(sessionStorage)


        alert("logged in")
        navigate('/profile')
        
      }else{
        alert("login failed")
        navigate('/')
      }
    })  
    .catch(err => console.log(err));
  
  }


  return (
    <>
      
      <div className="container-11">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    
                    <form onSubmit={handleSubmit}>
                        <h4>Sign into Your Account</h4> <br/>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Email address</label>
                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)}/>
                          
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Password</label>
                          <input type="password" className="form-control" id="exampleInputPassword1" onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <center>
                        <button type="submit" className="btn">Sign In</button>
                        
                    </center> 
                    
                </form>

                <center>
                    <p>or</p>
                    <Link to="/register"><button className="btnjoin">Join us</button></Link>
                </center>

                </div>
                
                <div className="col-lg-6 rightbox">
                    <h3>Not yet a EcoRIK Rewards member?</h3>
                    <br/>
                    <div className="row">

                        <div className="col-lg-2">
                            <center><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#cc8c18" className="bi bi-building-fill-check" viewBox="0 0 16 16">
                                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514Z"/>
                                <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7.256A4.493 4.493 0 0 0 12.5 8a4.493 4.493 0 0 0-3.59 1.787A.498.498 0 0 0 9 9.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .39-.187A4.476 4.476 0 0 0 8.027 12H6.5a.5.5 0 0 0-.5.5V16H3a1 1 0 0 1-1-1V1Zm2 1.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5Zm3 0v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z"/>
                              </svg></center>
                        </div>
                        <div className="col-lg-10">
                            <h6>Points for hotel stays</h6>
                            <p>Earn points per US dollar spent on eligible stays and food and beverage purchases charged to your room.</p>
                        </div>
                        
    
                        <div className="col-lg-2">

                            <center><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#cc8c18" className="bi bi-currency-rupee" viewBox="0 0 16 16">
                                <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
                              </svg></center>
                        </div>
                        <div className="col-lg-10">
                            <h6>Member Only Rate</h6>
                            <p>Save up to 10% more on booking directly from our website or mobile app.</p>
                        </div>
    
                        <div className="col-lg-2">

                           <center> <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#cc8c18" className="bi bi-person-fill-check" viewBox="0 0 16 16">
                            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                            <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"/>
                          </svg></center>

                        </div>
                        <div className="col-lg-10">
                            <h6>Priority Line</h6>
                            <p>Enjoy access to the member-only priority line for a faster check-in and check-out. Available at selected hotels only.</p>
                        </div>

                    </div>
                </div>
                
            </div>
        </div>
      </div>

    </>
  )
}

export default Login
