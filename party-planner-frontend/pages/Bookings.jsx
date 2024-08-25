import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../cssfiles/Callbackreq.css';
import '../cssfiles/Booking.css';
import {Link} from "react-router-dom"

const Bookings = () => {
  const [requests, setRequests] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [selectedTable, setSelectedTable] = useState('requests');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5566/api/request/getAllData');
        setRequests(response.data);
      } catch (error) {
        console.error('Error fetching callback requests:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5566/api/bookings/allBookings');
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchData();
  }, []);

  const handleTableChange = (event) => {
    setSelectedTable(event.target.value);
  };
  const updateBookingStatus = async (bookingId, newStatus) => {
    try {
      await axios.put(`http://localhost:5566/api/bookings/${bookingId}/status`, { status: newStatus });
      // If successful, update the status in the local state
      setBookings(bookings.map(booking => 
        booking._id === bookingId ? { ...booking, status: newStatus } : booking
      ));
    } catch (error) {
      console.error('Error updating booking status:', error);
    }
  };

  return (
    <>
      <div>
        <Link to="/">home</Link>
        <h1>Choose Table:</h1>
        <select value={selectedTable} onChange={handleTableChange}>
          <option value="requests">Callback Requests</option>
          <option value="bookings">Booking Details</option>
        </select>
      </div>
      {selectedTable === 'requests' && (
        <div>
          <h1>Callback Requests</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Location</th>
                <th>Description</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request._id}>
                  <td>{request.name}</td>
                  <td>{request.phoneNumber}</td>
                  <td>{request.email}</td>
                  <td>{request.location}</td>
                  <td>{request.description}</td>
                  <td>{new Date(request.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
     {selectedTable === 'bookings' && (
  <div className="container">
    <h1>Booking Details</h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Location</th>
          <th>Event Type</th>
          <th>Event Date</th>
          <th>Event Time</th>
          <th>Status</th> {/* New column for status */}
        </tr>
      </thead>
      <tbody>
        {bookings.map((booking) => (
          <tr key={booking._id}>
            <td>{booking.name}</td>
            <td>{booking.phoneNumber}</td>
            <td>{booking.email}</td>
            <td>{booking.location}</td>
            <td>{booking.eventType}</td>
            <td>{new Date(booking.eventDate).toLocaleDateString()}</td>
            <td>{booking.eventTime}</td>
            <td>{booking.status}</td> {/* Display booking status */}
            <td>
                <button onClick={() => updateBookingStatus(booking._id, 'confirmed')}>Confirm</button>
                <button onClick={() => updateBookingStatus(booking._id, 'cancelled')}>Cancel</button>
              </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
      )}
    </>
  );
};

export default Bookings;
/* 
fun add(a,b){
    return a+b;
}
m=,n=8;
add(m,n)



*/