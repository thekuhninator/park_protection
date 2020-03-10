import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import {TableBox} from './Constants.js'

function InformationTable(props) {
  return (
    <Row><Col /><Col xs={6}>
     <TableBox>
      <Table striped bordered hover size="sm">
          <tbody>
          <tr><th>Family</th><td>Cactaceae</td></tr>
          <tr><th>Family Common Name</th><td>Cactus</td></tr>
          <tr><th>Category</th><td>Dicot</td></tr>
          <tr><th>Duration</th><td>Perennial</td></tr>
          <tr><th>Growth Habit</th><td>Shrub</td></tr>
          <tr><th>Toxicity</th><td>None</td></tr>
          </tbody>
      </Table>
    </TableBox></Col><Col />
    </Row>
  );
}

export default InformationTable;
