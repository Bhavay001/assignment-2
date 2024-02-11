import { Route, Routes } from "react-router-dom";
import './App.css';
import About from './Pages/About'
import Contact from './Pages/Contact';
import Home from './Pages/Home';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
