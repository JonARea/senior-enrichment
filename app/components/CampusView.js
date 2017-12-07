import React, {Component} from 'react'
import PreviewCampus from './PreviewCampus'
import {fetchCampusesThunk} from '../actions'
import {connect} from 'react-redux'

class CampusView extends Component {

  componentDidMount() {
    this.props.fetchCampuses()

  }

  render() {
    return (
      <div className='campus-view-window'>
        {this.props.campuses.map(campus => {
          return (
            <PreviewCampus key={campus.id} campus={campus} />
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
