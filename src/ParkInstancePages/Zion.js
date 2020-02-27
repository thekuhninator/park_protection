import React, {Component} from 'react';
import logo from '../logo.png';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import map from '../Assets/Maps/Zion.png';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import ZIMapWrapper from '../Assets/Maps/ZIMapWrapper';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

const CarouselImage = styled('img')`
	width: 400px;
	height: 350px;
	margin: auto;
`;
const ImageBoxLong = styled('img')`
	width: 600px;
	height: 400px;
`;

const CenterText = styled('div')`
	color: #444444;
	text-align: center;
`

const ItalicText = styled('div')`
	font-style: italic;
`

const Text = styled('div')`
	color: black;
`

const Div = styled('div')`
	padding-top: 420px;
`

const CenteredCol = styled('Col')`
  margin: auto;
`;

function Zion() {
	return (
		<div>
			<Jumbotron>
				<Container>
					<CenterText><h1>Zion National Park</h1></CenterText>
				</Container>
			</Jumbotron>

			<br/>
			<Container>
				<Carousel>
				  <Carousel.Item>
				    <CarouselImage
				      className="d-block w-100"
				      src="https://www.nps.gov/common/uploads/structured_data/3C7EFF41-1DD8-B71B-0B50E940FE9F2658.jpg"
				      alt="First slide"
				    />
				  </Carousel.Item>
				  <Carousel.Item>
				    <CarouselImage
				      className="d-block w-100"
				      src="https://www.nps.gov/common/uploads/structured_data/3C7F0098-1DD8-B71B-0B6C0191D7391384.jpg"
				      alt="Second slide"
				      vertical-align
				    />
				  </Carousel.Item>
				  <Carousel.Item>
				    <CarouselImage
				      className="d-block w-100"
				      src="https://www.nps.gov/common/uploads/structured_data/3C7F0203-1DD8-B71B-0B2DCAE32B684884.jpg"
				      alt="Third slide"
				    />
				  </Carousel.Item>
				  <Carousel.Item>
				    <CarouselImage 
				      className="d-block w-50"
				      src="https://www.nps.gov/common/uploads/structured_data/3C7F0366-1DD8-B71B-0B1C1F98A8C4E757.jpg"
				      alt="Third slide"
				    />
				  </Carousel.Item>
				</Carousel>

				<br/><br/><br/>
				<Row>
					<Col>
					<h6>Follow the paths where ancient native people and pioneers walked. Gaze up at massive sandstone cliffs of cream, pink, and red that soar into a brilliant blue sky. Experience wilderness in a narrow slot canyon. Zion’s unique array of plants and animals will enchant you as you absorb the rich history of the past and enjoy the excitement of present day adventures.
					</h6>
					</Col>
					<Col>
					<h6>Zion is known for a wide range of weather conditions. Temperatures vary with changes in elevation and day/night temperatures may differ by over 30°F.\n\nIn summer, temperatures in Zion National Park often exceed 100°F/38°C. Zion experiences monsoons from mid-July into September that results in an increased risk of flash floods. Always be aware of the threat of storms and lightning and be prepared for a wide range of weather conditions. Winters are generally mild.
					</h6>
					</Col>
					<Col>
					<h6>Zion National Park is located on State Route 9 in Springdale, Utah.
					</h6>
					</Col>
				</Row>
				
				<br></br>
				<h3>Contact Them</h3>
				<h5><a href="https://www.nps.gov/zion/index.htm">Website</a></h5>
				<h5>zion_park_information@nps.gov</h5>
				<h5>(435) 772-3256</h5>
				<h5>Zion National Park, 1 Zion Park Blvd., State Route 9, Springdale, UT 84767</h5>

				<br/>
				<ZIMapWrapper />

				<br/>
				<Div>
					<Row>
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
				</Div>

				<br/>
				&nbsp;

			</Container>
		</div>
  	);
}

export default Zion;