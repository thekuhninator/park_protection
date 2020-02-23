import React, {Component} from 'react';
import logo from './logo.png';
import './App.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

function Plants() {
	return (
		<div
			style={{
	        position: 'absolute', left: '0%', right: '0%', top: '10%', bottom: '10%'
    	}}>
			<Container>
				<h1>&nbsp;&nbsp;Plants</h1><br/>
		    	<CardDeck className="text-center">
			  		<Card>
			  			<Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/51vxwr8lUxL._AC_SX450_.jpg"/>
			    		<Card.Body>
			      			<Card.Title>Prickly Applecactus</Card.Title>
			    		</Card.Body>
			  		</Card>
					  <Card>
					    <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/8/88/Aleutian_Shield_Fern.jpg" />
					    <Card.Body>
					      <Card.Title>Aleutian Holly Fern</Card.Title>
					    </Card.Body>
					</Card>
					<Card>
						<Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Nitrophila_mohavensis_6.jpg" />
					 	<Card.Body>
							<Card.Title>Amargosa Niterwort</Card.Title>
					 	</Card.Body>
					</Card>
				</CardDeck>
		    </Container>
	    </div>
  	);
}

export default Plants;