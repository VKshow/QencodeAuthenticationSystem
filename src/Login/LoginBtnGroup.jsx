import React, { useState } from "react";
import googleIcon from "/assets/icons/google.svg";
import gitIcon from "/assets/icons/github.svg";

const LoginBtnGroup = () => {
  // State to store a single login error message
  const [loginError, setLoginError] = useState("");

  const handleGoogleLogin = async () => {
    try {
      await authService.signInWithGoogle();
      console.log("Logged in with Google");
      // Handle successful login and clear any previous error message
      setLoginError("");
    } catch (error) {
      console.error("Error logging in with Google", error);
      // Update state to show a Google login error
      setLoginError("Failed to log in with Google. Please try again.");
    }
  };

  const handleGitHubLogin = async () => {
    try {
      await authService.signInWithGitHub();
      console.log("Logged in with GitHub");
      // Handle successful login and clear any previous error message
      setLoginError("");
    } catch (error) {
      console.error("Error logging in with GitHub", error);
      // Update state to show a GitHub login error
      setLoginError("Failed to log in with GitHub. Please try again.");
    }
  };

  return (
    <>
      {loginError && (
        <p className="error_message" style={{ color: "red" }}>
          {loginError}
        </p>
      )}
      <div className="btn-group">
        <div className="btn-group_item" onClick={handleGoogleLogin}>
          <div className="btn_item_icon">
            <img src={googleIcon} alt="Google login icon" />
          </div>
          <p className="btn_item_text">Google</p>
        </div>

        <div className="btn-group_item" onClick={handleGitHubLogin}>
          <div className="btn_item_icon github_icon">
            <img src={gitIcon} alt="GitHub login icon" />
          </div>
          <p className="btn_item_text">Github</p>
        </div>
      </div>
    </>
  );
};

export default LoginBtnGroup;
