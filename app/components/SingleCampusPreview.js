import React from 'react'
import {Link} from 'react-router-dom'

export default function SingleCampusPreview (props) {
  const {name, imageUrl, id} = props.campus
  return (
    <div className="single-campus-preview">
      <Link to={`/campuses/${id}`}>
      <img src={imageUrl} alt={`${name} image not found`} />
      <h4>{name}</h4>
      </Link>
    </div>
  )
}
