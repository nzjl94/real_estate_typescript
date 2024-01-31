import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/general/navbar';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import Property from './components/property';
import Service from './components/service';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/property" element={<Property />} />
          <Route path="/service"  element={<Service />} />
          <Route path="/about"    element={<About />} />
          <Route path="/contact"  element={<Contact />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
