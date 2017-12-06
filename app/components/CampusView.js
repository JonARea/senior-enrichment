import React, {Component} from 'react'
import SingleCampusPreview from './SingleCampusPreview'

export default class CampusView extends Component {
  constructor() {
    super()
    this.state = {
      campuses: []
    }
  }
  componentDidMount() {
    fetch('/api/campuses')
      .then(res => res.json())
      .then(campuses => this.setState({campuses}))
  }
  render() {
    return (
      <div>
        <p>CampusView</p>
        <div>
          {this.state.campuses.map(campus => {
            return (
              <SingleCampusPreview key={campus.id} name={campus.name} image={campus.imageUrl} />
            )
          })}
        </div>
      </div>
    )
  }
}
