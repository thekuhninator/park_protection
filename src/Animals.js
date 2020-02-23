import React, {Component} from 'react';
import logo from './logo.png';
import './App.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

function Animals() {
	return (
		<div
			style={{
	        position: 'absolute', left: '0%', right: '0%', top: '10%', bottom: '10%'
    	}}>
			<Container>
				<h1>&nbsp;&nbsp;Animals</h1><br/>
		    	<CardDeck className="text-center">
			  		<Card>
			  			<Card.Img variant="top" src="https://ecos.fws.gov/docs/species_images/doc1650-250px-thumbnail.jpg"/>
			    		<Card.Body>
			      			<Card.Title>Abbott's Booby</Card.Title>
			    		</Card.Body>
			  		</Card>
					  <Card>
					    <Card.Img variant="top" src="https://ecos.fws.gov/docs/species_images/doc1803-250px-thumbnail.jpg" />
					    <Card.Body>
					      <Card.Title>Acklins Ground Iguana</Card.Title>
					    </Card.Body>
					</Card>
					<Card>
						<Card.Img variant="top" src="https://download.ams.birds.cornell.edu/api/v1/asset/96716321/1800" />
					 	<Card.Body>
							<Card.Title>Akiapolaau</Card.Title>
					 	</Card.Body>
					</Card>
				</CardDeck>
		    </Container>
	    </div>
  	);
}

export default Animals;