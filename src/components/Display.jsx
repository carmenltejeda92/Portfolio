import React from 'react'

function Display(props) {
  return (
    <div className="display">
            <div className='display'><p>{props.info.artists.hits[0].artist.name}</p></div>
            <div className='display'><p>{props.info.tracks.hits[0].track.title} </p></div>
            <div className='display'><img className='displayPic' src={props.info.tracks.hits[0].track.images.background} /></div>
    </div>
  )
}

export default Display
