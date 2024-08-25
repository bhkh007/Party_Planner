import React from 'react'

import Reviews from '../componants/Reviews';
import Footer from '../componants/Footer';
import Order from '../componants/Order';
import  Navbar  from '../componants/navbar';
import Carousel from '../componants/Carosal';
import FAQ from "../componants/FAQ"
import Packages from '../componants/Packages';
import Services from '../componants/Services';


const Home = () => {
  return (
    <div>
      <div style={{marginTop:"15px"}} ><Carousel/></div>
      
      <Packages/>
      <FAQ/>
      <Reviews/> 
      <Services/>
       <Footer/>
    </div>
  )
}

export default Home
