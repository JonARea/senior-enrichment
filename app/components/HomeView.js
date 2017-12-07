import React from 'react'
import {Form} from 'semantic-ui-react'

export default function HomeView () {
  return (
    <div className='sign-in-window-container'>

      <Form>
        <Form.Field>
          <input placeholder='Username' />
        </Form.Field>
        <Form.Field>
          <input placeholder='Password' />
        </Form.Field>
      </Form>

    </div>
  )
}
