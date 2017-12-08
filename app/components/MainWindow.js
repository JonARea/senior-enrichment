import React from 'react'
import {Route, Switch} from 'react-router-dom'
import CampusView from './CampusView'
import SingleCampusView from './SingleCampusView'
import StudentView from './StudentView'
import SingleStudent from './SingleStudent'
import HomeView from './HomeView'

export default function MainWindow () {
  return (
    <div className='content-window'>

        <Switch>
          <Route path='/campuses/:id' component={SingleCampusView} />
          <Route path='/campuses' component={CampusView} />
          <Route path='/students/:id' component={SingleStudent} />
          <Route path='/students' component={StudentView} />
          <Route path='/' component={HomeView} />
        </Switch>

    </div>
  )
}
