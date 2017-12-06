import React from 'react'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import CampusView from './CampusView'
import StudentView from './StudentView'
import HomeView from './HomeView'

export default function MainWindow () {
  return (
    <div className='content-window'>
      <BrowserRouter>
        <Switch>
          <Route path='/campuses' component={CampusView} />
          <Route path='/students' component={StudentView} />
          <Route path='/' component={HomeView} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
