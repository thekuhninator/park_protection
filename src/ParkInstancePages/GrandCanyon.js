import React, {Component} from 'react';
import logo from '../logo.png';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const CarouselImage = styled('img')`
	width: 400px;
	height: 350px;
	margin: auto;
`;
const ParkCarousel = styled('Carousel')`
	
`;

function GrandCanyon() {
	return (
		<div>
			<Jumbotron fluid>
				<Container>
					<h1>Grand Canyon National Park</h1>
				</Container>
			</Jumbotron>
			<Container>
				<Carousel>
				  <Carousel.Item>
				    <CarouselImage
				      className="d-block w-100"
				      src="https://www.nps.gov/common/uploads/structured_data/3C7B12D1-1DD8-B71B-0BCE0712F9CEA155.jpg"
				      alt="First slide"
				    />
				  </Carousel.Item>
				  <Carousel.Item>
				    <CarouselImage
				      className="d-block w-100"
				      src="https://www.nps.gov/common/uploads/structured_data/3C7B143E-1DD8-B71B-0BD4A1EF96847292.jpg"
				      alt="Second slide"
				      vertical-align
				    />
				  </Carousel.Item>
				  <Carousel.Item>
				    <CarouselImage
				      className="d-block w-100"
				      src="https://www.nps.gov/common/uploads/structured_data/3C7B15A4-1DD8-B71B-0BFADECB506765CC.jpg"
				      alt="Third slide"
				    />
				  </Carousel.Item>
				  <Carousel.Item>
				    <CarouselImage 
				      className="d-block w-50"
				      src="https://www.nps.gov/common/uploads/structured_data/3C7B1720-1DD8-B71B-0B74DCF6F887A960.jpg"
				      alt="Third slide"
				    />
				  </Carousel.Item>
				</Carousel>
				<br></br>
				<h4>Address: 20 South Entrance Road, Grand Canyon, AZ 86023</h4>
				<h3>Map</h3>
				<br></br>
				<Row>
					<Col>
					<h6>Unique combinations of geologic color and 
						erosional forms decorate a canyon that is 277 river miles 
						(446km) long, up to 18 miles (29km) wide, and a mile (1.6km) 
						deep. Grand Canyon overwhelms our senses through its immense size.
						</h6><h6>The South Rim is open all year. 
						</h6><h6>The North Rim is Closed for the Winter. It will reopen on May 15, 2020, for the 2020 season.
					</h6>
					</Col>
					<Col>
					<h6>This weather varies with cold winters and mild 
						pleasant summers, moderate humidity, and considerable 
						diurnal temperature changes at the higher elevations, with 
						hot and drier summers at the bottom of the Grand Canyon along 
						with cool damp winters. Summer thunderstorms and winter snowfall 
						adds to the weather variety in this region.
					</h6>
					</Col>
					<Col>
					<h6>South Rim: Open all year, is located 60 miles 
						north of Williams, Arizona (via route 64 from Interstate 40) and 
						80 miles northwest of Flagstaff (via route 180). Grand Canyon 
						lies entirely within the state of Arizona.
						</h6><h6>North Rim: Now 
						closed for the winter - opens May 15, 2020, for the season. 
						North Rim is located 30 miles south of Jacob Lake on Highway 
						67; the actual rim of the canyon is an additional 14 miles 
						south. Jacob Lake, AZ is located in northern Arizona on Highway
						89A, not far from the Utah border.
					</h6>
					</Col>
				</Row>
					<br></br>
				<h5>Website:https: https://www.nps.gov/grca/index.htm</h5>
				<br></br>
				<h5>Phone: 928-638-7888</h5>
				<br></br>
				<h5>Email: grca_information@nps.gov</h5>
			</Container>
		</div>
  	);
}

export default GrandCanyon;