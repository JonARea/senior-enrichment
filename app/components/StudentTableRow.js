import React from 'react'
import {Link} from 'react-router-dom'
import {Table, Header, Image, Icon} from 'semantic-ui-react'
import {setActiveStudentThunk} from '../actions'
import {connect} from 'react-redux'

const StudentTableRow = (props) => (
  <Table.Row className='student-row' >
    <Table.Cell>
      <Link to={'/students/' + props.student.id}>
        <Header as='h4' image>
          <Image src='http://fillmurray.com/50/50' rounded size='mini' />
          <Header.Content>
              {props.student.name}
          </Header.Content>
        </Header>
      </Link>
    </Table.Cell>
    <Table.Cell collapsing textAlign='center'>
      {props.student.id}
    </Table.Cell>
    <Table.Cell collapsing>
      <Link
        onClick={props.setActiveStudent(props.student.id)}
        to={'/students/update/' +  props.student.id}>
        <Icon link name='edit'/>
      </Link>
    </Table.Cell>
    <Table.Cell collapsing>
        <Link
          onClick={props.setActiveStudent(props.student.id)}
          to={'/students/delete/' + props.student.id}>
          <Icon link name='user delete' />
        </Link>
    </Table.Cell>
  </Table.Row>
)

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveStudent (studentId) {
      dispatch(setActiveStudentThunk(dispatch, studentId))
    }
  }
}

export default connect(null, mapDispatchToProps)(StudentTableRow)
