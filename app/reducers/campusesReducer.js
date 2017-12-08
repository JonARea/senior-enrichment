import {POPULATE_CAMPUSES, ADDED_CAMPUS, UPDATED_CAMPUS} from '../actions'

const campusesReducer = (state = [], action) => {
  switch (action.type) {
    case POPULATE_CAMPUSES:
      return action.campuses
    case ADDED_CAMPUS:
      return [...state, action.campus]
    default:
      return state
  }
}

export default campusesReducer
