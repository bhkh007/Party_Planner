
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import UserBooking from '../pages/Userbooking'; // Make sure the path is correct
import '../cssfiles/Booking.css';

const GetUserBooking = () => {
    const [bookings, setBookings] = useState([]);
    const [filteredBookings, setFilteredBookings] = useState([]);

    useEffect(() => {
        async function fetchBookings() {
            try {
                const response = await axios.get('http://localhost:5566/api/bookings/allBookings');
                setBookings(response.data);
                filterBookings(response.data);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        }
        fetchBookings();
    }, []);

    const filterBookings = (bookings) => {
        const userId = localStorage.getItem('userId');
        const results = bookings.filter(booking => booking.userId === userId);
        setFilteredBookings(results);
    };

    return (
        <div className="App">
           
            {filteredBookings.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Booking ID</th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Location</th>
                            <th>Email</th>
                            <th>Event Type</th>
                            <th>Event Date</th>
                            <th>Event Time</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredBookings.map(booking => (
                            <tr key={booking._id}>
                                <td>{booking._id}</td>
                                <td>{booking.name}</td>
                                <td>{booking.phoneNumber}</td>
                                <td>{booking.location}</td>
                                <td>{booking.email}</td>
                                <td>{booking.eventType}</td>
                                <td>{new Date(booking.eventDate).toLocaleDateString()}</td>
                                <td>{booking.eventTime}</td>
                                <td>{booking.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div>
                    <p>No bookings found for the given User ID. Please fill out the form to create a booking.</p>
                    <UserBooking />
                </div>
            )}
        </div>
    );
}

export default GetUserBooking;
