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
    campuses
  }
}

export const setActiveCampus = (activeCampus) => {
  return {
    type: SET_ACTIVE_CAMPUS,
    activeCampus
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

export const setActiveCampusThunk = (dispatch, id) => {
  return () => {
    axios.get('/api/campuses/' + id)
      .then(res => {
        console.log('response from the server ', res.data)
        return res.data})
      .then(activeCampus => dispatch(setActiveCampus(activeCampus)))
      .catch(err => console.error('an error getting stuff ', err))
  }
}
