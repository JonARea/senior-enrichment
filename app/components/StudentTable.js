import React from 'react'
import StudentTableRow from './StudentTableRow'
import {Link} from 'react-router-dom'
import {Table, Button} from 'semantic-ui-react'

const StudentTable = (props) => (
  <Table basic='very' celled >
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Student</Table.HeaderCell>
        <Table.HeaderCell>StudentID</Table.HeaderCell>
        <Table.HeaderCell />
        <Table.HeaderCell />
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        props.students.map(student => {
          return (<StudentTableRow key={student.id} student={student} />)
        })
      }
      <Table.Row>
        <Table.Cell>
          <Link to='/students/add'>
            <Button>Add Student</Button>
          </Link>
        </Table.Cell>
      </Table.Row>
    </Table.Body>

  </Table>
)


export default StudentTable
