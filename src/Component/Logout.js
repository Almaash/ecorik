import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {

//logout for destroy session

const auth=sessionStorage.getItem('user')

const navigate = useNavigate()
function userLogout(){
    sessionStorage.clear()
    navigate('/login')
}
useEffect(()=>{
  userLogout()  
})
}

export default Logout
