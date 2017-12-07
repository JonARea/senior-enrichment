import React, {Component} from 'react'
import {setActiveCampusThunk} from '../actions'
import {connect} from 'react-redux'
import { Tab } from 'semantic-ui-react'

class SingleCampusView extends Component {

  componentDidMount () {
    const id =  this.props.location.pathname.split('campuses/')[1]
    this.props.setActiveCampus(id)
  }
  render () {
    const {name, imageUrl, description} = this.props.activeCampus
    const panes = [
      { menuItem: 'Tab 1', render: () => <Tab.Pane attached={false}>{description}</Tab.Pane> },
      { menuItem: 'Tab 2', render: () => <Tab.Pane attached={false}>Students List</Tab.Pane> }
    ]
    return (
      <div className="campus-view-window campus-detail">
        <div className="campus-detail-left">
          <h2>{name}</h2>
          <img src={imageUrl} alt="could not load the image " />
        </div>
        <div className="campus-detail-right">
          <Tab menu={{ pointing: true, secondary: true }} panes={panes} />
        </div>
      </div>
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
