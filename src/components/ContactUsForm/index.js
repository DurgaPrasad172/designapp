// ContactUsForm.js

import React, { useState } from 'react';
import axios from 'axios';

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to the backend
    axios.post('/contact', formData)
      .then(response => console.log(response.data))
      .catch(error => console.error('Error submitting contact form:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />

      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />

      <label>Phone:</label>
      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

      <label>Message:</label>
      <textarea name="message" value={formData.message} onChange={handleChange} required />

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactUsForm;
