import React, {Component} from 'react'
import SingleCampusPreview from './SingleCampusPreview'
import {fetchCampusesThunk} from '../actions'
import {connect} from 'react-redux'

class CampusView extends Component {

  componentDidMount() {
    this.props.fetchCampuses()

  }

  render() {
    return (
      <div className='campus-preview-window'>
        {this.props.campuses.map(campus => {
          return (
            <SingleCampusPreview key={campus.id} campus={campus} />
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCampuses: () => dispatch(fetchCampusesThunk(dispatch))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusView)
