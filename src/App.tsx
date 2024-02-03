import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/general/navbar';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import Property from './components/property';
import Service from './components/service';
import GlobalStyle from './globalStyles';


function App() {
  return (<>
    <GlobalStyle />
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
          <Routes >
            <Route path="/"         element={<Home />} />
            <Route path="/property" element={<Property />} />
            <Route path="/service"  element={<Service />} />
            <Route path="/about"    element={<About />} />
            <Route path="/contact"  element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  </>);
}

export default App;
