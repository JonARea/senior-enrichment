import axios from 'axios'

//ACTION TYPES

export const POPULATE_CAMPUSES = 'POPULATE_CAMPUSES'
export const POPULATE_STUDENTS = 'POPULATE_STUDENTS'
export const SET_ACTIVE_STUDENT = 'SET_ACTIVE_STUDENT'
export const SET_ACTIVE_CAMPUS = 'SET_ACTIVE_CAMPUS'
export const ADDED_CAMPUS = 'ADDED_CAMPUS'
export const ADDED_STUDENT = 'ADDED_STUDENT'

//ACTIONS

export const populateCampuses = (campuses) => {
  return {
    type: POPULATE_CAMPUSES,
    campuses
  }
}

export const populateStudents = (students) => {
  return {
    type: POPULATE_STUDENTS,
    students
  }
}

export const setActiveCampus = (activeCampus) => {
  return {
    type: SET_ACTIVE_CAMPUS,
    activeCampus
  }
}

export const setActiveStudent = (activeStudent) => {
  return {
    type: SET_ACTIVE_STUDENT,
    activeStudent
  }
}

export const addedCampus = (campus) => {
  return {
    type: ADDED_CAMPUS,
    campus
  }
}

export const addedStudent = (student) => {
  return {
    type: ADDED_STUDENT,
    student
  }
}

//THUNKS

export const fetchCampusesThunk = (dispatch) => {
  return () => {
    axios.get('/api/campuses')
      .then(res => res.data, console.error)
      .then(campuses => dispatch(populateCampuses(campuses)))
      .catch(console.error)
  }
}

export const fetchStudentsThunk = (dispatch) => {
  return () => {
    axios.get('/api/students')
      .then(res => res.data, console.error)
      .then(students => dispatch(populateStudents(students)))
      .catch(console.error)
  }
}

export const setActiveCampusThunk = (dispatch, id) => {
  return () => {
    axios.get('/api/campuses/' + id)
      .then(res => res.data, console.error)
      .then(activeCampus => dispatch(setActiveCampus(activeCampus)))
      .catch(console.error)
  }
}

export const setActiveStudentThunk = (dispatch, id) => {
  return () => {
    axios.get('/api/students/' + id)
      .then(res => res.data, console.error)
      .then(activeStudent => dispatch(setActiveStudent(activeStudent)))
      .catch(console.error)
  }
}

export const addCampusThunk = (dispatch, campus) => {
  return () => {
    axios.post('/api/campuses', campus)
      .then(res => res.data, console.error)
      .then(newCampus => dispatch(addedCampus(newCampus)))
      .catch(console.error)
  }
}

export const addStudentThunk = (dispatch, student) => {
  return () => {
    axios.post('/api/students', student)
    .then(res => res.data, console.error)
    .then(newStudent => dispatch(addedStudent(newStudent)))
    .catch(console.error)
  }
}

export const updateCampusThunk = (dispatch, campus) => {
  return () => {
    axios.put('/api/campuses/' + campus.id, campus)
      .then(dispatch(fetchCampusesThunk(dispatch)))
      .catch(console.error)
  }
}

export const deleteCampusThunk = (dispatch, campus) => {
  return () => {
    axios.delete('/api/campuses/' + campus.id, campus)
      .then(dispatch(fetchCampusesThunk(dispatch)))
      .catch(console.error)
  }
}

export const deleteStudentThunk = (dispatch, student) => {
  return () => {
    axios.delete('/api/students/' + student.id, student)
      .then(dispatch(fetchStudentThunk(dispatch)))
      .catch(console.error)
  }
}
