import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Classes from './components/pages/Classes';
import Raids from './components/pages/Raids';


import HeroSection from './components/Herosection'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/pages/SignUp';



function App() {
  return (
    
    <div className='image'>
      <Router>
        <Navbar />
        <Routes>
        
          
          <Route path='/sign-up' element={<SignUp />} />
          <Route path="*" element={<HeroSection />} />
          <Route path='/classes' element={<Classes />} />
          <Route path='/raids' element={<Raids />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
