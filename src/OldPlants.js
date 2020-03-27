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
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Select from 'react-select';
import { Nav } from 'react-bootstrap';

const common = [
  { value: 'asc', label: 'Ascending' },
  { value: 'des', label: 'Descending' }
]

const Common = () => (
  <Select options={common} placeholder="Common Names" />
)

const scientific = [
  { value: 'asc', label: 'Ascending' },
  { value: 'des', label: 'Descending' }
]

const Scientific = () => (
  <Select options={scientific} placeholder="Scientific Names" />
)

const families = [
  { value: 'asc', label: 'Ascending' },
  { value: 'des', label: 'Descending' }
]

const Families = () => (
  <Select options={families} isMulti className="basic-multi-select" placeholder="Families" />
)

const statuses = [
  { value: 'threatened', label: 'Threatened' },
  { value: 'endangered', label: 'Endangered' }
]

const Statuses = () => (
  <Select options={statuses} isMulti className="basic-multi-select" placeholder="Listing Statuses" />
)

const states = [
	{ value: 'AZ', label: 'AZ' },
	{ value: 'TX', label: 'TX' }
]

const States = () => (
  <Select options={states} isMulti className="basic-multi-select" placeholder="States" />
)

const ItalicText = styled('div')`
	font-style: italic;
`
const Text = styled('div')`
	color: black;
`

function Plants() {
	return (
			<Container>
				<br/>
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
						<Common />
					</Col>
					<Col>
						<Scientific />
					</Col>
					<Col>
						<Families />
					</Col>
					<Col>
						<Statuses />
					</Col>
					<Col>
						<States />
					</Col>
				</Row>

				<br/><br/>
		    	<CardDeck className="text-center">
					  <Card><Nav.Link as={ Link } to="/Plants/AleutianHollyFern"><Text>
					    <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/8/88/Aleutian_Shield_Fern.jpg" />
					    <Card.Body>
					      	<Card.Title>Aleutian Holly Fern</Card.Title>
					      	<Card.Text><ItalicText>Polystichum aleuticum</ItalicText></Card.Text>
			      			<Card.Text>Endangered</Card.Text>
			      			<Card.Text>Wood Fern</Card.Text>
			      			<Card.Text>AK</Card.Text>
					    </Card.Body>
					</Text></Nav.Link></Card>
					<Card><Nav.Link as={ Link } to="/Plants/AmargosaNiterwort"><Text>
						<Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Nitrophila_mohavensis_6.jpg" />
					 	<Card.Body>
							<Card.Title>Amargosa Niterwort</Card.Title>
							<Card.Text><ItalicText>Nitrophila mohavensis</ItalicText></Card.Text>
			      			<Card.Text>Endangered</Card.Text>
			      			<Card.Text>Goosefoot</Card.Text>
			      			<Card.Text>CA, NV</Card.Text>
					 	</Card.Body>
					</Text></Nav.Link></Card>
					<Card><Nav.Link as={ Link } to="/Plants/PricklyApplecactus"><Text>
			  			<Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/51vxwr8lUxL._AC_SX450_.jpg"/>
			    		<Card.Body>
			      			<Card.Title>Prickly Applecactus</Card.Title>
			      			<Card.Text><ItalicText>Harrisia aboriginum</ItalicText></Card.Text>
			      			<Card.Text>Endangered</Card.Text>
			      			<Card.Text>Cactus</Card.Text>
			      			<Card.Text>FL</Card.Text>
			    		</Card.Body>
			  		</Text></Nav.Link></Card>
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

export default Plants;