import React from 'react'

export default function SingleCampusPreview (props) {
  return (
    <div className="single-campus-preview">
      <img src={props.image} alt={`${props.name} image not found`} />

      <h3>{props.name}</h3>
    </div>
  )
}
