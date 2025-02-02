import React from 'react';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Servicepage from './pages/Servicepage';
import Homepage from './pages/Homepage';
import Footer from './component/homepagecomponent/Footer';
import Aboutpage from './pages/Aboutpage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Servicepage" element={<Servicepage />} />
        <Route path="/Aboutpage" element={<Aboutpage />} />

      </Routes>
        <Footer/>
    </Router>
  );
};

export default App;
