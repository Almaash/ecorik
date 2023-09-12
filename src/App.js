
import About from "./Component/About";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Navbar from "./Component/Navbar";
import Register from "./Component/Register";
import notfound from '../src/Img/404-Error-new.png'
import Accommodation from "./Component/Accommodation";
import Gallery from "./Component/Gallery";
import SuiteRoom from "./Component/SuiteRoom";
import PremiumRoom from "./Component/PremiumRoom";
import ExecutiveRoom from "./Component/ExecutiveRoom";
import DeluxeRoom from "./Component/DeluxeRoom";
import BookingForm from "./Component/BookingForm";
import Profile from "./Component/Profile";
import Booking from "./Component/Booking";


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Logout from "./Component/Logout";


function App() {
  return (
    <>
    

  <Router>
    <Navbar/>
      <Routes>
    
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/accommodation" element={<Accommodation/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          {/* <Route path="/suiteroom" element={<SuiteRoom/>}/> */}
          <Route path="/accommodation/roominfo/:id" element={<SuiteRoom/>}/>
          <Route path="/premiumroom" element={<PremiumRoom/>}/>
          <Route path="/executiveroom" element={<ExecutiveRoom/>}/>
          <Route path="/deluxeroom" element={<DeluxeRoom/>}/>
          <Route path="/bookingform" element={<BookingForm/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/booking" element={<Booking/>}/>
    

          <Route path="*" element={<div><center><img src={notfound} style={{height:'500px'}} /></center></div>}/>
  
      </Routes>
    <Footer/>
</Router>



    </>
  );
}

export default App;
