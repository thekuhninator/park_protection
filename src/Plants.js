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

function Plants() {
	return (
		<div
			style={{
			position: 'absolute', left: '0%', right: '0%', top: '10%', bottom: '0%'
    	}}>
			<Container>
				<Row>
				<Col><h1>Plants</h1><br/></Col>
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
						<DropdownButton variant="light" title="Family Name">
							<Dropdown.Item as="button">Ascending</Dropdown.Item>
							<Dropdown.Item as="button">Descending</Dropdown.Item>
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

export default Plants;