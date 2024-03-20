import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";


// Assuming passwordIcon is correctly imported from your assets folder
import passwordIcon from '/assets/icons/Union.svg';

// Assuming these components are correctly imported
import Quencode from "../Qencode/Quencode";
import LoginBtnGroup from "./LoginBtnGroup";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false); // Changed variable name for clarity

  // Function to validate only the email
  useEffect(() => {
    if (email.length >= 15) {
      setIsEmailValid(true);
      setErrorMessage("");
    } else {
      setIsEmailValid(false);
    }
  }, [email]); // Depend on email to re-validate when it changes

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!isEmailValid) {
      setErrorMessage("Email length must be at least 15 characters long.");
      return;
    } else if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
      return;
    } else {
      setErrorMessage("");
    }

    const data = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "https://auth-qa.qencode.com/v1/auth/login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Login Success:", response.data);
      // Process successful login here
    } catch (error) {
      const errorDetail =
        error.response?.data?.detail || "Login failed. Please try again.";
      setErrorMessage(errorDetail);
      console.error(
        "Login Failed:",
        error.response ? error.response.data : error.message
      );
    }
  };

  // Toggle the visibility of the password
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <div className="content">
        <Quencode />
        <h1 className="title">Log in to your account</h1>
        <LoginBtnGroup />
        <div className="devider">
          <div className="devider_line"></div>
          <div className="devider_text">OR</div>
          <div className="devider_line"></div>
        </div>
        <form className="form" onSubmit={handleLogin}>
          {errorMessage && <div className="error-message" style={{color: 'red'}}>{errorMessage}</div>}
          <input 
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          {isEmailValid &&
            <div className="password-group">
              <input
                className="input"
                type={showPassword ? "text" : "password"} // Change type based on showPassword state
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <div className="passwordIcon" onClick={toggleShowPassword}>
                <img src={passwordIcon} alt="Show password" />
              </div>
              <div className={`eye-cross ${showPassword ? '' : 'hide'}`} onClick={toggleShowPassword}></div>
            </div>
          }
          <div>
            <div className="navLink_container">
              <NavLink className='navLink' to="/forgotpassword">Forgot your password?</NavLink>
            </div>
          </div>
          <button className="submit__btn" type="submit">Log in to Qencode</button>
        </form>
        
        <div className="signUp-link">
          <p>Is your company new to Qencode?</p>
          <NavLink to="/">Sign up</NavLink>
        </div> 
      </div>
    </div>
  );
}

export default Login;
