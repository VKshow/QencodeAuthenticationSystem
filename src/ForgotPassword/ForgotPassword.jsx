// ForgotPassword.js
import React, { useState } from 'react';
import axios from 'axios';


import Quencode from "../Qencode/Quencode";



function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); // For success or error messages from the server
  const [validationError, setValidationError] = useState(''); // For client-side validation messages

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Simple email validation
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setValidationError('');

    if (!validateEmail(email)) {
      setValidationError('Please enter a valid email address.');
      return;
    }

    try {
      const response = await axios.post('https://auth-qa.qencode.com/v1/auth/password-reset', { email });
      setMessage('Password Reset Request Success: Please check your email to complete the password reset process.');
      console.log('Password Reset Request Success:', response.data);
    } catch (error) {
      setMessage('Password Reset Request Failed: ' + (error.response?.data?.detail || 'Please try again later.'));
      console.error('Password Reset Request Failed:', error.response?.data);
    }
  };

  return (
    <div className="container">
      <div className="content">
      <Quencode />
      <h2 className="title">Forgot Password?</h2>
      <form className='form  ' onSubmit={handleSubmit}>
      {validationError && <div style={{ color: 'red' }}>{validationError}</div>}
      {message && <div style={{ color: message.startsWith('Password Reset Request Failed') ? 'red' : 'green' }}>{message}</div>}
      <input
      className='input FP_input'
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <button className="submit__btn forgot_submit" type="submit">Send</button>
      <button className="cancel__btn" type="submit">Cancel</button>
    </form>
    
      </div>
    </div>
  );
}

export default ForgotPassword;
