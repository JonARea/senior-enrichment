import {SET_ACTIVE_STUDENT} from '../actions'

const activeStudentReducer = (state = {
  campus: {}
}, action) => {
  switch (action.type) {
    case SET_ACTIVE_STUDENT:
      return action.activeStudent
    default:
      return state
  }
}

export default activeStudentReducer
