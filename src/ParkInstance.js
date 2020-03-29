import React, {Component} from 'react';
import logo from './logo.png';
import './App.css';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Alert from 'react-bootstrap/Alert';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import map from './Assets/Maps/GrandCanyon.png';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import GCMapWrapper from './Assets/Maps/GCMapWrapper';
import { Nav } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
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

class ParkInstance extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			address : "",
			desc : "",
			designation : "",
			directions : "",
			email : "",
			images : [],
			latitude : 39.8283,
			longitude : -98.5795,
			name : "",
			phone : "",
			states : "",
			url : "",
			weather : ""
		};
	}

	componentDidMount() {
		fetch(
          "http://api.parkprotection.me/api/parks/".concat(this.props.match.params.code)
      	)
		.then((response) => response.json())
		.then((data) => {
			console.log("FETCHED PARK INSTANCE")
			console.log(data)
			this.setState({
				address : data.address,
				desc : data.desc,
				designation : data.designation,
				directions : data.directions,
				email : data.email,
				images : data.images.split(" "),
				latitude : data.latitude,
				longitude : data.longitude,
				name : data.name,
				phone : data.phone,
				states : data.states.map((state) => state.name).join(", "),
				url : data.url,
				weather : data.weather
			});

		});

	}

	makeCarousel() {
		let carousel = [];
		for(const i in this.state.images) {
			const image = this.state.images[i]
			carousel.push(
				<Carousel.Item>
				    <CarouselImage
				      src={image}
				      alt="Image"
				    />
				</Carousel.Item>)
		}
		return carousel;
	}

	render() {
		console.log('in render')
		console.log(this.state)
		return (
			<div>
				<Jumbotron>
					<Container>
						<CenterText><h1>{this.state.name}</h1></CenterText>
					</Container>
				</Jumbotron>

				<br/>
				<Container>
				<Alert variant="danger">
					COVID-19 may affect this park's hours of operation. Please contact the
					park for details and see <a href="#" className="alert-link">this link</a> for more information on COVID-19.
				</Alert>

					<Carousel>
						{this.makeCarousel()}
					</Carousel>

					<br/><br/><br/>
					<Row>
						<Col>
						<h6>{this.state.desc}</h6>
						</Col>
						<Col>
						<h6>{this.state.weather}</h6>
						</Col>
						<Col>
						<h6>{this.state.directions}</h6>
						</Col>
					</Row>

					<br></br>
					<h3>Contact Them</h3>
					<h5><a href={this.state.url}>Website</a></h5>
					<h5>{this.state.email}</h5>
					<h5>{this.state.phone}</h5>
					<h5>{this.state.address}</h5>

					<br/>
					<GCMapWrapper latitude={this.state.latitude} longitude={this.state.longitude}/>

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
}

export default ParkInstance;
