import React, {Component} from 'react'
import {setActiveStudentThunk} from '../actions'
import {connect} from 'react-redux'
import SingleStudentInfo from './SingleStudentInfo'
import {Link} from 'react-router-dom'
import {Tab, Header, Button} from 'semantic-ui-react'

class SingleStudentView extends Component {

  componentDidMount () {
    const id =  this.props.location.pathname.split('students/')[1]
    this.props.setActiveStudent(id)
  }

  render () {
    const panes = [
      {
        menuItem: 'Student Info',
        render: () => (
          <Tab.Pane attached={false}>
            <SingleStudentInfo student={this.props.activeStudent} />
          </Tab.Pane>)
      },
      {
        menuItem: 'Grades',
        render: () => (
          <Tab.Pane attached={false}>
            This students grades
          </Tab.Pane>)
      },
      {
        menuItem: 'Courses',
        render: () => (
          <Tab.Pane attached={false}>
            This students courses
          </Tab.Pane>)
      }
    ]
    const {name, id} = this.props.activeStudent
    return (
      <div className="single-student-view-window">
        <div className="student-detail-left">
          <Header>{name}</Header>
          <img src="http://fillmurray.com/160/210" alt="could not load the image" />
          <Button.Group attached="bottom" width="2" className="student-buttons">
            <Button size="small">
              <Link to={'/students/update/' + id}>Edit</Link>
            </Button>
            <Button size="small">
              <Link to={'/students/delete/' + id}>Delete</Link>
            </Button>
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
    activeStudent: state.activeStudent
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveStudent (studentId) {
      dispatch(setActiveStudentThunk(dispatch, studentId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudentView)
