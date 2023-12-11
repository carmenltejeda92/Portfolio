import {useState, useEffect, useContext, createContext} from 'react'
import { Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Songs from './pages/Songs';

export const Context = createContext()

function App() {
  const [song, setSong] = useState(null)

    const getSong = async (searchTerm) =>{
      const url = `https://movie-database-alternative.p.rapidapi.com/?s=${searchTerm}&r=json&page=1`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '8585c97282msh92d53c3affc0d28p190d69jsn6848a6977c6c',
          'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
        }
      };
      
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        setSong(result)
      } catch (error) {
        console.error(error);
      }
    }

  useEffect(() =>{
    getSong()
  },[])
  
  
 
  return (
    <Context.Provider value={{song}}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/songs" element={<Songs handleSong={getSong} />} />
          <Route path="/about-me" element={<About />} />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
