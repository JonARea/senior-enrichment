import React from 'react'
import {Link} from 'react-router-dom'
import {Table, Header, Image} from 'semantic-ui-react'

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
        <Table.Cell collapsing textAlign='right'>
            {props.student.id}
        </Table.Cell>
    </Table.Row>
)

export default StudentTableRow
