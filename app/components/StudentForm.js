import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Form, Header, Button, Divider, Message, Select} from 'semantic-ui-react'
import {addStudentThunk, updateStudentThunk, fetchCampusesThunk} from '../actions'
import {connect} from 'react-redux'

class StudentForm extends Component {
  constructor(props) {
    super(props)

    //check if this is an update or a create

    this.state = this.props.updating ? this.props.activeStudent : {
      id: null,
      firstName: '',
      lastName: '',
      email: '',
      gpa: 0,
      campusId: null
    }
    this.state.submitted = false
  }

  componentDidMount () {
    this.props.fetchCampuses()
  }

  renderSuccessMessage () {
    return (
      <div className='campus-form-container'>
        <Message
        success
        content={this.props.updating ? 'Student successfully updated.' : 'Student successfully created.'}
        />
        <Link to={this.props.updating ? '/students/' + this.state.id : '/students/'}>
          <Button fluid>Go</Button>
        </Link>
      </div>
    )
  }

  renderForm () {
    const campusOptions = this.props.campuses.map(campus => {
      return {
        text: campus.name,
        value: campus.id
      }
    })
    return (
      <div className='campus-form-container'>
        <Header>
          {this.props.title}
        </Header>
        <Form onSubmit={(e) => {
          if (this.props.updating) {
            this.props.handleUpdate(e, this.state)
          } else {
            this.props.handleAdd(e, this.state)
            this.setState({submitted: true})
          }
        }}>
          <Form.Field>
            <Form.Input required label='First Name' value={this.state.firstName} onChange={(e) => this.setState({firstName: e.target.value})} />
          </Form.Field>

          <Form.Field>
            <Form.Input required label='Last Name' value={this.state.lastName} onChange={(e) => this.setState({lastName: e.target.value})} />
          </Form.Field>

          <Form.Field>
            <Form.Input required label='Email' value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} />
          </Form.Field>

          <Form.Field>
            <Form.Input required label='GPA' value={this.state.gpa} onChange={(e) => this.setState({gpa: e.target.value})} />
          </Form.Field>

          <Form.Select required label='Campus' defaultValue={this.state.campusId} options={campusOptions} onChange={(event, data) => this.setState({campusId: data.value})}
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
    activeStudent: state.activeStudent,
    campuses: state.campuses,
    updating: ownProps.updating
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAdd (event, state) {
      event.preventDefault()
      console.log('submitted ', state)
      dispatch(addStudentThunk(dispatch, state))
    },
    handleUpdate (event, state) {
      event.preventDefault()
      console.log('submitted ', state)
      dispatch(updateStudentThunk(dispatch, state))
    },
    fetchCampuses () {
      dispatch(fetchCampusesThunk(dispatch))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm)
