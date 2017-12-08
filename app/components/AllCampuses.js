import React, {Component} from 'react'
import PreviewCampus from './PreviewCampus'
import CampusForm from './CampusForm'
import {fetchCampusesThunk} from '../actions'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Label, Button, Header, Segment} from 'semantic-ui-react'

class AllCampuses extends Component {

  componentDidMount() {
    this.props.fetchCampuses()
  }

  render() {
    return (
      <div className='campus-view-window'>
        <Segment clearing>
          <Header as='h2' floated='left'>
            Our campuses
          </Header>
          <Header as='h2' floated='right'>
            <Link to='/campuses/add'>
              <Button>
                Add a new Campus
              </Button>
            </Link>
          </Header>
        </Segment>

          <div className="campus-previews">
            {this.props.campuses.map(campus => {
              return (
                <PreviewCampus key={campus.id} campus={campus} />
              )
            })}
          </div>
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
