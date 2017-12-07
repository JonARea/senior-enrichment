import React, {Component} from 'react'
import SingleCampusPreview from './SingleCampusPreview'
import {Container} from 'semantic-ui-react'

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
      <div className='campus-preview-window'>
        {this.state.campuses.map(campus => {
          return (
            <SingleCampusPreview key={campus.id} campus={campus} />
          )
        })}
      </div>
    )
  }
}
