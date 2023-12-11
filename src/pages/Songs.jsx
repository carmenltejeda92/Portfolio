import React from 'react'
import {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../App'


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
        <div>
            <div className='result'></div>
            <form onSubmit={handleSubmit}>
            <input className='search' name="searchterm" type="text" placeholder="Search Song"
              onChange={handleChange} value={formData.searchterm}></input>
            </form>
        </div>
        {/* <p>{song.Search[0].Title}</p>
        <img src={song.Search[0].Poster}></img> */}
        <button className='btn' onClick={()=>nav('/')}>Home</button>
    </div>
  )
}

export default Songs
