import React from 'react'
import {Grid} from 'semantic-ui-react'

const SingleStudentInfo = (props) => {
  const {firstName, lastName, email, gpa, campus} = props.student
  return (
  <Grid columns='2' celled='internally' >
    <Grid.Row>
      <Grid.Column width={3}>
        First Name
      </Grid.Column>

      <Grid.Column width={8}>
        {firstName}
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={3}>
        Last Name
      </Grid.Column>
      <Grid.Column width={8}>
        {lastName}
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={3}>
        Email
      </Grid.Column>
      <Grid.Column width={8}>
        {email}
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={3}>
        GPA
      </Grid.Column>
      <Grid.Column width={8}>
        {gpa}
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={3}>
        Campus
      </Grid.Column>
      <Grid.Column width={8}>
        {campus.name}
      </Grid.Column>
    </Grid.Row>
  </Grid>
  )
}

export default SingleStudentInfo
