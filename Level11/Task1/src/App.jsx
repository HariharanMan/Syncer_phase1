import React from 'react';
import './App.css';

function App() {
  
  var myVar = "Hariharan";      
  let myLet = 21;             
  const myConst = "Blue";      

  return (
    <div className="container">
      <h1>Variable Declaration</h1>
      <p><strong>Name:</strong> {myVar}</p>
      <p><strong>Age:</strong> {myLet}</p>
      <p><strong>Favorite Color:</strong> {myConst}</p>
    </div>
  );
}

export default App;
