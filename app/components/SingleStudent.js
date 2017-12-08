import React, {Component} from 'react'
import {setActiveStudentThunk, fetchCampusesThunk} from '../actions'
import {connect} from 'react-redux'
import SingleStudentInfo from './SingleStudentInfo'
import { Tab, Header, Button} from 'semantic-ui-react'

class SingleStudentView extends Component {

  componentDidMount () {
    const id =  this.props.location.pathname.split('students/')[1]
    this.props.setActiveStudent(id)
    this.props.fetchCampuses()
  }
  render () {
    const campuses = this.props.campuses
    const panes = [
      { menuItem: 'Student Info', render: () => <Tab.Pane attached={false}><SingleStudentInfo student={this.props.activeStudent} /></Tab.Pane> }
    ]
    return (
      <div className="single-student-view-window">
        <div className="student-detail-left">
          <Header>{this.props.activeStudent.name}</Header>
          <img src='http://fillmurray.com/200/200' alt="could not load the image" />
          <Button.Group attached='bottom' width='2' className="student-buttons">
            <Button size='small'>Edit</Button>
            <Button size='small'>Delete</Button>
          </Button.Group>
        </div>
        <div className="student-detail-right">
          <Tab menu={{ pointing: true, secondary: true }} panes={panes} />
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeStudent: state.activeStudent,
    campuses: state.campuses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveStudent (studentId) {
      dispatch(setActiveStudentThunk(dispatch, studentId))
    },
    fetchCampuses () {
      dispatch(fetchCampusesThunk(dispatch))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudentView)
