import React, {Component} from 'react'
import StudentTable from './StudentTable'
import {fetchStudentsThunk} from '../actions'
import {connect} from 'react-redux'

class StudentView extends Component {

  componentDidMount() {
    this.props.fetchStudents()
  }

  render() {
    return (
      <div className='student-view-window'>
        <StudentTable students={this.props.students} />
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
