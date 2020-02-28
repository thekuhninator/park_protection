import React, {Component} from 'react';
import logo from '../logo.png';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import map from '../Assets/Maps/Yellowstone.png';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import YSMapWrapper from '../Assets/Maps/YSMapWrapper';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

const CarouselImage = styled('img')`
	width: 100%;
	height: 350px;
	object-fit: cover;
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

const CenteredCol = styled('Col')`
  margin: auto;
`;

function Yellowstone() {
	return (
		<div>
			<Jumbotron>
				<Container>
					<CenterText><h1>Yellowstone National Park</h1></CenterText>
				</Container>
			</Jumbotron>

			<br/>
			<Container>
				<Carousel>
				  <Carousel.Item>
				    <CarouselImage
				      className="d-block w-100"
				      src="https://www.nps.gov/common/uploads/structured_data/3C7D2FBB-1DD8-B71B-0BED99731011CFCE.jpg"
				      alt="First slide"
				    />
				  </Carousel.Item>
				  <Carousel.Item>
				    <CarouselImage
				      className="d-block w-100"
				      src="https://www.nps.gov/common/uploads/structured_data/3C7D334F-1DD8-B71B-0B108C7771F4E854.jpg"
				      alt="Second slide"
				      vertical-align
				    />
				  </Carousel.Item>
				  <Carousel.Item>
				    <CarouselImage
				      className="d-block w-100"
				      src="https://www.nps.gov/common/uploads/structured_data/3C7D34E6-1DD8-B71B-0BBB1C0F478318E2.jpg"
				      alt="Third slide"
				    />
				  </Carousel.Item>
				  <Carousel.Item>
				    <CarouselImage 
				      className="d-block w-50"
				      src="https://www.nps.gov/common/uploads/structured_data/3C7D368B-1DD8-B71B-0B92925065B93463.jpg"
				      alt="Third slide"
				    />
				  </Carousel.Item>
				</Carousel>

				<br/><br/><br/>
				<Row>
					<Col>
					<h6>On March 1, 1872, Yellowstone became the first national park for all to enjoy the unique hydrothermal wonders. Today, millions of people come here each year to camp, hike, and enjoy the majesty of the park.
					</h6>
					</Col>
					<Col>
					<h6>Yellowstone's weather can vary quite a bit, even in a single day. In the summer, daytime highs can exceed 70°F (25°C), only to drop 20 or more degrees when a thunderstorm rolls through. It can snow during any month of the year, and winter lows frequently drop below 0°F (-18°C), especially at night. Bring a range of clothing options, including a warm jacket and rain gear, even in the summer.
					</h6>
					</Col>
					<Col>
					<h6>Yellowstone National Park covers nearly 3,500 square miles in the northwest corner of Wyoming (3% of the park is in Montana and 1% is in Idaho). Yellowstone has five entrance stations, and several are closed to regular vehicles during winter. It takes many hours to drive between these entrances, so be sure to check the status of roads at the entrance you intend to use while planning your trip and before you arrive.
					</h6>
					</Col>
				</Row>

				<br></br>
				<h3>Contact Them</h3>
				<h5><a href="https://www.nps.gov/yell/index.htm">Website</a></h5>
				<h5>yell_visitor_services@nps.gov</h5>
				<h5>(307) 344-7381</h5>
				<h5>2 Officers Row, Yellowstone National Park Headquarters, Yellowstone National Park, WY 82190</h5>

				<br/>
				<YSMapWrapper />

				<br/>
				<div>
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
				</div>

				<br/>
				&nbsp;
			</Container>
		</div>
  	);
}

export default Yellowstone;