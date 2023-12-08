import React from 'react'
// import Baseball from '../pages/Baseball';
import { useState, useEffect } from 'react';
import Songs from '../pages/Songs';

function Fun() {
//   const [song, setSong] = useState(null)
//   // const input = props.inputValue

//   const getSong = async (searchTerm) =>{
//     const url = `https://shazam.p.rapidapi.com/search?term=${searchTerm}&locale=en-US&offset=0&limit=5`;
//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': '8585c97282msh92d53c3affc0d28p190d69jsn6848a6977c6c',
//         'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
//       }
//     };

//     try {
//       const response = await fetch(url, options);
//       console.log(response)
//       const result = await response.json();
//       console.log(result)
//       setSong(result);
//       console.log(song)
//     } catch (error) {
//       console.error(error);
//     }
// }
    
  
//   useEffect(() =>{
//     getSong()
//   }, [])



  return (
    <div>
      {song?<Songs handleSong={getSong} songSearch={song}/>: <Fun />}
      {/* <Songs songSearch={song}/> */}
    </div>
  )
}


export default Fun
