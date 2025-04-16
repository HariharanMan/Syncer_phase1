import React from 'react'
import image from './assets/download.jpg'
import './App.css'

function App() {
  return (
    <div>
      <h3 className="h3">Image</h3>
      <img className="image" 
      src={image} 
      alt="Image"
      width="500"
      height="500"
      />
    </div>
  )
}

export default App
