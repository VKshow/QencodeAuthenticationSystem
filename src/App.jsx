import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Login/Login";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import ResetPassword from './ResetPassword/ResetPassword';

function App() {
  return (
    

    
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
      </Routes>
    </Router>

    
  );
}

export default App;
