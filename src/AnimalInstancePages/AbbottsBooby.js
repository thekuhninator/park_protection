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
  color: #2a4d14;
  text-align: center;
`
const ScientificName = styled('h4')`
  color: #e75a7c;
  text-align: center;
`;

const EndangeredBox = styled('div')`
	text-align: center;
	height: 50px;
	width: 250px;
	margin: auto;
`;

const EndangeredText = styled('h1')`
	color: #8b0000;
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
	margin: 10px;
`;

const ImageBox = styled('img')`
	width: 400px;
	height: 400px;
`;

const ImageBoxLong = styled('img')`
	width: 600px;
	height: 400px;
`;
function AbbottsBooby() {
	return (
		<div>
			<Jumbotron>
	  			<Container>
	    			<CommonName>Abbott's Booby</CommonName>
	    			<ScientificName>Papasula abbotti</ScientificName>
	  			</Container>
			</Jumbotron>
			<CenteredRow>
					<EndangeredBox>
						<EndangeredText>Endangered</EndangeredText>
					</EndangeredBox>
			</CenteredRow>

			<Container>
				<Row>
					<CenteredCol>
						<ImageBox src="https://www.edgeofexistence.org/wp-content/uploads/2017/06/Papasula_abbotti_xlarge3.jpg" fluid />
					</CenteredCol>

					<CenteredCol>
						<ImageBoxLong src={ map } fluid />
					</CenteredCol>
				</Row>
			</Container>

			 <TableBox>
				<Table striped bordered hover size="sm">
					<thead>
						<tr>
							<th>Group</th>
							<th>Foreign?</th>
							<th>Distinct Population Segment?</th>
							<th>Aquatic?</th>
							<th>BCC?</th>
							<th>Conservation Plan Title</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>BIRDS</td>
							<td>BOTH</td>
							<td>NO</td>
							<td>NO</td>
							<td>NO</td>
							<td>NULL</td>
						</tr>
					</tbody>
				</Table>
			</TableBox>
		</div>
	);
}

export default AbbottsBooby;
