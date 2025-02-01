import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Servicepage from './pages/Servicepage';
import Homepage from './pages/Homepage';
import Footer from './component/homepagecomponent/Footer';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Servicepage" element={<Servicepage />} />
         
      </Routes>
        <Footer/>
    </Router>
  );
};

export default App;
