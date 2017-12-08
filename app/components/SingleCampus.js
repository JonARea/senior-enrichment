import React, {Component} from 'react'
import StudentTable from './StudentTable'
import {setActiveCampusThunk, fetchStudentsThunk} from '../actions'
import {connect} from 'react-redux'
import {Tab, Button} from 'semantic-ui-react'

class SingleCampusView extends Component {

  componentDidMount () {
    const id =  this.props.location.pathname.split('campuses/')[1]
    this.props.setActiveCampus(id)
    this.props.fetchStudents()
  }
  render () {
    const {name, imageUrl, description} = this.props.activeCampus
    const students = this.props.students
    const panes = [
      { menuItem: 'Description', render: () => <Tab.Pane attached={false}>{description}</Tab.Pane> },
      { menuItem: 'Students', render: () => <Tab.Pane attached={false}><StudentTable students={students} /></Tab.Pane> }
    ]
    return (
      <div className="campus-view-window">
        <div className="campus-detail-left">
          <h2>{name}</h2>
          <img src={imageUrl} alt="could not load the image " />
          <Button.Group attached='bottom' width='2' className="student-buttons">
            <Button size='small'>Edit</Button>
            <Button size='small'>Delete</Button>
          </Button.Group>
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
    activeCampus: state.activeCampus,
    students: state.students
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveCampus (campusId) {
      dispatch(setActiveCampusThunk(dispatch, campusId))
    },
    fetchStudents () {
      dispatch(fetchStudentsThunk(dispatch))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampusView)
