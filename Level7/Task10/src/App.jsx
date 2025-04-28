import React from 'react';
import useGeolocation from './hooks/useGeolocation';
import './App.css';

function App() {
  const { location, error } = useGeolocation();

  return (
    <div className="app">
      <h1>Geolocation</h1>
      {error ? (
        <p className="error">{error}</p>
      ) : location.latitude && location.longitude ? (
        <div className="location">
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      ) : (
        <p>Fetching your location...</p>
      )}
    </div>
  );
}

export default App;
