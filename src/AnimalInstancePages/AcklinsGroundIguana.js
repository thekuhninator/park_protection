import React, {Component} from 'react';
import map from '../Assets/Maps/BlankMap.png';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import NoMapWrapper from '../Assets/Maps/NoMapWrapper';

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
`;

const ImageBox = styled('img')`
	width: 100%;
	height: 400px;
	object-fit: cover;
`;

const ImageBoxLong = styled('img')`
	width: 600px;
	height: 400px;
`;

const ItalicText = styled('div')`
	font-style: italic;
`

const Text = styled('div')`
	color: black;
`

function AcklinsGroundIguana() {
	return (
		<div>
			<Jumbotron>
	  			<Container>
	    			<CommonName>Acklins Ground Iguana</CommonName>
	    			<ScientificName>Cyclura rileyi nuchalis</ScientificName>
	  			</Container>
			</Jumbotron>

			<br/><br/>
			<Container>
				<Row>
					<Col>
						<ImageBox className="float-right" src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Cyclura_rileyi_nuchalis_Exumas_1997_c_W_K_Hayes.jpg" fluid />
					</Col>

					<Col>
						<NoMapWrapper/>
					</Col>
				</Row>

				<br/><br/>
				<EndangeredBox>
					<EndangeredText>Threatened</EndangeredText>
				</EndangeredBox>

				<br/><br/>
				<Row><Col /><Col xs={6}>
				 <TableBox>
					<Table striped bordered hover size="sm">
							<tbody>
							<tr><th>Group</th><td>Reptiles</td></tr>
							<tr><th>Domestic or Foreign</th><td>Foreign</td></tr>
							<tr><th><a href="https://www.fws.gov/pacific/news/grizzly/esafacts.htm">Distinct Population Segment?</a></th><td>No</td></tr>
							<tr><th>Aquatic?</th><td>Yes</td></tr>
							<tr><th><a href="https://www.fws.gov/birds/management/managed-species/birds-of-conservation-concern.php">BCC?</a></th><td>No</td></tr>
							<tr><th>Conservation Plan Title</th><td>None</td></tr>
							</tbody>
					</Table>
				</TableBox></Col><Col />
				</Row>

					<br/><br/>
					<Row>
						<Col className="text-center">
							<h4>Related Parks</h4>
							<br/>
							<CardDeck className="text-center">
								<Card><Nav.Link as={ Link } to="/Parks/GrandCanyon"><Text>
								    <Card.Img variant="top" src="https://www.nps.gov/common/uploads/structured_data/3C7B12D1-1DD8-B71B-0BCE0712F9CEA155.jpg" />
								    <Card.Body>
								    	<Card.Title>Grand Canyon National Park</Card.Title>
								    </Card.Body>
							    </Text></Nav.Link></Card>
								<Card><Nav.Link as={ Link } to="/Parks/Yellowstone"><Text>
						  			<Card.Img variant="top" src="https://www.nps.gov/common/uploads/structured_data/3C7D2FBB-1DD8-B71B-0BED99731011CFCE.jpg"/>
						    		<Card.Body>
						      			<Card.Title>Yellowstone National Park</Card.Title>
						    		</Card.Body>
						  		</Text></Nav.Link></Card>
				    		</CardDeck>
						</Col>
						<Col className="text-center">
							<h4>Related Plants</h4>

							<br/>
							<CardDeck className="text-center">
								<Card><Nav.Link as={ Link } to="/Plants/AleutianHollyFern"><Text>
								    <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/8/88/Aleutian_Shield_Fern.jpg" />
								    <Card.Body>
								      	<Card.Title>Aleutian Holly Fern</Card.Title>
								    </Card.Body>
								</Text></Nav.Link></Card>
					    		<Card><Nav.Link as={ Link } to="/Plants/AmargosaNiterwort"><Text>
									<Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Nitrophila_mohavensis_6.jpg" />
								 	<Card.Body>
										<Card.Title>Amargosa Niterwort</Card.Title>
								 	</Card.Body>
								</Text></Nav.Link></Card>
				    		</CardDeck>
						</Col>
					</Row>

				<br/>
				&nbsp;
			</Container>
		</div>
	);
}

export default AcklinsGroundIguana;
