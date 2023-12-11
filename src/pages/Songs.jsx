import React from 'react'
import {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../App'
import Carousel from '../components/Carousel'


function Songs(props) {
    const nav = useNavigate()
    const {song} = useContext(Context)
    const[formData, setFormData] = useState({searchterm: ""})


    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) =>{
        console.log('Searching...')
        e.preventDefault()
        props.handleSong(formData.searchterm)
    }


  return (

    <div className='form'>
        <h1>What's your favorite movie??</h1>
        <div className='results'>
          <p>{song.Search[0].Title}</p>
          <img className='resultImg' src={song.Search[0].Poster} />
        </div>
        <h3>Here are some of mine</h3>
        <div className='movieList'>
          <img className='movie' src="https://humanehollywood.org/app/uploads/2020/02/tCgBOpglqgg478AIy9wYfZ7choY-235x353-c-default.jpg" />
          <img className='movie' src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p21432_p_v10_az.jpg" /> 
          <img className='movie' src="https://lumiere-a.akamaihd.net/v1/images/image_ed8d7a4e.jpeg?region=0%2C0%2C800%2C1200" /> 
          <img className='movie' src="https://m.media-amazon.com/images/M/MV5BYTU1ZTI0YjUtZGRlMS00MDU1LWFmZmItZWRiYTg5NTExMmRjXkEyXkFqcGdeQXVyMTUzMDg3MTQw._V1_FMjpg_UX1000_.jpg" />
          <img className='movie' src="https://musicart.xboxlive.com/7/98741700-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080" />
        </div>
        <div className='searchBar'>
          <form onSubmit={handleSubmit}>
          <input className='search' name="searchterm" type="text" placeholder="Search Your Favorite Movie!"
            onChange={handleChange} value={formData.searchterm}></input>
          </form>
        </div>
        <button className='goHome' onClick={()=>nav('/')}>Home</button>
    </div>
  )
}

export default Songs
