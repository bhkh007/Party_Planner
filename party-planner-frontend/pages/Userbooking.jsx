import React, { useState } from 'react';
import axios from 'axios';
import "../cssfiles/Booking.css";

const UserBooking = () => {
  const initialFormData = {
    name: '',
    phoneNumber: '',
    email: '',
    location: '',
    description: '',
    eventType: '',
    eventDate: '',
    eventTime: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem('userId'); // Fetch userId from local storage
      const formDataWithUserId = { ...formData, userId }; // Include userId in form data
      const response = await axios.post('http://localhost:5566/api/bookings/addBooking', formDataWithUserId);
      console.log('Form submitted successfully:', response.data);
      alert("Data added successfully and email sent");
      setFormData(initialFormData);  // Reset form data to initial state
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="form">
      <h1>Send Your Request</h1>
      <form className='formbody' onSubmit={handleSubmit}>
        <label>Name</label>
        <input 
          type="text" 
          name="name"
          placeholder='Enter Name' 
          value={formData.name}
          onChange={handleChange}
          required 
        />

        <div className="emailNum">
          <label>Contact Number</label>
          <input 
            type='text' 
            name="phoneNumber"
            placeholder='Enter Number'
            value={formData.phoneNumber}
            onChange={handleChange}
            required 
          />

          <label>Email</label>
          <input 
            type='email' 
            name="email"
            placeholder='Enter Email'
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>

        <label>Location</label>
        <input 
          type='text' 
          name="location"
          placeholder='Enter Location'
          value={formData.location}
          onChange={handleChange}
          required 
        />

        <label>Event Type</label>
        <select 
          name="eventType"
          value={formData.eventType}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select Event Type</option>
          <option value="Wedding">Wedding</option>
          <option value="Conference">Conference</option>
          <option value="Party">Party</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Celebrations">Celebrations</option>
          <option value="Other">Other</option>
        </select>

        <label>Event Date</label>
        <input 
          type="date" 
          name="eventDate"
          value={formData.eventDate}
          onChange={handleChange}
          required 
        />

        <label>Event Time</label>
        <input 
          type="time" 
          name="eventTime"
          value={formData.eventTime}
          onChange={handleChange}
          required 
        />

        <label>Description</label>
        <textarea 
          className='req' 
          name="description"
          placeholder='Enter Description'
          value={formData.description}
          onChange={handleChange}
          required 
        ></textarea>

        <button className='formbtn' type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default UserBooking;
