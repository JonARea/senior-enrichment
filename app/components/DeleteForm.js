import React from 'react'
import {deleteCampusThunk, deleteStudentThunk} from '../actions'
import {Header, Button} from 'semantic-ui-react'
import {connect} from 'react-redux'


const DeleteForm = (props) => (
  <div className="campus-form-container">
    <Header>{props.title}</Header>
    <p>Are you sure you want to delete {props.deleting === 'campus' ? props.activeCampus.name : props.activeStudent.name} ? This action cannot be undone.</p>
    <Button onClick={() => props.deleting === 'campus' ? props.deleteCampus(props.activeCampus) : props.deleteStudent(props.activeStudent)} negative>Delete Permanently</Button>
    <Button onClick={() => props.history.goBack()}>Cancel and Go Back</Button>
  </div>
)

const mapStateToProps = (state) => {
  return {
    activeCampus: state.activeCampus,
    activeStudent: state.activeStudent
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

