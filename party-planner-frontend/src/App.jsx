import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Bookings from '../pages/Bookings'
import Userbooking from '../pages/Userbooking'
import Home from "../pages/Home"
import Login from '../pages/Login';
import Signup from "../pages/Signup"
import AuthProvider from '../services/AuthProvider';
import ProtectedRoute from '../services/ProtectedRoute';
import GetUserBooking from '../pages/GetUserBooking';
import Navbar from '../componants/navbar';
import Order from '../componants/Order';
import AboutUs from '../pages/AboutUs'
import PrimarySearchAppBar from '../componants/Test';
const App = () => {
  return (
<div className='main-div'>
<Navbar />
<AuthProvider>
      <Routes>
        <Route exact  path="/" element={<Home/>} />
        <Route  path='/AboutUs' element={<AboutUs/>} />
        <Route exact path="/Login" element={<Login/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/MyBookings" element={<GetUserBooking/>} />
        <Route
            exact
            path="/bookings"
            element={
              <ProtectedRoute
                element={<Bookings />}
                role={['admin']} 
                />
            }
          />
        <Route exact path="/Userbooking" element={<Userbooking/>} />
      </Routes>
    
    </AuthProvider>
   <Order/>
</div>
    
  )
}

export default App
