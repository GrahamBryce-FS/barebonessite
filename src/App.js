import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home';
import VR from './pages/vr';
import CyberSecurity from './pages/cyber-security';
import AiBlog from './pages/ai-blog';

function App() {
  return (
    <div>
      <Router> {/* Wrap your routes with the Router component */}
        <Header />
        <Routes>
          
          <Route path='/home' element={<Home />} /> 
          <Route path='/' element={<Home />} /> {/* Set the root path */}
          <Route path='/ai-blog' element={<AiBlog />} />
          <Route path='/cyber-security' element={<CyberSecurity />} />
          <Route path='/vr' element={<VR />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

