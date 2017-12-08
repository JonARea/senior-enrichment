import React from 'react'
import {Header, Button} from 'semantic-ui-react'

const DeleteCampus = (props) => (
  <div className="campus-form-container">
    <Header>Delete Campus</Header>
    <p>Are you sure you want to delete 'campus' ? This action cannot be undone.</p>
    <Button negative>Delete Permanently</Button>
    <Button>Cancel and Go Back</Button>
  </div>
)

export default DeleteCampus

