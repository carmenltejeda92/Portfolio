import React from 'react'
import {useState} from 'react'
import Fun from '../components/Fun'

function Baseball(props) {
    const [formData, setFormData] = useState()
    console.log(props.teamSearch)
   
    const handleChange = (e) =>{
        // setFormData({...formData, [e.target.name]: e.target.value})
        setFormData(e.target.value)
    }

    const handleSubmit = (e) =>{
        console.log('Searching ...')
        e.preventDefault()
        // props.teamSearch(formData.searchTeam)
    }


  return (
    <div className='form'>
        <div className='topDiv'>
            <div className='movieImg'><img></img></div>
        </div>
        <Fun />
        <div className='bottomDiv'>
            <form onSubmit={handleSubmit}>
                <input className='search' name='searchTerm' type='text' placeholder='Search Your Team & Press Enter'
                    onChange={handleChange} value={FormData.searchTeam}></input>
            </form>
            <div className='movieInfo'></div>
        </div>
    </div>
  )
}

export default Baseball
