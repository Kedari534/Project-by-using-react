import React from "react";
import { useSelector } from "react-redux";
import './Dashboard.css';  // Import the CSS file

const Dashboard = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="user-info">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Address:</strong> {user.address}</p>
      </div>
    </div>
  );
};

export default Dashboard;
