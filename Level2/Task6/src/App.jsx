import React from 'react';
import UserDetailsComponent from './UserDetailsComponent';

function App() {
  return (
    <div>
     <h3> <UserDetailsComponent name="Hariharan" age={21} city="Coimbatore" /> </h3>
     <h3> <UserDetailsComponent name="Aamirkhan" age="tewnty" city="Chennai" /></h3>
    </div>
  );
}

export default App;
