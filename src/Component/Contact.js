import React from 'react'
import '../Style/Contact.css'

import { useState } from 'react'
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';


const Contact = () => {
  
  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: '',
    summary: ''
  })

  // const Navigate = useNavigate()

  const handleSubmit = (event) =>{
    event.preventDefault()
    axios.post('http://localhost:8002/contact/',values)
    .then(res=> {
        console.log(res);
        alert('Your message is Sent!')
    })
    .catch(error=>console.log(error));

  }


  
  return (
    <>
      

      <div className="container-12">
        <center>
            <h1>Contact Us</h1>
            <h5>Who We are</h5>
        </center>
      </div>


      <div className="container-14">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h5 className="wow slideInRight" data-wow-duration="1s">Contact</h5>
                    <p>In order for us to assist you both promptly and accurately, please complete the following information below and one of our Customer Service Consultants will attend to your needs within 24 hours. Our Customer Service Centre has been designed for you to be able to contact us with ease and confidence.</p>
                    <p>Purulia Road,Kantatoli Chowk,Ranchi-834001</p>
                    <p>+91 7360066132</p>
                    <p>+91 7360066127</p>
                    <p> hotelecorik@gmail.com, booking@hotelecorik.com</p>
                </div>
                <div className="col-lg-6">


                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Name</label>
                            <input type="text" className="form-control" id="inputEmail4" onChange={e => setValues({...values,name:e.target.value})}/>
                          </div>

                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Email</label>
                            <input type="email" className="form-control" id="inputPassword4" onChange={e => setValues({...values,email:e.target.value})}/>
                          </div>
                        </div>

                        <div className="form-group">
                          <label htmlFor="inputAddress">Subject</label>
                          <input type="text" className="form-control" id="inputAddress" placeholder="subject" onChange={e => setValues({...values,subject:e.target.value})}/>
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="validationTextarea">Textarea</label>
                            <textarea className="form-control" id="validationTextarea" placeholder="Required example textarea" required onChange={e => setValues({...values,summary:e.target.value})}></textarea>
                            <div className="invalid-feedback">
                              Please enter a message in the textarea.
                            </div>
                          </div>
                        
                        <button type="submit" className="btn">Send</button>
                      </form>


                </div>
            </div>
        </div>
      </div>



    </>
  )
}

export default Contact
