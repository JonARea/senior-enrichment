import {SET_ACTIVE_CAMPUS} from '../actions'

const activeCampusReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_ACTIVE_CAMPUS:
      return action.activeCampus
    default:
      return state
  }
}

export default activeCampusReducer
