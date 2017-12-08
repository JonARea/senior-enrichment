import React, {Component} from 'react'
import {setActiveStudentThunk, fetchCampusesThunk} from '../actions'
import {connect} from 'react-redux'
import SingleStudentInfo from './SingleStudentInfo'
import {Link} from 'react-router-dom'
import { Tab, Header, Button} from 'semantic-ui-react'

class SingleStudentView extends Component {

  componentDidMount () {
    const id =  this.props.location.pathname.split('students/')[1]
    this.props.setActiveStudent(id)
    this.props.fetchCampuses()
  }

  getRandomMurray () {
    const width = Math.floor(Math.random() * 100) + 200
    const height = Math.floor(Math.random() * 100) + 200
    return 'http://fillmurray.com/' + width + '/' + height
  }

  render () {
    const campuses = this.props.campuses
    const panes = [
      { menuItem: 'Student Info', render: () => <Tab.Pane attached={false}><SingleStudentInfo student={this.props.activeStudent} /></Tab.Pane> }
    ]
    const {name, id } = this.props.activeStudent
    return (
      <div className="single-student-view-window">
        <div className="student-detail-left">
          <Header>{name}</Header>
          <img src={this.getRandomMurray()} alt="could not load the image" />
          <Button.Group attached='bottom' width='2' className="student-buttons">
            <Button size='small'>Edit</Button>
            <Link to={'/students/delete/' + id}>
              <Button size='small'>Delete</Button>
            </Link>
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
