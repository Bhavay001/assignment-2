import React from 'react';
import NavigationBar from '../Components/NavigationBar.js';
import HeaderBar from '../Components/HeaderBar.js';
import Footer from '../Components/Footer.js';
const About = () => {
  return (
    <div>
      <NavigationBar />
      <HeaderBar title="About" />
      <p>This project is made by Bhavay Singhal.</p>
      <Footer/>
    </div>
  );
};

export default About;
