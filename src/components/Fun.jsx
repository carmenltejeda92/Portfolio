import React from 'react'
import Baseball from '../pages/Baseball';
import { useState, useEffect } from 'react';

function Fun(props) {
  const [song, setSong] = useState(null)
  // const [team, setTeam] = useState(null)
  const input = props.inputValue

  const getSong = async (searchTerm) =>{


    const url = `https://shazam.p.rapidapi.com/search?term=${searchTerm}&locale=en-US&offset=0&limit=5`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '8585c97282msh92d53c3affc0d28p190d69jsn6848a6977c6c',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setSong(result);
    } catch (error) {
      console.error(error);
    }
}



    
  // const getTeam = async(input) =>{
  //   const url = `https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/${input}teamStats=true&topPerformers=true`;
  //   const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '8585c97282msh92d53c3affc0d28p190d69jsn6848a6977c6c',
  //     'X-RapidAPI-Host': 'tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com'
  //   }}
  //     try {
  //       const response = await fetch(url, options);
  //       const result = await response.json();
  //       setTeam(result);
  //       console.log(result);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
    
    
    
  
  useEffect(() =>{
    getSong()
  })



  return (
    <div>
        {song?<Baseball info={song}/>: null}
        <Baseball songSearch={getSong} />
        {/* {team?<Baseball info={team}/>: null} */}
    </div>
  )
}


export default Fun
