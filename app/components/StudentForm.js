import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Form, Header, Button, Divider, Message} from 'semantic-ui-react'
import {addStudentThunk, updateStudentThunk, fetchCampusesThunk, setActiveStudentThunk} from '../actions'
import {connect} from 'react-redux'

class StudentForm extends Component {
  constructor(props) {
    super(props)

    //check if this is an update or a create

    this.state = this.props.updating ? this.props.activeStudent : {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      gpa: 0,
      campusId: null,
      submitted: false
    }
  }

  componentDidMount () {
    this.props.fetchCampuses()
  }

  componentWillReceiveProps(nextProps) {
    //update active student
    if (this.props.activeStudent.id !== nextProps.activeStudent.id) {
      this.setState(nextProps.activeStudent)
    }
  }

  renderSuccessMessage () {
    return (
      <div className="campus-form-container">
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
      <div className="campus-form-container">
        <Header>
          {this.props.title}
        </Header>
        <Form onSubmit={(event) => {
          if (this.props.updating) {
            this.props.handleUpdate(event, this.state)
          } else {
            this.props.handleAdd(event, this.state)
          }
          this.setState({submitted: true})
        }}>
          <Form.Field>
            <Form.Input
              required
              label="First Name"
              value={this.state.firstName}
              onChange={(event) => this.setState({firstName: event.target.value})}
            />
          </Form.Field>

          <Form.Field>
            <Form.Input
              required
              label="Last Name"
              value={this.state.lastName}
              onChange={(event) => this.setState({lastName: event.target.value})}
            />
          </Form.Field>

          <Form.Field>
            <Form.Input
              required
              label="Email"
              value={this.state.email}
              onChange={(event) => this.setState({email: event.target.value})}
            />
          </Form.Field>

          <Form.Field>
            <Form.Input
              required
              label="GPA"
              value={this.state.gpa}
              onChange={(event) => this.setState({gpa: event.target.value})}
            />
          </Form.Field>

          <Form.Select
            required
            label="Campus"
            defaultValue={this.state.campusId}
            options={campusOptions}
            onChange={(event, data) => this.setState({campusId: data.value})}
          />

          <Divider horizontal />

          <Form.Button
            size="large"
            type="submit"
            positive
          >
            Submit
          </Form.Button>
        </Form>
        <Divider horizontal />
        <Button size="large" negative onClick={() => this.props.history.goBack()}>Cancel</Button>
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
      dispatch(addStudentThunk(dispatch, state))
    },
    handleUpdate (event, state) {
      event.preventDefault()
      dispatch(updateStudentThunk(dispatch, state))
    },
    fetchCampuses () {
      dispatch(fetchCampusesThunk(dispatch))
    },
    setActiveStudent (id) {
      dispatch(setActiveStudentThunk(dispatch, id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm)
