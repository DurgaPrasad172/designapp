import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AboutUsPage from './components/AboutUsPage';
import BlogPage from './components/BlogPage';
import ServicesPage from './components/ServicesPage';
import ContactUsForm from './components/ContactUsForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactUsForm />} />
      </Routes>
    </Router>
  );
};

export default App;
