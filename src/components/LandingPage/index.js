// LandingPage.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LandingPage = () => {
  const [coreValues, setCoreValues] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch core values from the backend
    axios.get('/core-values')
      .then(response => setCoreValues(response.data))
      .catch(error => console.error('Error fetching core values:', error));

    // Fetch services from the backend
    axios.get('/services')
      .then(response => setServices(response.data))
      .catch(error => console.error('Error fetching services:', error));
  }, []);

  return (
    <div className="landing-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our Digital Marketing Company</h1>
          <p>Boost your online presence with our innovative strategies.</p>
          <Link to="/services" className="cta-button">Explore Our Services</Link>
        </div>
      </section>

      <section className="core-values-section">
        <h2>Our Core Values</h2>
        <ul>
          {coreValues.map(value => (
            <li key={value._id}>{value.name}</li>
          ))}
        </ul>
      </section>

      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map(service => (
            <div key={service._id} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={`/services/${service._id}`} className="cta-button">Learn More</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
