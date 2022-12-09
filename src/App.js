import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

import HeroSection from './components/Herosection'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/pages/SignUp';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        
          
          <Route path='/sign-up' component={SignUp} />
          <Route path="*" component={HeroSection} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
