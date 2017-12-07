import {POPULATE_CAMPUSES} from '../actions'

const campusesReducer = (state = [], action) => {
  switch (action.type) {
    case POPULATE_CAMPUSES:
      return action.campuses
    default:
      return state
  }
}

export default campusesReducer
