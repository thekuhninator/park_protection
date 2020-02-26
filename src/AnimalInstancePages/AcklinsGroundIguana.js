import React, {Component} from 'react';
import map from '../Assets/Maps/BlankMap.png';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table'

const CommonName = styled('h1')`
  color: #444444;
  text-align: center;
`
const ScientificName = styled('h4')`
  text-align: center;
  font-style: italic;
  color: #444444;
`;

const EndangeredBox = styled('div')`
	text-align: center;
	height: 50px;
	width: 250px;
	margin: auto;
`;

const EndangeredText = styled('h1')`
	color: #db8b00;
`;

const CenteredRow = styled('Row')`
  padding: 5px;
  margin: auto;
`;

const CenteredCol = styled('Col')`
  padding: 5px;
  margin: auto;
`;

const TableBox = styled('div')`
	text-align: center;
	display: flex;
	position: absolute;
	left: 10%;
	right: 10%;
`;

const ImageBox = styled('img')`
	width: 400px;
	height: 400px;
`;

const ImageBoxLong = styled('img')`
	width: 600px;
	height: 400px;
`;

function AcklinsGroundIguana() {
	return (
		<div>
			<Jumbotron>
	  			<Container>
	    			<CommonName>Acklins Ground Iguana</CommonName>
	    			<ScientificName>Cyclura rileyi nuchalis</ScientificName>
	  			</Container>
			</Jumbotron>

			<Container>
				<Row>
					<CenteredCol>
						<ImageBox src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Cyclura_rileyi_nuchalis_Exumas_1997_c_W_K_Hayes.jpg" fluid />
					</CenteredCol>

					<CenteredCol>
						<ImageBoxLong src={ map } fluid />
					</CenteredCol>
				</Row>
			</Container>

			<br/>
			<EndangeredBox>
				<EndangeredText>Threatened</EndangeredText>
			</EndangeredBox>

			<br/>
			 <TableBox>
				<Table striped bordered hover size="sm">
					<thead>
						<tr>
							<th>Group</th>
							<th>Domestic or Foreign?</th>
							<th>Distinct Population Segment?</th>
							<th>Aquatic?</th>
							<th>BCC?</th>
							<th>Conservation Plan Title</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Reptiles</td>
							<td>Foreign</td>
							<td>No</td>
							<td>Yes</td>
							<td>No</td>
							<td>None</td>
						</tr>
					</tbody>
				</Table>
			</TableBox>
		</div>
	);
}

export default AcklinsGroundIguana;
