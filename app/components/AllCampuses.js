import React, {Component} from 'react'
import PreviewCampus from './PreviewCampus'
import {fetchCampusesThunk} from '../actions'
import {connect} from 'react-redux'
import {Label, Button, Header} from 'semantic-ui-react'

class AllCampuses extends Component {

  componentDidMount() {
    this.props.fetchCampuses()

  }

  render() {
    return (

        <div className='campus-view-window'>
          <Header attached>
          Our campuses
          <Button>Add a new Campus</Button>
        </Header>
          {this.props.campuses.map(campus => {
            return (
              <PreviewCampus key={campus.id} campus={campus} />
            )
          })}
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCampuses: () => dispatch(fetchCampusesThunk(dispatch))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses)
