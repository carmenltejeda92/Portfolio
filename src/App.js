import {useState, useEffect, createContext} from 'react'
import './App.css';
import Baseball from './pages/Baseball';
import Home from './pages/Home';
import About from './pages/About';
import { Routes, Route} from 'react-router-dom';
import Songs from './pages/Songs';
import Display from './components/Display';

export const Context = createContext()

function App() {
  const [song, setSong] = useState(null)
  // const input = props.inputValue

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
   
   
   
    // const url = `https://shazam.p.rapidapi.com/search?term=${searchTerm}&locale=en-US&offset=0&limit=5`;
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': '8585c97282msh92d53c3affc0d28p190d69jsn6848a6977c6c',
    //     'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    //   }
    // };

    // try {
    //   const response = await fetch(url, options);
    //   const result = await response.json();
    //   console.log(result)
    //   setSong(result);
    // } catch (error) {
    //   console.error(error);
    // }
}
    
  
  useEffect(() =>{
    getSong()
  }, [])
  
 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<Songs handleSong={getSong} songSearch={song} />} />
        {/* <Route path="/baseball" element={<Baseball />} /> */}
        <Route path="/about-me" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
