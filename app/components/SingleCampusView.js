import React, {Component} from 'react'
import {setActiveCampusThunk} from '../actions'
import {connect} from 'react-redux'

class SingleCampusView extends Component {

  componentDidMount () {
    const id =  this.props.location.pathname.split('campuses/')[1]
    this.props.setActiveCampus(id)
  }
  render () {
    return (

      <p>{this.props.activeCampus.name}</p>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeCampus: state.activeCampus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveCampus: (campusId) => dispatch(setActiveCampusThunk(dispatch, campusId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampusView)
