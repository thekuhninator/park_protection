import React, {Component} from 'react';
import map from '../Assets/Maps/CaliforniaNevada.png';
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
import CANVMapWrapper from '../Assets/Maps/CANVMapWrapper';

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

function AmargosaNiterwort() {
	return (
		<div>
			<Jumbotron>
	  			<Container>
	    			<CommonName>Amargosa Niterwort</CommonName>
	    			<ScientificName>Nitrophila mohavensis</ScientificName>
	  			</Container>
			</Jumbotron>

			<br/><br/>
			<Container>
				<Row>
					<Col>
						<ImageBox className="float-right" src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Nitrophila_mohavensis_6.jpg"/>
					</Col>

					<Col>
						<CANVMapWrapper/>
					</Col>
				</Row>

				<br/><br/>
				<EndangeredBox>
					<EndangeredText>Endangered</EndangeredText>
				</EndangeredBox>

				<br/><br/>
				<Row><Col /><Col xs={6}>
				 <TableBox>
					<Table striped bordered hover size="sm">
							<tbody>
							<tr><th>Family</th><td>Chenopodiaceae</td></tr>
							<tr><th>Family Common Name</th><td>Goosefoot</td></tr>
							<tr><th>Category</th><td>Dicot</td></tr>
							<tr><th>Duration</th><td>Perennial</td></tr>
							<tr><th>Growth Habit</th><td>Forb/herb</td></tr>
							<tr><th>Toxicity</th><td>None</td></tr>
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
							<h4>Related Animals</h4>

							<br/>
							<CardDeck className="text-center">
								<Card><Nav.Link as={ Link } to="/Animals/AbbottsBooby"><Text>
						  			<Card.Img variant="top" src="https://www.edgeofexistence.org/wp-content/uploads/2017/06/Papasula_abbotti_xlarge3.jpg"/>
						    		<Card.Body>
						      			<Card.Title>Abbott's Booby</Card.Title>
						    		</Card.Body>
					    		</Text></Nav.Link></Card>
					    		<Card><Nav.Link as={ Link } to="/Animals/AcklinsGroundIguana"><Text>
									<Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Cyclura_rileyi_nuchalis_Exumas_1997_c_W_K_Hayes.jpg" />
									<Card.Body>
										<Card.Title>Acklins Ground Iguana</Card.Title>
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

export default AmargosaNiterwort;