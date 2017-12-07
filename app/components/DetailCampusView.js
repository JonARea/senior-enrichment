import React, {Component} from 'react'

export default class DetailCampusView extends Component {
  constructor() {
    super()
    this.state = {
      campus: {}
    }
  }

  componentDidMount () {
    const url =  '/api/campuses/' + this.props.location.pathname.split('campuses/')[1]
    console.log(url)
    fetch(url)
      .then(response => response.json())
      .then(campus => this.setState({campus}))
      .catch(console.error)
  }
  render () {
    return (

      <p>{this.state.campus.name}</p>
    )
  }
}
