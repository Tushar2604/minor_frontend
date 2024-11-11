import React from 'react';
import './css/styles.css';

const Signup = () => (
    <div className="form-container">
        <h2>Sign Up</h2>
        <form>
            <input type="text" name="username" placeholder="Username" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
            <button type="submit">Sign Up</button>
        </form>
    </div>
);

export default Signup;
