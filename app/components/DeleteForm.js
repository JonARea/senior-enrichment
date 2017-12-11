import React from 'react'
import {deleteCampusThunk, deleteStudentThunk} from '../actions'
import {Header, Button} from 'semantic-ui-react'
import {connect} from 'react-redux'

const DeleteForm = (props) => (
  <div className="campus-form-container">
    <Header>{props.title}</Header>
    {
      props.deleting === 'campus' && props.campusStudents.length ?
        <p>This campus has students! Please reassign or delete all students before deleting the campus</p>
        :
        <div>
          <p>Are you sure you want to delete {props.deleting === 'campus' ? props.activeCampus.name : props.activeStudent.name} ? This action cannot be undone.</p>
          <Button
            onClick={() => {
              props.history.push('/campuses')
              props.deleting === 'campus' ? props.deleteCampus(props.activeCampus) : props.deleteStudent(props.activeStudent)
              }
            }
            fluid
            negative>Delete Permanently
          </Button>
        </div>
    }

    <Button onClick={() => props.history.goBack()} fluid>Cancel and Go Back</Button>
  </div>
)

const mapStateToProps = (state) => {
  return {
    activeCampus: state.activeCampus,
    activeStudent: state.activeStudent,
    campusStudents: state.students.filter(student => student.campusId === state.activeCampus.id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteStudent (student) {
      dispatch(deleteStudentThunk(dispatch, student))
    },
    deleteCampus (campus) {
      dispatch(deleteCampusThunk(dispatch, campus))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteForm)
