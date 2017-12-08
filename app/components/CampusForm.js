import React, {Component} from 'react'
import {Form, Header, Button, Divider, Message} from 'semantic-ui-react'
import {addCampusThunk} from '../actions'
import {connect} from 'react-redux'

class CampusForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      description: ''
    }
  }

  render () {
    return (
      <div className='campus-form-container'>
        <Header>
          Add a new Campus
        </Header>
        <Form onSubmit={(e) => this.props.handleSubmit(e, this)}>
          <Form.Field>
            <Form.Input required label='Campus Name' value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} />
          </Form.Field>
          <Form.Field>
            <Form.TextArea required label='Campus Description' value={this.state.description} onChange={(e) => this.setState({description: e.target.value})} />
          </Form.Field>
          <Message
            success
            header='Form Completed'
            content="Campus successfully created"
          />
          <Message
            error
            header='Uh oh!'
            content="Could not create campus. Please try again"
          />
          <Divider horizontal />
          <Form.Button size='large' type='submit' positive>Submit</Form.Button>
        </Form>
        <Divider horizontal />
        <Button size='large' negative onClick={() => this.props.history.goBack()}>Cancel</Button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit (event, campusForm) {
      event.preventDefault()
      console.log('submitted ', campusForm.state)
      dispatch(addCampusThunk(dispatch, campusForm.state))
    }
  }
}

export default connect(null, mapDispatchToProps)(CampusForm)
