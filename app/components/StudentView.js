import React, {Component} from 'react'
import StudentTable from './StudentTable'
import {fetchStudentsThunk} from '../actions'
import {connect} from 'react-redux'
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
        <Button>Add Student</Button>
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
