import React from 'react'
import StudentTableRow from './StudentTableRow'
import { Header, Image, Table } from 'semantic-ui-react'

const StudentTable = (props) => (
  <Table basic='very' celled >
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Student</Table.HeaderCell>
        <Table.HeaderCell>GPA</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        props.students.map(student => {
          return (<StudentTableRow key={student.id} student={student} />)
        })
      }
    </Table.Body>

  </Table>
)


export default StudentTable
