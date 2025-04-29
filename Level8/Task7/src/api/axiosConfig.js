import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

// Simulated Token (In real apps, fetch from auth state or cookies)
const AUTH_TOKEN = 'Bearer dummy_token_12345';

// Setup Interceptors
axiosInstance.interceptors.request.use(
  (config) => {
    // Add Authorization header
    config.headers.Authorization = AUTH_TOKEN;
    window.__LOADING__ = true;
    return config;
  },
  (error) => {
    window.__LOADING__ = false;
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Response:', response.data);
    window.__LOADING__ = false;
    return response;
  },
  (error) => {
    window.__LOADING__ = false;
    if (error.response) {
      const { status } = error.response;
      if (status === 401) {
        console.error('Unauthorized - Redirect to login');
      } else if (status === 404) {
        console.error('Resource Not Found');
      } else if (status === 500) {
        console.error('Server Error');
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
