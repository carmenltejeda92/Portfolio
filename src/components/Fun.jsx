import React from 'react'
import Baseball from '../pages/Baseball';
import { useState, useEffect } from 'react';

function Fun() {
    const [team, setTeam] = useState(null)
    const url = 'https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBTeams?teamStats=true&topPerformers=true';
    const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8585c97282msh92d53c3affc0d28p190d69jsn6848a6977c6c',
      'X-RapidAPI-Host': 'tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com'
    }
  }
  const getTeam = async() =>{
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setTeam(result);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
    
    
    
    // const url = `https://api-baseball.p.rapidapi.com/teams?league=1&season=2020`;
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'c40b5da817msh2cfaf67c5455c12p169da5jsn1937ff11578e',
    //         'X-RapidAPI-Host': 'api-baseball.p.rapidapi.com'
    //     }
    // };
  
    // const getTeam = async() =>{
    //   try {
    //       const response = await fetch(url, options);
    //       const result = await response.json();
    //       setTeam(result);
    //       console.log(result)
    //   } catch (error) {
    //       console.error(error);
    //   }
  // }
  
  useEffect(() =>{
    getTeam()
  }, [])



  return (
    <div>
        <Baseball teamSearch={team} />
        {/* {team?<Baseball info={team}/>: null} */}
    </div>
  )
}


export default Fun
