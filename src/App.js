import {useState, useEffect} from 'react'
import './App.css';
import Baseball from './pages/Baseball';
import Home from './pages/Home';
import About from './pages/About';
import { Routes, Route} from 'react-router-dom';
import Songs from './pages/Songs';

function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<Songs />} />
        {/* <Route path="/baseball" element={<Baseball />} /> */}
        <Route path="/about-me" element={<About />} />
      </Routes>

    </div>
  );
}

export default App;
