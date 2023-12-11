import { useState } from 'react'
import React from 'react'
import images from '../models/Images'

function Carousel(props) {
    const [image, setImage] = useState(images)

    const previous=()=>{
        image--
    }

    const following=()=>{
        image++
    }



  return (
    <div className='carousel'>
      <div>movie imgs</div>
      <div className='lfNdRt'>
        <button onClick={previous()}></button>
        <button onClick={following()}></button>
      </div>
    </div>
  )
}

export default Carousel
