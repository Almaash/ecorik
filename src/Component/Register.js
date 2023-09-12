import React from 'react'
import '../Style/Register.css'
import logo from '../Img/logo.png'

import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = () => {

  const [values, setValues] = useState({
    first_name: '',
    last_name: '',
    state: '',
    language: '',
    email: '',
    phone_no: '',
    password: ''
  })

  const Navigate = useNavigate()

  const handleSubmit = (event) =>{
    event.preventDefault()
    axios.post('http://localhost:8002/register/',values)
    .then(res=> {
        console.log(res);
        alert('Registeration Successful!')
        Navigate('/login')
    })
    .catch(error=>console.log(error));

  }



  return (
    <>
      
      <div className="container-10">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">

                    <img src={logo} alt=""/>

                    <h2>Join over 10 million members today for free.</h2>
                    <p>Unlock a world of exclusive benefits, earn easily on every stay and redeem your points to get additional discounts and free award nights.</p>
                    <br/>

                    <h4>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#cc8c18" className="bi bi-check2-all" viewBox="0 0 16 16">
                            <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
                            <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
                          </svg>
                        
                        Member Only Rate</h4>
                    <p>Members save up to 10% more on booking directly from our website or mobile app.</p>

                    <h4>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#cc8c18" className="bi bi-check2-all" viewBox="0 0 16 16">
                        <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
                        <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
                        </svg>

                        Food and Beverages</h4>
                    <p>Get discounted food and beverages at participating hotel restaurants.</p>
                    
                    <h4>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#cc8c18" className="bi bi-check2-all" viewBox="0 0 16 16">#cc8c18
                        <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
                        <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
                        </svg>
                        Easy Access to Premium</h4>
                    <p>With our refreshingly simple program structure, upgrade to Premium just after 3 stays.</p>


                </div>

                <div className="col-lg-8">


                <form onSubmit={handleSubmit}>
                        <h6>P E R S O N A L &nbsp;&nbsp;&nbsp; I N F O R M A T I O N</h6>
                        <br/>
                        <div className="form-row">

                          <div className="col-md-5 my-2">
                            <label htmlFor="inputState">First Name</label>
                            <input type="text" className="form-control" onChange={e => setValues({...values,first_name:e.target.value})}/>
                          </div>

                          <div className="col-md-5 my-2">
                            <label htmlFor="inputState">Last Name</label>
                            <input type="text" className="form-control"onChange={e => setValues({...values,last_name:e.target.value})}/>
                          </div>
                          
                          <div className="form-group col-md-5 my-2">
                            <label htmlFor="inputState">State</label>
                            <select id="inputState" className="form-control"onChange={e => setValues({...values,state:e.target.value})}>
                              <option selected>Choose...</option>
                              <option>Jharkhand</option>
                              <option>Bihar</option>
                              <option>Odisha</option>
                              <option>Delhi</option>
                              <option>Mumbai</option>
                              <option>Kolkata</option>
                            </select>
                          </div>
                          
                          
                          <div className="form-group col-md-5 my-2">
                            <label htmlFor="inputState">Language</label>
                            <select id="inputState" className="form-control"onChange={e => setValues({...values,language:e.target.value})}>
                              <option selected>Choose...</option>
                              <option>Hindi</option>
                              <option>English</option>
                              
                            </select>
                          </div>

                          <div className="col-md-5 my-2">
                            <label htmlFor="inputState">Email</label>
                            <input type="email" className="form-control"onChange={e => setValues({...values,email:e.target.value})}/>

                            <p>By providing an email, I agree to receive  information about online check-in, online check-out as well as offers to personalize my stays via email from Ecorik Hotel Group.</p>

                          </div>

                          <div className="col-md-5 my-2">
                            <label htmlFor="inputState">Phone</label>
                            <div className="input-group">
                              
                              <input type="number" className="form-control" id="inlineFormInputGroupUsername" onChange={e => setValues({...values,phone_no:e.target.value})}/>

                              <p>By providing a phone number, I agree to receive information about online check-in and check-out via WhatsApp from Ecorik Hotel Group.</p>

                            </div>
                          </div>
                          

                          <div className="col-md-5 my-2">
                            <label htmlFor="inputState">Password</label>
                            <input type="password" className="form-control"onChange={e => setValues({...values,password:e.target.value})}/>
                          </div>

                          

                          <div className="col-md-5 my-2">
                            <label htmlFor="inputState">Re-enter password</label>
                            <input type="password" className="form-control"/>
                          </div>

                          <div className="col-auto my-2 ">
                            <button className="btn " type="submit">Register Now</button>
                          </div>

                        </div>
                      </form>
                </div>
            </div>
        </div>
      </div>


    </>
  )
}

export default Register
