import React from "react";
import "./App.css";

function App() {
  let favoriteFoods = ["Pizza", "Biryani", "Burger", "Pasta", "Sushi"];

  favoriteFoods.push("Ice Cream");
  const removedItem = favoriteFoods.shift(); 
  const length = favoriteFoods.length;    
  const index = favoriteFoods.indexOf("Pasta");
  const slicedArray = favoriteFoods.slice(1, 4); 

  return (
    <div className="App">
      <h1>Array Operations</h1>
      <div className="output">
        <p><strong>Original array (after modifications):</strong> {JSON.stringify(favoriteFoods)}</p>
        <p><strong>Removed item:</strong> {removedItem}</p>
        <p><strong>Length of array:</strong> {length}</p>
        <p><strong>Index of "Pasta":</strong> {index}</p>
        <p><strong>Sliced array (index 1 to 3):</strong> {JSON.stringify(slicedArray)}</p>
      </div>
    </div>
  );
}

export default App;
