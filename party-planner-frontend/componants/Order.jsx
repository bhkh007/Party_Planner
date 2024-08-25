import React, { useState } from 'react';
import axios from 'axios';
import "../cssfiles/Order.css";

const Order = () => {
  const [formState, setFormState] = useState(false);
  const initialFormData = {
    name: '',
    phoneNumber: '',
    email: '',
    location: ''
  };

  const showForm = () => {
    setFormState(true);
  };

  const closeForm = () => {
    setFormState(false);
    console.log("hi")
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
      const response = await axios.post('http://localhost:5566/api/request/addData', formData);
      console.log('Form submitted successfully:', response.data);
      alert("Data added successfully");
      setFormData(initialFormData);
      closeForm();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="form-container">
      {formState && (
        <div className="formdiv">
          <div className="close">
          <h2>Request Callback</h2>
          <button className="close-btn" onClick={closeForm}>✖</button>
          </div>
          <p>We will call you back shortly to take details.</p>
          <form className="formbody" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Enter Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Enter Location"
              value={formData.location}
              onChange={handleChange}
              required
            />
            <button className="formbtn1" type="submit">Submit</button>
          </form>
        </div>
      )}
      <button className="call" onClick={showForm}>Request Callback</button>
    </div>
  );
}

export default Order;
