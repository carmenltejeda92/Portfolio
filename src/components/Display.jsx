import React from 'react'

function Display(props) {
  return (
    <div className='display'>
        <div className='teamName'><p>{props.response[1].name}</p></div>
        {/* <div className='display'><p>{props.info.artists.hits[0].artist.name}</p></div>
        <div className='display'><p>{props.info.artists.hits[0].artist.name}</p></div> */}
    </div>
  )
}

export default Display
