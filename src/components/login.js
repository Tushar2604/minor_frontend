import React from 'react';
import './css/styles.css';

const Login = () => (
    <div className="login-container">
        <h1>TrainCourier</h1>
        <h2>Login</h2>
        <form>
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
);

export default Login;
