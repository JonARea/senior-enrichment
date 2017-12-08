import React, {Component} from 'react'
import {Form, Header, Button, Divider, Message} from 'semantic-ui-react'
import {addCampusThunk} from '../actions'
import {connect} from 'react-redux'

class CampusForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: this.props.updating ? this.props.activeCampus.name : '',
      description: this.props.updating ? this.props.activeCampus.description : '',
      imageUrl: this.props.updating ? this.props.activeCampus.imageUrl : ''
    }
  }

  render () {
    return (
      <CampusForm title='Add new Campus' dispatch={this.props.dispatch} handleSubmit={(event) => this.props.handleSubmit(event)} />
    )
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
    handleSubmit (event, campusForm) {
      event.preventDefault()
      console.log('submitted ', campusForm.state)
      dispatch(addCampusThunk(dispatch, campusForm.state))
    },
    dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusForm)
