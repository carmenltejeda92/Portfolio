import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Fun from '../components/Fun'

function Baseball(props) {
    const nav = useNavigate()
    const [formData, setFormData] = useState({searchterm: ""})
    // console.log(props.teamSearch)
   
    const handleChange = (e) =>{
        // setFormData({...formData, [e.target.name]: e.target.value})
        setFormData(e.target.value)
    }

    const handleSubmit = (e) =>{
        console.log('Searching ...')
        e.preventDefault()
        // console.log(formData.searchTeam)
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

    // <div className='form'>
    //     <div className='topDiv'>
    //         <div className='movieImg'><img></img></div>
    //     </div>
    //     <Fun inputValue={formData}/> 
    //     <div className='bottomDiv'>
    //         <form onSubmit={handleSubmit}>
    //             <input className='search' name='searchTerm' type='text' placeholder='Search Your Team & Press Enter'
    //                 onChange={handleChange} value={formData}></input>
    //         </form>
    //         <div className='movieInfo'></div>
    //     </div>
    //     <div className='bTN'>
        // <button className='btn' onClick={()=>nav('/')}>Home</button>
    //   </div>
    // </div>
  )
}

export default Baseball
