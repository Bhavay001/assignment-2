import React from 'react';
import '../App.css';
const HeaderBar = ({ title }) => {
  return (
    <header className="header-bar">
      <h1>{title}</h1>
    </header>
  );
};

export default HeaderBar;
