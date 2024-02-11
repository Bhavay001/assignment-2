import React from 'react';
import CityChart from './CityChart';

const Popup = ({ onClose, state }) => {
  if (!state) {
    // Handle the case when state is undefined or null
    return null;
  }

  const { name, cities, temperature, population } = state;

  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h3>{name}</h3>
        <CityChart cities={cities} temperature={temperature} />
        <p>Population: {population.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Popup;
