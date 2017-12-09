import React from 'react'
import {Route, Switch} from 'react-router-dom'
import AllCampuses from './AllCampuses'
import SingleCampus from './SingleCampus'
import StudentView from './StudentView'
import SingleStudent from './SingleStudent'
import CampusForm from './CampusForm'
import StudentForm from './StudentForm'
import DeleteForm from './DeleteForm'
import HomeView from './HomeView'

export default function MainWindow () {
  return (
    <div className='content-window'>

        <Switch>
          <Route path='/campuses/add' render={(props) => <CampusForm title='Add New Campus' {...props} />} />
          <Route path='/campuses/update/:id' render={(props) => <CampusForm updating title='Update Campus' {...props} />} />
          <Route path='/campuses/delete/:id' render={(props) => <DeleteForm deleting='campus' {...props} />} />
          <Route path='/campuses/:id' component={SingleCampus} />
          <Route path='/campuses' component={AllCampuses} />
          <Route path='/students/add' render={(props) => <StudentForm title='Add New Student' {...props} />} />
          <Route path='/students/update/:id' render={(props) => <StudentForm title='Update Student' updating {...props} />} />
          <Route path='/students/delete/:id' render={(props) => <DeleteForm deleting='student' {...props} />} />
          <Route path='/students/:id' component={SingleStudent} />
          <Route path='/students' component={StudentView} />
          <Route path='/' component={HomeView} />
        </Switch>

    </div>
  )
}
