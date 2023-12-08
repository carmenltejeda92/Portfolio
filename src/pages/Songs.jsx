import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Fun from '../components/Fun'

function Songs(props) {
    const nav = useNavigate()
    const[formData, setFormData] = useState({searchterm: ""})

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) =>{
        console.log('Searching...')
        e.preventDefault()
        props.songSearch(formData.searchterm)
    }


  return (

    <div className='form'>
        <div className='topDiv'>
            <div className='result'></div>
            <form onSubmit={handleSubmit}>
            <input className='search' name="searchterm" type="text" placeholder="Search Song"
              onChange={handleChange} value={formData.searchterm}></input>
            <div><input id="btn" type="submit" value="Submit"/></div>
            </form>
        </div>
        <button className='btn' onClick={()=>nav('/')}>Home</button>
    </div>
  )
}

export default Songs
