import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/api'; // Assuming this API function exists
import './Register.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State for error message
    const [success, setSuccess] = useState(''); // State for success message
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await registerUser({ name, email, password });

            if (response.data === null ) {
               
                setError('Email found, please enter another email or login.');
                setSuccess(''); 

              
                setTimeout(() => {
                    setError('');
                }, 3000); // Error visible for 3 seconds
            } else {
              
                setSuccess('Registration successful! Redirecting to login...');
                setError(''); 

                
                setTimeout(() => {
                    setSuccess('');
                    navigate('/login');
                }, 2000); // Success message is visible for 2 seconds
            }
        } catch (err) {
            // In case of a network or server error
            setError('Email found, please enter another email or login.');
            setSuccess('');

            // Hide error message after 3 seconds
            setTimeout(() => {
                setError('');
            }, 3000); // Error visible for 3 seconds
        }
    };

    return (
        <div className="register-container">
            <div className="register-form">
                <h2>Register</h2>

                {/* Display error message */}
                {error && <p className="error">{error}</p>}

                {/* Display success message */}
                {success && <p className="success">{success}</p>}

                <form onSubmit={handleRegister}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
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
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
