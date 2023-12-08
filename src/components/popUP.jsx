import React from 'react'

function Popup(props) {
    const {setPopUp} = props

  return (
    <div className='popup'>
        <button className='close' onClick={()=>setPopUp(false)}>X</button>
        <div className='popUP'>
            <h1>Info</h1>
        </div>
        <div className='popUPB'>
            <button onClick={()=>setPopUp(false)}>KEEP PLAYING!</button>
            <button></button>
        </div>
    </div>
  )
}

export default Popup
