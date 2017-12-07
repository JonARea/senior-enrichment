import React from 'react'
import {Table, Header, Image} from 'semantic-ui-react'

const StudentTableRow = (props) => (

    <Table.Row>
      <Table.Cell>
        <Header as='h4' image>
          <Image src='http://fillmurray.com/50/50' rounded size='mini' />
          <Header.Content>
              {props.student.name}
            <Header.Subheader>{props.student.email}</Header.Subheader>
          </Header.Content>
        </Header>
      </Table.Cell>
      <Table.Cell collapsing textAlign='right'>
          {props.student.gpa}
      </Table.Cell>
    </Table.Row>
)

export default StudentTableRow
