import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import Quencode from '../Qencode/Quencode';
import passwordIcon from '/assets/icons/Union.svg';



function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ResetPassword() {
  const query = useQuery();
  const [token] = useState(query.get('token'));
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const [error, setError] = useState('');

  const validatePasswords = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return false;
    }
    if (password.length < 8 || confirmPassword.length < 8) {
      setError('Password must be at least 8 characters long.');
      return false;
    }
    setError('');
    return true;
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!validatePasswords()) {
      return;
    }

    try {
      await axios.post('https://auth-qa.qencode.com/v1/auth/password-set', { token, password });
      // Success logic here. Perhaps redirecting the user or displaying a success message.
      setError('');
    } catch (error) {
      setError(error.response?.data?.detail || 'An error occurred. Please try again later.');
    }
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
 <div className="container">
  <div className="content">
  <Quencode/>
  <h3 className='title'>Create new Password?</h3>
  <form className='form reset-form' onSubmit={handleResetPassword}>
  {error && <div style={{ color: 'red' }}>{error}</div>}
  
  
  <div className="password-group">
    <label htmlFor="password">Password</label>
    <input className='input resetPass'
      id="password"
      type={showPassword ? "text" : "password"}
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Password"
      required
    />
    <div className="passwordIcon resetPassIcon" onClick={toggleShowPassword}><img src={passwordIcon} alt="Show password" /></div>
    <div className={`eye-cross resetPassCross ${showPassword ? '' : 'hide'}`}onClick={toggleShowPassword}></div>
  </div>
  <div className="password-group">
    <label htmlFor="confirmPassword">Confirm Password</label>
    <input
      className='input resetPass'
      id="confirmPassword"
      type={showPassword ? "text" : "password"}
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
      placeholder="Password"
      required
    />
    <div className="passwordIcon resetPassIcon" onClick={toggleShowPassword}><img src={passwordIcon} alt="Show password" /></div>
    <div className={`eye-cross resetPassCross ${showPassword ? '' : 'hide'}` } onClick={toggleShowPassword}></div>
  </div> 
  <button className="submit__btn" type="submit">Reset Password</button>
</form>
  </div>
 </div>

  );
}

export default ResetPassword;
