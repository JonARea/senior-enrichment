import React from 'react'
import {Route, Switch} from 'react-router-dom'
import AllCampuses from './AllCampuses'
import SingleCampus from './SingleCampus'
import StudentView from './StudentView'
import SingleStudent from './SingleStudent'
import CampusForm from './CampusForm'
import DeleteCampus from './DeleteCampus'
import HomeView from './HomeView'

export default function MainWindow () {
  return (
    <div className='content-window'>

        <Switch>
          <Route exact path='/campuses/add' component={CampusForm} />
          <Route path='/campuses/update/:id' render={(props) => <CampusForm updating title='Update Campus' {...props} />} />
          <Route path='/campuses/delete/:id' render={(props) => <DeleteCampus {...props} />} />
          <Route path='/campuses/:id' component={SingleCampus} />
          <Route path='/campuses' component={AllCampuses} />
          <Route path='/students/:id' component={SingleStudent} />
          <Route path='/students' component={StudentView} />
          <Route path='/' component={HomeView} />
        </Switch>

    </div>
  )
}
