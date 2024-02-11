import React from 'react';

const Footer = () => {
  return (
    <footer style={{ marginTop: '20px', textAlign: 'center', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
      &copy; {new Date().getFullYear()} Bhavay Singhal. All rights reserved.
    </footer>
  );
};

export default Footer;
