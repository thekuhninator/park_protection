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
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Animals() {
	return (
			<Container>
				<br/>
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

				<Row>
					<Col>
						<DropdownButton variant="light" title="Common Name">
							<Dropdown.Item as="button">Ascending</Dropdown.Item>
							<Dropdown.Item as="button">Descending</Dropdown.Item>
						</DropdownButton>
					</Col>
					<Col>
						<DropdownButton variant="light" title="Scientific Name">
							<Dropdown.Item as="button">Ascending</Dropdown.Item>
							<Dropdown.Item as="button">Descending</Dropdown.Item>
						</DropdownButton>
					</Col>
					<Col>
						<DropdownButton variant="light" title="Group">
							<Dropdown.Item as="button">Birds</Dropdown.Item>
							<Dropdown.Item as="button">Reptiles</Dropdown.Item>
						</DropdownButton>
					</Col>
					<Col>
						<DropdownButton variant="light" title="Listing Status">
							<Dropdown.Item as="button">Endangered</Dropdown.Item>
							<Dropdown.Item as="button">Threatened</Dropdown.Item>
						</DropdownButton>
					</Col>
					<Col>
						<DropdownButton variant="light" title="States">
							<Dropdown.Item as="button">TX</Dropdown.Item>
							<Dropdown.Item as="button">AZ</Dropdown.Item>
						</DropdownButton>
					</Col>
				</Row>

				<br/>
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
  	);
}

export default Animals;