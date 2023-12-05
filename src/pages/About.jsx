import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {

    const nav = useNavigate()
   
  return (
    <div>
      This is my about me page

      <button className='btn' onClick={()=>nav('/')}>Home</button>

    </div>
  )
}

export default About
