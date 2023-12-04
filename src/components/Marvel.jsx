import { useState } from 'react'
import React from 'react'

function Marvel() {
    const [formData, setFormData] = useState()
    const [movie, setMovie] = useState(null)

    



    return (
        <div className='form'>
            <div className='topDiv'>
                <div className='movieImg'><img></img>
                </div>
            </div>
            <div className='bottomDiv'>
                <div className='movieInfo'>
                    <p></p>
                </div>
            </div>
        </div>
  )
}

export default Marvel
