import React from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';

function Signup() {
    const navigate = useNavigate();

    const handleSignup = (event) => {
        event.preventDefault();
        navigate('/home');
    }

    return (
        <div className="form-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" required />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />

                <input type="submit" value="Sign Up" />
            </form>
        </div>
    );
}

export default Signup;
