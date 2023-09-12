import React, { useEffect, useState } from 'react'
import '../Style/BookingForm.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const BookingForm = () => {

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
            navigate('/login');
        }
    
    },[]);


    const [values, setValues] = useState({
        user_id: JSON.parse(sessionStorage.getItem('user')).id,
        room: '',
        no_of_person: '',
        state: '',
        checkin: '',
        checkout: '',
        payment_mode: '',
        amount: ''
      })

      const Navigate = useNavigate()
    
      const handleSubmit = (event) =>{
        event.preventDefault()
        axios.post('http://localhost:8002/bookingtable/',values)
        .then(res=> {
            console.log(res);
            alert('Payment Successful!')
            Navigate('/booking')
        })
        .catch(error=>console.log(error));
    
      }

      


  return (
    <>
      
            <div className="container-form" style={{}}>
                <div className="container">

                       <div className="card" style={{backgroundColor:'#1560bd',borderRadius:'20px',color:'white'}}>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                    <label for="inputEmail4">First Name</label>
                                    <input type="text"  value={reg.first_name} className="form-control" id="inputEmail4" />
                                    </div>
                                    <div className="form-group col-md-6">
                                    <label for="inputPassword4">Last Name</label>
                                    <input type="text"  value={reg.last_name} className="form-control" id="inputPassword4"/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className='form-group col-md-8'>
                                    <label for="inputAddress">Email</label>
                                    <input type="email"  value={reg.email} className="form-control" id="inputAddress" placeholder="abc@gmail.com"/>
                                    </div>
                                    <div className='form-group col-md-4'>
                                    <label for="inputAddress">Your ID</label>
                                    <input type="number"  value={reg.id}   className="form-control" id="inputAddress" />
                                    </div>
                                </div>
                                {/* <div className="form-group">
                                    <label for="inputAddress2">Address</label>
                                    <input type="text" className="form-control" id="inputAddress2" placeholder="your address..."/>
                                </div> */}
                                
                                <div className="form-group ">
                                <label for="inputState">Room Type</label>
                                <select id="inputState" className="form-control" onChange={e => setValues({...values,room:e.target.value})}>
                                    <option selected>Choose...</option>
                                    <option>Executive Room</option>
                                    <option>Deluxe Room</option>
                                    <option>Premium Room</option>
                                    <option>Suite Room</option>
                                </select>
                                </div>

                                <div className="form-row">
                                
                                    <label for="inputAddress2">No of Person</label>
                                    <input type="number" className="form-control" onChange={e => setValues({...values,no_of_person:e.target.value})} />
                                
                               
                                </div>

                                <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputAddress2">Cheack-In Date & Time</label>
                                    <input type="date" className="form-control" onChange={e => setValues({...values,checkin:e.target.value})}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="inputAddress2">.</label>
                                    <input type="time" className="form-control" />
                                </div>
                                </div>
                                
                                <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputAddress2">Cheack-Out Date & Time</label>
                                    <input type="date" className="form-control" onChange={e => setValues({...values,checkout:e.target.value})} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="inputAddress2">.</label>
                                    <input type="time" className="form-control" />
                                </div>
                                </div>

                                <div className="form-row">
                                <div className="form-group col-md-6">
                                <label for="inputState">Payment Mode</label>
                                <select id="inputState" className="form-control" onChange={e => setValues({...values,payment_mode:e.target.value})}>
                                    <option selected>Choose...</option>
                                    <option>Phone pe</option>
                                    <option>Google Pay</option>
                                    <option>Cash</option>
                                    
                                </select>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="inputAddress2">Total Amount</label>
                                    <input type="number" className="form-control" onChange={e => setValues({...values,amount:e.target.value})}/>
                                </div>
                                </div>


                                <button type="submit" className="btn btn-warning btn-lg btn-block">Pay Now</button>
                                </form>
                                
                            </div>
                        </div> 

                </div>
            </div>

      
    </>
  )
}

export default BookingForm
