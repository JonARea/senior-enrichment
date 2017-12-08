import React, {Component} from 'react'
import {Form, Header, Button, Divider, Message, Select} from 'semantic-ui-react'
import {addStudentThunk, updateStudentThunk, fetchCampusesThunk} from '../actions'
import {connect} from 'react-redux'

class StudentForm extends Component {
  constructor(props) {
    super(props)

    //check if this is an update or a create

    this.state = this.props.updating ? this.props.activeStudent : {
      firstName: '',
      lastName: '',
      email: '',
      gpa: 0,
      campusId: null,
      submitResults: ''
    }
  }

  componentDidMount () {
    this.props.fetchCampuses()
  }

  render () {
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
          return this.props.updating ? this.setState({submitResults: this.props.handleUpdate(e, this.state)}) : this.setState({submitResults: this.props.handleAdd(e, this.state)})
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
          <Form.Select required label='Campus' options={campusOptions} onChange={(event, data) => this.setState({campusId: data.value})} />

          <Message
            success
            header='Form Completed'
            content="Student successfully created"
          />
          <Message
            error
            header='Uh oh!'
            content="Could not create student. Please try again"
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
      return dispatch(addStudentThunk(dispatch, state))
    },
    handleUpdate (event, state) {
      event.preventDefault()
      console.log('submitted ', state)
      return dispatch(updateStudentThunk(dispatch, state))
    },
    fetchCampuses () {
      return dispatch(fetchCampusesThunk(dispatch))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm)
