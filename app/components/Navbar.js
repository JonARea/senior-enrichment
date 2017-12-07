import React from 'react'
import {Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default function Navbar () {
  return (
      <Menu inverted >
        <Link to='/'>
          <Menu.Item header>TMHIAOJ</Menu.Item>
        </Link>
        <Link to='/campuses'>
          <Menu.Item name='Campuses' />
        </Link>
        <Link to='/students'>
          <Menu.Item name='Students' />
        </Link>
      </Menu>
  )
}
