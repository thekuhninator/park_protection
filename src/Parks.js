import React, {Component} from 'react';
import logo from './logo.png';
import './App.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

function Parks() {
	return (
		<div
			style={{
	        position: 'absolute', left: '0%', right: '0%', top: '10%', bottom: '10%'
    	}}>
			<Container>
				<h1>&nbsp;&nbsp;Parks</h1><br/>
		    	<CardDeck className="text-center">
			  		<Card>
			  			<Card.Img variant="top" src="https://www.nps.gov/common/uploads/structured_data/3C7D2FBB-1DD8-B71B-0BED99731011CFCE.jpg"/>
			    		<Card.Body>
			      			<Card.Title>Yellowstone National Park</Card.Title>
			    		</Card.Body>
			  		</Card>
					  <Card>
					    <Card.Img variant="top" src="https://www.nps.gov/common/uploads/structured_data/3C7B12D1-1DD8-B71B-0BCE0712F9CEA155.jpg" />
					    <Card.Body>
					      <Card.Title>Grand Canyon National Park</Card.Title>
					    </Card.Body>
					</Card>
					<Card>
						<Card.Img variant="top" src="https://www.nps.gov/common/uploads/structured_data/3C7EFF41-1DD8-B71B-0B50E940FE9F2658.jpg" />
					 	<Card.Body>
							<Card.Title>Zion National Park</Card.Title>
					 	</Card.Body>
					</Card>
				</CardDeck>
		    </Container>
	    </div>
  	);
}

export default Parks;