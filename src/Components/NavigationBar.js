import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      {/* Add more links as needed */}
    </nav>
  );
};
export default NavigationBar