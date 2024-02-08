// ServicesPage.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch services from the backend
    axios.get('/services')
      .then(response => setServices(response.data))
      .catch(error => console.error('Error fetching services:', error));
  }, []);

  return (
    <div>
      <h2>Services</h2>
      {services.map(service => (
        <div key={service._id}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <Link to={`/services/${service._id}`}>Learn More</Link>
        </div>
      ))}
    </div>
  );
};

export default ServicesPage;
