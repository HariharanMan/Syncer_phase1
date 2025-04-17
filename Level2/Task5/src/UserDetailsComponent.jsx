import React from 'react';

function UserDetailsComponent({ name, age, city }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
}

export default UserDetailsComponent;
