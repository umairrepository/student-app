import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/api';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State for error message
    const [success, setSuccess] = useState(''); // State for success message
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const user = await loginUser(email, password);

            if (user && user.data) {
                // If the user is valid, show a success message
                setSuccess('Login successful! Redirecting to dashboard...');
                setError(''); // Clear any existing error

                // Wait 2 seconds, then navigate to the dashboard
                setTimeout(() => {
                    setSuccess(''); // Clear success message
                    navigate('/dashboard');
                }, 2000); // 2-second delay before redirection
            } else {
                // If the user is not valid, show an error message
                setError('Invalid email or password');
                setSuccess(''); // Clear success message

                // Remove the error message after 3 seconds
                setTimeout(() => {
                    setError('');
                }, 3000); // Error message is visible for 3 seconds
            }
        } catch (err) {
            // In case of any other error
            setError('An error occurred. Please try again.');
            setSuccess('');

            // Remove the error message after 3 seconds
            setTimeout(() => {
                setError('');
            }, 3000); // Error message is visible for 3 seconds
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                {/* Show error message */}
                {error && <p className="error">{error}</p>}
                {/* Show success message */}
                {success && <p className="success">{success}</p>}
                
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
                <p>Don't have an account? <a href="/register">Sign Up</a></p>
            </div>
        </div>
    );
};

export default Login;
