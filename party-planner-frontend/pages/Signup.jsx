import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'; // Assuming you're using axios for HTTP requests

const Signup = () => {
    // State for form data and error
 const navigate=useNavigate();

    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState('');

    // Function to handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Make HTTP POST request to your backend to handle signup
            const response = await axios.post('http://localhost:5566/api/auth/register', formData);
            console.log(response.data);
            alert("user registered")
            navigate('/login') // Log the response from the server
            // Redirect or show a success message upon successful signup
        } catch (err) {
            setError(err.response.data.message); // Set error message if signup fails
        }
    };

    return (
        <div className="signup_container">
            <div className="signup_form_container">
                {/* Left section with a "Welcome Back" message and a Sign In button */}
                <div className="left">
                    <h1>Welcome Back</h1>
                    <Link to="/login">
                        <button type="button" className="white_btn">
                            Sign in
                        </button>
                    </Link>
                </div>
                {/* Right section containing the signup form */}
                <div className="right">
                    <form className="form_container" onSubmit={handleSubmit}>
                        <h1>Create Account</h1>
                        <input
                            type="text"
                            placeholder="Full Name"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            className="input"
                        />
                        <input
                            type="text"
                            placeholder="Phone Number"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                            className="input"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="input"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="input"
                        />
                        {error && <div className="error_msg">{error}</div>}
                        <button type="submit" className="green_btn">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
