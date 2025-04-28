import { useState, useEffect } from 'react';

function useGeolocation() {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      return;
    }

    const success = (position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    };

    const failure = (error) => {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          setError('Permission denied. Please allow location access.');
          break;
        case error.POSITION_UNAVAILABLE:
          setError('Location information is unavailable.');
          break;
        case error.TIMEOUT:
          setError('The request to get your location timed out.');
          break;
        default:
          setError('An unknown error occurred.');
          break;
      }
    };

    navigator.geolocation.getCurrentPosition(success, failure);
  }, []);

  return { location, error };
}

export default useGeolocation;
