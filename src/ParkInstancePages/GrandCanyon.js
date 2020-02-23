import React, {Component} from 'react';
import logo from '../logo.png';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron'

function GrandCanyon() {
	return (
		<Container fluid>
			<Jumbotron fluid>
				<Container>
					<h1>Grand Canyon National Park</h1>
				</Container>
			</Jumbotron>

			<Carousel wrap>
			  <Carousel.Item>
			    <img
			      className="d-block w-100"
			      src="https://www.nps.gov/common/uploads/structured_data/3C7B12D1-1DD8-B71B-0BCE0712F9CEA155.jpg"
			      alt="First slide"
			    />
			  </Carousel.Item>
			  <Carousel.Item>
			    <img
			      className="d-block w-100"
			      src="https://www.nps.gov/common/uploads/structured_data/3C7B143E-1DD8-B71B-0BD4A1EF96847292.jpg"
			      alt="Third slide"
			    />
			  </Carousel.Item>
			  <Carousel.Item>
			    <img
			      className="d-block w-100"
			      src="https://www.nps.gov/common/uploads/structured_data/3C7B15A4-1DD8-B71B-0BFADECB506765CC.jpg"
			      alt="Third slide"
			    />
			  </Carousel.Item>
			</Carousel>
		</Container>
  	);
}

export default GrandCanyon;