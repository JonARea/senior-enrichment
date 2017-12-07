import {POPULATE_STUDENTS} from '../actions'

const studentsReducer = (state = [], action) => {
  switch (action.type) {
    case POPULATE_STUDENTS:
      return action.students
    default:
      return state
  }
}

export default studentsReducer
