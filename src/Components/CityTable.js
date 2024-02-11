import React from 'react';
import '../CityTable.css'; 

const CityTable = ({ cities }) => {
  return (
    <div className="container mt-4">
      <h2>City Information</h2>
      <table className="custom-table">
        <thead className="custom-table-header">
          <tr>
            <th>#</th>
            <th>City</th>
            <th>Info</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{city.name}</td>
              <td>{city.info}</td>
              <td>{city.population}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CityTable;
