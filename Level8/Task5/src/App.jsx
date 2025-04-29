import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: null, error: null });

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
      console.log('Response:', response.data);

      setStatus({ submitting: false, success: 'Message sent successfully!', error: null });
      setFormData({ name: '', email: '', message: '' });  // Reset the form
    } catch (error) {
      console.error('Error:', error);
      setStatus({ submitting: false, success: null, error: 'Failed to send message. Please try again.' });
    }
  };

  return (
    <div className="form-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={status.submitting}>
          {status.submitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {status.success && <p className="success">{status.success}</p>}
      {status.error && <p className="error">{status.error}</p>}
    </div>
  );
}

export default ContactForm;
