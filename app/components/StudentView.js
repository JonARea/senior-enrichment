import React, {Component} from 'react'
import StudentTable from './StudentTable'
import {fetchStudentsThunk} from '../actions'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Button, Header} from 'semantic-ui-react'

class StudentView extends Component {

  componentDidMount() {
    this.props.fetchStudents()
  }

  render() {
    return (
      <div className='all-students-view-window'>
        <Header>All Students</Header>
        <StudentTable students={this.props.students} />
        <Link to='/students/add'>
          <Button>Add Student</Button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.students
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStudents: () => dispatch(fetchStudentsThunk(dispatch))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentView)
