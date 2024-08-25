import React from 'react';
import "../cssfiles/AboutUs.css"; // Import the CSS file
import CountUp from 'react-countup';
import aniket from '../src/assets/aniket.jpg'
import pic from '../src/assets/pic.jpg'
import Bhavesh from '../src/assets/bhavesh.jpg'
const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-section">
        <h2>About Grand Celebrations</h2>
        <p>Welcome to Grand Celebrations, your premier party planning service. We specialize in creating unforgettable events tailored to your vision. Whether it's a wedding, corporate event, or birthday party, we bring your ideas to life with creativity and precision.</p>
      </div>
      <div style={{display:"flex", alignItems:"center"}} className="mission-vision-section">
        <div className="mission-vision-content">
          <h2 style={{textAlign:"left"}} >Mission</h2>
          <p>Our mission is to deliver exceptional events that exceed expectations, focusing on personalized service and attention to detail.</p> 
           </div>
      <div className="vision-section">
        <h2 style={{textAlign:"left"}}   > Vision</h2>
        <p>Our future vision is to expand our services globally, setting new standards in the event planning industry. We aim to innovate and provide extraordinary experiences that leave lasting impressions.</p>
      </div>
      </div>
      <div className="meet-team-section">
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={aniket} alt="Team Member 1" />
            <h3>013_Aniket Dhiwar_KH</h3>
            
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src={pic} alt="Team Member 2" />
            <h3>103_Shubham Ranmale_KH</h3>
            <p>Head Planner</p>
          </div>
          <div className="team-member">
            <img src={Bhavesh} alt="Team Member 3" />
            <h3>028_Bhavesh Khandar_KH</h3>
            <p>Creative Director</p>
          </div>
        </div>
      </div>
      <div className="achievements-section">
        <h2>Achievements</h2>
        <p>We have planned over 500 successful events, served more than 300 clients, and have been in the industry for 10 years. Our commitment to excellence has earned us numerous awards and recognition.</p>
      </div>
      <div className="project-stats-section">
        <div className="stats-grid">
          <div className="stat-item">
          <h3><CountUp end={500} duration={5} />+</h3>
            <p>Projects Done</p>
          </div>
          <div className="stat-item">
            <h3><CountUp end={10} duration={5} /></h3>
            <p>Years of Work</p>
          </div>
          <div className="stat-item">
            <h3><CountUp end={300} duration={5} />+</h3>
            <p>Happy Clients</p>
          </div>
        </div>
      </div>
     
    </div>
  )
  }
export default AboutUs;
