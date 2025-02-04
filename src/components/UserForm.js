import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/features/userSlice";
import './UserForm.css';  // Import the CSS file

const UserForm = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(setUser({ ...userData, id: Date.now() }));
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  return (
    <div className="user-form">
      <h2>Enter Your Details</h2>
      <input type="text" name="name" onChange={handleChange} placeholder="Name" />
      <input type="text" name="address" onChange={handleChange} placeholder="Address" />
      <input type="email" name="email" onChange={handleChange} placeholder="Email" />
      <input type="phone" name="phone" onChange={handleChange} placeholder="Phone" />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
};

export default UserForm;
