import React from 'react'
import {Route, Switch} from 'react-router-dom'
import CampusView from './CampusView'
import DetailCampusView from './DetailCampusView'
import StudentView from './StudentView'
import HomeView from './HomeView'

export default function MainWindow () {
  return (
    <div className='content-window'>

        <Switch>
          <Route path='/campuses/:id' component={DetailCampusView} />
          <Route path='/campuses' component={CampusView} />

          <Route path='/students' component={StudentView} />
          <Route path='/' component={HomeView} />
        </Switch>

    </div>
  )
}