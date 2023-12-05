import {useState, useEffect} from 'react'
import './App.css';
import Baseball from './pages/Baseball';
import Display from './pages/Display';
import Home from './pages/Home';
import About from './pages/About';
import { Routes, Route} from 'react-router-dom';

function App() {
  const [team, setTeam] = useState(null)
  const url = `https://api-baseball.p.rapidapi.com/teams?league=1&season=2020`;
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': 'c40b5da817msh2cfaf67c5455c12p169da5jsn1937ff11578e',
          'X-RapidAPI-Host': 'api-baseball.p.rapidapi.com'
      }
  };

  const getTeam = async() =>{
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        setTeam(result);
        console.log(result)
    } catch (error) {
        console.error(error);
    }
}

useEffect(() =>{
  getTeam()
}, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/display" element={<Display />} />
        <Route path="/baseball" element={<Baseball />} />
        <Route path="/about-me" element={<About />} />
        {/* <Baseball teamSearch={getTeam} />
        {team?<Display info={team}/>: null} */}
      </Routes>

    </div>
  );
}

export default App;
