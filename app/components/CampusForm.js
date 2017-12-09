import React, {Component} from 'react'
import {Form, Header, Button, Divider, Message} from 'semantic-ui-react'
import {addCampusThunk, updateCampusThunk} from '../actions'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

class CampusForm extends Component {
  constructor(props) {
    super(props)

    this.state = this.props.updating ? this.props.activeCampus : {
      id: null,
      name: '',
      description: '',
      imageUrl: ''
    }
    this.state.submitted = false
  }

  renderSuccessMessage () {
    return (
      <div className='campus-form-container'>
        <Message
        success
        content={this.props.updating ? 'Campus successfully updated.' : 'Campus successfully created.'}
        />
        <Link to={this.props.updating ? '/campuses/' + this.state.id : '/campuses/'}>
          <Button fluid>Go</Button>
        </Link>
      </div>
    )
  }

  renderForm () {
    return (
      <div className='campus-form-container'>
        <Header>
          {this.props.title}
        </Header>

        <Form onSubmit={(e) => {
          this.props.updating ?
            this.props.handleUpdate(e, this.state) :
            this.props.handleAdd(e, this.state)
          ;this.setState({submitted: true})
        }}>
          <Form.Field>
            <Form.Input required label='Campus Name' value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} />
          </Form.Field>
          <Form.Field>
            <Form.TextArea required label='Campus Description' value={this.state.description} onChange={(e) => this.setState({description: e.target.value})} />
          </Form.Field>
          <Form.Field>
              <Form.Input label='Campus Image' value={this.state.imageUrl} onChange={(e) => this.setState({imageUrl: e.target.value})} />
          </Form.Field>

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

  render () {
    return this.state.submitted ? this.renderSuccessMessage() : this.renderForm()
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    activeCampus: state.activeCampus,
    updating: ownProps.updating
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAdd (event, state) {
      event.preventDefault()
      console.log('submitted ', state)
      dispatch(addCampusThunk(dispatch, state))
    },
    handleUpdate (event, state) {
      event.preventDefault()
      console.log('submitted ', state)
      dispatch(updateCampusThunk(dispatch, state))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusForm)
