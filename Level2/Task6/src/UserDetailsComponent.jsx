import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function UserDetailsComponent({ name, age, city }) {
  return (
    <div className="user-card">
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>City:</strong> {city}</p>
    </div>
  );
}

UserDetailsComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
};

export default UserDetailsComponent;
