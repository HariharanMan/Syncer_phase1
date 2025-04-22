import React, { useState } from "react";
import "./App.css";

function UserProfile() {
  const [user, setUser] = useState({
    name: "",
    age: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  return (
    <div className="container">
      <h1>Your Name and Age</h1>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={user.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Enter age"
        value={user.age}
        onChange={handleChange}
      />
      <p>
        Name: <strong>{user.name}</strong>
      </p>
      <p>
        Age: <strong>{user.age}</strong>
      </p>
    </div>
  );
}

export default UserProfile;
