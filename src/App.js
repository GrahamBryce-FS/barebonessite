import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/Home';
import VR from './pages/VR';
import CyberSecurity from './pages/CyberSecurity';
import AiBlog from './pages/AiBlog';

function App() {
  return (
    <div>
      <Router> {/* Wrap your routes with the Router component */}
        <Header />
        <Routes>
          <Route path='/' element={<Home />} /> {/* Set the root path */}
          <Route path='/AiBlog' element={<AiBlog />} />
          <Route path='/CyberSecurity' element={<CyberSecurity />} />
          <Route path='/VR' element={<VR />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

