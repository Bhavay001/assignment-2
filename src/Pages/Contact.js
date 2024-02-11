import React from 'react';
import NavigationBar from '../Components/NavigationBar.js';
import HeaderBar from '../Components/HeaderBar.js';
import Footer from '../Components/Footer.js';
const Contact = () => {
  return (
    <div>
      <NavigationBar />
      <HeaderBar title="Contact" />
      <p>Name: Bhavay Singhal</p>
      <p>Email: bhavaysinghal01@gmail.com</p>
      <Footer/>
    </div>
  );
};

export default Contact;
