import React, {Component} from 'react';
import map from '../Assets/Maps/Arkansas.png';
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
	color: #ab0f0f;
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

function AleutianHollyFern() {
	return (
		<div>
			<Jumbotron>
	  			<Container>
	    			<CommonName>Aleutian Holly Fern</CommonName>
	    			<ScientificName>Polystichum aleuticum</ScientificName>
	  			</Container>
			</Jumbotron>

			<Container>
				<Row>
					<CenteredCol>
						<ImageBox src="https://upload.wikimedia.org/wikipedia/commons/8/88/Aleutian_Shield_Fern.jpg"/>
					</CenteredCol>

					<CenteredCol>
						<ImageBoxLong src={ map }/>
					</CenteredCol>
				</Row>
			</Container>

			<br/>
			<EndangeredBox>
				<EndangeredText>Endangered</EndangeredText>
			</EndangeredBox>

			<br/>
			<TableBox>
				<Table striped bordered hover size="sm">
					<thead>
						<tr>
							<th>Family</th>
							<th>Family Common Name</th>
							<th>Category</th>
							<th>Duration</th>
							<th>Growth Habit</th>
							<th>Toxicity</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Dryopteridaceae</td>
							<td>Wood Fern</td>
							<td>Fern</td>
							<td>Perennial</td>
							<td>Forb/herb</td>
							<td>None</td>
						</tr>
					</tbody>
				</Table>
			</TableBox>

		</div>
	);
}

export default AleutianHollyFern;
