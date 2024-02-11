import React from 'react';
import '../App.css';
const StateToolTip = ({ state }) => {
  if (!state) return null;

  return (
    <div className="state-tooltip">
      <h3>{state.name}</h3>
      <p>Temperature: {state.temperature}°C</p>
      <p>Population: {state.population.toLocaleString()}</p>
    </div>
  );
};

export default StateToolTip;
