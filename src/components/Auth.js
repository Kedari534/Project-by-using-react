import React, { useState } from "react";
import './Auth.css';  // Import the CSS file

const Auth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="auth-container">
      <h2>{isLoggedIn ? "Welcome back!" : "Please log in"}</h2>
      <button onClick={toggleAuth}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Auth;
