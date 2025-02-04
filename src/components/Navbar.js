import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';  // Import the CSS file

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Counter</Link></li>
        <li><Link to="/user-form">User Form</Link></li>
        <li><Link to="/editor">Editor</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/auth">Auth</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
