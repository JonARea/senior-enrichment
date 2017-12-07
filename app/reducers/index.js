import { combineReducers } from 'redux'
import campusesReducer from './campusesReducer'
import studentsReducer from './studentsReducer'
import activeCampusReducer from './activeCampusReducer'
import activeStudentReducer from './activeStudentReducer'

const rootReducer = combineReducers({
  campuses: campusesReducer,
  students: studentsReducer,
  activeCampus: activeCampusReducer,
  activeStudent: activeStudentReducer
})

export default rootReducer
