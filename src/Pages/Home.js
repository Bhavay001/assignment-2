import React, { useState } from 'react';
import CityChart from '../Components/CityChart.js';
import HeaderBar from '../Components/HeaderBar.js';
import NavigationBar from '../Components/NavigationBar.js';
import StateMap from '../Components/StateMap.js';
import StateToolTip from '../Components/StateToolTip.js';
import statesData from '../Data/Data.js';
import Popup from '../Components/Popup.js';
import Footer from '../Components/Footer.js';

const Home = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleStateClick = (state) => {
    setSelectedState(state);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setSelectedState(null);
    setShowPopup(false);
  };

  return (
    <div className="App">
      <NavigationBar />
      <HeaderBar title="State Graph" />
      <div className='main-content'>
        <StateMap statesData={statesData} onStateClick={handleStateClick} />
        {selectedState && !showPopup && (
          <CityChart cities={selectedState.cities} temperature={selectedState.temperature} />
        )}
        {selectedState && !showPopup && <StateToolTip state={selectedState} />}
        {showPopup && <Popup onClose={handleClosePopup} state={selectedState} />}
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
