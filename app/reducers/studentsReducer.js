import {POPULATE_STUDENTS, ADDED_STUDENT} from '../actions'

const studentsReducer = (state = [], action) => {
  switch (action.type) {
    case POPULATE_STUDENTS:
      return action.students
    case ADDED_STUDENT:
      return [...state, action.student]
    default:
      return state
  }
}

export default studentsReducer
