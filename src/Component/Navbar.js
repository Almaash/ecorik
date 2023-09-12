import React from 'react'
import '../Style/Navbar.css'
import logo from '../Img/logo.png'
import {Link, useNavigate} from "react-router-dom";

function Navbar() {

const navigate=useNavigate()
const auth=sessionStorage.getItem('user')
let userid=''

if(auth){
  userid=JSON.parse(sessionStorage.getItem('user')).id
  // console.log(userid)
}
else{
  userid=''
  // navigate('/')
}


  return (
    <>
      
      <div className="container-1">
        <center>
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <i className=" fab fa-facebook-f"  style={{ margin: '25px', 
                    fontSize: '20px', color: '#cc8c18', cursor: 'pointer' }} ></i> 
                    <i className=" fab fa-twitter" style={{ margin: '25px', 
                    fontSize: '20px', color: '#cc8c18', cursor: 'pointer' }} ></i>
                    <i className="fab fa-instagram" style={{ margin: '25px', 
                    fontSize: '20px', color: '#cc8c18', cursor: 'pointer' }} ></i>
                    <i className=" fab fa-youtube" style={{ margin: '25px', 
                    fontSize: '20px', color: '#cc8c18', cursor: 'pointer' }} ></i>
                </div>

                <div className="col-lg-4">
                    <img src={logo} alt=""/>
                </div>

                <div className="col-lg-4">
                    <i className=" fas fa-map-marker-alt" style={{ marginTop: '25px',marginRight:'20px', 
                    fontSize: '20px', color: '#cc8c18', cursor: 'pointer' }}></i>
                    <span>205 street Ranchi, Jharkhand </span>

              </div>

            </div>
        </div>
    </center>
    </div>



    <nav className="navbar navbar-expand-lg sticky-top">
        <Link className="navbar-brand" to="/">EcoRIK</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto mx-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            
            <li className="nav-item active">
              <Link className="nav-link" to="/accommodation">Accommodation</Link>
            </li>
            
            <li className="nav-item active">
              <Link className="nav-link" to="/gallery">Gallery</Link>
            </li>
            
            <li className="nav-item active">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

          </ul>
          { 
          userid !== '' ? <Link to="/profile"><button className="btn" ><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
        </svg></button></Link> : ''
          }
          { 
          userid !== '' ? <Link to="/logout"><button className="btn btn-outline-dark ml-2" >Log out</button></Link> : <Link to="/login"><button className="btn btn-outline-dark ml-2">Sign in</button></Link>
          }

          
        </div>
      </nav>

    </>
  )
}

export default Navbar
