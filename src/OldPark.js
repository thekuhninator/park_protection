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
import ListGroup from 'react-bootstrap/ListGroup';
import { Nav } from 'react-bootstrap';

const name = [
  { value: 'asc', label: 'Ascending' },
  { value: 'des', label: 'Descending' }
]

const Name = () => (
  <Select options={name} placeholder="Names" />
)

const email = [
  { value: 'asc', label: 'Ascending' },
  { value: 'des', label: 'Descending' }
]

const Email = () => (
  <Select options={email} placeholder="Emails" />
)

const phone = [
  { value: 'asc', label: 'Ascending' },
  { value: 'des', label: 'Descending' }
]

const Phone = () => (
  <Select options={phone} placeholder="Phone Numbers" />
)

const designations = [
  { value: 'national park', label: 'National Park' },
  { value: 'national preserve', label: 'National Preserve' }
]

const Designations = () => (
  <Select options={designations} isMulti className="basic-multi-select" placeholder="Designation" />
)

const states = [
	{ value: 'AZ', label: 'AZ' },
	{ value: 'TX', label: 'TX' }
]

const States = () => (
  <Select options={states} isMulti className="basic-multi-select" placeholder="States" />
)

const Text = styled('div')`
	color: black;
`

function Parks() {
	return (
			<Container>
				<br/>
				<Row>
				<Col><h1>Parks</h1><br/></Col>
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
						<Name />
					</Col>
					<Col>
						<Email />
					</Col>
					<Col>
						<Phone />
					</Col>
					<Col>
						<Designations />
					</Col>
					<Col>
						<States />
					</Col>
				</Row>

				<br/><br/>
		    	<CardDeck className="text-center">
					  <Card><Nav.Link as={ Link } to="/Parks/GrandCanyon"><Text>
					    <Card.Img variant="top" src="https://www.nps.gov/common/uploads/structured_data/3C7B12D1-1DD8-B71B-0BCE0712F9CEA155.jpg" />
					    <Card.Body>
					    	<Card.Title>Grand Canyon National Park</Card.Title>
					    	<Card.Text>National Park</Card.Text>
					    	<Card.Text>grca_information@nps.gov</Card.Text>
					    	<Card.Text>(928) 638-7888</Card.Text>
					    	<Card.Text>AZ</Card.Text>
					    </Card.Body>
				    </Text></Nav.Link></Card>
					<Card><Nav.Link as={ Link } to="/Parks/Yellowstone"><Text>
			  			<Card.Img variant="top" src="https://www.nps.gov/common/uploads/structured_data/3C7D2FBB-1DD8-B71B-0BED99731011CFCE.jpg"/>
			    		<Card.Body>
			      			<Card.Title>Yellowstone National Park</Card.Title>
					    	<Card.Text>National Park</Card.Text>
					    	<Card.Text>yell_visitor_services@nps.gov</Card.Text>
					    	<Card.Text>(307) 344-7381</Card.Text>
					    	<Card.Text>ID, MT, WY</Card.Text>
			    		</Card.Body>
			  		</Text></Nav.Link></Card>
					<Card><Nav.Link as={ Link } to="/Parks/Zion"><Text>
						<Card.Img variant="top" src="https://www.nps.gov/common/uploads/structured_data/3C7EFF41-1DD8-B71B-0B50E940FE9F2658.jpg" />
					 	<Card.Body>
							<Card.Title>Zion National Park</Card.Title>
					    	<Card.Text>National Park</Card.Text>
					    	<Card.Text>zion_park_information@nps.gov</Card.Text>
					    	<Card.Text>(435) 772-3256</Card.Text>
					    	<Card.Text>UT</Card.Text>
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

export default Parks;