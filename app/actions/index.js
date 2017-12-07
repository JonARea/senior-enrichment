import axios from 'axios'

//ACTION TYPES

export const POPULATE_CAMPUSES = 'POPULATE_CAMPUSES'
export const POPULATE_STUDENTS = 'POPULATE_STUDENTS'
export const SET_ACTIVE_STUDENT = 'SET_ACTIVE_STUDENT'
export const SET_ACTIVE_CAMPUS = 'SET_ACTIVE_CAMPUS'

//ACTIONS

export const populateCampuses = (campuses) => {
  return {
    type: POPULATE_CAMPUSES,
    campuses: campuses
  }
}

//THUNKS

export const fetchCampusesThunk = (dispatch) => {
  return () => {
    axios.get('api/campuses')
      .then(res => res.data)
      .then(campuses => dispatch(populateCampuses(campuses)))
      .catch(err => console.error('an error getting stuff ', err))
  }
}
