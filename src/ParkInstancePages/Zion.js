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
	text-align: center;
`

function Zion() {
	return (
		<div>
			<Jumbotron fluid>
				<Container>
					<CenterText><h1>Zion National Park</h1></CenterText>
				</Container>
			</Jumbotron>
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
				<br></br>
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
			</Container>

			<br/>
			<ZIMapWrapper />
		</div>
  	);
}

export default Zion;