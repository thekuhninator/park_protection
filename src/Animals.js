import React, {Component} from 'react';
import logo from './logo.png';
import './App.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';

function Animals() {
	return (
		<div
			style={{
			position: 'absolute', left: '0%', right: '0%', top: '10%', bottom: '0%'
    	}}>
			<Container>
				<Row>
				<Col><h1>Animals</h1><br/></Col>
				<Col xs={{span: 3}}>
					<Form inline>
						<Form.Group as={Row}>
					    	<Form.Control type="text" placeholder="Search" className="mr-sm-2" /><Button>Search</Button>
						</Form.Group>
					</Form>
				</Col>
				</Row>

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

				<br/>
				<Pagination 
					style={{ justifyContent: 'center' }}>
					<Pagination.First />
					<Pagination.Prev />
					<Pagination.Item active>{1}</Pagination.Item>
					<Pagination.Next />
					<Pagination.Last />
				</Pagination>

		    </Container>
	    </div>
  	);
}

export default Animals;